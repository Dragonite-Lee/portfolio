/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        snow: {
          '0%' : {
            opacity : '0',
            transform : 'translateY(0)',
          },
          '20%' : {
            opacity : '1',
            transform : 'translate(15px, 200px)',
          },
          '40%' : {
            opacity : '0',
            transform : 'translate(-15px, 400px)',
          },
          '60%' : {
            opacity : '1',
            transform : 'translate(15px, 600px)',
          },
          '80%' : {
            opacity : '0',
            transform : 'translate(-15px, 800px)',
          },
          '100%' : {
            opacity : '1',
            transform : 'translateY(1000px)',
          }
        }
      }

    },
  },
  plugins: [],
}
