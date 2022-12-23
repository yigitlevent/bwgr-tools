interface AttributeQuestion {
	text: string;
	change: number;
}

export interface Attribute {
	name: AttributesList;
	hasShade: boolean;
	questions?: AttributeQuestion[];
	requiredTrait?: TraitPath;
}

export const Attributes: Attribute[] = [
	{
		name: "Health",
		hasShade: true,
		questions: [
			// TODO: Add questions
		]
	},
	{
		name: "Steel",
		hasShade: true,
		questions: [
			// TODO: Add questions
		]
	},
	{
		name: "Reflexes",
		hasShade: true
	},
	{
		name: "Hesitation",
		hasShade: false
	},
	{
		name: "Stride",
		hasShade: false
	},
	{
		name: "Greed",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Dwarf Common➞Greed"
	},
	{
		name: "Grief",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Elf Common➞Grief"
	},
	{
		name: "Spite",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Dark Elf Lifepath➞Spite"
	},
	{
		name: "Faith",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Human Special➞Faithful"
	},
	{
		name: "Faith in Dead Gods",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Human Lifepath➞Faith in Dead Gods"
	},
	{
		name: "Hatred",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Orc Common➞Loathsome and Twisted"
	},
	{
		name: "Void Embrace",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Orc Special➞Void Embrace"
	},
	{
		name: "Ancestral Taint",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Great Wolf Lifepath➞Ancestral Taint"
	},
	{
		name: "Corruption",
		hasShade: true,
		questions: [
			// TODO: Add questions
		],
		requiredTrait: "Human Special➞Corrupted"
	}
];
