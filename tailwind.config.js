/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}",

  ],
  theme: {
    extend: {
      colors: {
        'luxury-blue': '#0E153B'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')

  
  ],

}