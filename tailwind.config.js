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
        'biu-dark-green': '#00280F',
      },
      fontFamily: {
        'hebrew': ['Fedra Sans Bar-ilan', 'Heebo', 'Assistant', 'Arial', 'sans-serif'],
      },
      spacing: {
        '17': '4.25rem',
        '20': '5rem',
        '22': '5.5rem',
        '45': '11.25rem',
        '75': '18.75rem',
        '80': '20rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
