import { Skill } from "../data/skills/_skills";
import { Stocks } from "../data/stocks/_stocks";


export function GetSkillRestrictionString(skill: Skill) {
	const spl = skill.restriction.split("➞");

	if (spl.length > 1) {
		const stockPlural = Stocks[spl[1]].namePlural;
		const attribute = (spl.length === 4) ? ` with ${spl[3]} ` as AttributesList : " ";
		const type = spl[0] === "ONLYBURN" ? " in character burning" : "";
		return `${stockPlural}${attribute}only${type}`;
	}

	return "N/A";
}
