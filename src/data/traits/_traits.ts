import { AnyCallon, AnyCharacter, AnyDie, AnyMonstrous } from "./any";
import { DwarfCommon, DwarfLifepath, DwarfSpecial } from "./dwarf";
import { DarkElfLifepath, ElfCommon, ElfLifepath, ElfSpecial } from "./elf";
import { GreatWolfCommon, GreatWolfLifepath, GreatWolfSpecial } from "./greatwolf";
import { HumanLifepath, HumanSpecial } from "./human";
import { OrcCommon, OrcLifepath, OrcSpecial } from "./orc";
import { RodenCommon, RodenLifepath, RodenSpecial } from "./roden";
import { TrollCommon, TrollLifepath, TrollSpecial } from "./troll";


/*
type TraitNewCapability =
	{ type: "New Capability"; };

type TraitEffectCondition =
	{ testAgainst: AttributesList | StatsList | SkillPath; } |
	{ inSituation: string; };

type TraitEffectPaths =
	{ stat: StatsList; } |
	{ attribute: AttributesList; } |
	{ skill: SkillPath; } |
	{ againstDoWAction: string; } |
	{ skillWithRootOf: StatsList | AttributesList; chooseOne: boolean; } |
	{ any: "Test"; } |
	{ misc: string; };

type TraitCallOnEffect =
	{ type: "Call-on"; condition?: TraitEffectCondition; }
	& TraitEffectPaths;

type TraitDicePoolEffect =
	{ type: "Dice Pool"; modifier: number; condition?: TraitEffectCondition; }
	& TraitEffectPaths;

type TraitExponentEffect =
	{ type: "Exponent"; modifier: number; }
	& TraitEffectPaths;

type TraitObstacleEffect =
	{ type: "Obstacle"; modifier: number; condition?: TraitEffectCondition; }
	& TraitEffectPaths;

type TraitLimitEffect =
	{ type: "Limit"; min: number; max: number; }
	& TraitEffectPaths;

type TraitAptitudeEffect =
	{ type: "Aptitude"; modifier: number; }
	& TraitEffectPaths;

type TraitShadeEffect =
	{ type: "Shade"; newShade: ShadesList; condition?: TraitEffectCondition; }
	& TraitEffectPaths;

type TraitAttributeEffect =
	{ type: "Attribute"; } & (
		{ enable: AttributesList; } |
		{ disable: AttributesList; } |
		{ freeExponent: AttributesList; } |
		{ addModifierWhenCalculatingTarget: { target: AttributesList; modifier: number; }; }
	);

type TraitCharacterEffect =
	{ type: "Character"; } & (
		{ fourthBelief: { enable: boolean; name?: string; }; } |
		{ fourthInstinct: { enable: boolean; name?: string; }; }
	);

type TraitResourceEffect =
	{ type: "Resource"; } & (
		{ free: { resourceType: ResourceTypes; description: string; }; } |
		{ weapon: { name: string; power: number; add: number; versusArmor: number; weaponSpeed: number; weaponLength: "Short"; }; }
	);

type TraitRoundEffect =
	{ type: "Round"; round: "up" | "down"; } & (
		{ roundUpSkillsOfStat: StatsList; } |
		{ roundUpAttribute: AttributesList | "Mortal Wound"; }
	);

export type TraitEffect = TraitNewCapability | TraitCallOnEffect | TraitShadeEffect
	| TraitExponentEffect | TraitDicePoolEffect | TraitObstacleEffect | TraitLimitEffect
	| TraitAttributeEffect | TraitCharacterEffect | TraitResourceEffect | TraitRoundEffect
	| TraitAptitudeEffect;
*/

export interface CharacterTrait {
	allowed: RulesetId[];
	cost: number;
	description?: string;
	name: string;
	stock: "Any" | StocksList;
	type: "Character";
}

export type OtherTrait = {
	allowed: RulesetId[];
	cost: number;
	description: string;
	name: string;
	stock: "Any" | StocksList;
	type: Exclude<TraitTypesList, "Character">;
}; //& ({ effects?: TraitEffect[]; } | { effectsChooseOne?: TraitEffect[]; });

export type Trait = CharacterTrait | OtherTrait;

export interface TraitCategory {
	allowed: RulesetId[];
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
