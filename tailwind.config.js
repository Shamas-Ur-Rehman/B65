/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#284B63',
        secondary: '#3C6E71',
        silver: '#D8D8D8'
      },
      fontFamily: { verdana: ['VerdanaCustom', 'sans-serif'] }
    }
  },
  plugins: []
}
