/** @type {import('tailwindcss').Config} */
// const defaultTheme = import('tailwindcss/defaultTheme')
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prmorange: "#EB7A08",
        prmorange2: "#F15A29",
        greytext: "#5E5E6B",
        prmgreen: "#11AA45",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        dm: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
