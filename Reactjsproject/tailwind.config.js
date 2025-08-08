/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: "class",
  theme: {
    extend: {
    colors: {
      primaryBlue:" #1E40AF" ,
      secondary: "#2aa6df",
    },
      container: {
        center: true,
        padding:{
          DEFAULT : "1rem",
          sm: "3rem",
        },
      },
    },
  },

  plugins: [],
};
