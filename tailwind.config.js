/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        bgDark: '#0a0a1a',
        bgCard: '#0d0d2b',
        cyan: {
          glow: '#00d4ff',
        },
        purple: {
          glow: '#7b2ff7',
        },
      },
    },
  },
  plugins: [],
}
