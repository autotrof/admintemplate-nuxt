/** @type {import('tailwindcss/colors')} */
const colors = require('tailwindcss/colors')

module.exports = {
  colors:{
    secondary:{
      DEFAULT:colors.slate[500],
      light:colors.slate[400],
      dark:colors.slate[600],
      'extra-dark':colors.slate[800],
      'extra-light':colors.slate[100]
    },
    warning:{
      DEFAULT:colors.yellow[400],
      light:colors.yellow[300],
      dark:colors.yellow[500],
      'extra-dark':colors.yellow[800],
      'extra-light':colors.yellow[100]
    },
    danger:{
        DEFAULT:colors.red[500],
        light:colors.red[400],
        dark:colors.red[600],
        'extra-dark':colors.red[800],
        'extra-light':colors.red[100]
    },
    success:{
      DEFAULT:colors.green[500],
      light:colors.green[400],
      dark:colors.green[600],
      'extra-dark':colors.green[800],
      'extra-light':colors.green[100]
    },
    info:{
      DEFAULT:colors.sky[400],
      light:colors.sky[300],
      dark:colors.sky[500],
      'extra-dark':colors.sky[700],
      'extra-light':colors.sky[100]
    },
    primary:{
      DEFAULT:colors.indigo[500],
      light:colors.indigo[400],
      dark:colors.indigo[600],
      'extra-dark':colors.indigo[800],
      'extra-light':colors.indigo[100]
    },
    accent: {
      DEFAULT: '#5e627c',
      light: '#a5a8bb',
      dark: '#50526a',
      'extra-dark': '#3e3f4c',
      'extra-light': '#e3e4ea'
    },
    'primary-rose':{
      DEFAULT:colors.rose[500],
      light:colors.rose[400],
      dark:colors.rose[600],
      'extra-dark':colors.rose[800],
      'extra-light':colors.rose[100]
    },
    'primary-amber':{
      DEFAULT:colors.amber[500],
      light:colors.amber[400],
      dark:colors.amber[600],
      'extra-dark':colors.amber[800],
      'extra-light':colors.amber[100]
    },
    'primary-emerald':{
      DEFAULT:colors.emerald[500],
      light:colors.emerald[400],
      dark:colors.emerald[600],
      'extra-dark':colors.emerald[800],
      'extra-light':colors.emerald[100]
    },
    'primary-indigo':{
      DEFAULT:colors.indigo[500],
      light:colors.indigo[400],
      dark:colors.indigo[600],
      'extra-dark':colors.indigo[800],
      'extra-light':colors.indigo[100]
    },
    'primary-pink':{
      DEFAULT:colors.pink[500],
      light:colors.pink[400],
      dark:colors.pink[600],
      'extra-dark':colors.pink[800],
      'extra-light':colors.pink[100]
    },
    'primary-gray':{
      DEFAULT:colors.gray[600],
      light:colors.gray[500],
      dark:colors.gray[700],
      'extra-dark':colors.gray[900],
      'extra-light':colors.gray[100]
    },
  }
}
