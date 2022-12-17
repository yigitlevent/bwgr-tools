import { Fragment, useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../hooks/useStore";
import { Lifepath, Stocks } from "../../data/stocks/_stocks";
import { RandomNumber } from "../../utils/misc";
import { CheckDatasets } from "../../utils/checkDatasets";
import { FilterLifepaths } from "../../utils/lifepathFilter";

import { LifepathRandomizerLists } from "./LifepathRandomizerLists";
import { LifepathRandomizerBasics } from "./LifepathRandomizerBasics";
import { GenericGrid } from "../Shared/Grids";


export function LifepathRandomizer() {
	const { datasets } = useAppSelector(state => state.dataset);
	const { stock, setting, noDuplicates, maxLeads, maxLifepaths, minLifepaths } = useAppSelector(state => state.lifepathRandomizer);
	const { lprChangeMaxLPs, lprChangeMaxLeads, lprChangeMinLPs, lprChangeStock, lprToggleNoDuplicates } = useStore().lifepathRandomizer;

	const [chosenLifepaths, setChosen] = useState<Lifepath[]>([]);
	const [triedTooMuch, setTriedTooMuch] = useState(false);

	const createRandom = useCallback((): void => {
		const tempChosenLifepaths: Lifepath[] = [];

		let leadsCounter = 0;

		const stockValues = Object.values(Stocks);
		const chosenStock = (stock === "Random")
			? Stocks[stockValues[RandomNumber(0, stockValues.length - 1)].name]
			: Stocks[stock];

		const settingValues = Object.values(chosenStock.settings).filter(v => v.type === "Setting");
		const chosenSetting = (setting === "Random")
			? chosenStock.settings[settingValues[RandomNumber(0, settingValues.length - 1)].name]
			: chosenStock.settings[setting];

		const bornLPs = chosenSetting.lifepaths.filter(v => v.born).filter(v => CheckDatasets(datasets, v.allowed));
		const bornLPsNum = bornLPs.length - 1;
		tempChosenLifepaths.push(bornLPs[RandomNumber(0, bornLPsNum)]);

		const lpAmount = RandomNumber(minLifepaths - 1, maxLifepaths - 1);
		let chosenAmount = 0;

		const maxTries = 20;
		let tries = 0;

		while (tries < maxTries && chosenAmount < lpAmount) {
			const possibilities = FilterLifepaths(datasets, chosenStock, tempChosenLifepaths, maxLeads, leadsCounter);
			const chosenLP = possibilities[RandomNumber(0, possibilities.length - 1)];

			if (chosenLP.setting !== chosenLifepaths[chosenLifepaths.length - 1].setting) {
				leadsCounter = leadsCounter + 1;
			}

			const isDuplicate = tempChosenLifepaths.filter(v => (v.name === chosenLP.name && v.setting === chosenLP.setting)).length > 0;
			if (isDuplicate && noDuplicates) {
				tries += 1;
				continue;
			}
			else {
				tries = 0;
				chosenAmount += 1;
				tempChosenLifepaths.push(chosenLP);
			}
		}

		if (tempChosenLifepaths.length < minLifepaths) setTriedTooMuch(true);

		setChosen(tempChosenLifepaths);
	}, [chosenLifepaths, datasets, maxLeads, maxLifepaths, minLifepaths, noDuplicates, setting, stock]);

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Randomizer</Typography>

			<GenericGrid columns={5} center>
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Stock</InputLabel>
						<Select label="Stock" value={stock} onChange={lprChangeStock}>
							<MenuItem key={"Random"} value={"Random"}>Random</MenuItem>
							{Object.values(Stocks).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<TextField
						label="Max Leads"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={maxLeads}
						onChange={lprChangeMaxLeads}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<TextField
						label="Min Lifepaths"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={minLifepaths}
						onChange={lprChangeMinLPs}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<TextField
						label="Max Lifepaths"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={maxLifepaths}
						onChange={lprChangeMaxLPs}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControlLabel
						label="No Duplicates"
						labelPlacement="start"
						control={<Checkbox checked={noDuplicates} onChange={lprToggleNoDuplicates} />}
					/>
				</Grid>

				<Grid item xs={5}>
					<Alert severity="info">Random lifepath selection does not consider the gender, lifepaths with variable ages, and emotional attribute limits. Please make sure to check those requirements seperately.</Alert>
				</Grid>

				<Grid item xs={5}>
					<Button variant="outlined" onClick={() => createRandom()} fullWidth>Generate Random Character</Button>
				</Grid>
			</GenericGrid>

			{(chosenLifepaths.length > 0)
				? <GenericGrid columns={2}>
					{triedTooMuch
						? <Grid item xs={2}>
							<Alert severity="warning">There might be lifepaths missing because of the chosen options.</Alert>
						</Grid>
						: <Fragment></Fragment>
					}

					<Grid item xs={2} md={1}>
						<Divider sx={{ margin: "0 0 6px" }}>
							<Typography>Lifepaths</Typography>
						</Divider>

						<Stack spacing={2}>
							{chosenLifepaths.map((v, i) =>
								<Paper key={i}>{i + 1}. {`${v.stock}➞${v.setting}➞${v.name}`}</Paper>
							)}
						</Stack>

						<Divider sx={{ margin: "30px 0 6px" }}>
							<Typography>Basic Information</Typography>
						</Divider>

						<LifepathRandomizerBasics chosenLifepaths={chosenLifepaths} />
					</Grid>

					<Grid item xs={2} md={1}>
						<Divider sx={{ margin: "0 0 6px" }}>
							<Typography>Skills, Traits, and Misc</Typography>
						</Divider>

						<LifepathRandomizerLists chosenLifepaths={chosenLifepaths} />
					</Grid>
				</GenericGrid>
				: null
			}

		</Fragment>
	);
}
