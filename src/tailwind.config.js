module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      width: {
        7.5: "1.875rem",
        9.5: "2.375rem",
        35: "8.75rem",
        42: "10.5rem",
        120: "30rem",
        248: "62rem",
      },
      maxWidth: {
        xxxs: "5rem",
        xxs: "10rem",
      },
      height: {
        7.5: "1.875rem",
        9.5: "2.375rem",
        15: "3.75rem",
        35: "8.75rem",
        42: "10.5rem",
      },
      fontSize: {
        "2.5xl": "1.75rem",
      },
      boxShadow: {
        "2xl-dark": "0px 0px 30px -5px rgba(255, 255, 255, 0.25)",
        "3xl": "0px 8px 40px -10px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        12.5: "3.125rem",
        22: "5.5rem",
      },
      transitionProperty: {
        "color-custom": "color, background-color",
      },
      zIndex: {
        "neg-1": "-1",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
    },
    colors: {
      white: "#ffffff",
      "grey-600": "#EEEFF2",
      "grey-700": "#DCDCDC",
      "grey-900": "#B7BAC5",
      "black-800": "#737880",
      "black-900": "#494C51",
      "black-950": "#1D1D1D",
      black: "#000000",
      "ghost-100": "#F5F8FF",
      "ghost-200": "#E6EDFF",
      "ghost-300": "#CCDBFF",
      majorelle: "#4A4DE6",
    },
  },
  plugins: [],
};
