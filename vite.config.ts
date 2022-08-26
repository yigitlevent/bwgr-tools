import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/bwgr-tools/",
	plugins: [react()],
	resolve: {
		alias: {
			"@mui/styled-engine": "@mui/styled-engine-sc",
		},
	},
});
