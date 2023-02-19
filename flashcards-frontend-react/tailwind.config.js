/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "myorange": {
          50: "#FBF6FE",
          100: "#F5E7FD",
          200: "#EDD5FB",
          300: "#E2BDF9",
          400: "#DAAAF8",
          500: "#D194F6",
          600: "#B14CF0",
          700: "#8C12D8",
          800: "#5F0C92",
          900: "#2E0647"
        }
      }
    },
  },
  plugins: [],
}