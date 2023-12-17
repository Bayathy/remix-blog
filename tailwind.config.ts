import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

export default ({
	darkMode: "class",
	content: [
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	plugins: [nextui(), require("@tailwindcss/typography")],
} satisfies Config);
