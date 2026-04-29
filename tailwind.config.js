/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: "#10354b",
          blue: "#dff5ff",
          teal: "#16a6a3",
          mint: "#e9fbf8",
          ink: "#1f3440",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 53, 75, 0.12)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
