/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        space: ['Space Mono', 'monospace'],
        unna: ['Unna', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
