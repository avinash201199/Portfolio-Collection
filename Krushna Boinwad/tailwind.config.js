/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        whiteGlow: "0 0 20px 4px rgba(255, 255, 255, 0.41)",
      },
    },
  },
  plugins: [],
}
