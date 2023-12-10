/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        zilla: ['Zilla Slab Highlight', 'serif'],
        space: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
