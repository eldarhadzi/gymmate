/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#57A63D",
        'hover': "#58D62E",
        'dashboard': "#FAFCF8",
        'background': "#F1FFEC",
      }
    },
  },
  plugins: [],
}
