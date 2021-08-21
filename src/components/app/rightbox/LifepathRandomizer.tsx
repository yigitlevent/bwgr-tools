import { Fragment, useCallback, useState } from "react";
import SelectSearch from "react-select-search";
import styled from "styled-components";

import { Stocks } from "../../../data/stocks";

import { RandomNumber } from "../../../utility/randomNumber";
import { NameMaker } from "../../../utility/nameMaker";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { Button, Input } from "../../shared/Inputs";
import { Divider } from "../../shared/Divider";
import { Controls, Line } from "../../shared/Single";
import { Note } from "../../shared/Note";
import { NoLink } from "../../shared/Links";

const Chosen = styled.div`
	display: block;
	margin: 3px;
	width: 100%;
`;

export function LifepathRandomizer(): JSX.Element {
	const [stock, setStock] = useState("Random");
	const [setting, setSetting] = useState("Random");
	const [minimum, setMinimum] = useState(5);
	const [maximum, setMaximum] = useState(6);

	const [chosenLifepaths, setChosen] = useState<bwgr.data.Lifepath[]>([]);

	const filterByRequirements = useCallback((combinedPossibleLifepaths: bwgr.data.Lifepath[], tempChosenLifepaths: bwgr.data.Lifepath[]): bwgr.data.Lifepath[] => {
		const filteredLifepaths: bwgr.data.Lifepath[] = [];

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

		const checkBlock = (condition: bwgr.data.Condition): boolean => {
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
		const tempChosenLifepaths: bwgr.data.Lifepath[] = [];

		const chooseNext = (currentStock: bwgr.data.Stock): void => {
			const lastLP = tempChosenLifepaths[tempChosenLifepaths.length - 1];

			let combinedPossibilities = [...currentStock.settings[lastLP.setting].lifepaths];
			for (const leadKey in lastLP.leads) {
				combinedPossibilities = [
					...combinedPossibilities,
					...currentStock.settings[lastLP.leads[leadKey].split("➞")[1]].lifepaths
				];
			}

			const possibilities = filterByRequirements(combinedPossibilities, tempChosenLifepaths);
			const chosenLP = possibilities[RandomNumber(0, possibilities.length - 1)];

			tempChosenLifepaths.push(chosenLP);
		};

		const lpAmount = RandomNumber(minimum, maximum);

		const stockValues = Object.values(Stocks);
		const chosenStock: bwgr.data.Stock = (stock === "Random")
			? Stocks[stockValues[RandomNumber(0, stockValues.length - 1)].name]
			: Stocks[stock];

		const settingValues = Object.values(chosenStock.settings).filter(v => v.type === "Setting");
		const chosenSetting: bwgr.data.Setting = (setting === "Random")
			? chosenStock.settings[settingValues[RandomNumber(0, settingValues.length - 1)].name]
			: chosenStock.settings[setting];

		const bornLPs = chosenSetting.lifepaths.filter(v => v.born);
		const bornLPsNum = bornLPs.length - 1;
		tempChosenLifepaths.push(bornLPs[RandomNumber(0, bornLPsNum)]);

		for (let i = 0; i < lpAmount; i++) { chooseNext(chosenStock); }

		setChosen(tempChosenLifepaths);
	}, [setting, stock, maximum, minimum, filterByRequirements]);

	const infoBlock = useCallback((): JSX.Element => {
		console.log(chosenLifepaths);

		const totals = {
			year: 0, yearExt: [] as string[],
			resource: 0, resourcesExt: [] as string[],
			// Stat
			either: 0, mental: 0, physical: 0,
			// Skill
			general: 0, generalExt: [] as string[],
			lifepath: 0, lifepathExt: [] as string[],
			// Trait
			trait: 0,
			// Lists
			mandSkills: new Set<string>(),
			skills: new Set<string>(),
			mandTraits: new Set<string>(),
			traits: new Set<string>()
		};

		for (const lifepathKey in chosenLifepaths) {
			const lp = chosenLifepaths[lifepathKey];

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

		const statString: string[] = [];
		if (totals.either !== 0) statString.push(`${totals.either > 0 ? "+" : ""}${totals.either}M/P`);
		if (totals.mental !== 0) statString.push(`${totals.mental > 0 ? "+" : ""}${totals.mental}M`);
		if (totals.physical !== 0) statString.push(`${totals.physical > 0 ? "+" : ""}${totals.physical}P`);

		return (
			<Controls>
				<Line>
					<span className="small">Years: {totals.year}{totals.yearExt.length > 0 ? `, plus ${totals.yearExt.join(" ")}` : ""}</span>
					<span className="small">Resources: {totals.resource}{totals.resourcesExt.length > 0 ? `, plus ${totals.resourcesExt.join(" ")}` : ""}</span>
				</Line>
				<Line>
					<span className="small">Stats: {statString.length > 0 ? statString.join(", ") : "—"}</span>
					<span className="small">Trait Points: {totals.trait}</span>
				</Line>
				<Line>
					<span className="small">General Skill Points: {totals.general}{totals.generalExt.length > 0 ? `, plus ${totals.generalExt.join(" ")}` : ""}</span>
					<span className="small">Lifepath Skill Points: {totals.lifepath}{totals.lifepathExt.length > 0 ? `, plus ${totals.lifepathExt.join(" ")}` : ""}</span>
				</Line>
				<Line>
					<span className="small">Mandatory Skills: {[...totals.mandSkills].map((v, i) =>
						<NoLink key={i} seperator={","}>{NameMaker(v, 1, ["skill", "skills"])}</NoLink>)
					}</span>
				</Line>
				<Line>
					<span className="small">Skills: {[...totals.skills].map((v, i) =>
						<NoLink key={i} seperator={","}>{NameMaker(v, 1, ["skill", "skills"])}</NoLink>)
					}</span>
				</Line>
				<Line>
					<span className="small">Mandatory Traits: {[...totals.mandTraits].map((v, i) =>
						<NoLink key={i} seperator={","}>{NameMaker(v, 1, ["trait", "traits"])}</NoLink>)
					}</span>
				</Line>
				<Line>
					<span className="small">Traits: {[...totals.traits].map((v, i) =>
						<NoLink key={i} seperator={","}>{NameMaker(v, 1, ["trait", "traits"])}</NoLink>)
					}</span>
				</Line>
			</Controls>
		);
	}, [chosenLifepaths]);

	return (
		<SubBox>
			<Subtitle>Lifepath Randomizer</Subtitle>

			<Controls style={{ zIndex: 200 }}>
				<Line>
					<label>Stock</label>
					<SelectSearch
						options={[{ name: "Random", value: "Random" }, ...Object.keys(Stocks).map(v => { return { name: v, value: v }; })]}
						value={stock}
						onChange={(e) => setStock(e as any)}
					/>
				</Line>

				{(stock !== "Random")
					? <Line>
						<label>Starting Setting</label>
						<SelectSearch
							options={[{ name: "Random", value: "Random" }, ...Object.keys(Stocks[stock].settings).map(v => { return { name: v, value: v }; })]}
							value={setting}
							onChange={(e) => setSetting(e as any)}
						/>
					</Line>
					: null
				}

				<Line>
					<label>Minimum Lifepaths</label>
					<Input type={"number"} value={minimum} min={1} max={10} onChange={(e) => setMinimum(parseInt(e.target.value))} />
				</Line>
				<Line>
					<label>Maximum Lifepaths</label>
					<Input type={"number"} value={maximum} min={2} max={10} onChange={(e) => setMaximum(parseInt(e.target.value))} />
				</Line>

				<Note width={"45%"}>
					* Random Lifepath selection does not consider the gender, age, and emotional attribute limits.
				</Note>

				<Line>
					<Button
						value={"Give me a random character"}
						onClick={() => createRandom()}
					/>
				</Line>
			</Controls>

			{(chosenLifepaths.length > 0)
				? <Fragment>
					<Divider title={"Lifepaths"} />
					{chosenLifepaths.map((v, i) => <Chosen key={i}>{i + 1}. {`${v.stock}➞${v.setting}➞${v.name}`}</Chosen>)}

					<Divider title={"Info"} />
					{infoBlock()}
				</Fragment>
				: null
			}
		</SubBox>
	);
}
