/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "bg-ka-main",
    "bg-ka-light",
    "bg-ka-dark",
    "bg-ka-accent",
    "text-ka-main",
    "text-ka-light",
    "text-ka-dark",
    "text-ka-accent",
    "border-ka-main",
    "border-ka-light",
    "border-ka-dark",
    "border-ka-accent",
  ],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "120rem",
      },
      fontFamily: {
        walsheim: "walsheim",
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
        // "ka-light": "#F6F3EF",
        "ka-light": "#F4F2EA",
        "ka-main": "#6EC8AA",
        "ka-dark": "#1A252B",
        "ka-accent": "#FE3346",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
