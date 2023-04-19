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
    colors: {
      yellow: '#FFCD00',
      black: '#1A1A1A',
      blue: '#2E475D',
      white: '#FFFFFF',
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
  plugins: [],
}