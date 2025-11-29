/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue,js}",
    "./pages/**/*.{vue,js}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#030712",
      },
      fontFamily: {
        sans: ["Hind Siliguri", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
  ],
};
