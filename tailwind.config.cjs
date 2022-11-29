/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "552px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
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
      },
    },
  },
  plugins: [],
};
