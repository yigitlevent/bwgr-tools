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

export const MakerSideBlock = styled.span<{ rows: string; columns: string; }>`
	display: grid;
	width: 100px;
	flex: 0 0 auto;
	margin: 0 1px;

	grid-template-columns: ${p => p.columns};
	grid-template-rows: ${p => p.rows};
	align-items: center;

	& > label {
		font-size: 1.1em;
		text-align: right;
	}
`;

export const MakerStatBlock = styled.span<{ span: number; rows: string; columns: string; }>`
	display: grid;
	width: 92px;
	flex: 0 0 auto;
	margin: 0 1px;

	grid-template-columns: ${p => p.columns};
	grid-template-rows: ${p => p.rows};
	align-items: center;

	& > label {
		font-size: 1.1em;
		text-align: center;
		grid-column: span ${p => p.span};
	}

	& > .select-search {
		width: 100%;
		min-width: 0;
		margin: 0;
	}

	& > input {
		width: 100% !important;
		min-width: 0;
		margin: 0;
	}
`;

export const BlockCenterer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	width: 100%;
`;
