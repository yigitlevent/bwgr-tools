import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/bwgr-tools/",
	plugins: [
		chunkSplitPlugin({
			strategy: "default",
			customSplitting: {
				"react": ["react", "react-dom", "react-redux", "react-router-dom"],
				"mui": ["@mui/material", "@mui/styled-engine-sc", "@mui/icons-material"],
				"data.st": [/src\/data\/stocks/],
				"data.sk": [/src\/data\/skills/],
				"data.tr": [/src\/data\/traits/],
				"data": [/src\/data/]
			}
		}),
		react()
	],
	resolve: {
		alias: {
			"@mui/styled-engine": "@mui/styled-engine-sc"
		}
	}
});
