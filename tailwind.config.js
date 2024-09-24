/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Blinker: ['Blinker', 'sans-serif']
      },
      colors: {
        primary: '#0374ff',
        secondary: '#ff9702',
        danger: '#ff646f',
        warning: '#fff563',
        success: '#21ad73',
        mocca: '#ebdbb7'
      }
    },
  },
  plugins: [],
}

