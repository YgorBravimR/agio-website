import type { Config } from "tailwindcss"

const colors = {
  whiteColor: "#fefefe",
  blackColor: "#1e1e1e",
  oceanBlueColor: "#009db6",
  limeColor: "#a5e55a",
  grayColor: "#6A868C",
  lightGrayColor: "#edf2f4",
  slateColor: "#5c6e70",
  leafGreenColor: "#1d4441",
  skyBlueColor: "#2fd6c7",
  skyBlueColor20: "#2fd6c7",
}

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1920px",
    },
    colors: {
      ...colors,
      mainColor: colors.leafGreenColor,
      secondaryColor: colors.skyBlueColor,
      secondaryColor20: colors.skyBlueColor,
      lightTextColor: colors.whiteColor,
      darkTextColor: colors.leafGreenColor,
      detailTextColor: colors.skyBlueColor,
      mainBgColor: colors.lightGrayColor,
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
      width: {
        "120": "30rem",
        "130": "32.5rem",
        "140": "35rem",
      },
      padding: {
        xScreen: "6rem",
        yScreen: "3rem",
      },
    },
  },
  plugins: [],
}
export default config
