/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "DM-Serif Display",
      secondary: "Jost",
    },
    backgroundImage: {
      hero: "url(/assets/hero/bg.jpg)",
      grid: "url(/assets/grid.png)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343E4A",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
      margin:{
        '22':'88px'
      }
    
    },
  },
  plugins: [],
};
