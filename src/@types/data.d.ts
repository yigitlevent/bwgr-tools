type Ruleset = "bwg" | "bwc" | "msc" | "amw";
type StocksList = "Dwarf" | "Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf";
type SubStocksList = "Dark Elf";
type StocksListExtended = StocksList | SubStocksList;
type SettingTypesList = "Setting" | "Subsetting";
type ToolsList = "No" | "Tools" | "Workshop" | "Traveling Gear" | "Other";
type StatsList = "Will" | "Perception" | "Agility" | "Speed" | "Power" | "Forte";
type AttributesList = "Health" | "Steel" | "Reflexes" | "Hesitation" | "Resources" | "Circles" | "Greed" | "Grief" | "Spite" | "Faith" | "Faith in Dead Gods" | "Hatred" | "Void Embrace" | "Ancestral Taint" | "Corruption";
type StatsAndAttributesList = StatsList | AttributesList;
type SkillTypesList = "Academic" | "Artisan" | "Artist" | "Craftsman" | "Forester" | "Martial" | "Medicinal" | "Military" | "Musical" | "Peasant" | "Physical" | "School of Thought" | "Seafaring" | "Social" | "Sorcerous" | "Special" | "Wise";
type TraitTypesList = "Character" | "Call-on" | "Die" | "Call-on and Die";
type ShadesList = "B" | "G" | "W";
type ShadesListLimited = Exclude<ShadesList, "W">;

type HuntingGroundsList = "Waste" | "Marginal" | "Typical" | "Plentiful" | "Untouched"

type StockPath = `${StocksList}`;
type SettingPath = `${StockPath}➞${string}`;
type LifepathPath = `${SettingPath}➞${string}`;

type SkillCategoryPath = `${"Any"} ${"General" | "Monstrous" | "Wise"}`
	| `${"Dwarf" | "Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Special"}`
	| `Dwarf ${"Art"}`
	| `Elf ${"Skill Song" | "Spell Song"}`
	| `Dark Elf ${"Skill Song" | "Spell Song"}`
	| `Human ${"Magical"}`
	| `Great Wolf ${"Spirit Hunter Song"}`;
type SkillPath = `${SkillCategoryPath}➞${string}`;

type TraitCategoryPath = `${"Any"} ${"Character" | "Call-on" | "Die" | "Monstrous"}`
	| `${"Dwarf" | "Elf" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Common"}`
	| `${"Dwarf" | "Elf" | "Dark Elf" | "Human" | "Orc" | "Roden" | "Troll" | "Great Wolf"} ${"Lifepath" | "Special"}`;
type TraitPath = `${TraitCategoryPath}➞${string}`;

type ConditionItem = (LifepathPath | `Skill➞${SkillPath}` | `Trait➞${TraitPath}` | Condition);

type Limit = ("LP➞UNIQUE" | `GENDER➞${"FEMALE" | "MALE"}` | `${"YEARS" | "LP" | "GRIEF"}➞${"MIN" | "MAX"}➞${number}`);

interface Condition {
	type: "AND" | "OR" | "NOT",
	items: ConditionItem[];
}

interface Requirements {
	conditions?: Condition;
	limits?: Limit[];
	texts?: string[];
}

interface ListItem {
	name: string;
	description: string;
}

interface Practice {
	skillName: string;
	skillType: string;
	testType: string;
	hours: number;
}

type Cell = {
	maxHours: number;
	remaining: number;
	placed: Practice[];
};
