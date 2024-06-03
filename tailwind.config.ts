import type { Config } from "tailwindcss"

const colors = {
  whiteColor: "#fefefe",
  blackColor: "#1e1e1e",
  lightGrayColor: "#edf2f4",
  grayColor: "#6A868C",
  slateColor: "#5c6e70",
  limeColor: "#a5e55a",
  limeColorLight: "#B8E588",
  limeColorDark: "#93CE50",
  oceanBlueColor: "#009db6",
  oceanBlueColorLight: "#00B1CD",
  oceanBlueColorDark: "#008A9F",
  leafGreenColor: "#1d4441",
  leafGreenColorLight: "#2B605B",
  leafGreenColorDark: "#183432",
  skyBlueColor: "#2fd6c7",
  skyBlueColorLight: "#34EFDE",
  skyBlueColorDark: "#2ABEB0",
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
    extend: {
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
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, rgba(29,68,65,1) 15%, rgba(255,255,255,1) 17%, rgba(255,255,255,1) 83%, #2B7671 85%)",
      },
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
        xScreenMd: "3rem",
        yScreenMd: "1.5rem",
        xScreenSm: "1.5rem",
        yScreenSm: "0.75rem",
      },
    },
  },
  plugins: [],
}
export default config
