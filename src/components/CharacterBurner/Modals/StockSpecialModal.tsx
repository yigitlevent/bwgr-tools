import { Fragment, useCallback } from "react";

import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

import { useStore } from "../../../hooks/useStore";
import { useAppSelector } from "../../../state/store";
import { Clamp, GetOrdinalSuffix, RandomNumber } from "../../../utils/misc";

import { GenericGrid } from "../../Shared/Grids";


export function StockSpecificModal({ openSs, openSsModal }: { openSs: boolean; openSsModal: (open: boolean) => void; }) {
	const { stock, lifepathPaths, stockSpecific } = useAppSelector(state => state.characterBurner);
	const { cbAddBrutalLifeTrait, cbSetHuntingGround } = useStore().characterBurner;

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

	const rollTerritory = useCallback(() => {
		const huntingGrounds: HuntingGroundsList[] = ["Waste", "Marginal", "Typical", "Plentiful", "Untouched"];
		const lastLp = lifepathPaths[lifepathPaths.length - 1];
		const roll = RandomNumber(1, 6) + RandomNumber(1, 6) + (lastLp === "Great Wolf➞Wild Pack➞Dominant" ? 1 : 0);

		let category = 0;
		if (roll === 2) category = 0;
		else if (roll < 7) category = 1;
		else if (roll < 10) category = 2;
		else if (roll < 12) category = 3;
		else category = 4;

		const lastSetting = lastLp.split("➞")[1];
		if (["Captive", "Slave to the Legion", "Outcast Wolf"].includes(lastSetting)) {
			category = category - 1;
		}
		else if (lastSetting === "Spirit Hunter") {
			category = category + 1;
		}
		else if (lastSetting === "Ghost of the Deeping Wood") {
			category = category + 2;
		}

		cbSetHuntingGround(huntingGrounds[Clamp(category, 0, 4)]);
	}, [cbSetHuntingGround, lifepathPaths]);

	return (
		<Modal open={openSs} onClose={() => openSsModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={3} spacing={[2, 1]} center>
					<Fragment>
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
					</Fragment>
					<Fragment>
						{stock === "Great Wolf"
							? <Fragment>
								<Grid item xs={1}>
									<Typography variant="h5" sx={{ display: "inline-block" }}>Hunting Ground</Typography>
								</Grid>
								<Grid item xs={1}>
									{stockSpecific.territory.huntingGround}
								</Grid>
								<Grid item>
									<Button variant="outlined" size="small" onClick={() => rollTerritory()} disabled={stockSpecific.territory.huntingGround !== undefined}>Roll</Button>
								</Grid>
							</Fragment>
							: null
						}
					</Fragment>
				</GenericGrid>
			</Paper>
		</Modal>
	);
}
