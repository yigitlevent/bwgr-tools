import styled from "styled-components";

export const Title = styled.div`
	font-size: 1.8em;
	padding: 4px 6px 4px 6px;

	font-family: "Title";
	text-transform: uppercase;
	font-weight: bold;

	border-bottom: ${(props: bwgr.style.Props) => props.theme.border.hard};
`;

export const Subtitle = styled.div`
	font-size: 1.4em;
	padding: 4px 6px 4px 6px;

	font-family: "Title";
`;
