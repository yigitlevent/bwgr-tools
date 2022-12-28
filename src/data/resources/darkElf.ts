import { ResourceStock } from "./_resources";
import { Relationship, Reputation, Affiliation } from "./_social";


export const DarkElf: ResourceStock = {
	name: "Dark Elf",
	allowed: ["bwc"],
	resources: [
		Relationship,
		Reputation,
		Affiliation,
		{
			name: "Bitter Reminder",
			allowed: ["bwc"],
			type: "Gear",
			cost: "various",
			description: "Dark Elf characters may purchase items from the Elven Resources list on page 156 of die Burning Wheel. Each 10 rps spent on this items adds +1D to starting Spite."
		},
		{
			name: "Bitter Poison",
			allowed: ["bwc"],
			type: "Gear",
			cost: 10,
			description: "One dose of this ingested poison causes victim to lose 1D of Health per day for five days. If Health drops to zero, the victim dies. If not, the victim recovers his Health at 1D per week."
		},
		{
			name: "Spiteful Poison",
			allowed: ["bwc"],
			type: "Gear",
			cost: 20,
			description: "One small cut from a needle or blade so poisoned is enough to kill. If an Incidental hit is delivered from a blade or barb with this poison, roll a die of fate. On a 1-2, the victim is poisoned. If a Mark hit is delivered, the victim is poisoned on a 1-4. Superb hits always deliver the poison. If poisoned, the victim must pass an Ob 5 Health test. If failed, the victim —unaware that he or she has been poisoned— will exhibit no symptoms for eight hours or more, after which time he or she will fall into a swoon and die. If somehow detected in the interim, the poison can be countered usign the Song of Soothing. If the victim passes the Health test, the victim's Forte is taxed by four. Recover as per Sickness rules, but in days of hours."
		},
		{
			name: "Lock Pick",
			allowed: ["bwc"],
			type: "Gear",
			cost: 10,
			description: "These tools are required to use the Lock Pick skill."
		},
		{
			name: "Long Knife",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "These insidious weapons count as daggers and are designed to cause maximum harm to their targets. Pow 2, Add 1, VA —, WS 3, Short. Can be concealed like a dagger or knife."
		},
		{
			name: "Barbed Javelins",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3,
			description: "Barbed Javelins are designed to cause their victims grievous harm even after impact. If a Superb hit is scored, the javelin has embedded itself in the victim. All medicinal skill rolls to stop bleeding or being recovery suffer +2 Ob penalty due to the javelin's ugly barbs that must be extracted before the victim can heal."
		},
		{
			name: "Garrote",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3,
			description: "A garrote is a two- to three-foot length of cord strung between two small wooden handles. It is used to throttle victims to death. To use this weapon, a character must win positioning at hands fighting distance. Once there, a 2D or greater Lock must be estabilished around the neck with garrote. If such a Lock is achieved, the victim loses 1D Forte every volley thereafter. If Forte reaches zero, the victim falls unconscious."
		},
		{
			name: "Caltrops",
			allowed: ["bwc"],
			type: "Gear",
			cost: 3,
			description: "Caltrops are sharp barbs scattered on the ground to interfere with a creature's movement. If approached while moving quickly or if simply walking into the trap unawared, make an Ob 3 Speed test to avoid. Failure indicates damage. Roll the Die of Fate. 1: B7; 2-4: B5; 5-6: B4."
		},
		{
			name: "Tools of the Trade",
			allowed: ["bwc"],
			type: "Gear",
			cost: 9,
			description: "Skill kits for Disguise, Poisons or any other kit the Dark Elf may need."
		},
		{
			name: "Cloak of Darkness",
			allowed: ["bwc"],
			type: "Gear",
			cost: 30,
			description: "Adds +4D of open ended helping dice to Stealthy skill. If you have no Stealthy skill, roll the cloak's own four dice to create the Observation obstacle."
		},
		{
			name: "Climbing Claws",
			allowed: ["bwc"],
			type: "Gear",
			cost: 5,
			description: "These odd devices help the Dark Elf thieves in their second-story operations. Add +1D to the Climbing skill, but +1 Ob to all other Agility based skills while wearing them (except when using Climbing Claws with Brawling). They can also act as a weapon: Pow 1, Add 2, VA —, WS 2, Shortest."
		},
		{
			name: "Remote Refuge",
			allowed: ["bwc"],
			type: "Property",
			cost: [
				["Pastoral lands. This includes a single important terrain feature like a lake, a length of river, a hill or prairie and a modest but comfortable dwelling for the Elf's family.", 20],
				["A large country manor and land", 50],
				["A palace", 100],
				["Allows the Elf and his family to occupy a major terrain feature like a forest, bay or mountain.", 150],
				["A sumptuous apartment in the Citadel.", 25]
			],
			description: "Dark Elves often find remote refuges where they can live in isolation: deep in ancient woods, lost in wastelands or even under the earth in vast caves. Use the Elven Land list for prices and translate the actual purchases into something suitably dark and forlorn."
		},
		{
			name: "Morlin Armor",
			allowed: ["bwc"],
			type: "Gear",
			cost: [
				["Black metal light mail", 30],
				["Black metal heavy mail", 40],
				["Black metal plated mail", 100]
			],
			description: "The first Dark Elf, in the centuries of his isolation and contemplation, developed a special black metal that was light and supple but as strong as steel. When he ventured forth from his refuge, he was always clad in this harness. Dark Elven black metal armor is superior quality armor and incurs no clumsy weight penalties."
		},
		{
			name: "Morlin Weapons",
			allowed: ["bwc"],
			type: "Gear",
			cost: 15,
			modifiers: [
				["Additional VA", 15],
				["Additional Power", 30]
			],
			description: "Weapons made of the Dark Elven black metal count as superior quality. You may modify the weapon thusly:<br>For an additional +15 rps, you may add an additional point of weapon speed or VA to the weapon's stats.<br>For +30 rps, you may add +1 Power to the weapon.<br>However, to qualify for this bonus, you must name the weapon and it must be unique in your campaign. For example, if you take a black metal dagger with VA 2, it can be the only one of its type."
		}
	]
};
