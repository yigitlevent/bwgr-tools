import styled from "styled-components";

const IconWrapper = styled.div<{ size: number; name: string; isDev: boolean; }>`
	width: ${p => p.size}px;
	height: ${p => p.size}px;
	background: transparent url("${p => p.isDev ? "./bwgr-tools" : "."}/icons/${p => p.name}.svg") no-repeat center center;
	background-size: contain;
	margin: auto;

	&:hover {
		filter: brightness(120%);
		cursor: pointer;
	}

	& > svg {
		fill: #D2D2D2;
	}

	& > * {
		height: 100% !important;
		width: 100% !important;
		margin: 0 !important;
		padding: 0 !important;
	}
`;

export function Icon({ name, isDev, title }: { name: string; isDev: boolean; title?: string; }): JSX.Element {
	return (
		<IconWrapper
			size={24}
			name={name}
			title={(title) ? title : undefined}
			isDev={isDev}
		/>
	);
}
