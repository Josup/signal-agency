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
        paper:    "#F5F2ED",
        "paper-2":"#E5DFD3",
        ink:      "#15110D",
        "ink-dim":"#6B6258",
        signal:   "#C41E3A",
        "signal-dark": "#A8132E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        serif:   ["var(--font-source-serif)", "Georgia", "serif"],
        mono:    ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: { site: "1440px" },
    },
  },
  plugins: [],
};
export default config;
