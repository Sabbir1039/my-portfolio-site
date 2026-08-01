# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server
npm run build    # production build to dist/
npm run lint     # eslint . — currently clean, keep it that way
npm run preview  # serve the built dist/
npm run resume   # re-render resume/resume.html -> resume/CV-of-Md.-Sabbir-Hossain.pdf
```

No test framework is configured — there are no tests to run.

Setup: `cp .env.example .env`, then set `VITE_WEB3FORMS_ACCESS_KEY` (free key from web3forms.com).
Without it the contact form renders but submit is disabled and a fallback email is shown.

## Architecture

Single-page React 19 + Vite portfolio. No router — `App.jsx` stacks all sections
(`Navbartop`, `Hero`, `Experience`, `Projects`, `Skills`, `Contact`, `Footer`) separated by `<hr>`;
navigation is anchor links to section IDs.

### Theming is manual, not Tailwind `dark:`

`tailwind.config.js` has no `darkMode` setting and components do **not** use `dark:` variants.
Instead:

- [ThemeContext.jsx](src/contexts/ThemeContext.jsx) holds a single `isLightTheme` boolean, resolved
  synchronously from `localStorage` then `prefers-color-scheme`, and persisted on change.
- Components call `useTheme()` then `getThemeClasses(isLightTheme)` from [classNames.js](src/utils/classNames.js),
  which returns a fixed map (`background`, `text`, `card`, `border`, `navbar`, …) of Tailwind class strings.

When adding themed UI, extend `getThemeClasses` rather than introducing `dark:` variants —
mixing the two approaches will break, since there is no `dark` class on `<html>`.

The `body` background in [index.css](src/index.css) intentionally mirrors `getThemeClasses().background`
so there's no flash before the bundle loads. **If you change either, change both** or a seam appears on load.

`cn(...)` in classNames.js is a minimal `classes.filter(Boolean).join(' ')` — no tailwind-merge,
so later conflicting classes do **not** override earlier ones. Order/duplication matters.

### Content lives in data files, not JSX

Edit these instead of touching components:

- [src/constants/index.js](src/constants/index.js) — name, bio, title, social links, contact info, section IDs, API endpoints.
- [src/data/experience.js](src/data/experience.js) — roles with `highlights[]` and `stack[]`.
- [src/data/projects.js](src/data/projects.js) — project array; **array order is render order**.
- [src/data/skills.js](src/data/skills.js) — object of category → `{ name, icon }`, icons are react-icons components.
- [src/components/navbar/NavLinks.js](src/components/navbar/NavLinks.js) — nav items; `id` must match a `<section id>`.

> **Public content is deliberately anonymous.** The site never names the employer, healthcare
> vendors, or clients — that work is under NDA.
>
> `resume/` is **gitignored** and holds the *named* CV. It renders to `resume/`, never `public/`,
> so a local build cannot sweep it into `dist/`. The Hero has no resume-download link by design —
> do not add one, and do not move the PDF into `public/`. Both would publish the names.

Projects support `isPrivate: true` with no `github` and no `image`: the card renders a gradient
media block with a lock icon, a "Private — company work" badge, and omits the actions row.
Use `isPrivate`, never `private` — the latter is a reserved word in strict mode.

Personal-project images are static files under [public/projects/](public/projects/), referenced by
absolute path (`/projects/foo.png`).

### UI primitives

[src/components/ui/](src/components/ui/) (`Button`, `Card`, `Badge`, `Section`, `Input`, `Textarea`)
are exported via a barrel — import as `import { Section, Button } from '../ui'`. All use PropTypes
(the project is plain JS, no TypeScript). `Section` supplies the section wrapper, max-width, padding,
and centered title; sections pass theme classes in via `className`. `Input`/`Textarea` accept an
`error` prop and render it — reuse that rather than building new error UI.

### Scroll spy

[useScroll.js](src/hooks/useScroll.js) exports `useScrollSpy(ids)`, built on IntersectionObserver
with `rootMargin: '-50% 0px -50% 0px'` so exactly one section intersects at a time.

> The `ids` argument **must be a stable reference**. `Navbartop.jsx` passes the module-level
> `navLinkIds` from NavLinks.js. An inline `.map()` re-runs the effect every render and loops.

### Contact form

Posts directly to the Web3Forms API from [Contact.jsx](src/components/contact/Contact.jsx), with
`react-toastify` for feedback. Validation runs through `validateContactForm` from
[validation.js](src/utils/validation.js); the form sets `noValidate` so JS validation owns every
field rather than the browser short-circuiting submit.

## ESLint note

`eslint-plugin-react` is not installed, so JSX usage does not count as a variable reference. The
`no-unused-vars` rule therefore carries both `varsIgnorePattern` and `argsIgnorePattern` of
`^[A-Z_]` so components destructured out of data (`{ icon: Icon }`) don't report as unused.
