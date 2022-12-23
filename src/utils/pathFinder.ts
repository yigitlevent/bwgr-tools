import { SkillCategories } from "../data/skills/_skills";
import { Lifepath, Stocks } from "../data/stocks/_stocks";
import { TraitCategories } from "../data/traits/_traits";

export function GetPathFromLifepath(lp: Lifepath) {
	return `${lp.stock}➞${lp.setting}➞${lp.name}`;
}

export function GetLifepathFromPath(path: string) {
	const spl = path.split("➞");
	return Stocks[spl[0]].settings[spl[1]].lifepaths.find(lp => lp.name === spl[2]);
}

export function GetLifepathsFromPaths(paths: string[]) {
	return paths.map((lp) => GetLifepathFromPath(lp) as Lifepath);
}

export function GetSkillFromPath(path: string) {
	const spl = path.split("➞");
	const skill = SkillCategories[spl[0]].skills.find(s => s.name === spl[1]);
	if (skill) return skill;
	throw `Skill not found: ${path}`;
}

export function GetTraitFromPath(path: string) {
	const spl = path.split("➞");
	const trait = TraitCategories[spl[0]].traits.find(t => t.name === spl[1]);
	if (trait) return trait;
	throw `Trait not found: ${path}`;
}
