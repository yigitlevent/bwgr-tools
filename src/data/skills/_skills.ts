import { AnyGeneral, AnyMonstrous, AnyWise } from "./any";
import { DwarfArt, DwarfSpecial } from "./dwarf";
import { DarkElfSkillSong, DarkElfSpellSong, ElfSkillSong, ElfSpecial, ElfSpellSong } from "./elf";
import { GreatWolfSpecial, GreatWolfSpiritHunterSong } from "./greatwolf";
import { HumanMagical, HumanSpecial } from "./human";
import { OrcSpecial } from "./orc";
import { RodenSpecial } from "./roden";
import { TrollSpecial } from "./troll";


export interface Skill {
	name: string;
	description: string;

	allowed: Ruleset[];
	magical: boolean;
	noList: boolean;
	restriction: string;
	root: StatsList | `${StatsList}/${StatsList}` | "N/A";
	tools: [ToolsList, string];
	training: boolean;
	type: SkillTypesList | "N/A";
}

export interface SkillCategory {
	allowed: Ruleset[];
	name: string;
	skills: Skill[];
}

export interface SkillCategories {
	[key: string]: SkillCategory;
}

export const SkillCategories: SkillCategories = {
	"Any General": AnyGeneral,
	"Any Monstrous": AnyMonstrous,
	"Any Wise": AnyWise,
	"Dwarf Art": DwarfArt,
	"Dwarf Special": DwarfSpecial,
	"Elf Special": ElfSpecial,
	"Elf Skill Song": ElfSkillSong,
	"Dark Elf Skill Song": DarkElfSkillSong,
	"Elf Spell Song": ElfSpellSong,
	"Dark Elf Spell Song": DarkElfSpellSong,
	"Human Magical": HumanMagical,
	"Human Special": HumanSpecial,
	"Orc Special": OrcSpecial,
	"Roden Special": RodenSpecial,
	"Troll Special": TrollSpecial,
	"Great Wolf Special": GreatWolfSpecial,
	"Great Wolf Spirit Hunter Song": GreatWolfSpiritHunterSong
};
