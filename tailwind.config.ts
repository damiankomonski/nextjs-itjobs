import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        gray: {
          100: "#D9D9D9",
          200: "#C2C2C2",
          300: "#E5E5E5",
          500: "#636363",
          600: "#545454",
          900: "#2D2D2D",
        },
        primary: {
          500: "#000000",
        },
      },
    }
  },
  plugins: [],
} satisfies Config;
