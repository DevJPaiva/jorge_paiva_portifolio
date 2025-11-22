/* Tailwind CSS Configuration */
const tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        condensed: ["Oswald", "sans-serif"],
      },
      colors: {
        dark: "#0a0a0a",
        light: "#ffffff",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.2, 1, 0.4, 1)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};

export default tailwindConfig;
