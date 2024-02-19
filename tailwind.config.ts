import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        especial: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
      },
      backgroundImage: {
        "anatonelly-bg": 'url("/AnatonellyFretes.png")',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lettler-bg": "bg-gradient-to-tl from-black to-purple-600",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(-200px) " },
          to: { opacity: "1", transform: "translateY(0) " },
        },
        fadeOut: {
          from: { opacity: "1", transform: "translateY(0) " },
          to: { opacity: "0", transform: "translateY(-200px) " },
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateY(200px) " },
          to: { opacity: "1", transform: "translateY(0) -translate-x-1/3" },
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateY(200px)  " },
          to: { opacity: "1", transform: "translateY(0) -translate-x-1/3" },
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateY(0) -translate-x-1/3" },
          to: { opacity: "0", transform: "translateY(200px) " },
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateY(0) -translate-x-1/3" },
          to: { opacity: "0", transform: "translateY(200px) " },
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },

        apperContent: {
          from: { opacity: "0", transform: "translateY(200px) " },
          to: { opacity: "1", transform: "translateY(0) " },
        },
        MoveRight: {
          from: { transform: "translateX(200px)" },
          to: { transform: "translateX(0)" },
        },
        MoveLeft: {
          from: { transform: "translateX(-200px)" },
          to: { transform: "translateX(0)" },
        },
        Apper: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        Desapper: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
    animation: {
      fadeIn: "fadeIn 300ms ease",
      fadeOut: "fadeOut 300ms ease",
      scaleIn: "scaleIn 200ms ease",
      scaleOut: "scaleOut 200ms ease",
      spin: "spin 2s linear infinite",
      enterFromLeft: "enterFromLeft 250ms ease",
      enterFromRight: "enterFromRight 250ms ease",
      exitToLeft: "exitToLeft 250ms ease",
      exitToRight: "exitToRight 250ms ease",
      MoveRight: "MoveRight 1s ease",
      MoveLeft: "MoveLeft 1s ease",
      Apper: "Apper 1s ease",
      Desapper: "Desapper 1s ease",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

export default config;
