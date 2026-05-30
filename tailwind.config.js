/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--font-bebas)", "Helvetica Now Display", "Arial", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        canvas: "#ffffff",
        cloud: "#f4f6fb",
        charcoal: "#1a1a2e",
        ash: "#2d2d44",
        mute: "#6b7280",
        stone: "#9ca3af",
        hairline: "#d1d5db",
        "hairline-soft": "#e5e7eb",
        blue: "#1151ff",
        "blue-deep": "#0034e3",
        "blue-soft": "#dbeafe",
        sale: "#d30005",
        success: "#007d48",
        info: "#1151ff",
      },
      borderRadius: {
        pill: "9999px",
        "pill-md": "24px",
        "pill-lg": "30px",
      },
      spacing: {
        section: "48px",
      },
      fontSize: {
        campaign: ["96px", { lineHeight: "0.9", letterSpacing: "0" }],
        "campaign-sm": ["64px", { lineHeight: "0.9", letterSpacing: "0" }],
        "campaign-xs": ["48px", { lineHeight: "0.9", letterSpacing: "0" }],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
