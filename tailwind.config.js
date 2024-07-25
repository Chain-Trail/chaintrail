/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-500px)",
          },
          "60%": {
            opacity: "1",
            transform: "translateY(30px)",
          },
          "80%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "bounce-in-down": "bounce-in-down 1s ease-out",
      },
    },
  },

  plugins: [],
};
