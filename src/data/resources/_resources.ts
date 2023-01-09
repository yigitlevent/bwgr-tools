import { Dwarf } from "./dwarf";
import { Elf } from "./elf";
import { DarkElf } from "./darkElf";
import { Human } from "./human";
import { Orc } from "./orc";
import { Roden } from "./roden";
import { Troll } from "./troll";
import { GreatWolf } from "./greatWolf";


export interface Resource {
	name: string;
	allowed: RulesetId[];
	type: "Gear" | "Property" | "Relationship" | "Affiliation" | "Reputation" | "Magical";
	description?: string;
	cost: number | [string, number][] | "various";
	modifiers?: [string, number | `${number}/per`][];
	magical?: {
		origin: "Personal" | "Presence" | "Double Presence" | "Sight";
		element: ("Anima" | "Arcana" | "Heaven" | "White" | "Fire" | "Air" | "Earth" | "Water")[];
		duration: "Instantaneous" | "Sustained" | `Elapsed Time (${"Exchanges" | "Minutes" | "Hours"})` | "Permanent";
		areaOfEffect: "Caster" | "Double Area" | `Measured Area (${"paces" | "10s of paces" | "100s of paces" | "miles"})` | "Half Area" | "Double Natural Effect" | "Natural Effect" | "Half Natural Eff." | "Double Presence" | "Presence" | "Half Presence" | "Single Target";
		impetus: ("Create" | "Destroy" | "Tax" | "Transmute" | "Control" | "Influence" | "Enhance")[];
		obstacle: number | `${number}^` | StatsAndAttributesList | `${StatsAndAttributesList}^` | `${number}+${StatsAndAttributesList}` | `${StatsAndAttributesList}/${StatsAndAttributesList}` | "See description";
		actions: number | string;
	};
}

export interface ResourceStock {
	name: StocksListExtended;
	allowed: RulesetId[];
	resources: Resource[];
}

interface ResourceGroup {
	[key: string]: ResourceStock;
}

export const Resources: ResourceGroup = {
	"Dwarf": Dwarf,
	"Elf": Elf,
	"Dark Elf": DarkElf,
	"Human": Human,
	"Orc": Orc,
	"Roden": Roden,
	"Troll": Troll,
	"Great Wolf": GreatWolf
};
