import { Fragment, useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

import { useRulesetStore } from "../../../hooks/stores/useRulesetStore";
import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { useLifepathRandomizerStore } from "../../../hooks/stores/useLifepathRandomizerStore";
import { Lifepath, Stocks } from "../../../data/stocks/_stocks";
import { FilterLifepaths } from "../../../utils/lifepathFilter";
import { RandomNumber } from "../../../utils/misc";

import { GenericGrid } from "../../Shared/Grids";
import { RandomLifepathsBasics } from "./RandomLifepathsModal/RandomLifepathsBasics";
import { RandomLifepathsLists } from "./RandomLifepathsModal/RandomLifepathsLists";
import { GetPathFromLifepath } from "../../../utils/pathFinder";


export function RandomLifepathsModal({ openRl, openRlModal }: { openRl: boolean; openRlModal: (open: boolean) => void; }) {
	const { checkRulesets } = useRulesetStore();
	const {
		stock, setting, noDuplicates, maxLeads, maxLifepaths, minLifepaths,
		randomizerChangeStock, randomizerChangeMaxLeads, randomizerChangeMaxLifepaths, randomizerChangeMinLifepaths, randomizerToggleNoDuplicates
	} = useLifepathRandomizerStore();

	const { changeStock, addLifepath, calculateTotals } = useCharacterBurnerStore();

	const [newStock, setNewStock] = useState<StocksList>("Dwarf");
	const [chosenLifepaths, setChosen] = useState<Lifepath[]>([]);
	const [triedTooMuch, setTriedTooMuch] = useState(false);

	const createRandom = useCallback((): void => {
		const tempChosenLifepaths: Lifepath[] = [];

		let leadsCounter = 0;

		const stockValues = Object.values(Stocks);
		const chosenStock = (stock === "Random")
			? Stocks[stockValues[RandomNumber(0, stockValues.length - 1)].name]
			: Stocks[stock];

		setNewStock(chosenStock.name);

		const settingValues = Object.values(chosenStock.settings).filter(v => v.type === "Setting");
		const chosenSetting = (setting === "Random")
			? chosenStock.settings[settingValues[RandomNumber(0, settingValues.length - 1)].name]
			: chosenStock.settings[setting];

		const bornLPs = chosenSetting.lifepaths.filter(v => v.born).filter(v => checkRulesets(v.allowed));
		const bornLPsNum = bornLPs.length - 1;
		tempChosenLifepaths.push(bornLPs[RandomNumber(0, bornLPsNum)]);

		const lpAmount = RandomNumber(minLifepaths - 1, maxLifepaths - 1);
		let chosenAmount = 0;

		const maxTries = 20;
		let tries = 0;

		while (tries < maxTries && chosenAmount < lpAmount) {
			const possibilities = FilterLifepaths(chosenStock, tempChosenLifepaths, maxLeads, leadsCounter, checkRulesets);
			const chosenLP = possibilities[RandomNumber(0, possibilities.length - 1)];

			if (chosenLP.setting !== tempChosenLifepaths[tempChosenLifepaths.length - 1].setting) {
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
	}, [checkRulesets, maxLeads, maxLifepaths, minLifepaths, noDuplicates, setting, stock]);

	const transferCharacter = useCallback(() => {
		changeStock(newStock);
		for (const key in chosenLifepaths) {
			addLifepath(GetPathFromLifepath(chosenLifepaths[key]));
		}
		openRlModal(false);
	}, [addLifepath, changeStock, chosenLifepaths, newStock, openRlModal]);

	const totals = (chosenLifepaths.length > 0) ? calculateTotals(chosenLifepaths) : undefined;

	return (
		<Modal open={openRl} onClose={() => openRlModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={7} center>
					<Grid item xs={7} sm={3} md={2}>
						<FormControl fullWidth variant="standard">
							<InputLabel>Stock</InputLabel>
							<Select label="Stock" value={stock} onChange={e => randomizerChangeStock(e.target.value as StocksList | "Random")}>
								<MenuItem key={"Random"} value={"Random"}>Random</MenuItem>
								{Object.values(Stocks).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={7} sm={4} md={1}>
						<TextField
							label="Max Leads"
							inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
							value={maxLeads}
							onChange={e => randomizerChangeMaxLeads(e.target.value)}
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item xs={7} sm={2} md={1}>
						<TextField
							label="Min Lifepaths"
							inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
							value={minLifepaths}
							onChange={e => randomizerChangeMinLifepaths(e.target.value)}
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item xs={7} sm={2} md={1}>
						<TextField
							label="Max Lifepaths"
							inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
							value={maxLifepaths}
							onChange={e => randomizerChangeMaxLifepaths(e.target.value)}
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item xs={7} sm={3} md={2}>
						<FormControlLabel
							label="No Duplicates"
							labelPlacement="start"
							control={<Checkbox checked={noDuplicates} onChange={randomizerToggleNoDuplicates} />}
						/>
					</Grid>

					<Grid item xs={7}>
						<Alert severity="info">Random lifepath selection does not consider the gender, lifepaths with variable ages, and emotional attribute limits. Please make sure to check those requirements seperately.</Alert>
					</Grid>

					<Grid item xs={7}>
						<Button variant="outlined" onClick={() => createRandom()} fullWidth>Generate Random Character</Button>
					</Grid>
				</GenericGrid>

				{chosenLifepaths.length > 0 && totals
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

							<RandomLifepathsBasics />
						</Grid>

						<Grid item xs={2} md={1}>
							<Divider sx={{ margin: "0 0 6px" }}>
								<Typography>Skills, Traits, and Misc</Typography>
							</Divider>

							<RandomLifepathsLists totals={totals} />
						</Grid>

						<Grid item xs={2}>
							<Button variant="outlined" onClick={() => transferCharacter()} fullWidth>I like this Character</Button>
						</Grid>
					</GenericGrid>
					: null
				}
			</Paper>
		</Modal>
	);
}
