/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    // screens: {
    //   'tablet': '660px',
    //   'laptop': '1024px',
    //   'desktop': '1512px',
    // },
    extend: {
      fontFamily: {
        noken: ['Noken', 'sans'],
      },
      colors: {
        grey: {
          50:'#FAFAFA',
          100:'#F4F4F5',
          200:'#E4E4E7',
          300:'#D4D4D8',
          400:'#A1A1AA',
          500:'#71717A',
          600:'#52525B',
          700:'#3F3F46',
          800:'#27272A',
          900:'#18181B', 
          950:'#09090B',
        },
        turquoise: {
          50:'#E6FFF5',
          100:'#CDFEEB',
          200:'#9BFED6',
          300:'#6AFDC2',
          400:'#38FDAD',
          500:'#06FC99',
          600:'#05CA7A',
          700:'#04975C',
          800:'#02653D',
          900:'#01321F', 
          950:'#01190F',
        },
        lime : {
          50: '#f3ffe9',
          100: '#e7ffd4',
          200: '#cfffa8',
          300: '#b6ff7d',
          400: '#9eff51',
          500: '#86FF26',
          600: '#6bcc1e',
          700: '#509917',
          800: '#36660f',
          900: '#1b3308',
          950: '#0d1904',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}