import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      colors: {
        muted: {
          foreground: "#9ca3af",
          DEFAULT: "#4b5563",
        },
        link: "#3b82f6",
      },
    },
  },
  plugins: [],
} satisfies Config;
