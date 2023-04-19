/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      sans: ['Lexend Deca', 'sans-serif']
    },
    fontWeight: {
      '300': 300,
      '400': 400,
      '500': 500,
      '800': 800,
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
    },
    colors: {
      yellow: '#FFCD00',
      'yellow-40': '#FFCD004C',
      black: '#1A1A1A',
      'black-500': 'rgb(75, 85, 9)',
      blue: '#2E475D',
      white: '#FFFFFF',
      'white-40': 'rgba(255, 255, 255, 0.4)'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '22px',
      xxl: '32px',
      '2xl': '38px',
      '3xl': '59px'
    },
    extend: {
      borderColor: {
        'black': '#b6c7d6',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}