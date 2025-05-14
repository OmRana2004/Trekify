// tailwind.config.ts
const config = {
    darkMode: "class", // Optional: Only if you want dark mode
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
      extend: {
        fontFamily: {
          inter: ["'Inter'", "sans-serif"],
        },
        colors: {
          primary: "#16a34a", // Tailwind Green-600
          secondary: "#1e293b", // Slate-800
          accent: "#22c55e", // Green-500
        },
      },
    },
    plugins: [],
  };
  
  export default config;
  