import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "var(--bgDark)",
        bgLight: "var(--bgLight)",
        primary: "var(--primary)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [],
} satisfies Config;
