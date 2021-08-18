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

export const CategoryWrapper = styled.div`
	width: 100%;

	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;

	&:after {
		content: "";
		flex: 99999 1 auto;
	}
`;

export const CategoryItem = styled.div`
	font-size: 1.05em;

	padding: 3px 4px;
	margin: 5px 8px;

	background: ${(props: bwgr.style.Props) => props.theme.background.subelement};
	outline: ${(props: bwgr.style.Props) => props.theme.border.soft};

	text-align: center;

	flex: 1 0 auto;
`;
