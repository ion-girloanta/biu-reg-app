/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biu-blue': '#003d82',
        'biu-green': '#005136',
        'biu-gold': '#ffd700',
        'biu-light-blue': '#4a90e2',
        'biu-dark-green': '#00513655',
      },
      fontFamily: {
        'hebrew': ['Heebo', 'Assistant', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}