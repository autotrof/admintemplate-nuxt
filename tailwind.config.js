/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:colors.sky[500],
          light:colors.sky[400],
          dark:colors.sky[600]
        },
        secondary:{
          DEFAULT:colors.slate[600],
          light:colors.slate[500],
          dark:colors.slate[700]
        },
        danger:{
          DEFAULT:colors.red[500],
          light:colors.red[400],
          dark:colors.red[600]
        }
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  plugins: [],
}
