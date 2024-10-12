/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo, sans-serif'],
      },
    },
  },
  
  plugins: [
    require("@tailwindcss/aspect-ratio"), // لمعامل العرض إلى الطول
    require("@tailwindcss/forms"), // إذا كنت تستخدم مكونات forms الخاصة بـ Tailwind
    require("@tailwindcss/typography"), // لتحسين النصوص إذا كنت بحاجة
  ],
};