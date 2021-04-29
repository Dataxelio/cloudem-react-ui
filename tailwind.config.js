const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./dataxelio.react-ui/**/*.{js,ts,jsx,tsx}",
    "./local-components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      brand: colors.cyan,
      primary: colors.lightBlue,
      success: colors.emerald,
      warning: colors.orange,
      danger: colors.red,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
