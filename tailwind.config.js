/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        violet: 'hsl(257, 40%, 49%)',
        soft_magenta: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        open_sans: ['Open Sans', 'sans-serif'], //body
        poppins: ['Poppins', 'sans-serif'], //heading
      }
    },
  },
  plugins: [],
}

