import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "../../../state/store";
import { useStore } from "../../../hooks/useStore";

import { GenericGrid } from "../../Shared/Grids";


export function BeliefsInstinctsBlock() {
	const { beliefs, instincts } = useAppSelector(state => state.characterBurner);
	const { cbChangeBelief, cbChangeInstinct } = useStore().characterBurner;

	return (
		<GenericGrid columns={6} center>
			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Beliefs</Typography>
			</Grid>

			<Fragment>
				{beliefs.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 4 ? `Belief ${i}` : "Special Belief"}
							value={v}
							onChange={(e) => cbChangeBelief(i, e.target.value)}
							disabled={i === 4}
							fullWidth
							variant="standard"
							multiline
							rows={2}
						/>
					</Grid>
				)}
			</Fragment>

			<Grid item xs={6}>
				<Typography variant="h5" sx={{ margin: "12px 0 0 24px" }}>Instincts</Typography>
			</Grid>

			<Fragment>
				{instincts.map((v, i) =>
					<Grid key={i} item xs={6}>
						<TextField
							label={i !== 4 ? `Instinct ${i}` : "Special Instinct"}
							value={v}
							onChange={(e) => cbChangeInstinct(i, e.target.value)}
							disabled={i === 4}
							fullWidth
							variant="standard"
						/>
					</Grid>
				)}
			</Fragment>
		</GenericGrid>
	);
}
