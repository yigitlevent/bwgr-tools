interface AttributeQuestion {
	attribute: "Always" | Exclude<AttributesList, "Health" | "Steel" | "Reflexes" | "Hesitation" | "Stride">;
	text: string;
}

interface AttributeQuestions {
	[key: string]: AttributeQuestion;
}

export const AttributeQuestions: AttributeQuestions = {
	"01.FILTH": { text: "Does the character live in squalor and filth?", attribute: "Always" },
	"02.SICKLY": { text: "Is the character frail and sickly?", attribute: "Always" },
	"03.WOUND": { text: "Was the character severely wounded in the past?", attribute: "Always" },
	"04.TORTURE": { text: "Has the character been tortured?", attribute: "Always" },
	"05.ENSLAVED": { text: "Has the character been enslaved?", attribute: "Always" },
	"24.ABUSE": { text: "Has the character been abused?", attribute: "Spite" },
	"06.ACTIVE": { text: "Is the character athletic and active?", attribute: "Always" },
	"07.HAPPY": { text: "Does the character live in a really clean and happy place, like the hills in The Sound of Music?", attribute: "Always" },
	"08.SOLDIER": { text: "Has the character taken a conscript, soldier, bandit, squire, or knight type lifepath?", attribute: "Always" },
	"09.KILLER": { text: "Has the character ever murdered or killed with his own hand more than once?", attribute: "Always" },
	"10.BEATEN": { text: "Has the character been beaten terribly over time?", attribute: "Always" },
	"11.SHELTER": { text: "Has the character led a sheltered life, free from violance and pain?", attribute: "Always" },
	"12.COMPETITIVE": { text: "Has the character been raised in a competitive (but non-violent) culture —sports, debate, strategy games, courting?", attribute: "Always" },
	"13.BIRTH": { text: "Has the character given birth to a child?", attribute: "Always" },
	"14.COVET": { text: "Has the character ever coveted something owned by another?", attribute: "Greed" },
	"15.STOLE": { text: "Has the character ever stolen something they coveted?", attribute: "Greed" },
	"16.STOLEN": { text: "Has the Dwarf ever had their prized treasure stolen from them?", attribute: "Greed" },
	"17.MASTERCRAFT": { text: "Has the character ever been in the presence of the master craftmanship of the Dwarven Fathers?", attribute: "Greed" },
	"18.POSSESSION": { text: "Has the character witnessed an outsider (Elf, Human, Orc, Roden, etc.) in possession of a work of Dwarven Art?", attribute: "Greed" },
	"19.TRAGEDY": { text: "Does the character's history include tragedy?", attribute: "Grief" },
	"20.OUTSIDER": { text: "Did the character has lived amonh non-Elven people?", attribute: "Grief" },
	"21.BETRAYAL": { text: "Has the character been betrayed by their friends?", attribute: "Spite" },
	"22.LOVESICK": { text: "Is the character lovesick or broken hearted?", attribute: "Spite" },
	"23.ABANDON": { text: "Has the character been abandoned by those he held dear?", attribute: "Spite" },
	"25.RESPECT": { text: "Does the character still respect or admire someone on the other side?", attribute: "Spite" },
	"26.LOVE": { text: "Does the character still love someone on the other side?", attribute: "Spite" },
	"27.TRUST": { text: "Does the character trust the their God the most?", attribute: "Faith" },
	"28.CONSULT": { text: "When in danger, does the character consult their God for aid?", attribute: "Faith" },
	"29.SERVE": { text: "Does the character think that ultimately only with their God them can best serve their allies?", attribute: "Faith" },
	"30.DEADTRUST": { text: "Does the character trust the their Dead God the most?", attribute: "Faith in Dead Gods" },
	"31.DEADCONSULT": { text: "When in danger, does the character consult their Dead God for aid?", attribute: "Faith in Dead Gods" },
	"32.DEADSERVE": { text: "Does the character think that ultimately only with their Dead God they can best serve their allies?", attribute: "Faith in Dead Gods" },
	"33.SLAVE": { text: "Have the character been to slave to another?", attribute: "Hatred" },
	"34.FRATRICIDE": { text: "Have the character ever killed their superior or parents?", attribute: "Hatred" },
	"35.HOBGOBLIN": { text: "Have the character ever attempted to command a unit of goblins in battle?", attribute: "Hatred" },
	"36.MASTER": { text: "Is their master the God of Darkness and Blood?", attribute: "Void Embrace" },
	"37.FATE": { text: "Does the Darkness and Blood controls their fate?", attribute: "Void Embrace" },
	"38.WELLSPRING": { text: "Is the Darkness and Blood the wellspring of their power?", attribute: "Void Embrace" },
	"39.PRAY": { text: "Have the character has ever prayed alone at night to remote, unholy gods to aid him?", attribute: "Corruption" },
	"40.PACT": { text: "Have the the character has ever entered into a pact with a demon?", attribute: "Corruption" }
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
