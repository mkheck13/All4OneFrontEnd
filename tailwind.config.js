/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{html,js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sue": ['Sue Ellen Francisco', 'serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

