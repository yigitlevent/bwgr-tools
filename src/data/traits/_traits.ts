import { AnyCallon, AnyCharacter, AnyDie, AnyMonstrous } from "./any";
import { DwarfCommon, DwarfLifepath, DwarfSpecial } from "./dwarf";
import { DarkElfLifepath, ElfCommon, ElfLifepath, ElfSpecial } from "./elf";
import { GreatWolfCommon, GreatWolfLifepath, GreatWolfSpecial } from "./greatwolf";
import { HumanLifepath, HumanSpecial } from "./human";
import { OrcCommon, OrcLifepath, OrcSpecial } from "./orc";
import { RodenCommon, RodenLifepath, RodenSpecial } from "./roden";
import { TrollCommon, TrollLifepath, TrollSpecial } from "./troll";


export interface Trait {
	allowed: Ruleset[];
	cost: number;
	description: string;
	name: string;
	stock: "Any" | StocksList;
	type: TraitTypesList;
}

export interface TraitCategory {
	allowed: Ruleset[];
	name: string;
	traits: Trait[];
}

export interface TraitCategories {
	[key: string]: TraitCategory;
}

export const TraitCategories: TraitCategories = {
	"Any Character": AnyCharacter,
	"Any Call-on": AnyCallon,
	"Any Die": AnyDie,
	"Any Monstrous": AnyMonstrous,

	"Dwarf Common": DwarfCommon,
	"Dwarf Lifepath": DwarfLifepath,
	"Dwarf Special": DwarfSpecial,

	"Elf Common": ElfCommon,
	"Elf Lifepath": ElfLifepath,
	"Dark Elf Lifepath": DarkElfLifepath,
	"Elf Special": ElfSpecial,

	"Human Lifepath": HumanLifepath,
	"Human Special": HumanSpecial,

	"Orc Common": OrcCommon,
	"Orc Lifepath": OrcLifepath,
	"Orc Special": OrcSpecial,

	"Roden Common": RodenCommon,
	"Roden Lifepath": RodenLifepath,
	"Roden Special": RodenSpecial,

	"Troll Common": TrollCommon,
	"Troll Lifepath": TrollLifepath,
	"Troll Special": TrollSpecial,

	"Great Wolf Common": GreatWolfCommon,
	"Great Wolf Lifepath": GreatWolfLifepath,
	"Great Wolf Special": GreatWolfSpecial
};
