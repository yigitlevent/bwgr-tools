import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { Trait, TraitCategories } from "../../data/traits/_traits";
import { Skill, SkillCategories } from "../../data/skills/_skills";
import { LifepathTotals } from "../../utils/lifepathTotals";

import { PopoverLink } from "../Shared/PopoverLink";


export function RandomCharacterBurnerLists({ totals }: { totals: LifepathTotals; }) {
	const mandSkills = [...totals.skills.mandatoryList].map(path => {
		const [category, name] = path.split("➞");
		let s = SkillCategories[category].skills.find(v => v.name === name);
		if (name === "1*ANY") s = SkillCategories[category].skills.find(v => v.name === "Any wise");
		return s as Skill;
	});

	const skills = [...totals.skills.lifepathList].map(path => {
		const [category, name] = path.split("➞");
		let s = SkillCategories[category].skills.find(v => v.name === name);
		if (name === "1*ANY") s = SkillCategories[category].skills.find(v => v.name === "Any wise");
		return s as Skill;
	});

	const mandTraits = [...totals.traits.mandatoryList].map(path => {
		const [category, name] = path.split("➞");
		const t = TraitCategories[category].traits.find(v => v.name === name);
		return t as Trait;
	});

	const traits = [...totals.traits.lifepathList].map(path => {
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
