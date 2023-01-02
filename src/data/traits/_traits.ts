import { AnyCallon, AnyCharacter, AnyDie, AnyMonstrous } from "./any";
import { DwarfCommon, DwarfLifepath, DwarfSpecial } from "./dwarf";
import { DarkElfLifepath, ElfCommon, ElfLifepath, ElfSpecial } from "./elf";
import { GreatWolfCommon, GreatWolfLifepath, GreatWolfSpecial } from "./greatwolf";
import { HumanLifepath, HumanSpecial } from "./human";
import { OrcCommon, OrcLifepath, OrcSpecial } from "./orc";
import { RodenCommon, RodenLifepath, RodenSpecial } from "./roden";
import { TrollCommon, TrollLifepath, TrollSpecial } from "./troll";


interface TraitBasicEffect {
	type: "Basic";
	subtype: "Requirement" | "Conditional" | "Obstacle" | "Additional Effect";
	description: string;
}

interface TraitFourthBeliefEffect {
	type: "Belief";
	openFourth: boolean;
	beliefName: string;
}

interface TraitFourthInstinctEffect {
	type: "Instinct";
	openFourth: boolean;
	instinctName: string;
}

interface TraitStatEffect {
	type: "Stat",
	callon?: { statName: StatsList; condition?: string; };
	limit?: { [key: string]: { min: number; max: number; }; };
}

interface TraitAttributeEffect {
	type: "Attribute";
	enable?: AttributesList;
	disable?: AttributesList;
	freeExponent?: AttributesList;
	roundUp?: AttributesList | "Mortal Wound";
	modify?: { attribute: AttributesList; modifier: number; };
	conditionalModify?: { attribute: AttributesList; modifier: number; ifHasTrait: TraitPath; };
	callon?: { attribute: AttributesList; condition?: string; };
	addWhenCalculating?: { attribute: AttributesList; modifier: number; };
}

interface TraitSkillEffect {
	type: "Skill";
	roundUpByRoot?: StatsList;
	modify?: { skillPath: SkillPath; modifier: number; };
	callon?: { skillPath: SkillPath; condition?: string; };
}

interface TraitResourceEffect {
	type: "Resource";
	free: { resourceType: ResourceTypes; description: string; };
}

export type TraitEffect = TraitBasicEffect | TraitFourthBeliefEffect | TraitFourthInstinctEffect
	| TraitStatEffect | TraitAttributeEffect | TraitSkillEffect | TraitResourceEffect;

export interface CharacterTrait {
	allowed: Ruleset[];
	cost: number;
	description?: string;
	name: string;
	stock: "Any" | StocksList;
	type: "Character";
}

export interface OtherTrait {
	allowed: Ruleset[];
	cost: number;
	description: string;
	name: string;
	stock: "Any" | StocksList;
	type: Exclude<TraitTypesList, "Character">;
	effects: TraitEffect[];
}

export type Trait = CharacterTrait | OtherTrait;

export interface TraitCategory {
	allowed: Ruleset[];
	name: TraitCategoryPath;
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
