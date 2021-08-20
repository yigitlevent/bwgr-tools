namespace bwgr {

	namespace data {

		interface ListItem {
			name: string;
			description: string;
		}

		interface MagicFacet {
			name: string;
			obstacle: number; 
			actions: number; 
			resource: number;
		}


		type UnitStatus = "Ready" | "Out of Supply" | "Unscathed" | "Bloodied" | "Broken";

		interface FactionCard {
			[key: string]: string | string[] | [string, string, string] | number | bwgr.data.ListItem[];
			name: string;
			leader: string;
			type: string;
			membership: string;
			innerCircle: string;
			doctrines: [string, string, string];
			traditions: [string, string, string];
			traits: string[];
			influence: number;
			funds: number;
			alliances: [];
			allegiances: bwgr.data.ListItem[];
			rivals: bwgr.data.ListItem[];
			territories: bwgr.data.ListItem[];
			assets: bwgr.data.ListItem[];
		}

		interface UnitCard {
			[key: string]: string | ["B" | "G" | "W", number] | ["B" | "G" | "W", number, number] | number | bwgr.data.ListItem[];
			name: string;
			commander: string;
			type: string;
			status: bwgr.data.UnitStatus;
			composition: string;
			doctrine: string;
			tradition: string;
			traits: bwgr.data.ListItem[];
			ambush: ["B" | "G" | "W", number];
			battle: ["B" | "G" | "W", number];
			siege: ["B" | "G" | "W", number];
			skirmish: ["B" | "G" | "W", number];
			soldiering: ["B" | "G" | "W", number];
			seamanship: ["B" | "G" | "W", number];
			health: ["B" | "G" | "W", number, number];
			steel: ["B" | "G" | "W", number, number];
			strature: number;
			strength: number;
			stride: number;
			supply: number;
			weaponry: string;
			armor: string;
			trainings: string;
		}

		type RulesetsList = "bwg" | "bwc";
		type StocksList = "Dwarf" | "Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf";
		type SettingTypesList = "Setting" | "Subsetting";
		type ToolsList = "No" | "Tools" | "Workshop" | "Traveling Gear" | "Other";
		type StatsList = "Will" | "Perception" | "Agility" | "Speed" | "Power" | "Forte" | "Faith" | "Steel" | "Grief" | "Hatred" | "Spite" | "Ancestral Taint";
		type SkillTypesList = "Academic" | "Artisan" | "Artist" | "Craftsman" | "Forester" | "Martial" | "Medicinal" | "Military" | "Musical" | "Peasant" | "Physical" | "School of Thought" | "Seafaring" | "Social" | "Sorcerous" | "Special" | "Wise";
		type TraitTypesList = "Character" | "Call-on" | "Die" | "Call-on and Die";

		interface Requirements {
			conditions?: bwgr.data.Condition;
			limits?: bwgr.data.Limit[];
			texts?: string[];
		};
		interface Condition {
			type: "AND" | "OR" | "NOT",
			items: (bwgr.path.Lifepath | `Skill➞${bwgr.path.Skill}` | `Trait➞${bwgr.path.Trait}` | bwgr.data.Condition)[];
		}
		type Limit = (`LP➞UNIQUE` | `GENDER➞${"FEMALE" | "MALE"}` | `${"YEARS" | "LP"}➞${"MIN" | "MAX"}➞${number}`);

		interface Stocks {
			[key: string]: bwgr.data.Stock;
		}

		interface Stock {
			agePool: { max: number, min: number, m: number, p: number; }[];
			allowed: bwgr.data.RulesetsList[];
			hasSetting: boolean;
			hasSubsetting: boolean;
			name: string;
			stride: number;
			settings: bwgr.data.Settings;
		}

		interface Settings {
			[key: string]: bwgr.data.Setting;
		}

		interface Setting {
			allowed: bwgr.data.RulesetsList[];
			name: string;
			short: string;
			stock: bwgr.data.StocksList;
			type: bwgr.data.SettingTypesList;
			lifepaths: bwgr.data.Lifepath[];
		}

		interface Lifepath {
			name: string;

			allowed: bwgr.data.RulesetsList[];
			stock: bwgr.data.StocksList;
			setting: string;
			leads: bwgr.path.Setting[];
			years: number | "*";
			born: boolean;

			eitherPool: number;
			mentalPool: number;
			physicalPool: number;
			generalSkillPool: number | `${number}/yr`;
			skillPool: number | "*";
			traitPool: number;
			resources: number | `${number}/yr` | "*";

			skills: bwgr.path.Skill[];
			traits: bwgr.path.Trait[];

			requirements: bwgr.data.Requirements;
		}

		interface SkillCategories {
			[key: string]: bwgr.data.SkillCategory;
		}

		interface SkillCategory {
			allowed: bwgr.data.RulesetsList[];
			name: string;
			skills: bwgr.data.Skill[];
		}

		interface Skill {
			name: string;
			description: string;

			allowed: bwgr.data.RulesetsList[];
			magical: boolean;
			noList: boolean;
			restriction: string;
			root: bwgr.data.StatsList | `${bwgr.data.StatsList}/${bwgr.data.StatsList}` | "N/A";
			tools: [bwgr.data.ToolsList, string];
			training: boolean;
			type: bwgr.data.SkillTypesList | "N/A";
		}

		interface TraitCategories {
			[key: string]: bwgr.data.TraitCategory;
		}

		interface TraitCategory {
			allowed: bwgr.data.RulesetsList[];
			name: string;
			traits: bwgr.data.Trait[];
		}

		interface Trait {
			allowed: bwgr.data.RulesetsList[];
			cost: number | number[];
			description: string;
			name: string;
			stock: "Any" | bwgr.data.StocksList;
			type: bwgr.data.TraitTypesList;
		}

		interface PracticeTable {
			[key: string]: {
				Cycle: number;
				Routine: number;
				Difficult: number;
				Challenging: number;
			};
		}

	}

	namespace path {

		type Stock = `${bwgr.data.StocksList}`;
		type Setting = `${bwgr.path.Stock}➞${string}`;
		type Lifepath = `${bwgr.path.Setting}➞${string}`;

		type SkillCategory = `${"Any"} ${"General" | "Monstrous" | "Wise"}`
			| `${"Dwarf" | "Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Special"}`
			| `Dwarf ${"Art"}`
			| `Elf ${"Skill Song" | "Spell Song"}`
			| `Dark Elf ${"Skill Song" | "Spell Song"}`
			| `Human ${"Magical"}`
			| `Great Wolf ${"Spirit Hunter Song"}`;
		type Skill = `${bwgr.path.SkillCategory}➞${string}`;

		type TraitCategory = `${"Any"} ${"Character" | "Call-on" | "Die" | "Monstrous"}`
			| `${"Dwarf" | "Elf" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Common"}`
			| `${"Dwarf" | "Elf" | "Dark Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Lifepath" | "Special"}`;
		type Trait = `${bwgr.path.TraitCategory}➞${string}`;

	}

}
