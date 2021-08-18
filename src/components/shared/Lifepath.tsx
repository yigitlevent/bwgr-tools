import styled from "styled-components";

export const List = styled.div`
	padding: 2px 0 2px 8px;
`;

export const ListBlock = styled.div`
	display: inline;

	& > span {
		display: inline-block;
	}
	
	& > span:not(:last-child):after {
		padding-right: 4px;
	}
`;

export const ListTitle = styled.div`
	display: inline-block;
	font-weight: bold;
	font-style: italic;
	padding-right: 6px;
	font-size: 1.05em;
`;

export const ListPoint = styled.div`
	display: inline-block;
	font-weight: bold;
	padding-right: 4px;
`;
