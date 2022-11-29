/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInOut: {
          "0%, 100%": { transform: "translateX(calc(100% + 30px))" },
          "10%, 90%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInOut: "slideInOut 5s ease-in-out",
      },
      colors: {
        primary: "#E51114",
        secondary: "#434242",
        lightGray: "#CCCCCC",
        dimmedWhite: "#F5F5F5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
