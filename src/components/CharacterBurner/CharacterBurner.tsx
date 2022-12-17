import { Fragment, useCallback, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
import { CalculateLifepathTotals, LifepathTotals } from "../../utils/lifepathTotals";

import { GenericGrid } from "../Shared/Grids";
import { LifepathBox } from "../LifepathLists/LifepathBox";


export function CharacterBurner(): JSX.Element {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock, concept, lifepathPaths } = useAppSelector(state => state.characterBurner);
	const { cbChangeStock, cbChangeConcept, cbAddLifepath, cbRemoveLifepath } = useStore().characterBurner;

	const [open, setOpen] = useState(false);
	const [chosenLP, setChosenLP] = useState("");
	const [totals, setTotals] = useState<LifepathTotals | undefined>(undefined);

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
		cbAddLifepath(chosenLP);
		resetDefaultChosen(); 
	};

	useEffect(() => {
		lifepathPaths.length > 0
			? setTotals(CalculateLifepathTotals(lifepathPaths.map((lp) => GetLifepathFromPath(lp) as Lifepath)))
			: setTotals(undefined);
	}, [lifepathPaths]);

	useEffect(() => {
		resetDefaultChosen();
	}, [resetDefaultChosen, datasets]);

	return (
		<Fragment>
			<Typography variant="h3">Character Burner</Typography>

			<Modal open={open} onClose={() => setOpen(false)}>
				<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none" }}>
					<GenericGrid columns={1} spacing={2} center>
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

			<GenericGrid columns={4} center>
				<Grid item xs={2} sm={1} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Stock</InputLabel>
						<Select value={stock} onChange={(e) => cbChangeStock(e.target.value)}>
							{Object.keys(Stocks).map((stock, i) => <MenuItem key={i} value={stock}>{stock}</MenuItem>)}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={2} sm={1} md={1}>
					<TextField
						label="Age"
						value={totals ? `${totals.year}${totals.yearExt.length > 0 ? `, plus ${totals.yearExt.join(" ")}` : ""}` : ""}
						fullWidth
						variant="standard"
						disabled
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={2}>
					<TextField
						label="Concept"
						value={concept}
						onChange={(e) => cbChangeConcept(e.target.value)}
						fullWidth
						variant="standard"
					/>
				</Grid>
			</GenericGrid>

			<GenericGrid columns={2} center>
				<Grid item xs={2}>
					<Typography variant="h5">Lifepaths</Typography>
				</Grid>

				<Fragment>
					{lifepathPaths.map((lpPath, i) =>
						<Grid key={i} item xs={2}>
							<LifepathBox lifepath={GetLifepathFromPath(lpPath) as Lifepath} />
						</Grid>
					)}
				</Fragment>

				<Grid item>
					<Button variant="outlined" size="medium" onClick={() => setOpen(true)}>Add Lifepath</Button>
				</Grid>

				<Grid item>
					<Button variant="outlined" size="medium" onClick={() => cbRemoveLifepath()} disabled={lifepathPaths.length === 0}>Remove Lifepath</Button>
				</Grid>
			</GenericGrid>
		</Fragment>
	);
}
