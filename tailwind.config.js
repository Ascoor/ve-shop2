
const cssVariablesPlugin = require('postcss-css-variables');

module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html',
  "./node_modules/flowbite/**/*.js"],
  
  darkMode: 'class',
  theme: {
    extend: {

      colors: {
     
        'logicViolet': {
          100: '#fef4e8',
          200: '#fde4d0',
      },
        'logic-green': '#96E9C6',
        'logic-blue': '#CDE8E5',
        'logic-dark-indigo': '#093145 ',
        'logic-half-dark-indigo': '#0d3d56 ',
        'logic-half-light-amber': '#829352 ',
        'logic-dark-violet': '#011425 ',
        'logic-dark-blue': '#011425 ',
    },
        fontFamily: {
          'thulth': ['Thulth-font', 'sans-serif'] // Adding custom font-family
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    cssVariablesPlugin(),


  ],
};
