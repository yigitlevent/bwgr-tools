import { Fragment, useCallback } from "react";

import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useStore } from "../../../hooks/useStore";
import { Stocks } from "../../../data/stocks/_stocks";
import { useAppSelector } from "../../../state/store";
import { GetPathFromLifepath } from "../../../utils/pathFinder";
import { CheckDatasets } from "../../../utils/checkDatasets";

import { GenericGrid } from "../../Shared/Grids";
import { AbilityButton } from "../../Shared/AbilityButton";


export function SpecialLifepathsModal({ openSl, openSlModal }: { openSl: boolean; openSlModal: (open: boolean) => void; }) {
	const { datasets } = useAppSelector(state => state.dataset);
	const { lifepathPaths, specialLifepaths } = useAppSelector(state => state.characterBurner);
	const { cbModifySpecialLifepathValue } = useStore().characterBurner;

	const modifyAdvisor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, change: number) => {
		e.preventDefault();
		if (specialLifepaths.advisorToTheCourt.years + change < 4 && specialLifepaths.advisorToTheCourt.years + change > 0) {
			cbModifySpecialLifepathValue({ advisorToTheCourtYears: specialLifepaths.advisorToTheCourt.years + change });
		}
	};

	const modifyBondsman = (e: React.SyntheticEvent<Element, Event>, change: LifepathPath) => {
		e.preventDefault();
		cbModifySpecialLifepathValue({ bondsmanOwnerLifepathPath: change });
	};

	const modifyPrince = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, change: number) => {
		e.preventDefault();
		if (specialLifepaths.princeOfTheBlood.years + change < 20 && specialLifepaths.princeOfTheBlood.years + change > 1) {
			cbModifySpecialLifepathValue({ princeOfTheBloodYears: specialLifepaths.princeOfTheBlood.years + change });
		}
	};

	const getPossibleLifepaths = useCallback(() => {
		const possibilities =
			Object.values(Stocks["Human"].settings)
				.map(setting => setting.lifepaths.filter(lp => !lp.born && ["City Dweller", "Noble", "Professional Soldier", "Villager"].includes(lp.setting)))
				.flat()
				.filter(v => CheckDatasets(datasets, v.allowed));

		return possibilities.sort((a, b) => a.name.localeCompare(b.name));
	}, [datasets]);

	return (
		<Modal open={openSl} onClose={() => openSlModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={3} spacing={[2, 1]} center>
					{lifepathPaths.includes("Human➞Servitude and Captive➞Bondsman")
						? <Fragment>
							<Grid item xs={1}>
								<Typography>Bondsman owner lifepath</Typography>
							</Grid>
							<Grid item xs={2}>
								<Autocomplete
									value={specialLifepaths.bondsman.ownerLifepathPath}
									options={getPossibleLifepaths().map(GetPathFromLifepath).sort((a, b) => a.localeCompare(b))}
									getOptionLabel={(option) => option.split("➞")[2]}
									groupBy={(option) => option.split("➞")[1]}
									renderInput={(params) => <TextField {...params} label="Owner's Lifepath" />}
									onChange={(e, v) => modifyBondsman(e, v as LifepathPath)}
									fullWidth
									disableClearable
									size="small"
								/>
							</Grid>
						</Fragment>
						: null
					}
					{lifepathPaths.includes("Human➞Noble Court➞Advisor to the Court")
						? <Fragment>
							<Grid item xs={1}>
								<Typography>Advisor to the Court years</Typography>
							</Grid>
							<Grid item xs={2}>
								<AbilityButton onClick={e => modifyAdvisor(e, 1)} onContextMenu={e => modifyAdvisor(e, -1)}>
									{specialLifepaths.advisorToTheCourt.years}
								</AbilityButton>
							</Grid>
						</Fragment>
						: null
					}
					{lifepathPaths.includes("Human➞Noble➞Prince of the Blood")
						? <Fragment>
							<Grid item xs={1}>
								<Typography>Prince of the Blood years</Typography>
							</Grid>
							<Grid item xs={2}>
								<AbilityButton onClick={e => modifyPrince(e, 1)} onContextMenu={e => modifyPrince(e, -1)}>
									{specialLifepaths.princeOfTheBlood.years}
								</AbilityButton>
							</Grid>
						</Fragment>
						: null
					}
				</GenericGrid>
			</Paper>
		</Modal>
	);

}
