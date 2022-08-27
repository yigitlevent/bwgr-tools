import { Fragment } from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import type { Lifepath } from "../../data/stocks";
import { Skill, SkillCategories } from "../../data/skills";

import { PopoverLink } from "../Shared/PopoverLink";


export function LifepathSkills({ lifepath }: { lifepath: Lifepath; }) {
	const hasGeneralSkill = typeof lifepath.generalSkillPool === "string" || lifepath.generalSkillPool > 0;
	const hasLifepathSkill = typeof lifepath.skillPool === "string" || lifepath.skillPool > 0;

	const general = hasGeneralSkill ? SkillCategories["Any General"].skills.find(v => v.name === "General") : undefined;
	const lifepathSkills = lifepath.skills.map(path => {
		const [category, name] = path.split("➞");
		return SkillCategories[category].skills.find(v => v.name === name) as Skill;
	});

	return (
		<Fragment>
			<b>Skills: </b>

			{hasGeneralSkill
				? <span>{lifepath.generalSkillPool}{(lifepath.generalSkillPool > 1) ? "pts: " : "pt: "}</span>
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
				? <span>{lifepath.skillPool}{(lifepath.skillPool > 1) ? "pts: " : "pt: "}</span>
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
}
