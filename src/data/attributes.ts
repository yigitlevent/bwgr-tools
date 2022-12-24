interface AttributeQuestion {
	attribute: "Always" | Exclude<AttributesList, "Health" | "Steel" | "Reflexes" | "Hesitation" | "Stride">;
	text: string;
}

interface AttributeQuestions {
	[key: string]: AttributeQuestion;
}

export const AttributeQuestions: AttributeQuestions = {
	"FILTH": { text: "Does the character live in squalor and filth?", attribute: "Always" },
	"SICKLY": { text: "Is the character frail and sickly?", attribute: "Always" },
	"WOUND": { text: "Was the character severely wounded in the past?", attribute: "Always" },
	"TORTURE": { text: "Has the character been tortured?", attribute: "Always" },
	"ENSLAVED": { text: "Has the character been enslaved?", attribute: "Always" },
	"ACTIVE": { text: "Is the character athletic and active?", attribute: "Always" },
	"HAPPY": { text: "Does the character live in a really clean and happy place, like the hills in The Sound of Music?", attribute: "Always" },
	"SOLDIER": { text: "Has the character taken a conscript, soldier, bandit, squire, or knight type lifepath?", attribute: "Always" },
	"KILLER": { text: "Has the character ever murdered or killed with his own hand more than once?", attribute: "Always" },
	"BEATEN": { text: "Has the character been beaten terribly over time?", attribute: "Always" },
	"SHELTER": { text: "Has the character led a sheltered life, free from violance and pain?", attribute: "Always" },
	"COMPETITIVE": { text: "Has the character been raised in a competitive (but non-violent) culture —sports, debate, strategy games, courting?", attribute: "Always" },
	"BIRTH": { text: "Has the character given birth to a child?", attribute: "Always" },
	"COVET": { text: "Has the character ever coveted something owned by another?", attribute: "Greed" },
	"STOLE": { text: "Has the character ever stolen something they coveted?", attribute: "Greed" },
	"STOLEN": { text: "Has the Dwarf ever had their prized treasure stolen from them?", attribute: "Greed" },
	"MASTERCRAFT": { text: "Has the character ever been in the presence of the master craftmanship of the Dwarven Fathers?", attribute: "Greed" },
	"POSSESSION": { text: "Has the character witnessed an outsider (Elf, Human, Orc, Roden, etc.) in possession of a work of Dwarven Art?", attribute: "Greed" },
	"TRAGEDY": { text: "Does the character's history include tragedy?", attribute: "Grief" },
	"OUTSIDER": { text: "Did the character has lived amonh non-Elven people?", attribute: "Grief" },
	"BETRAYAL": { text: "Has the character been betrayed by their friends?", attribute: "Spite" },
	"LOVESICK": { text: "Is the character lovesick or broken hearted?", attribute: "Spite" },
	"ABANDON": { text: "Has the character been abandoned by those he held dear?", attribute: "Spite" },
	"ABUSE": { text: "Has the character been abused?", attribute: "Spite" },
	"RESPECT": { text: "Does the character still respect or admire someone on the other side?", attribute: "Spite" },
	"LOVE": { text: "Does the character still love someone on the other side?", attribute: "Spite" },
	"TRUST": { text: "Does the character trust the their God the most?", attribute: "Faith" },
	"CONSULT": { text: "When in danger, does the character consult their God for aid?", attribute: "Faith" },
	"SERVE": { text: "Does the character think that ultimately only with their God them can best serve their allies?", attribute: "Faith" },
	"DEADTRUST": { text: "Does the character trust the their Dead God the most?", attribute: "Faith in Dead Gods" },
	"DEADCONSULT": { text: "When in danger, does the character consult their Dead God for aid?", attribute: "Faith in Dead Gods" },
	"DEADSERVE": { text: "Does the character think that ultimately only with their Dead God they can best serve their allies?", attribute: "Faith in Dead Gods" },
	"SLAVE": { text: "Have the character been to slave to another?", attribute: "Hatred" },
	"FRATRICIDE": { text: "Have the character ever killed their superior or parents?", attribute: "Hatred" },
	"HOBGOBLIN": { text: "Have the character ever attempted to command a unit of goblins in battle?", attribute: "Hatred" },
	"MASTER": { text: "Is their master the God of Darkness and Blood?", attribute: "Void Embrace" },
	"FATE": { text: "Does the Darkness and Blood controls their fate?", attribute: "Void Embrace" },
	"WELLSPRING": { text: "Is the Darkness and Blood the wellspring of their power?", attribute: "Void Embrace" },
	"PRAY": { text: "Have the character has ever prayed alone at night to remote, unholy gods to aid him?", attribute: "Corruption" },
	"PACT": { text: "Have the the character has ever entered into a pact with a demon?", attribute: "Corruption" }
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
