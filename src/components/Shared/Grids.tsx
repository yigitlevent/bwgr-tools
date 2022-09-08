import Grid from "@mui/material/Grid";


export function GenericGrid({ children, columns, center, spacing }: { children: JSX.Element | JSX.Element[] | null | (null | JSX.Element)[]; columns?: number; center?: boolean | "h" | "v"; spacing?: 1 | 2 | 3; }) {
	let centered: { [key: string]: string; } = {};
	if (center === true) centered = { justifyContent: "space-between", alignItems: "center" };
	else if (center === "h") centered = { justifyContent: "space-between" };
	else if (center === "v") centered = { alignItems: "center" };

	return (
		<Grid container columns={columns} spacing={spacing ? spacing : 1} sx={{ marginTop: 1 }} {...centered}>
			{children}
		</Grid>
	);
}
