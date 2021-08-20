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

	& > span {
		font-size: 18px;
		width: max-content;
		padding: 0 8px 3px;
	}

	& > div {
		width: 160px;
	}

	& > * {
		flex: 0 0 auto;
	}
`;
