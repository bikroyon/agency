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
        "dark-bg": "oklch(14.5% 0 0)",
      },
      fontFamily: {
        sans: ["Hind Siliguri", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
  ],
};
