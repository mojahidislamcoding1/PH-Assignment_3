/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        'bike-primary': '#E76F51',
        'bike-primary-bg': 'rgba(231,111,81,0.1)',
        
      },
      fontFamily: {
        'Manrope': ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}
