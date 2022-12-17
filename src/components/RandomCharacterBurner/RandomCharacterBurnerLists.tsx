import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { Lifepath } from "../../data/stocks/_stocks";
import { Trait, TraitCategories } from "../../data/traits/_traits";
import { Skill, SkillCategories } from "../../data/skills/_skills";

import { PopoverLink } from "../Shared/PopoverLink";
import Box from "@mui/material/Box";


export function RandomCharacterBurnerLists({ chosenLifepaths }: { chosenLifepaths: Lifepath[]; }) {
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
}
