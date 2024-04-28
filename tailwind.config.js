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
        primary: "#379cf6",
        secondary: "#090238",
        accent: "#1b2352",
        neutral: "#3d4451",

        testimonials: "#1a0f4f",
        smallText: "rgba(255, 255, 255, 0.774)",
        icon: "#151e4f",
        backgroundColor: "#00000d",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      
    },
  },
  plugins: [],
};
