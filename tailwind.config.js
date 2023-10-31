/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: { 
        primary: "#222222",
        secondary: {
          100: "#95D1E8",
          200: "#40ADD6",
          300: "#36A5D5",
          800: "#42609D",
          900: "#C40113"
        }
      }
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
  ],
}
