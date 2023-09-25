/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#d1765b",
        "secondary": "#fbeae2",
        "tertiary": "#817f9d"
      }
    },
  },
  plugins: [],
}

