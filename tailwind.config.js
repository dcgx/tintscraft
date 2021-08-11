/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  corePlugins: {
    preflight: false,
  },
  darkMode: "class",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
