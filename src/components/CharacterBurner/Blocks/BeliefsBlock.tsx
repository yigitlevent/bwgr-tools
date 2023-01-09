import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";

import { GenericGrid } from "../../Shared/Grids";


export function BeliefsBlock() {
	const { beliefs, /*limits,*/ changeBelief } = useCharacterBurnerStore();

	return (
		<GenericGrid columns={6} center>
			<Grid item xs={4}>
				<Typography variant="h4">Beliefs</Typography>
			</Grid>

			<Fragment>
				{beliefs.list.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 3 ? `Belief ${i + 1}` : beliefs.fourthBeliefName}
							value={v}
							onChange={(e) => changeBelief(i, e.target.value)}
							disabled={i >= 3/*limits.beliefs*/}
							fullWidth
							variant="standard"
						/>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
