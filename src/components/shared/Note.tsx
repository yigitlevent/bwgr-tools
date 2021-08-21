import styled from "styled-components";

export const Note = styled.div<{ width: string; }>`
	display: block;
	width: ${p => p.width};
	margin: 4px auto;
	font-family: "Hand";
	font-size: 1.1em;
`;
