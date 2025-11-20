import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Ini memerintahkan Tailwind untuk membaca class di folder "app"
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
