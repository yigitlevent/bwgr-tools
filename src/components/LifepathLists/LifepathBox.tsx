import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import type { Lifepath } from "../../data/stocks";
import { Stocks } from "../../data/stocks";
import { Skill, SkillCategories } from "../../data/skills";

import { PopoverLink } from "../Shared/PopoverLink";
import { Trait, TraitCategories } from "../../data/traits";


export function LifepathBox({ lifepath }: { lifepath: Lifepath; }) {
	const getYears = (l: Lifepath) => {
		return l.years + (typeof l.years !== "number" ? "" : (l.skillPool > 1) ? "yrs" : "yr");
	};

	const getResources = (l: Lifepath) => {
		return l.resources + (typeof l.resources !== "number" ? "" : (l.resources > 1) ? "rps" : "rp");
	};

	const getStatPools = (l: Lifepath) => {
		const statPoolsString = [];
		if (l.eitherPool === 0 && l.mentalPool === 0 && l.physicalPool === 0) { statPoolsString.push("—"); }
		else if (l.eitherPool !== 0) { statPoolsString.push(`${(l.eitherPool > 0) ? `+${l.eitherPool}` : l.eitherPool}M/P`); }
		else {
			if (l.mentalPool !== 0) { statPoolsString.push(`${(l.mentalPool > 0) ? `+${l.mentalPool}` : l.mentalPool}M`); }
			if (l.physicalPool !== 0) { statPoolsString.push(`${(l.physicalPool > 0) ? `+${l.physicalPool}` : l.physicalPool}P`); }
		}
		return statPoolsString.join(", ");
	};

	const getLeads = (l: Lifepath) => {
		const leads = (l.leads.length === 0) ? "—" : l.leads.map((lead) => {
			const path = lead.split("➞");
			return Stocks[path[0]].settings[path[1]].short;
		});

		if (typeof leads === "string") return leads;
		return leads.join(", ");
	};

	const getSkills = (l: Lifepath) => {
		const hasGeneralSkill = typeof l.generalSkillPool === "string" || l.generalSkillPool > 0;
		const hasLifepathSkill = typeof l.skillPool === "string" || l.skillPool > 0;

		const general = hasGeneralSkill ? SkillCategories["Any General"].skills.find(v => v.name === "General") : undefined;
		const lifepathSkills = l.skills.map(path => {
			const [category, name] = path.split("➞");
			return SkillCategories[category].skills.find(v => v.name === name) as Skill;
		});

		return (
			<Fragment>
				<b>Skills: </b>

				{hasGeneralSkill
					? <span>{l.generalSkillPool}{(l.generalSkillPool > 1) ? "pts: " : "pt: "}</span>
					: null
				}

				{hasGeneralSkill && general
					? <Paper elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "0 0 0 2px", width: "max-content", display: "inline-block" }}>
						<PopoverLink data={general} />
					</Paper>
					: null
				}

				<Box sx={{ display: "inline-block", margin: "0 6px 0 0" }}>
					{(hasGeneralSkill && hasLifepathSkill) ? "; " : null}
				</Box>

				{hasLifepathSkill
					? <span>{l.skillPool}{(l.skillPool > 1) ? "pts: " : "pt: "}</span>
					: null
				}

				{hasLifepathSkill
					? lifepathSkills.map((skill, i) => {
						return (
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "0 0 0 2px", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={skill} />
							</Paper>
						);
					})
					: null
				}
			</Fragment >
		);
	};

	const getTraits = (l: Lifepath) => {
		const traits = l.traits.map(path => {
			const [category, name] = path.split("➞");
			return TraitCategories[category].traits.find(v => v.name === name) as Trait;
		});

		return (
			<Fragment>
				<b>Traits: </b> {l.traitPool}{(l.traitPool > 1) ? "pts: " : "pt: "}

				{l.traits.length !== 0
					? traits.map((trait, i) => {
						return (
							<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "0 0 0 2px", width: "max-content", display: "inline-block" }}>
								<PopoverLink data={trait} />
							</Paper>
						);
					})
					: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
				}
			</Fragment>
		);
	};

	const getRequirements = (l: Lifepath) => {
		const getOrdinalSuffix = (number: number): string => {
			const div10 = number % 10;
			const div100 = number % 100;
			if (div10 === 1 && div100 !== 11) return `${number}st`;
			if (div10 === 2 && div100 !== 12) return `${number}nd`;
			if (div10 === 3 && div100 !== 13) return `${number}rd`;
			return `${number}th`;
		};

		const nameMaker = (name: string, index: number, extension?: [singular: string, plural: string]): string => {
			const split = name.split("➞");

			if (split[index].includes("*")) {
				const numberStr = parseInt(split[index][0]);
				const categoryStr = (split[index - 1].includes(" ")) ? split[index - 1].split(" ")[1].toLowerCase() : split[index - 1];
				const extensionStr = (extension) ? (numberStr > 1) ? ` ${extension[1]}` : ` ${extension[0]}` : "";

				if (split[index].includes("*-")) {
					return `${numberStr} ${categoryStr}-type${extensionStr}`;
				}
				else if (split[index].includes("*ANY")) {
					return `any ${numberStr} ${categoryStr}${extensionStr}`;
				}
				else if (split[index].includes("*")) {
					return `${numberStr} ${split[index].split("*")[1]}${extensionStr}`;
				}
			}
			return split[index];
		};


		const requirementsResolver = (conditionsBlock: Condition): string => {
			const tempSet = new Set<string>();

			conditionsBlock.items.forEach(condition => {
				if (typeof condition === "string") tempSet.add(nameMaker(condition, 2, ["lifepath", "lifepaths"]));
				else tempSet.add(requirementsResolver(condition));
			});

			const array = [...tempSet];
			if (array.length > 1 && conditionsBlock.type !== "NOT") {
				array[array.length - 1] = `${conditionsBlock.type.toLowerCase()} ${array[array.length - 1]}`;
			}
			else if (conditionsBlock.type === "NOT") {
				array[0] = `Character cannot have ${array[0]}`;

				if (array.length > 1) {
					array[array.length - 1] = `and ${array[array.length - 1]}`;
				}
			}

			return (array.length < 3) ? array.join(" ") : array.join(", ");
		};

		const limitsResolver = (limitsBlock: Limit[]): JSX.Element[] => {
			const limits: string[] = [];
			limitsBlock.forEach((limit) => {
				const temp = limit.split("➞");
				if (temp[0] === "LP") {
					if (temp[1] === "UNIQUE") limits.push("This cannot be selected twice.");
					else if (temp[1] === "MIN") limits.push(`This can be selected as the ${getOrdinalSuffix(parseInt(temp[2]))} lifepath or higher.`);
					else if (temp[1] === "MAX") limits.push(`This can be selected as the ${getOrdinalSuffix(parseInt(temp[2]))} lifepath or lower.`);
				}
				else if (temp[0] === "YEARS") {
					if (temp[1] === "MIN") limits.push(`Character must be at least ${parseInt(temp[2])} years old.`);
					else if (temp[1] === "MAX") limits.push(`Character must be at most ${parseInt(temp[2])} years old.`);
				}
				else if (temp[0] === "GRIEF") {
					if (temp[1] === "MIN") limits.push(`Character must have at least a ${temp[0].toLowerCase()} of ${parseInt(temp[2])}.`);
					else if (temp[1] === "MAX") limits.push(`Character must have at most a ${temp[0].toLowerCase()} of ${parseInt(temp[2])}.`);
				}
				else if (temp[0] === "GENDER") {
					limits.push(`Character's must be a ${temp[1].toLowerCase()}.`);
				}
			});

			return limits.map((limit, i) => <span key={i}>{limit}</span>);
		};

		return (
			<Fragment>
				<b>Requirements: </b>

				{(l.requirements.conditions)
					? <span>{requirementsResolver(l.requirements.conditions)}. </span>
					: null}

				{(l.requirements.limits)
					? limitsResolver(l.requirements.limits)
					: null}

				{(l.requirements.texts)
					? l.requirements.texts.map((text, textIndex) => <span key={textIndex}>{text} </span>)
					: null}

			</Fragment>
		);
	};

	return (
		<Grid container spacing={0} sx={{ width: "100%", margin: "10px 0 16px" }} columns={18}>
			<Grid item lg={6} md={12} sm={18} xs={18}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="body1">{lifepath.name}</Typography>
				</Paper>
			</Grid>

			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getYears(lifepath)}</Typography>
				</Paper>
			</Grid>
			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getResources(lifepath)}</Typography>
				</Paper>
			</Grid>
			<Grid item lg={1} md={2} sm={6} xs={6}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getStatPools(lifepath)}</Typography>
				</Paper>
			</Grid>

			<Grid item lg={9} md={18} sm={18} xs={18}>
				<Paper elevation={3} square sx={{ padding: "2px 6px 4px" }}>
					<Typography variant="caption">{getLeads(lifepath)}</Typography>
				</Paper>
			</Grid>

			<Grid item md={16}>
				<Typography variant="caption">{getSkills(lifepath)}</Typography>
			</Grid>

			<Grid item md={16}>
				<Typography variant="caption">{getTraits(lifepath)}</Typography>
			</Grid>

			{Object.keys(lifepath.requirements).length > 0
				? <Grid item md={16}>
					<Typography variant="caption">{getRequirements(lifepath)}</Typography>
				</Grid>
				: null
			}
		</Grid >
	);
}
