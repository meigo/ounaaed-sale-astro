/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["bg-ka-cream", "bg-ka-cream-dark", "bg-ka-green", "text-ka-cream", "text-ka-cream"],
  theme: {
    extend: {
      fontFamily: {
        gelica: "Gelica",
        "aileron-ul": "aileronultralight",
      },
      lineHeight: {
        0: ".8",
      },
      fontSize: {
        17: ["17px", "26px"],
        "10xl": "10rem",
        "11xl": "12rem",
        "3vw": ["3vw", { lineHeight: "3vw" }],
        "4vw": ["4vw", { lineHeight: "4vw" }],
        "5vw": ["5vw", { lineHeight: "5vw" }],
        "6vw": ["6vw", { lineHeight: "7vw" }],
        "8vw": ["8vw", { lineHeight: "9vw" }],
        "9vw": ["9vw", { lineHeight: "10vw" }],
        "10vw": "10vw",
        "11vw": "11vw",
        "12vw": "12vw",
        "13vw": "13vw",
        "14vw": "14vw",
        "15vw": "15vw",
        "16vw": "16vw",
        "18vw": "18vw",
        "20vw": "20vw",
        "30vw": "30vw",
      },
      scale: {
        102: "1.02",
      },
      colors: {
        // "ka-cream": "#EEECE5",
        "ka-cream": " #F9F7DE",
        "ka-cream-dark": "#ECE8DB",

        // "ka-green": "#5D7260",
        "ka-green": "#008C5B",
        "ka-red": "#E50B3B",
        "ka-salmon": "#FF8B5A",
      },
    },
  },
  plugins: [],
};
