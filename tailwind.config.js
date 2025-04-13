/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 10px 0px 0px',
      },
      colors: {
        'biruNgalam': '#2A4FA7',
        'biruTuek' : '#2A3F73',
        'bannerBiru' : '#E4E9F5'
      }
    },
  },
  plugins: [],
}

