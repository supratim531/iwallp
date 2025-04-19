/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1580px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "#c9a267",
        "primary-dark": "#343a49",
        "primary-light": "#3e5481",

        // "primary-dark": "#213547",
        // "primary-light": "#415781",
      },
    },
  },
  plugins: [],
};
