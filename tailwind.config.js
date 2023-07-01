/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#752BDF",
          content: "white",
        },
        warning: {
          DEFAULT: "#C73D2C",
          content: "white",
        },
        success: {
          DEFAULT: "#2DAE00",
          content: "white",
        },
        info: {
          DEFAULT: "#41B6FF",
          content: "white",
        },
        lightGray: {
          DEFAULT: "#838383",
          content: "black",
        },
        background: {
          DEFAULT: "#F5F6FA",
          content: "black",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
