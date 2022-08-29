import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import text from "/src/assets/fonts/literata.woff"; // text
import title from "/src/assets/fonts/thryromanes.woff"; // title
import hand from "/src/assets/fonts/CormorantUpright-SemiBold.woff"; // hand

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
	}
}

export const THEME = createTheme({
	palette: {
		mode: "dark"
	},
	status: {
		danger: orange[500]
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'text';
				src: url(${text}) format('woff');
			}
			@font-face {
				font-family: 'title';
				src: url(${title}) format('woff');
			}
			@font-face {
				font-family: 'hand';
				src: url(${hand}) format('woff');
			}
		  `
		}
	},
	typography: {
		fontFamily: "text",
		"body1": {
			fontFamily: "text"
		},
		"body2": {
			fontFamily: "text",
			textIndent: "8px",
			textAlign: "justify",
			textJustify: "inter-word"
		},
		"subtitle1": {
			fontFamily: "hand"
		},
		"subtitle2": {
			fontFamily: "hand"
		},
		"h1": {
			fontFamily: "title"
		},
		"h2": {
			fontFamily: "title"
		},
		"h3": {
			fontFamily: "title"
		},
		"h4": {
			fontFamily: "title"
		},
		"h5": {
			fontFamily: "title"
		}
	}
});
