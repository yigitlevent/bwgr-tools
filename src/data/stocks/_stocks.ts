import { Dwarf } from "./dwarf";
import { Elf } from "./elf";
import { Human } from "./human";
import { Orc } from "./orc";
import { Roden } from "./roden";
import { Troll } from "./troll";
import { GreatWolf } from "./greatWolf";


export interface Lifepath {
	name: string;

	allowed: Ruleset[];
	stock: StocksList;
	setting: string;
	leads: SettingPath[];
	years: number | "*";
	born: boolean;

	eitherPool: number;
	mentalPool: number;
	physicalPool: number;
	generalSkillPool: number | `${number}/yr`;
	skillPool: number | "*";
	traitPool: number;
	resources: number | `${number}/yr` | "*";

	skills: SkillPath[];
	traits: TraitPath[];

	requirements: Requirements;
}

export interface Setting {
	allowed: Ruleset[];
	name: string;
	short: string;
	stock: StocksList;
	type: SettingTypesList;
	lifepaths: Lifepath[];
}

export interface Settings {
	[key: string]: Setting;
}

export interface Stock {
	agePool: { max: number, min: number, m: number, p: number; }[];
	allowed: Ruleset[];
	hasSetting: boolean;
	hasSubsetting: boolean;
	name: StocksList;
	namePlural: string;
	stride: number;
	settings: Settings;
}

export interface StocksGroup {
	[key: string]: Stock;
}

export const Stocks: StocksGroup = {
	"Dwarf": Dwarf,
	"Elf": Elf,
	"Human": Human,
	"Orc": Orc,
	"Roden": Roden,
	"Troll": Troll,
	"Great Wolf": GreatWolf
};
