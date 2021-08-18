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
