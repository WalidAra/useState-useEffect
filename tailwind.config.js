/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#1a1a1a",
      },

      width: {
        400: "400px",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
