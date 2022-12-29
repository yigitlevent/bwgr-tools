import { useCallback, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";

import { useRulesetStore } from "../../../hooks/stores/useRulesetStore";
import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { SkillCategories } from "../../../data/skills/_skills";
import { GetSkillFromPath } from "../../../utils/pathFinder";
import { GetSkillRestrictionString } from "../../../utils/getSkillRestriction";

import { GenericGrid } from "../../Shared/Grids";


export function GeneralSkillModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void; }) {
	const { checkRulesets } = useRulesetStore();
	const { stock, totals, spendings, addSkill } = useCharacterBurnerStore();

	const [chosenSkill, setChosenSkill] = useState("");

	const getPossible = useCallback(() => {
		const possibilities = [];
		for (const categoryKey in SkillCategories) {
			const category = SkillCategories[categoryKey];

			const allowedByDataset = checkRulesets(category.allowed);
			if (!allowedByDataset) continue;
			const allowedByCategory = !(category.name.endsWith("Common") || category.name.endsWith("Lifepath"));
			if (!allowedByCategory) continue;

			for (const skillKey in category.skills) {
				const skill = category.skills[skillKey];
				const skillPath = `${category.name}➞${skill.name}`;

				const allowedByDataset = checkRulesets(skill.allowed);
				const notInLists = !(totals.skills.mandatoryList.includes(skillPath) || totals.skills.lifepathList.includes(skillPath));
				const rest = skill.restriction.split("➞");
				const allowedByStockAndAttribute = (rest.length === 1) || (rest.length === 2 && rest[1] === stock)
					|| (rest.length === 4 && rest[1] === stock && rest[3] in spendings.attributes);
				if (allowedByDataset && notInLists && allowedByStockAndAttribute) {
					possibilities.push(skillPath);
				}
			}
		}
		return possibilities;
	}, [checkRulesets, spendings, stock, totals]);

	const resetDefaultChosen = useCallback(() => {
		setChosenSkill(getPossible()[0]);
	}, [getPossible]);

	const addNewTrait = () => {
		setOpen(false);
		addSkill(chosenSkill as SkillPath);
		resetDefaultChosen();
	};

	useEffect(() => {
		resetDefaultChosen();
	}, [resetDefaultChosen]);

	const skill = chosenSkill.length > 0 ? GetSkillFromPath(chosenSkill) : undefined;

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={1} spacing={[2, 2]} center>
					{chosenSkill.length > 0
						? <Grid item xs={1}>
							<Autocomplete
								value={chosenSkill}
								options={getPossible().sort((a, b) => a.localeCompare(b))}
								getOptionLabel={(option) => option.split("➞")[1]}
								groupBy={(option) => option.split("➞")[0]}
								renderInput={(params) => <TextField {...params} label="Chosen Skill" />}
								onChange={(e, v) => setChosenSkill(v)}
								fullWidth
								disableClearable
							/>
						</Grid>
						: null
					}

					{skill
						? <Grid item xs={1}>
							<Grid container spacing={1} columns={2}>
								<Grid item xs={2}>
									<Typography variant="h6">{skill.name}</Typography>
								</Grid>

								<Grid item xs={2} md={1}>
									<Typography variant="caption">Root: {skill.root.join("/")}</Typography>
								</Grid>

								<Grid item xs={2} md={1}>
									<Typography variant="caption">Type: {skill.type}</Typography>
								</Grid>

								<Grid item xs={2}>
									<Typography variant="caption">Tools: {skill.tools.filter(v => v !== "").join(", ")}</Typography>
								</Grid>

								<Grid item xs={2}>
									<Typography variant="caption">Restrictions: {GetSkillRestrictionString(skill)}</Typography>
								</Grid>

								<Grid item xs={2}>
									{skill.description.split("<br>").map(v => <Typography key={v} variant="body2">{v}</Typography>)}
								</Grid>
							</Grid>
						</Grid>
						: null
					}

					<Grid item xs={1}>
						<Button variant="outlined" size="medium" onClick={addNewTrait} fullWidth>Add Trait</Button>
					</Grid>
				</GenericGrid>
			</Paper>
		</Modal>

	);
}
