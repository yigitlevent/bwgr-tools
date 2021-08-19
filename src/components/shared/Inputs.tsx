import styled from "styled-components";

export const Button = styled.input.attrs({ type: "button" })`
	height: 26px;
	max-height: 100%;

	border: none;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};
	padding: 0 10px 2px;
	margin: 2px;

	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(120%);
	}
`;

export const Input = styled.input`
	height: 26px;
	max-height: 100%;

	border: none;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};
	padding: 0 10px 2px;
	margin: 2px;

	appearance: textfield;
	cursor: text;

	&[type="number"] {
		width: 30px;
		padding: 0 8px;
		text-align: center;
	}

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(120%);
	}
`;

export const Textarea = styled.textarea`
	height: auto;
	max-height: 100%;

	border: none;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};
	padding: 0 10px 2px;
	margin: 2px;

	appearance: textfield;
	cursor: text;

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(120%);
	}
`;
