import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";

import { GenericGrid } from "../../Shared/Grids";


export function InstinctsBlock() {
	const { instincts, limits } = useAppSelector(state => state.characterBurner);
	const { cbChangeInstinct } = useStore().characterBurner;

	return (
		<GenericGrid columns={6} center>
			<Grid item xs={4}>
				<Typography variant="h4">Instincts</Typography>
			</Grid>

			<Fragment>
				{instincts.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 3 ? `Instinct ${i}` : "Special Instinct"}
							value={v}
							onChange={(e) => cbChangeInstinct(i, e.target.value)}
							disabled={i >= (limits.beliefs - 1)}
							fullWidth
							variant="standard"
						/>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
