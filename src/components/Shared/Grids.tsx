import Grid from "@mui/material/Grid";
import { SxProps, Theme } from "@mui/material/styles";


export function GenericGrid({ children, columns, center, spacing, sx }: { children: JSX.Element | JSX.Element[] | null | (null | JSX.Element)[]; columns?: number; center?: boolean | "h" | "v"; spacing?: 1 | 2 | 3; sx?: SxProps<Theme>; }) {
	let centered: { [key: string]: string; } = {};
	if (center === true) centered = { justifyContent: "space-between", alignItems: "center" };
	else if (center === "h") centered = { justifyContent: "space-between" };
	else if (center === "v") centered = { alignItems: "center" };

	return (
		<Grid container columns={columns} spacing={spacing ? spacing : 1} sx={{ marginTop: 1, ...sx }} {...centered}>
			{children}
		</Grid>
	);
}
