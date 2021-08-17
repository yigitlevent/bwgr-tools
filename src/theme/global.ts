import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
        font-family: "Text";
        src: url("${process.env.PUBLIC_URL}/fonts/alegreya.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Title";
        src: url("${process.env.PUBLIC_URL}/fonts/thryromanes.ttf");
		font-display: block;
    };

	@font-face {
        font-family: "Hand";
        src: url("${process.env.PUBLIC_URL}/fonts/caveat.ttf");
		font-display: block;
    };

	* {
		box-sizing: border-box;
		tab-size: 4;

		font-size: 1em;

		font-family: "Text";
		color: ${(props: bwgr.style.Props) => props.theme.text.main};
	}

	html {
		height: 100vh;
		width: 100vw;
	}

	html,
	body {
		overflow: hidden;
	}

	body, 
	#root {
		height: 100%;
		width: 100%;
	}

	html,
	body,
	#root {
		background: ${(props: bwgr.style.Props) => props.theme.background.surface};
		margin: 0;
		padding: 0;
	}

	#root {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: flex-start;
		align-content: flex-start;
		overflow: scroll;
		margin: 10px 0;
	}

	a {
		color: ${(props: bwgr.style.Props) => props.theme.text.link};
		text-decoration: none;

		&:hover {
			${(props: bwgr.style.Props) => props.theme.brightness.hovered}
		}

		&:visited {
			color: ${(props: bwgr.style.Props) => props.theme.text.link};
			text-decoration: none;
		}
	}

	p {
		margin: 2px 6px 10px;
		line-height: 1.5;
		text-indent: 10px;
		text-align: justify;
		text-align-last: left;
	}
`;
