/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0E0B16",
        fuschia: "#A239CA",
        jewel: "#4717F6",
        stark: "#E7DFDD",
        darkJewel:"3a09ea",
      },
      width: {
        '128': '99.5vw',
      },
      dropShadow : {
        '3xl' : '0 15 41 rgba(71, 23, 246, 1)',
      },
    },
  },
  plugins: [],
}
