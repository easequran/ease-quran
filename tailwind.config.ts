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
        // Ease Quran Design System tokens (kept alongside legacy names above).
        "eq-gray": {
          50: "#F8F9FB",
          100: "#F2F3F6",
          200: "#E7E8ED",
          300: "#D3D5DC",
          400: "#AFB2BC",
          500: "#8B8E99",
          600: "#6B6F7B",
          700: "#4A4E5A",
          800: "#2B2E38",
          900: "#171A21",
        },
        "eq-success": { 100: "#E3F3EA", 600: "#1E7B4F" },
        "eq-warning": { 100: "#FDECD1", 600: "#B5750B" },
        "eq-danger": { 100: "#FBE7E5", 600: "#C1352B" },
        "eq-info": { 100: "#E6EEFB", 600: "#1B5AA8" },
      },
      fontFamily: {
        // Both headings and body render Poppins (single --font-inter instance) per the Ease Quran Design System.
        playfair: ["var(--font-inter)", "Poppins", "system-ui", "sans-serif"],
        inter: [
          "var(--font-inter)",
          "Poppins",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        arabic: ["var(--font-arabic)", "Cairo", "Poppins", "system-ui", "sans-serif"],
        "arabic-display": ["var(--font-arabic-display)", "Amiri", "Cairo", "serif"],
      },
      borderRadius: {
        "eq-card": "16px",
        "eq-input": "10px",
      },
      boxShadow: {
        "eq-sm": "0 1px 2px rgba(11,30,91,0.06)",
        "eq-md": "0 4px 12px rgba(11,30,91,0.08)",
        "eq-lg": "0 12px 32px rgba(11,30,91,0.12)",
        "eq-focus": "0 0 0 3px rgba(245,166,35,0.35)",
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
