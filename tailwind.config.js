/** @type {import('tailwindcss').Config} */
const colors = require('@material-tailwind/html/theme/base/colors');
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./css/**/*.{html,js}" , "./index.html"],
  theme: {
    fontFamily : {
      'body' : ["Poppins","sans-serif"]
    },
    extend: {
      screen : {
        xs: "260px"
      },
      colors: {
        "mainColor" : '#F01C1C',
        "bgForm" : "#EFEFEF"
      }
    },
    
  },
  plugins: [],
})

