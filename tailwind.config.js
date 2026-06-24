/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1120",
          soft: "#101830",
          deep: "#070B16",
        },
        paper: {
          DEFAULT: "#F7F9FC",
          soft: "#EEF2F9",
        },
        signal: {
          // primary accent — circuit / terminal cyan
          50: "#ECFEFB",
          200: "#A7F3E8",
          400: "#5EEAD4",
          500: "#2DD4BF",
          600: "#0D9488",
          700: "#0F766E",
        },
        amber: {
          400: "#FBBF24",
          500: "#D97706",
        },
        slate: {
          850: "#172033",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(13,148,136,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13,148,136,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(94,234,212,0.25), 0 0 30px -5px rgba(94,234,212,0.35)",
        "glow-amber": "0 0 0 1px rgba(251,191,36,0.25), 0 0 30px -5px rgba(251,191,36,0.35)",
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
        "scan-line": "scan-line 6s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
