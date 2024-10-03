<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // مسارات ملفات المشروع
  ],
  theme: {
    extend: {
      colors: {
        // إعدادات الألوان للنهار
        gradientColorStart: '#591ece',
        gradientColorEnd: '#6a00ff',
        day: {
          background: '#F3F4F6',  // لون الخلفية النهاري
          text: '#1F2937',        // لون النص النهاري
          primary: '#3B82F6',     // لون الأزرار والعناصر الرئيسية
          secondary: '#93C5FD',   // لون ثانوي لتفاصيل صغيرة
          accent: '#2563EB',      // لون مميز للعناصر التفاعلية
          highlight: '#60A5FA',   // لون للمحاور البارزة
        },
        // إعدادات الألوان لليل
        night: {
          background: '#1F2937',  // لون الخلفية الليلي
          text: '#F9FAFB',        // لون النص الليلي
          primary: '#818CF8',     // لون الأزرار والعناصر الرئيسية
          secondary: '#A5B4FC',   // لون ثانوي لتفاصيل صغيرة
          accent: '#4338CA',      // لون مميز للعناصر التفاعلية
          highlight: '#6366F1',   // لون للمحاور البارزة
        },
      },
      // إضافة إعدادات خطوط جديدة
      fontFamily: {
        heading: ['Cairo-bold'],   // خطوط العناوين
        body: ['almaria-font'],       // خطوط النصوص العادية
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s infinite ease-in-out',
      },
    },
  },
  plugins: [],
=======

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
>>>>>>> 61437aadda136a5787ad4ffec00cbd22c916e3eb
};
