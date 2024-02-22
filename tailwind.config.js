/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#191919",
        btnColor: "#ffd119",
      },
      container: {
        center: true,
        screens: {
          desktop: "1270px",
        },
      },
    },
  },
  plugins: [],
};
