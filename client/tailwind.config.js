/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#FF5733',
        customYellow: '#FFEB3B',
        customBlue: '#2196F3',
      }

    },
  },
  plugins: [],
}