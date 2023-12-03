/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: "serif",
      mono: "monospace",
      cursive: ["Great Vibes", "cursive"],
    },
    colors: {
      primary: "#18404c",
      secondary: "#227f78",
      "primary-opaque": "rgba(24, 64, 76, 0.55)",
      "secondary-opaque": "rgba(34, 127, 120, 0.55)",

      white: "#f0f0f0",
      black: "#0f0f0f",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
