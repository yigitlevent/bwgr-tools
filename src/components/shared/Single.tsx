import styled from "styled-components";

export const Controls = styled.div`
	width: 100%;
`;

export const Line = styled.div`
	width: auto;
	margin: 0 auto;

	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	& > input:is([type="button"]) {
		margin: 3px 0;
	}

	& > .big {
		font-size: 18px;
		width: max-content;
		padding: 0 8px 3px;
	}

	& > .small {
		font-size: 1em;
		width: 50%;
		padding: 2px 2px 4px;
		flex: 1 0 auto;

		& > * {
			display: inline-block;
			margin-right: 2px;
		}
	}

	& > div {
		width: 160px;
	}

	& > * {
		flex: 0 0 auto;
	}
`;
