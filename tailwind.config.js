/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      eloquent: ["Eloquent", "sweet-sans"],
      canter: ["Canter", "sweet-sans"],
      sans:["Inter var", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

