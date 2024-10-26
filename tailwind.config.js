/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans Arabic, sans-serif'],
      },
      colors: {
        primary: '#FF0000',
        secondary: '#FFFFFF',
        background: '#FFFFFF',
        text: '#000000',
        buttonHover: '#FF6666',
        productBackground: '#F9F9F9',
        productBorder: '#E5E7EB',
        warningBackground: '#FFF3CD',
        warningText: '#856404',
        mutedText: '#6B7280',
        mutedBorder: '#D1D5DB',
        cartBackground: '#FFFFFF',
        cartText: '#FF0000',
        buttonBackground: '#E43038',
        buttonText: '#FFFFFF',
        buttonHoverBackground: '#dd9194',
        buttonBorder: '#E43038',

        dark: {
          primary: '#B22222',
          secondary: '#FFFFFF',
          background: '#121212',
          text: '#FFFFFF',
          buttonHover: '#A52A2A',
          productBackground: '#1E1E1E',
          productBorder: '#3B3B3B',
          warningBackground: '#5A3B00',
          warningText: '#FFCC00',
          mutedText: '#999999',
          mutedBorder: '#666666',
          cartBackground: '#1E1E1E',
          cartText: '#FFFFFF',
          buttonBackground: '#B22222',
          buttonText: '#FFFFFF',
          buttonHoverBackground: '#A52A2A',
          buttonBorder: '#B22222',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
