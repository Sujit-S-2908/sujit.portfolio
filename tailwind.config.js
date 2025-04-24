/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0f172a', // deep navy
        'accent': '#38bdf8',     // sky blue
        'text-primary': '#f8fafc', // off-white
        'text-secondary': '#94a3b8', 
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 