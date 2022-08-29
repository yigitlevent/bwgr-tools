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
import { useStore } from "../../state/useStore";
import { Lifepath, Stock, Stocks } from "../../data/stocks";
import { RandomNumber } from "../../utils/misc";

import { LifepathRandomizerLists } from "./LifepathRandomizerLists";
import { LifepathRandomizerBasics } from "./LifepathRandomizerBasics";


export function LifepathRandomizer() {
	const { stock, setting, noDuplicates, maxLeads, maxLifepaths, minLifepaths } = useAppSelector(state => state.lifepathRandomizer);
	const { lprChangeMaxLPs, lprChangeMaxLeads, lprChangeMinLPs, lprChangeStock, lprToggleNoDuplicates } = useStore().lifepathRandomizer;

	const [chosenLifepaths, setChosen] = useState<Lifepath[]>([]);
	const [triedTooMuch, setTriedTooMuch] = useState(false);

	const filterByRequirements = useCallback((combinedPossibleLifepaths: Lifepath[], tempChosenLifepaths: Lifepath[]): Lifepath[] => {
		const filteredLifepaths: Lifepath[] = [];

		combinedPossibleLifepaths = combinedPossibleLifepaths.filter(v => v.born === false);

		const checkString = (conditionString: string): boolean => {
			if (conditionString.startsWith("Skill")) {
				const hasSkill = tempChosenLifepaths.some(lifepath => lifepath.skills.includes((conditionString as any).slice(6)));
				if (!hasSkill) return false;
			}
			else if (conditionString.startsWith("Trait")) {
				const hasTrait = !tempChosenLifepaths.some(lifepath => lifepath.traits.includes((conditionString as any).slice(6)));
				if (!hasTrait) return false;
			}
			else if (!tempChosenLifepaths.some(lifepath => lifepath.name === conditionString.split("➞")[2])) return false;

			return true;
		};

		const checkBlock = (condition: Condition): boolean => {
			let add = true;
			if (condition.type === "AND") add = condition.items.every(v => (typeof v === "string") ? checkString(v) : checkBlock(v));
			else if (condition.type === "OR") add = condition.items.some(v => (typeof v === "string") ? checkString(v) : checkBlock(v));
			else if (condition.type === "NOT") add = !condition.items.every(v => (typeof v === "string") ? checkString(v) : checkBlock(v));
			return add;
		};

		for (const lifepathKey in combinedPossibleLifepaths) {
			const lp = combinedPossibleLifepaths[lifepathKey];
			const conditions = lp.requirements.conditions;
			const limits = lp.requirements.limits;

			let add = true;
			if (conditions) add = checkBlock(conditions);
			if (limits) limits.forEach(v => {
				// NOT CONSIDERED: GENDER➞FEMALE/MALE, GRIEF➞MIN/MAX, YEARS➞MIN/MAX
				if (v === "LP➞UNIQUE" && chosenLifepaths.includes(lp)) add = false;
				else if (v.startsWith("LP➞MIN") && chosenLifepaths.length < parseInt(v.split("➞")[2])) add = false;
				else if (v.startsWith("LP➞MAX") && chosenLifepaths.length > parseInt(v.split("➞")[2])) add = false;
			});

			if (add) filteredLifepaths.push(lp);
		}

		return filteredLifepaths;
	}, [chosenLifepaths]);

	const createRandom = useCallback((): void => {
		const tempChosenLifepaths: Lifepath[] = [];

		let leadsCounter = 0;

		const chooseNext = (currentStock: Stock): Lifepath => {
			const lastLP = tempChosenLifepaths[tempChosenLifepaths.length - 1];

			let combinedPossibilities = [...currentStock.settings[lastLP.setting].lifepaths];

			if (leadsCounter < maxLeads) {
				for (const leadKey in lastLP.leads) {
					combinedPossibilities = [
						...combinedPossibilities,
						...currentStock.settings[lastLP.leads[leadKey].split("➞")[1]].lifepaths
					];
				}
			}

			const possibilities = filterByRequirements(combinedPossibilities, tempChosenLifepaths);
			const chosenLP = possibilities[RandomNumber(0, possibilities.length - 1)];

			if (chosenLP.setting !== tempChosenLifepaths[tempChosenLifepaths.length - 1].setting) {
				leadsCounter += 1;
			}

			return chosenLP;
		};

		const stockValues = Object.values(Stocks);
		const chosenStock = (stock === "Random")
			? Stocks[stockValues[RandomNumber(0, stockValues.length - 1)].name]
			: Stocks[stock];

		const settingValues = Object.values(chosenStock.settings).filter(v => v.type === "Setting");
		const chosenSetting = (setting === "Random")
			? chosenStock.settings[settingValues[RandomNumber(0, settingValues.length - 1)].name]
			: chosenStock.settings[setting];

		const bornLPs = chosenSetting.lifepaths.filter(v => v.born);
		const bornLPsNum = bornLPs.length - 1;
		tempChosenLifepaths.push(bornLPs[RandomNumber(0, bornLPsNum)]);

		const lpAmount = RandomNumber(minLifepaths - 1, maxLifepaths - 1);
		let chosenAmount = 0;

		const maxTries = 20;
		let tries = 0;

		while (tries < maxTries && chosenAmount < lpAmount) {
			const lp = chooseNext(chosenStock);

			const isDuplicate = tempChosenLifepaths.filter(v => (v.name === lp.name && v.setting === lp.setting)).length > 0;
			if (isDuplicate && noDuplicates) {
				tries += 1;
				continue;
			}
			else {
				tries = 0;
				chosenAmount += 1;
				tempChosenLifepaths.push(lp);
			}
		}

		if (tempChosenLifepaths.length < minLifepaths) setTriedTooMuch(true);

		setChosen(tempChosenLifepaths);
	}, [setting, stock, minLifepaths, maxLifepaths, maxLeads, noDuplicates, filterByRequirements]);

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Randomizer</Typography>

			<Grid container spacing={1} columns={5} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth  variant="standard">
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
					<Alert severity="info">Random lifepath selection does not consider the gender, age, and emotional attribute limits. Please make sure to check those requirements seperately.</Alert>
				</Grid>

				<Grid item>
					<Button variant="outlined" onClick={() => createRandom()}>Generate Random Character</Button>
				</Grid>
			</Grid>

			{(chosenLifepaths.length > 0)
				? <Grid container spacing={1} columns={3} sx={{ margin: "6px 0 0" }}>
					{triedTooMuch
						? <Grid item xs={3}>
							<Alert severity="warning">There might be lifepaths missing because of the chosen options.</Alert>
						</Grid>
						: null
					}

					<Grid item xs={3} md={1}>
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

					<Grid item xs={3} md={2}>
						<Divider sx={{ margin: "0 0 6px" }}>
							<Typography>Skills, Traits, and Misc</Typography>
						</Divider>

						<LifepathRandomizerLists chosenLifepaths={chosenLifepaths} />
					</Grid>
				</Grid>
				: null
			}

		</Fragment>
	);
}
