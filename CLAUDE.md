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

### Colour is CSS variables + semantic Tailwind tokens

There are no `dark:` variants and no per-component theme branching. Components write semantic
class names — `bg-surface`, `bg-surface-raised`, `border-line`, `text-ink`, `text-ink-muted`,
`text-ink-subtle`, `text-accent` — and never a palette colour like `gray-800` or `indigo-500`.

- [index.css](src/index.css) declares every token twice: `:root` (dark, the default) and
  `[data-theme='light']`. **This is the only place colour values live.**
- [tailwind.config.js](tailwind.config.js) maps tokens via `rgb(var(--x) / <alpha-value>)`.
  Values must be **space-separated RGB triplets, not hex** — switching to hex silently breaks
  every opacity modifier (`bg-accent/10`) with no error.
- [ThemeContext.jsx](src/contexts/ThemeContext.jsx) sets `data-theme` on `<html>`. It's applied at
  **module load**, before React renders, so the first paint is already correct. Doing it only in the
  effect paints dark then snaps — that's the flash this is designed to prevent.
- `useTheme()` is used by `Navbartop` alone, purely to pick the toggle icon. If you find yourself
  importing it for colour, use a token instead.

Light is not a hex swap of dark: its accent is emerald-**700**, because emerald-500 on white
measures ~2.3:1 and fails AA as text. It survives only as a fill behind white text.

`cn(...)` in [classNames.js](src/utils/classNames.js) is a minimal `filter(Boolean).join(' ')` — no
tailwind-merge, so later conflicting classes do **not** override earlier ones. Emit one class per
property (see `fieldStyles.js` for the pattern).

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
(the project is plain JS, no TypeScript).

`Section` supplies the wrapper, max-width, padding, top border, and the heading block: a mono
`eyebrow` (`01 / experience`) above a left-aligned `title`. Sections no longer receive theme
classes from their parent — `Section` sets `bg-surface text-ink` itself.

`Input`/`Textarea` accept an `error` prop and render it — reuse that rather than building new
error UI. Their shared styling lives in `fieldStyles.js`, split into parts so the error state
*replaces* the base border instead of layering a second `border-*` class on top of it.

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
