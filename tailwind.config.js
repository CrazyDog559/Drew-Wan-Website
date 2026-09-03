import typography from '@tailwindcss/typography';

/** Theme colors are driven by CSS custom properties defined in src/index.css. */
const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Surfaces
        canvas: token('--c-canvas'),
        surface: token('--c-surface'),
        raised: token('--c-raised'),
        // Lines
        line: token('--c-line'),
        'line-strong': token('--c-line-strong'),
        // Text
        ink: token('--c-ink'),
        muted: token('--c-muted'),
        faint: token('--c-faint'),
        // Brand
        brand: {
          DEFAULT: token('--c-brand'),
          strong: token('--c-brand-strong'),
          soft: token('--c-brand-soft'),
          ink: token('--c-brand-ink'),
        },
        accent: {
          DEFAULT: token('--c-accent'),
          soft: token('--c-accent-soft'),
        },
        // Back-compat alias used by older markup
        primary: {
          light: token('--c-brand-soft'),
          DEFAULT: token('--c-brand'),
          dark: token('--c-brand-strong'),
        },
      },
      borderRadius: {
        card: '1rem',
        pill: '999px',
      },
      boxShadow: {
        card: '0 1px 2px rgb(var(--c-shadow) / 0.05), 0 8px 24px -12px rgb(var(--c-shadow) / 0.18)',
        'card-hover': '0 2px 4px rgb(var(--c-shadow) / 0.06), 0 20px 40px -16px rgb(var(--c-shadow) / 0.28)',
        pop: '0 12px 32px -12px rgb(var(--c-shadow) / 0.35)',
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.4s ease-out both',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--c-muted))',
            '--tw-prose-headings': 'rgb(var(--c-ink))',
            '--tw-prose-bold': 'rgb(var(--c-ink))',
            '--tw-prose-links': 'rgb(var(--c-brand))',
            '--tw-prose-bullets': 'rgb(var(--c-brand) / 0.5)',
            '--tw-prose-quotes': 'rgb(var(--c-ink))',
            '--tw-prose-quote-borders': 'rgb(var(--c-brand) / 0.4)',
            '--tw-prose-code': 'rgb(var(--c-ink))',
            '--tw-prose-hr': 'rgb(var(--c-line))',
            '--tw-prose-th-borders': 'rgb(var(--c-line-strong))',
            '--tw-prose-td-borders': 'rgb(var(--c-line))',
          },
        },
      }),
    },
  },
  plugins: [typography],
}
