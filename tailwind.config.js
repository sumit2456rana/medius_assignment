/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "rgb(0, 71, 51)",
        secondaryGreen: "#1ee07f"
      }
    },
  },
  plugins: [],
}

