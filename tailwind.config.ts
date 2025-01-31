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
        primary: "#f26d89",
        footer: "#302836",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "white-opacity-11": "rgba(255,255,255,.11)",
      },
      maxWidth: {
        "1400": "1400px", // Add your custom max width here
        "800": "800px",
      },
    },
  },
  plugins: [],
};
export default config;
