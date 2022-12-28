import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";

import { GenericGrid } from "../../Shared/Grids";


export function BeliefsBlock() {
	const { beliefs, limits } = useAppSelector(state => state.characterBurner);
	const { cbChangeBelief } = useStore().characterBurner;

	return (
		<GenericGrid columns={6} center>
			<Grid item xs={4}>
				<Typography variant="h4">Beliefs</Typography>
			</Grid>

			<Fragment>
				{beliefs.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 3 ? `Belief ${i}` : "Special Belief"}
							value={v}
							onChange={(e) => cbChangeBelief(i, e.target.value)}
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
