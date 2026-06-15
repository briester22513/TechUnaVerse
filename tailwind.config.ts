import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    "#080C22",
        navy2:   "#0F1535",
        navy3:   "#1A2045",
        gold:    "#D4AF37",
        gold2:   "#F0CC5A",
        purple:  "#7C3AED",
        purple2: "#9D6DF5",
        teal:    "#06B6D4",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
