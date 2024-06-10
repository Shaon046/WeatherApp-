/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FEFFD2",
        "primary-dark": "#F8F6F4",

        "background-light": "rgba(0, 0, 0, 0.5)",
        "background-dark": "rgba(0, 0, 0, 0.8)",
        "background-dark-2": "rgba(0, 0, 0, 0.7)",
      },
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
