type AttributeQuestionAttributes = "Always" | Exclude<AttributesList, "Health" | "Steel" | "Reflexes" | "Hesitation" | "Stride">;

export interface AttributeQuestion {
	attribute: AttributeQuestionAttributes | AttributeQuestionAttributes[];
	text: string;
}

export type AttributeQuestionsKeys = "FILTH" | "SICKLY" | "WOUND" | "TORTURE" | "ENSLAVED" | "ACTIVE" | "HAPPY" | "SOLDIER" | "KILLER" | "BEATEN" | "SHELTER" | "COMPETITIVE" | "BIRTH" | "GIFTED" | "COVET" | "STOLE" | "STOLEN" | "MASTERCRAFT" | "POSSESSION" | "TRAGEDY" | "OUTSIDER" | "BETRAYAL" | "LOVESICK" | "ABANDON" | "ABUSED" | "RESPECT" | "LOVE" | "TRUST" | "CONSULT" | "SERVE" | "DEADTRUST" | "DEADCONSULT" | "DEADSERVE" | "SLAVE" | "FRATRICIDE" | "HOBGOBLIN" | "MASTER" | "FATE" | "WELLSPRING" | "PRAY" | "PACT";

type AttributeQuestions = {
	[key in AttributeQuestionsKeys]: AttributeQuestion;
};

export const AttributeQuestions: AttributeQuestions = {
	"FILTH": { attribute: "Always", text: "Does the character live in squalor and filth?" },
	"SICKLY": { attribute: "Always", text: "Is the character frail and sickly?" },
	"WOUND": { attribute: "Always", text: "Was the character severely wounded in the past?" },
	"TORTURE": { attribute: "Always", text: "Has the character been tortured?" },
	"ENSLAVED": { attribute: "Always", text: "Has the character been enslaved?" },
	"ACTIVE": { attribute: "Always", text: "Is the character athletic and active?" },
	"HAPPY": { attribute: "Always", text: "Does the character live in a really clean and happy place, like the hills in The Sound of Music?" },
	"SOLDIER": { attribute: "Always", text: "Has the character taken a conscript, soldier, bandit, squire, or knight type lifepath?" },
	"KILLER": { attribute: "Always", text: "Has the character ever murdered or killed with his own hand more than once?" },
	"BEATEN": { attribute: "Always", text: "Has the character been beaten terribly over time?" },
	"SHELTER": { attribute: "Always", text: "Has the character led a sheltered life, free from violance and pain?" },
	"COMPETITIVE": { attribute: "Always", text: "Has the character been raised in a competitive (but non-violent) culture —sports, debate, strategy games, courting?" },
	"BIRTH": { attribute: "Always", text: "Has the character given birth to a child?" },
	"GIFTED": { attribute: "Always", text: "Is the character Gifted or Faithful or an equivalent?" },
	"COVET": { attribute: "Greed", text: "Has the character ever coveted something owned by another?" },
	"STOLE": { attribute: "Greed", text: "Has the character ever stolen something they coveted?" },
	"STOLEN": { attribute: "Greed", text: "Has the Dwarf ever had their prized treasure stolen from them?" },
	"MASTERCRAFT": { attribute: "Greed", text: "Has the character ever been in the presence of the master craftmanship of the Dwarven Fathers?" },
	"POSSESSION": { attribute: "Greed", text: "Has the character witnessed an outsider (Elf, Human, Orc, Roden, etc.) in possession of a work of Dwarven Art?" },
	"TRAGEDY": { attribute: "Grief", text: "Does the character's history include tragedy?" },
	"OUTSIDER": { attribute: "Grief", text: "Did the character has lived amonh non-Elven people?" },
	"BETRAYAL": { attribute: ["Grief", "Spite"], text: "Has the character been betrayed by their friends?" },
	"LOVESICK": { attribute: ["Grief", "Spite"], text: "Is the character lovesick or broken hearted?" },
	"ABANDON": { attribute: ["Grief", "Spite"], text: "Has the character been abandoned by those he held dear?" },
	"ABUSED": { attribute: ["Grief", "Spite"], text: "Has the character been abused?" },
	"RESPECT": { attribute: ["Grief", "Spite"], text: "Does the character still respect or admire someone on the other side?" },
	"LOVE": { attribute: ["Grief", "Spite"], text: "Does the character still love someone on the other side?" },
	"TRUST": { attribute: "Faith", text: "Does the character trust the their God the most?" },
	"CONSULT": { attribute: "Faith", text: "When in danger, does the character consult their God for aid?" },
	"SERVE": { attribute: "Faith", text: "Does the character think that ultimately only with their God them can best serve their allies?" },
	"DEADTRUST": { attribute: "Faith in Dead Gods", text: "Does the character trust the their Dead God the most?" },
	"DEADCONSULT": { attribute: "Faith in Dead Gods", text: "When in danger, does the character consult their Dead God for aid?" },
	"DEADSERVE": { attribute: "Faith in Dead Gods", text: "Does the character think that ultimately only with their Dead God they can best serve their allies?" },
	"SLAVE": { attribute: "Hatred", text: "Have the character been to slave to another?" },
	"FRATRICIDE": { attribute: "Hatred", text: "Have the character ever killed their superior or parents?" },
	"HOBGOBLIN": { attribute: "Hatred", text: "Have the character ever attempted to command a unit of goblins in battle?" },
	"MASTER": { attribute: "Void Embrace", text: "Is their master the God of Darkness and Blood?" },
	"FATE": { attribute: "Void Embrace", text: "Does the Darkness and Blood controls their fate?" },
	"WELLSPRING": { attribute: "Void Embrace", text: "Is the Darkness and Blood the wellspring of their power?" },
	"PRAY": { attribute: "Corruption", text: "Have the character has ever prayed alone at night to remote, unholy gods to aid him?" },
	"PACT": { attribute: "Corruption", text: "Have the the character has ever entered into a pact with a demon?" }
};

export interface Attribute {
	name: AttributesList;
	hasShade: boolean;
	questions?: { [key: string]: AttributeQuestion; };
	requiredTrait?: TraitPath;
}

export const Attributes: Attribute[] = [
	{ name: "Health", hasShade: true },
	{ name: "Steel", hasShade: true },
	{ name: "Reflexes", hasShade: true },
	{ name: "Hesitation", hasShade: false },
	{ name: "Stride", hasShade: false },
	{ name: "Greed", hasShade: true, requiredTrait: "Dwarf Common➞Greed" },
	{ name: "Grief", hasShade: true, requiredTrait: "Elf Common➞Grief" },
	{ name: "Spite", hasShade: true, requiredTrait: "Dark Elf Lifepath➞Spite" },
	{ name: "Faith", hasShade: true, requiredTrait: "Human Special➞Faithful" },
	{ name: "Faith in Dead Gods", hasShade: true, requiredTrait: "Human Lifepath➞Faith in Dead Gods" },
	{ name: "Hatred", hasShade: true, requiredTrait: "Orc Common➞Loathsome and Twisted" },
	{ name: "Void Embrace", hasShade: true, requiredTrait: "Orc Special➞Void Embrace" },
	{ name: "Ancestral Taint", hasShade: true, requiredTrait: "Great Wolf Lifepath➞Ancestral Taint" },
	{ name: "Corruption", hasShade: true, requiredTrait: "Human Special➞Corrupted" }
];
