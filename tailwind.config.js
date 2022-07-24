/** @type {import('tailwindcss').Config} */

const colors = require('./constant').colors

module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
  theme: {
    extend: {
      colors,
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      fontFamily:{
        rajdhani:['Rajdhani', 'sans-serif'],
        sourcesanspro: ['"Source Sans Pro"', 'sans-serif']
      }
    }
  },
  plugins: [],
}
