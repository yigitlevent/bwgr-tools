import { SkillCategories } from "../../../../data/skills";
import { NameMaker } from "../../../../utility/nameMaker";

import { List, ListTitle, ListBlock, ListPoint } from "../../../shared/Inner";
import { NoLink } from "../../../shared/Links";

export function GetSkill(skillPath: string): bwgr.data.Skill {
	const path = skillPath.split("➞");
	const skill = SkillCategories[path[0]].skills.find(v => v.name === path[1]);
	if (skill === undefined) console.error(`Cannot find '${skillPath}'`);
	return skill as bwgr.data.Skill;
}

export function Skills({ generalSkillPool, skillPool, skills }: { generalSkillPool: number | `${number}/yr`; skillPool: number | "*"; skills: bwgr.path.Skill[]; }): JSX.Element {
	const hasGeneralSkill = typeof generalSkillPool === "string" || generalSkillPool > 0;
	const hasLifepathSkill = typeof skillPool === "string" || skillPool > 0;

	return (
		<List>
			<ListTitle>Skills:</ListTitle>
			{(hasGeneralSkill)
				? <ListBlock>
					<ListPoint>{generalSkillPool}{(generalSkillPool > 1) ? "pts" : "pt"}:</ListPoint>
					<NoLink>General</NoLink>
				</ListBlock> : null}

			{(hasGeneralSkill && hasLifepathSkill) ? <ListPoint>;</ListPoint> : null}

			{(hasLifepathSkill)
				? <ListBlock>
					<ListPoint>{skillPool}{(skillPool > 1) ? "pts" : "pt"}:</ListPoint>
					{skills.map((skillPath, skillIndex) => <NoLink key={skillIndex} data={["Skill", GetSkill(skillPath)]} seperator={","}>{NameMaker(skillPath, 1, ["skill", "skills"])}</NoLink>)}
				</ListBlock> : null}
		</List>
	);
}
