import Grid from "@mui/material/Grid";
import { SxProps, Theme } from "@mui/material/styles";


interface GenericGridProps {
	children: JSX.Element | JSX.Element[] | null | (null | JSX.Element)[];
	columns?: number;
	center?: boolean | "h" | "v";
	spacing?: [row: 0 | 1 | 2 | 3, column: 0 | 1 | 2 | 3];
	sx?: SxProps<Theme>;
	hasBackground?: boolean | number;
}

export function GenericGrid({ children, columns, center, spacing, sx, hasBackground }: GenericGridProps) {
	let centered: { [key: string]: string; } = {};
	if (center === true) centered = { justifyContent: "space-between", alignItems: "center" };
	else if (center === "h") centered = { justifyContent: "space-between" };
	else if (center === "v") centered = { alignItems: "center" };

	const bg: { [key: string]: string | number; } = {};
	if (hasBackground) {
		bg.background = "#353535";
		if (typeof hasBackground === "number") bg.borderRadius = hasBackground;
	}

	return (
		<Grid
			container
			columns={columns}
			rowSpacing={spacing ? spacing[0] : 1}
			columnSpacing={spacing ? spacing[1] : 1}
			sx={{
				marginTop: 1,
				paddingBottom: hasBackground ? 1 : undefined,
				...bg,
				...sx
			}}
			{...centered}>
			{children}
		</Grid>
	);
}
