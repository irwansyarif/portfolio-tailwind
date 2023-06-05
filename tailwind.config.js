/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#6366f1",
        dark: "#0f172a",
        secondary: "#64748b",
        myhtml: "#E34F26",
        mycss: "#1572B6",
        blender: "#F5792A",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
