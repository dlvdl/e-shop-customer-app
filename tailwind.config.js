/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        sm: ["0.875rem", "1.5rem"],
        base: ["1rem", "1.6rem"],
        lg: ["1.25rem", "2rem"],
        xl: "2.5rem",
      },
      colors: {
        "Neutral-01": "#FEFEFE",
        "Neutral-03": "#E8ECEF",
        "Neutral-04": "#141718",
        "Neutral-05": "#343839",
        "Neutral-07": "#6C7275",
        "Black-200": "#EAEAEA",
        "Black-500": "#807E7E",
        "Black-900": "#121212",
        "Custom-Green": "#38CB89",
      },
    },
  },

  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
}
