/** @type {import('tailwindcss').Config} */

// Colours resolve to CSS custom properties declared in src/index.css.
// The vars hold space-separated RGB triplets (not hex) so <alpha-value>
// can compose opacity — `bg-accent/10` only works because of that.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: token('surface'),
          raised: token('surface-raised'),
          hover: token('surface-hover'),
        },
        line: token('line'),
        ink: {
          DEFAULT: token('ink'),
          muted: token('ink-muted'),
          subtle: token('ink-subtle'),
        },
        accent: {
          DEFAULT: token('accent'),
          hover: token('accent-hover'),
          contrast: token('accent-contrast'),
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
}
