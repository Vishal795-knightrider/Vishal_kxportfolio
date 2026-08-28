/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // support class-based dark mode
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-b': 'var(--bg-b)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        border: 'var(--border)',
        'border-hover': 'var(--border-hover)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'accent-dim': 'var(--accent-dim)',
        'accent-line': 'var(--accent-line)',
        green: 'var(--green)',
      },
      fontFamily: {
        serif: 'var(--serif)',
        sans: 'var(--sans)',
        mono: 'var(--mono)',
      },
      maxWidth: {
        col: 'var(--col)',
      },
      borderRadius: {
        r: 'var(--r)',
        rs: 'var(--rs)',
      }
    },
  },
  plugins: [],
}
