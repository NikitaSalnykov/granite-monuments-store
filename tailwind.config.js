/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '420px',
      md: '768px',
      lg: '1480px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0',
          sm: '1.25rem',
          md: '2rem',
          xl: '1rem',
        },
      },

      colors: {
        white: '#ffffff',
        background: '#F3E0DC',
        blue: '#4285F4',
        black: '#212121',
        lightBrown: '#faf2f0',
        darkBrown: '#472f2b',
        red: '#F43F5E',
        grey: '#454545',
        lightGrey: '#616161',
        lightGreen: '#9fd936',
        secondaryText: "#323841",
      },
      boxShadow: {
        default: '3px 8px 14px 0px rgba(136, 198, 253, 0.19)',
        focus: '7px 13px 14px rgba(116, 177, 232, 0.24)',
      },
    },
  },
  plugins: [],
};
