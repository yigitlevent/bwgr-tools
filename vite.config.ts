import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
	//base: "/bwgr-tools/",
	plugins: [
		splitVendorChunkPlugin(),
		react()
	],
	resolve: {
		alias: {
			"@mui/styled-engine": "@mui/styled-engine-sc"
		}
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("/src/data/stocks")) return "d.st";
					else if (id.includes("/src/data/skills")) return "d.sk";
					else if (id.includes("/src/data/traits")) return "d.tr";
					else if (id.includes("/src/data")) return "d";
				}
			}
		}
	}
});
