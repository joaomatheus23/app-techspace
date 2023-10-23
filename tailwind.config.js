/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        orange: {
          500: "#F27329",
          400: "#D48744",
        },
        black: {
          100: "#0D0D0D",
        },
        purple: {
          600: "#1D0259",
          700: "#14023E",
          800: "#0E012C",
        },
      },
    },
  },
  plugins: [],
};
