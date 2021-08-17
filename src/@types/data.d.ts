namespace bwgr {

	namespace data {

		interface FactionCard {
			Basics: {
				Name: string;
				Leader: string;
				Type: string;
				Membership: string;
				"Inner Circle": string;
				Doctrines: [string, string, string];
				Traditions: [string, string, string];
				Traits: string[];
			};
			Stats: {
				Influence: number;
				Funds: number;
			};
			Politics: {
				Alliances: { name: string; description: string; }[];
				Allegiances: { name: string; description: string; }[];
				Rivals: { name: string; description: string; }[];
				Territories: { name: string; description: string; }[];
				Assets: { name: string; description: string; }[];
			};
		}

		interface UnitCard {
			Basics: {
				Name: string;
				Commander: string;
				Type: string;
				Status: string; // fixed
				Composition: string;
				Doctrine: string;
				Tradition: string;
				Traits: string[];
			};
			Stats: {
				Ambush: ["B" | "G" | "W", number];
				Battle: ["B" | "G" | "W", number];
				Siege: ["B" | "G" | "W", number];
				Skirmish: ["B" | "G" | "W", number];
				Soldiering: ["B" | "G" | "W", number];
				Seamanship: ["B" | "G" | "W", number];
			};
			Attributes: {
				Health: ["B" | "G" | "W", number];
				Steel: ["B" | "G" | "W", number];
			};
			Aspects: {
				Strature: number;
				Strength: number;
				Stride: number;
				Supply: number;
			};
		}

		type RulesetsList = "bwg" | "bwc";
		type StocksList = "Dwarf" | "Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf";
		type SettingTypesList = "Setting" | "Subsetting";
		type ToolsList = "No" | "Tools" | "Workshop" | "Traveling Gear" | "Other";
		type StatsList = "Will" | "Perception" | "Agility" | "Speed" | "Power" | "Forte" | "Faith" | "Steel" | "Grief" | "Hatred" | "Spite" | "Ancestral Taint";
		type SkillTypesList = "Academic" | "Artisan" | "Artist" | "Craftsman" | "Forester" | "Martial" | "Medicinal" | "Military" | "Musical" | "Peasant" | "Physical" | "School of Thought" | "Seafaring" | "Social" | "Sorcerous" | "Special" | "Wise";
		type TraitTypesList = "Character" | "Call-on" | "Die" | "Call-on and Die";

		interface Stocks {
			[key: string]: bwgr.data.Stock;
		}

		interface Stock {
			agePool: [maxage: number, minage: number, m: number, p: number][];
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
			stock: bwgr.data.StocksList;
			type: bwgr.data.SettingTypesList;
			lifepaths: bwgr.data.Lifepath[];
		}

		interface Lifepath {
			allowed: bwgr.data.RulesetsList[];
			born: boolean;
			eitherPool: number;
			generalSkillPool: number | `${number}/yr`;
			leads?: string[];
			mentalPool: number;
			name: string;
			physicalPool: number;
			resources: number | `${number}/yr` | "*";
			requirements?: {
				OR?: (string | string[])[];
				AND?: (string | string[])[];
				NOTAND?: (string | string[])[];
				LIMIT?: string[];
				TEXT?: string[];
			};
			selectable: boolean;
			setting: string;
			skillPool: number | "*";
			skills?: string[];
			stock: bwgr.data.StocksList;
			traitPool: number;
			traits?: string[];
			years: number | "*";
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
			allowed: bwgr.data.RulesetsList[];
			description: string;
			disabled: -1;
			magical: boolean;
			name: string;
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
			disabled: boolean;
			name: string;
			stock: "Any" | bwgr.data.StocksList;
			type: bwgr.data.TraitTypesList;
		}

		interface PracticeTable {
			[key:string]: {
				Cycle: number;
				Routine: number;
				Difficult: number;
				Challenging: number;
			}
		}

	}

}