const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./dataxelio.react-ui/utils/prop-types/prop-types.ts",
    "./dataxelio.react-ui/utils/geometry-style-builder/geometry-style-builder.ts",
    "./dataxelio.react-ui/utils/intent-style-builder/intent-style-builder.ts",
    "./dataxelio.react-ui/utils/layout-style-builder/layout-style-builder.ts",
    "./dataxelio.react-ui/utils/typography-style-builder/typography-style-builder.ts",
  ],
  darkMode: "class", // false or 'media' or 'class'
  theme: {
    colors: {
      inherit: "inherit",
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
      blueGray: colors.blueGray,
    },
    fontFamily: {
      sans: ["Tahoma", "Helvetica", "Verdana", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  //plugins: [require("@tailwindcss/forms")],
};
