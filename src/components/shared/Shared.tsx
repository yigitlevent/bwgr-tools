import styled from "styled-components";

/// COMPONENTS

const OuterWrapper = styled.div`
	width: 600px;
	height: 100%;
	max-width: 100%;
	max-height: 100%;

	padding: 0;
	margin: 0 auto;
`;

const InnerWrapper = styled.div`
	width: 100%;
	max-width: 100%;
	max-height: 100%;

	margin: 5px auto;
	padding: 1px;

	background: ${(props: bwgr.style.Props) => props.theme.background.element};
	
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
`;

export function AppWrapper({ children }: { children: JSX.Element | JSX.Element[]; }): JSX.Element {
	return (
		<OuterWrapper>
			<InnerWrapper>
				{children}
			</InnerWrapper>
		</OuterWrapper>
	);
}

export const TopbarWrapper = styled.div`
	width: auto;
	height: 32px;
	padding: 3px;
	margin: 1px;
	background: ${(props: bwgr.style.Props) => props.theme.background.sidebar};
	display: flex;
`;

export const ContentWrapper = styled.div`

`;

export const Title = styled.div`
	font-size: 2.4em;
	padding: 8px 6px 4px 6px;
	
	font-family: "Title";
`;

export const Subtitle = styled.div`
	font-size: 1.6em;
	padding: 4px 6px 4px 6px;
	
	font-family: "Title";
`;

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
