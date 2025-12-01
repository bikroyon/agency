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
        "dark-bg": "oklch(13% 0.028 261.692)",
      },
      fontFamily: {
        sans: ["Hind Siliguri", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
  ],
};
