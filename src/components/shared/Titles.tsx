import styled from "styled-components";

export const Title = styled.div`
	font-size: 2.0em;
	padding: 4px 6px 4px 16px;

	font-family: "Title";
	text-transform: uppercase;
	font-weight: bold;

	border-bottom: ${(props: bwgr.style.Props) => props.theme.border.hard};

	flex: 1 0 auto;
`;

export const Subtitle = styled.div`
	font-size: 1.7em;
	padding: 4px 6px 4px 6px;

	font-family: "Title";

	flex: 1 0 auto;
`;
