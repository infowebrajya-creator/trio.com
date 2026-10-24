import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { forest: "#123D32", deep: "#0B2922", ivory: "#F6F4ED", sage: "#DDE5D9", accent: "#D9A66C" },
      fontFamily: { sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"] },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
