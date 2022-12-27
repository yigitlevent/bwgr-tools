import { Fragment, useCallback } from "react";

import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { useStore } from "../../../hooks/useStore";
import { useAppSelector } from "../../../state/store";
import { GetOrdinalSuffix, RandomNumber } from "../../../utils/misc";

import { GenericGrid } from "../../Shared/Grids";


export function StockSpecificModal({ openSs, openSsModal }: { openSs: boolean; openSsModal: (open: boolean) => void; }) {
	const { stock, lifepathPaths, stockSpecific } = useAppSelector(state => state.characterBurner);
	const { cbAddBrutalLifeTrait } = useStore().characterBurner;

	const rollBrutalLife = useCallback((lifepathNumber: number) => {
		const isBrutal = (lifepathNumber < 10)
			? RandomNumber(1, 6) <= 4
			: RandomNumber(1, 6) <= 2;

		const trait: TraitPath | undefined =
			(!isBrutal || lifepathNumber < 5) ? undefined
				: (lifepathNumber === 5) ? "Any Character➞Missing Digit"
					: (lifepathNumber === 6) ? "Any Die➞Lame"
						: (lifepathNumber === 7) ? "Any Die➞Missing Eye"
							: (lifepathNumber === 8) ? "Any Die➞Missing Hand"
								: (lifepathNumber === 9) ? "Any Die➞Missing Limb"
									: "Any Die➞Missing Limb";

		cbAddBrutalLifeTrait(trait);
	}, [cbAddBrutalLifeTrait]);

	return (
		<Modal open={openSs} onClose={() => openSsModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={3} spacing={[2, 1]} center>
					{stock === "Orc"
						? lifepathPaths.length > 4
							? lifepathPaths.slice(4).map((v, i) =>
								<Fragment key={i}>
									<Grid item xs={1}>
										<Typography variant="h5" sx={{ display: "inline-block" }}>{GetOrdinalSuffix(i + 5)} Lifepath: {v.split("➞")[2]}</Typography>
									</Grid>
									<Grid item xs={1}>
										{stockSpecific.brutalLife.traits[i]}
									</Grid>
									<Grid item>
										<Button variant="outlined" size="small" onClick={() => rollBrutalLife(i + 5)} disabled={i in stockSpecific.brutalLife.traits}>Roll</Button>
									</Grid>
								</Fragment>
							)
							: <Grid item xs={3}>
								<Alert severity="info">
									Orc character only needs to roll for Brutal Life after 5th lifepath.
								</Alert>
							</Grid>
						: null
					}
				</GenericGrid>
			</Paper>
		</Modal>
	);
}
