import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

import text from "/src/fonts/literata.ttf"; // text
import title from "/src/fonts/thryromanes.ttf"; // title
import hand from "/src/fonts/CormorantUpright-SemiBold.ttf"; // hand

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
		mode: "dark",
	},
	status: {
		danger: orange[500],
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
			@font-face {
				font-family: 'text';
				src: url(${text}) format('truetype');
			}
			@font-face {
				font-family: 'title';
				src: url(${title}) format('truetype');
			}
			@font-face {
				font-family: 'hand';
				src: url(${hand}) format('truetype');
			}
		  `,
		},
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
	},
});
