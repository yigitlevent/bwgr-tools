import styled from "styled-components";

const MakerBlockInternal = `
	& > input[type="text"] {
		width: 100%;
		flex: 1 0 auto;
		margin: 2px 0;
	}

	& > textarea {
		width: 100%;
		flex: 1 0 auto;
		margin: 2px 0;
		min-height: 60px;

		&.short{
			width: calc(100% - 102px);
			flex: 0 1 auto;
		}
	}
`;

export const MakerWrapper = styled.div`
	width: 100%;
	height: auto;

	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;

	${MakerBlockInternal}
`;

export const MakerBlock = styled.span`
	display: block;
	flex: 1 0 auto;
	width: 100%;

	${MakerBlockInternal}
`;

export const MakerSideBlock = styled.span`
	display: grid;
	width: 100px;
	flex: 0 0 auto;

	grid-template-columns: 70px 30px;
	grid-template-rows: auto;
	align-items: center;

	& > label {
		font-size: 1.1em;
		text-align: right;
	}
`;
