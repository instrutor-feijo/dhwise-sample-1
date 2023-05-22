module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#7f7f7f",
        gray_700: "#666666",
        gray_400: "#b2b2b2",
        gray_500: "#999999",
        light_green_500: "#8bc249",
        amber_400: "#f7df1e",
        gray_900: "#1e1e1e",
        deep_orange_500: "#f3652b",
        white_A700: "#ffffff",
        gray_300: "#e5e5e5",
        gray_50: "#fafafa",
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
