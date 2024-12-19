/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#6D1FEE",
        buttonBg: "#161e29",
        textGrey: "#848795",
      },
      backgroundImage: {
        bg: "url('./assets/bg.png')",
      },
    },
  },
  plugins: [],
};
