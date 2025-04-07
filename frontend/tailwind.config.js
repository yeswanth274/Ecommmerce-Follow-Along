/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "custom-lg": "1050px",
        "custom-xl": "1110px",
        "custom-md": "1300px",
        "custom-sm": "400px",
      }
    },
  },
  plugins: [],
};
