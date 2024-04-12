/** @type {import('tailwindcss').Config} */
// const defaultTheme = import('tailwindcss/defaultTheme')
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#10191A",
        primary: "#17AD8B",
        sec: "#475467",
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
