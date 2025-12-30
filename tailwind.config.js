/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0DA5E9", // optionnel si tu veux garder un accent
      },
      
    },
  },
  plugins: [],
}

