/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2980B9',
          dark: '#1A5276',
          light: '#AED6F1',
        },
        background: {
          DEFAULT: '#EBF5FB',
          white: '#FFFFFF',
        }
      },
      animation: {
        'moving-text': 'moveText 20s linear infinite',
      },
      keyframes: {
        moveText: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, 
  },
}