/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "conic-gradient":
          "conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        gradient: {
          "0%": {backgroundPosition: "0% 50%"},
          "50%": {backgroundPosition: "50% 100%"},
          "100%": {backgroundPosition: "0% 50%"},
        },
      },
      animation: {
        "gradient-animation": "gradient 12s ease-in-out infinite",
      },
    },
  },

  plugins: [require("daisyui")],
};
