import { ChangeEvent, Fragment, useCallback, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

import { useAppDispatch, useAppSelector } from "../../state/store";
import { Lifepath, Stock, Stocks } from "../../data/stocks";
import { Trait, TraitCategories } from "../../data/traits";
import { Skill, SkillCategories } from "../../data/skills";
import { RandomNumber, Clamp } from "../../utils/misc";

import { PopoverLink } from "../Shared/PopoverLink";
import Box from "@mui/material/Box";


export function LifepathRandomizer() {
	const { stock, setting, noDuplicates, maxLeads, maxLifepaths, minLifepaths } = useAppSelector(state => state.lifepathRandomizer);
	const dispatch = useAppDispatch();

	const [chosenLifepaths, setChosen] = useState<Lifepath[]>([]);
	const [triedTooMuch, setTriedTooMuch] = useState(false);

	const changeStock = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_LP_RANDOMIZER_STOCK", payload: { stock: event.target.value } });
	};

	const changeMaxLeads = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LEADS", payload: { maxLeads: value } });
	};

	const changeMaxLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MAX_LIFEPATHS", payload: { maxLifepaths: value } });
	};

	const changeMinLPs = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_LP_RANDOMIZER_MIN_LIFEPATHS", payload: { minLifepaths: value } });
	};

	const toggleNoDuplicates = () => {
		dispatch({ type: "TOGGLE_LP_RANDOMIZER_NO_DUPLICATES" });
	};

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

		const maxTries = 10;
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

	const basics = useCallback(() => {
		const totals = {
			year: 0, yearExt: [] as string[], ageStats: [0, 0],
			resource: 0, resourcesExt: [] as string[],
			// Stat
			either: 0, mental: 0, physical: 0,
			// Skill
			general: 0, generalExt: [] as string[],
			lifepath: 0, lifepathExt: [] as string[],
			// Trait
			trait: 0
		};

		for (const lifepathKey in chosenLifepaths) {
			const lp = chosenLifepaths[lifepathKey];

			if (parseInt(lifepathKey) !== 0) {
				const prevLp = chosenLifepaths[parseInt(lifepathKey) - 1];
				if (lp.setting !== prevLp.setting) totals.year += 1;
			}

			totals.either += lp.eitherPool;
			totals.mental += lp.mentalPool;
			totals.physical += lp.physicalPool;

			if (typeof lp.years === "number") totals.year += lp.years;
			else totals.yearExt.push(lp.years);

			if (typeof lp.resources === "number") totals.resource += lp.resources;
			else totals.resourcesExt.push(lp.resources);

			if (typeof lp.generalSkillPool === "number") totals.general += lp.generalSkillPool;
			else totals.generalExt.push(lp.generalSkillPool);

			if (typeof lp.skillPool === "number") totals.lifepath += lp.skillPool;
			else totals.lifepathExt.push(lp.skillPool);

			totals.trait += lp.traitPool;
		}

		const ageBracket = Stocks[chosenLifepaths[0].stock].agePool.filter(v => (v.max >= totals.year && v.min <= totals.year));
		totals.ageStats = [ageBracket[0].m, ageBracket[0].p];

		return (
			<Grid container columns={2}>
				<Grid item xs={1}>
					<Typography variant="caption">Years: {totals.year}{totals.yearExt.length > 0 ? `, plus ${totals.yearExt.join(" ")}` : ""}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="caption">Resources: {totals.resource}{totals.resourcesExt.length > 0 ? `, plus ${totals.resourcesExt.join(" ")}` : ""}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="caption">Stats: {totals.ageStats[0] + totals.mental}M, {totals.ageStats[1] + totals.physical}P {(totals.either !== 0) ? `(${totals.either > 0 ? "+" : ""}${totals.either}M/P)` : ""}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="caption">Trait Points: {totals.trait}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="caption">General Skill Points: {totals.general}{totals.generalExt.length > 0 ? `, plus ${totals.generalExt.join(" ")}` : ""}</Typography>
				</Grid>
				<Grid item xs={1}>
					<Typography variant="caption">Lifepath Skill Points: {totals.lifepath}{totals.lifepathExt.length > 0 ? `, plus ${totals.lifepathExt.join(" ")}` : ""}</Typography>
				</Grid>
			</Grid>
		);
	}, [chosenLifepaths]);

	const lists = useCallback(() => {
		const totals = {
			mandSkills: new Set<string>(),
			skills: new Set<string>(),
			mandTraits: new Set<string>(),
			traits: new Set<string>()
		};

		for (const lifepathKey in chosenLifepaths) {
			const lp = chosenLifepaths[lifepathKey];

			let mandatorySkillIndex = lp.skills.findIndex(v => !totals.mandSkills.has(v));
			if (mandatorySkillIndex === -1) mandatorySkillIndex = 0;
			lp.skills.forEach((v, i) => { if (i === mandatorySkillIndex) totals.mandSkills.add(v); });

			let mandatoryTraitIndex = lp.traits.findIndex(v => !totals.mandSkills.has(v));
			if (mandatoryTraitIndex === -1) mandatoryTraitIndex = 0;
			lp.traits.forEach((v, i) => { if (i === mandatoryTraitIndex) totals.mandTraits.add(v); });
		}

		for (const lifepathKey in chosenLifepaths) {
			const lp = chosenLifepaths[lifepathKey];
			lp.skills.forEach(v => { if (!totals.mandSkills.has(v)) totals.skills.add(v); });
			lp.traits.forEach(v => { if (!totals.mandTraits.has(v)) totals.traits.add(v); });
		}


		const mandSkills = [...totals.mandSkills].map(path => {
			const [category, name] = path.split("➞");
			let s = SkillCategories[category].skills.find(v => v.name === name);
			if (name === "1*ANY") s = SkillCategories[category].skills.find(v => v.name === "Any wise");
			return s as Skill;
		});

		const skills = [...totals.skills].map(path => {
			const [category, name] = path.split("➞");
			let s = SkillCategories[category].skills.find(v => v.name === name);
			if (name === "1*ANY") s = SkillCategories[category].skills.find(v => v.name === "Any wise");
			return s as Skill;
		});

		const mandTraits = [...totals.mandTraits].map(path => {
			const [category, name] = path.split("➞");
			const t = TraitCategories[category].traits.find(v => v.name === name);
			return t as Trait;
		});

		const traits = [...totals.traits].map(path => {
			const [category, name] = path.split("➞");
			const t = TraitCategories[category].traits.find(v => v.name === name);
			return t as Trait;
		});

		return (
			<Grid container columns={1} spacing={1}>
				<Grid item xs={1}>
					Mandatory Skills:
					{mandSkills.length > 0
						? mandSkills.map((skill, i) =>
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "3px 3px 0", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={skill} />
							</Paper>
						)
						: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
					}
				</Grid>
				<Grid item xs={1}>
					Skills:
					{skills.length > 0
						? skills.map((skill, i) =>
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "3px 3px 0", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={skill} />
							</Paper>
						)
						: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
					}
				</Grid>
				<Grid item xs={1}>
					Mandatory Traits:
					{mandTraits.length > 0
						? mandTraits.map((trait, i) =>
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "3px 3px 0", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={trait} />
							</Paper>
						)
						: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
					}
				</Grid>
				<Grid item xs={1}>
					Traits:
					{traits.length > 0
						? traits.map((trait, i) =>
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "3px 3px 0", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={trait} />
							</Paper>
						)
						: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
					}
				</Grid>
			</Grid>
		);
	}, [chosenLifepaths]);

	return (
		<Fragment>
			<Typography variant="h3">Lifepath Randomizer</Typography>

			<Grid container spacing={1} columns={5} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="lr-l">Stock</InputLabel>
						<Select labelId="lr-l" id="lr" label="Stock" value={stock} onChange={changeStock}>
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
						onChange={changeMaxLeads}
						fullWidth
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<TextField
						label="Min Lifepaths"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={minLifepaths}
						onChange={changeMinLPs}
						fullWidth
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<TextField
						label="Max Lifepaths"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={maxLifepaths}
						onChange={changeMaxLPs}
						fullWidth
					/>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControlLabel
						label="No Duplicates"
						labelPlacement="start"
						control={<Checkbox checked={noDuplicates} onChange={toggleNoDuplicates} />}
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

						{basics()}
					</Grid>

					<Grid item xs={3} md={2}>
						<Divider sx={{ margin: "0 0 6px" }}>
							<Typography>Skills, Traits, and Misc</Typography>
						</Divider>

						{lists()}
					</Grid>
				</Grid>
				: null
			}

		</Fragment>
	);
}
