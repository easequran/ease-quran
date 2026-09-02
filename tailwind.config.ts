import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1E5B",
        gold: "#F5A623",
        "gold-dark": "#D4891A",
        offwhite: "#F8F7F4",
        // Darkened from #8B8070 (~3.9:1 on white) to meet WCAG AA for body text.
        grey: "#575047",
        // Original warm grey — decorative / large-text (>=18px) use only.
        "grey-light": "#8B8070",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "Cambria", "serif"],
        inter: [
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        arabic: ["var(--font-arabic)", "Amiri", "Noto Naskh Arabic", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
