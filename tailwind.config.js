/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      container: {
        // you can configure the container to be centered

        // or have default horizontal padding
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },

        // default breakpoints but with 40px removed
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
    },
    extend: {
      colors: {
        firstColor: "#ffffff",
        secondColor: "#393e46",
        thirdColor: "#46b38f",
        fourthColor: "#eeeeee",
      },
    },
  },
  plugins: [],
};
