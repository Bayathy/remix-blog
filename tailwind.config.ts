import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {},
  plugins: [nextui()],
} satisfies Config;
