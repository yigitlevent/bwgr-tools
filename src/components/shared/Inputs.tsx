import styled from "styled-components";

export const Select = styled.select`
	padding: 2px;
	margin: 1px 2px;

	outline: none;
	border: none;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};

	cursor: pointer;

	flex: 1 0 auto;

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(120%);
	}
`;

export const Option = styled.option`
	font-family: "Text";
	cursor: pointer;
`;

export const Button = styled.input.attrs({ type: "button" })`
	height: auto;
	max-height: 100%;

	border: none;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};
	padding: 2px 6px;
	margin: 1px 2px;

	cursor: pointer;

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(120%);
	}
`;
