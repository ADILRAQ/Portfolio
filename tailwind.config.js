/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#FAF8ED',
        white: '#FDFEFF',
        orange: '#F35815',
        dark: '#2D3134',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        add: '5px 5px #2D3134',
        takeoff: '0px 0px #2D3134',
        fade: '0px 12px 48px #C4BFAE'
      },
      height: {
        calc: 'calc(80% - 94px)'
      },
      screens: {
        'max-sm': {'max': '1300px'},     // Small screen (default Tailwind breakpoint)
      },
    },
  },
  plugins: [],
};
