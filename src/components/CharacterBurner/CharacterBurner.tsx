import { Fragment, useCallback, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../hooks/useStore";
import { Lifepath, Stocks } from "../../data/stocks/_stocks";
import { GetLifepathFromPath, GetPathFromLifepath } from "../../utils/pathFinder";
import { FilterLifepaths } from "../../utils/lifepathFilter";
import { CheckDatasets } from "../../utils/checkDatasets";

import { GenericGrid } from "../Shared/Grids";
import { LifepathBox } from "../LifepathLists/LifepathBox";
import { BlockDivider } from "./BlockDivider";
import { StatsBlock } from "./Blocks/StatsBlock";
import { AttributesBlock } from "./Blocks/AttributesBlock";
import { SkillsBlock } from "./Blocks/SkillsBlock";
import { TraitsBlock } from "./Blocks/TraitsBlock";
import { BasicsBlock } from "./Blocks/BasicsBlock";
import { LifepathsBlock } from "./Blocks/LifepathsBlock";


export function CharacterBurner(): JSX.Element {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock, lifepathPaths, totals } = useAppSelector(state => state.characterBurner);
	const { cbAddLifepath } = useStore().characterBurner;

	const [open, openModal] = useState(false);
	const [chosenLP, setChosenLP] = useState("");

	const getPossibleLifepaths = useCallback(() => {
		const possibilities =
			lifepathPaths.length === 0
				? Object.values(Stocks[stock].settings).map(setting => setting.lifepaths.filter(lp => lp.born)).flat().filter(v => CheckDatasets(datasets, v.allowed))
				: FilterLifepaths(datasets, Stocks[stock], lifepathPaths.map((lp) => GetLifepathFromPath(lp) as Lifepath), Infinity, 0);

		return possibilities.sort((a, b) => a.name.localeCompare(b.name));
	}, [datasets, lifepathPaths, stock]);

	const resetDefaultChosen = useCallback(() => {
		setChosenLP(GetPathFromLifepath(getPossibleLifepaths()[0]));
	}, [getPossibleLifepaths]);

	const addNewLifepath = () => {
		openModal(false);
		cbAddLifepath(chosenLP);
		resetDefaultChosen();
	};

	useEffect(() => {
		resetDefaultChosen();
	}, [resetDefaultChosen, datasets]);

	return (
		<Fragment>
			<Typography variant="h3">Character Burner</Typography>

			<BasicsBlock />

			<LifepathsBlock openModal={openModal} />

			{totals.years.points > 0
				? <Fragment>
					<BlockDivider />

					<StatsBlock />

					<BlockDivider />

					<AttributesBlock />

					<BlockDivider />

					<SkillsBlock />

					<BlockDivider />

					<TraitsBlock />
				</Fragment>
				: null
			}

			<Modal open={open} onClose={() => openModal(false)}>
				<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none" }}>
					<GenericGrid columns={1} spacing={[2, 2]} center>
						<Grid item xs={1}>
							<Autocomplete
								value={chosenLP}
								options={getPossibleLifepaths().map(GetPathFromLifepath).sort((a, b) => a.localeCompare(b))}
								getOptionLabel={(option) => option.split("➞")[2]}
								groupBy={(option) => option.split("➞")[1]}
								renderInput={(params) => <TextField {...params} label="Chosen Lifepath" />}
								onChange={(e, v) => setChosenLP(v as string)}
								fullWidth
								disableClearable
							/>
						</Grid>

						{(chosenLP.length > 0)
							? <Grid item xs={1}>
								<LifepathBox lifepath={GetLifepathFromPath(chosenLP) as Lifepath} />
							</Grid>
							: null
						}

						<Grid item xs={1}>
							<Button variant="outlined" size="medium" onClick={addNewLifepath} fullWidth>Add Lifepath</Button>
						</Grid>
					</GenericGrid>
				</Paper>
			</Modal>
		</Fragment>
	);
}
