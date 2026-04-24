/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: "#04260f",
          800: "#06361a",
          700: "#0b4b24",
          600: "#116033",
          500: "#178a44",
          400: "#3fb56a",
        },
        pageBlack: "#0b0b0b"
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      }
    }
  },
  plugins: []
};
