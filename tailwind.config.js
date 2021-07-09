const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: ['./pages/**/*.js', './src/components/**/*.js']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      spacing: {
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem'
      },
    },
    fontFamily: {
      sans: ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}