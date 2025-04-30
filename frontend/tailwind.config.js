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
        'secondary': "#B4C40C",
        'border': "#C9D8FF",
        'background': "#F1FFEC",
        'hover': "#58D62E",
        'gymmate': "#00347D",
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}
