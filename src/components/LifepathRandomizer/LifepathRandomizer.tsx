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
import { Lifepath, Stock, Stocks } from "../../data/stocks";
import { RandomNumber } from "../../utils/misc";

import { LifepathRandomizerLists } from "./LifepathRandomizerLists";
import { LifepathRandomizerBasics } from "./LifepathRandomizerBasics";
import { GenericGrid } from "../Shared/Grids";


export function LifepathRandomizer() {
	const { stock, setting, noDuplicates, maxLeads, maxLifepaths, minLifepaths } = useAppSelector(state => state.lifepathRandomizer);
	const { lprChangeMaxLPs, lprChangeMaxLeads, lprChangeMinLPs, lprChangeStock, lprToggleNoDuplicates } = useStore().lifepathRandomizer;

	const [chosenLifepaths, setChosen] = useState<Lifepath[]>([]);
	const [triedTooMuch, setTriedTooMuch] = useState(false);

	const checkString = useCallback((chosenLifepaths: Lifepath[], conditionString: string): boolean => {
		if (conditionString.startsWith("Skill")) {
			const hasSkill = chosenLifepaths.some(lifepath => lifepath.skills.includes((conditionString as any).slice(6)));
			if (!hasSkill) return false;
		}
		else if (conditionString.startsWith("Trait")) {
			const hasTrait = !chosenLifepaths.some(lifepath => lifepath.traits.includes((conditionString as any).slice(6)));
			if (!hasTrait) return false;
		}
		else if (!chosenLifepaths.some(lifepath => lifepath.name === conditionString.split("➞")[2])) {
			return false;
		}

		return true;
	}, []);

	const checkBlock = useCallback((chosenLifepaths: Lifepath[], condition: Condition): boolean => {
		if (condition.type === "AND") return condition.items.every(v => (typeof v === "string") ? checkString(chosenLifepaths, v) : checkBlock(chosenLifepaths, v));
		else if (condition.type === "OR") return condition.items.some(v => (typeof v === "string") ? checkString(chosenLifepaths, v) : checkBlock(chosenLifepaths, v));
		else if (condition.type === "NOT") return !condition.items.every(v => (typeof v === "string") ? checkString(chosenLifepaths, v) : checkBlock(chosenLifepaths, v));
		return true;
	}, [checkString]);

	const filterByRequirements = useCallback((combinedPossibleLifepaths: Lifepath[], chosenLifepaths: Lifepath[], currentAge: number): Lifepath[] => {
		const filteredLifepaths: Lifepath[] = [];

		combinedPossibleLifepaths = combinedPossibleLifepaths.filter(v => v.born === false);

		for (const lifepathKey in combinedPossibleLifepaths) {
			const lp = combinedPossibleLifepaths[lifepathKey];
			const conditions = lp.requirements.conditions;
			const limits = lp.requirements.limits;

			let add = true;
			if (conditions) add = checkBlock(chosenLifepaths, conditions);
			if (limits) limits.forEach(v => {
				// NOT CONSIDERED: GENDER➞FEMALE/MALE, GRIEF➞MIN/MAX, YEARS➞MIN/MAX
				if (v === "LP➞UNIQUE" && chosenLifepaths.includes(lp)) add = false;
				else if (v.startsWith("LP➞MIN") && chosenLifepaths.length < parseInt(v.split("➞")[2])) add = false;
				else if (v.startsWith("LP➞MAX") && chosenLifepaths.length > parseInt(v.split("➞")[2])) add = false;
				else if (v.startsWith("YEARS➞MIN") && currentAge <= parseInt(v.split("➞")[2])) add = false;
				else if (v.startsWith("YEARS➞MAX") && currentAge >= parseInt(v.split("➞")[2])) add = false;
			});

			if (add) filteredLifepaths.push(lp);
		}

		return filteredLifepaths;
	}, [checkBlock]);

	const getCurrentAge = useCallback((chosenLifepaths: Lifepath[], leadCount: number) => {
		const yrs = chosenLifepaths.map(v => v.years).filter(v => typeof v === "number") as number[];
		const sum = yrs.reduce((prev, curr) => prev + curr);
		return sum + leadCount;
	}, []);

	const chooseNext = useCallback((currentStock: Stock, chosenLifepaths: Lifepath[], leadsCount: number) => {
		const lastLP = chosenLifepaths[chosenLifepaths.length - 1];

		let combinedPossibilities = [...currentStock.settings[lastLP.setting].lifepaths];

		if (leadsCount < maxLeads) {
			for (const leadKey in lastLP.leads) {
				combinedPossibilities = [
					...combinedPossibilities,
					...currentStock.settings[lastLP.leads[leadKey].split("➞")[1]].lifepaths
				];
			}
		}

		const currentAge = getCurrentAge(chosenLifepaths, leadsCount);
		const possibilities = filterByRequirements(combinedPossibilities, chosenLifepaths, currentAge);
		const chosenLP = possibilities[RandomNumber(0, possibilities.length - 1)];

		if (chosenLP.setting !== chosenLifepaths[chosenLifepaths.length - 1].setting) {
			leadsCount = leadsCount + 1;
		}

		return { chosenLP, leadsCount };
	}, [filterByRequirements, getCurrentAge, maxLeads]);

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

		const bornLPs = chosenSetting.lifepaths.filter(v => v.born);
		const bornLPsNum = bornLPs.length - 1;
		tempChosenLifepaths.push(bornLPs[RandomNumber(0, bornLPsNum)]);

		const lpAmount = RandomNumber(minLifepaths - 1, maxLifepaths - 1);
		let chosenAmount = 0;

		const maxTries = 20;
		let tries = 0;

		while (tries < maxTries && chosenAmount < lpAmount) {
			const { chosenLP, leadsCount } = chooseNext(chosenStock, tempChosenLifepaths, leadsCounter);
			leadsCounter = leadsCount;

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
	}, [stock, setting, minLifepaths, maxLifepaths, chooseNext, noDuplicates]);

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
