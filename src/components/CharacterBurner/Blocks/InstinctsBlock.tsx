import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";

import { GenericGrid } from "../../Shared/Grids";


export function InstinctsBlock() {
	const { instincts, limits, changeInstinct } = useCharacterBurnerStore();

	return (
		<GenericGrid columns={6} center>
			<Grid item xs={4}>
				<Typography variant="h4">Instincts</Typography>
			</Grid>

			<Fragment>
				{instincts.list.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 3 ? `Instinct ${i + 1}` : instincts.fourthInstinctName}
							value={v}
							onChange={(e) => changeInstinct(i, e.target.value)}
							disabled={i >= limits.beliefs}
							fullWidth
							variant="standard"
						/>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
