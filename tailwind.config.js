/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      dm: ['DM Sans', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'slide-in': {
         '0%':{
          transform: 'translateX(-100%)',
          opacity: 0
         },
         '100%':{
          transform: 'translateX(0)',
          opacity: 1
         }
        },
        'zoom-in':{
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.15)',
          },
          '75%': {
            transform: 'scale(1.2)'
          },
          '100%': {
            transform: 'scale(1.25)'
          }
        }
      }, 
      animation: {
        'slide-in': 'slide-in 0.85s ease-in ',
        'zoom-in': 'zoom-in 1.2s ease-in ',
      }
      },
  },
  plugins: [],
}

