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
        black: '#010205',
        purple: '#5D4FB6',
        yellow: '#F0EB00',
        gray: '#F7F7FA'
      },
    },
  },
  plugins: [],
};
export default config;
