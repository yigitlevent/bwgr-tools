import { Attributes } from "../data/attributes";
import { Stocks } from "../data/stocks/_stocks";
import { CharacterQuestions, CharacterSpendings, StatSpending } from "../state/reducers/characterBurner";
import { GetSkillOpenness } from "./characterSkillUtils";
import { GetStatExponent, GetStatShade } from "./characterStatUtils";
import { GetTraitOpenness } from "./characterTraitUtils";
import { LifepathTotals } from "./lifepathTotals";
import { GetAverage } from "./misc";


// GET
export function GetAttributeShade(attributeName: AttributesList, spendings: CharacterSpendings): ShadesList {
	let shade: ShadesList = "B";
	if (attributeName in spendings.attributes) {
		if (attributeName === "Faith in Dead Gods" || attributeName === "Ancestral Taint") {
			shade = (spendings.stats.Will.mentalPool as StatSpending).shade + spendings.stats.Will.eitherPool.shade > 0 ? "G" : "B";
		}
		else { shade = spendings.attributes[attributeName].shadeShifted === 5 ? "G" : spendings.attributes[attributeName].shadeShifted === 10 ? "W" : "B"; }
	}

	return shade;
}

export function GetAttributeExponent(attributeName: AttributesList, stock: StocksList, lifepaths: string[], totals: LifepathTotals, spendings: CharacterSpendings, questions: CharacterQuestions): number {
	let exponent = 0;

	if (attributeName in spendings.attributes) {
		if (attributeName === "Health") {
			const willShade = GetStatShade("Will", spendings);
			const willExp = GetStatExponent("Will", spendings);
			const forteShade = GetStatShade("Forte", spendings);
			const forteExp = GetStatExponent("Forte", spendings);

			const shades = [willShade, forteShade];
			const roots = [willExp, forteExp];
			if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots.push(2); }

			let extras = 0;
			if (questions.FILTH) extras -= 1;
			if (questions.SICKLY) extras -= 1;
			if (questions.WOUND) extras -= 1;
			if (questions.TORTURE && questions.ENSLAVED) extras -= 1;
			if (stock === "Dwarf" || stock === "Elf" || stock === "Orc") extras += 1;
			if (questions.ACTIVE) extras += 1;
			if (questions.HAPPY) extras += 1;

			exponent = Math.floor(GetAverage(roots)) + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Steel") {
			const willExp = GetStatExponent("Will", spendings);
			const forteExp = GetStatExponent("Forte", spendings);

			let extras = 0;
			if (questions.SOLDIER) extras += 1;
			if (questions.WOUND && questions.SOLDIER) extras += 1;
			if (questions.WOUND && !questions.SOLDIER) extras -= 1;
			if (questions.KILLER) extras += 1;
			if (questions.TORTURE || questions.ENSLAVED || questions.BEATEN) {
				if (willExp >= 5) extras += 1;
				if (willExp <= 3) extras -= 1;
			}
			if (questions.SHELTER) extras -= 1;
			if (questions.COMPETITIVE) extras += 1;
			if (questions.BIRTH) extras += 1;
			if (questions.GIFTED) extras += 1;
			if (willExp >= 7) extras += 2;
			else if (willExp >= 5) extras += 1;
			if (forteExp >= 6) extras += 2;

			exponent = 3 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Reflexes") {
			const perceptionShade = GetStatShade("Perception", spendings);
			const perceptionExp = GetStatExponent("Perception", spendings);

			const agilityShade = GetStatShade("Agility", spendings);
			const agilityExp = GetStatExponent("Agility", spendings);

			const speedShade = GetStatShade("Speed", spendings);
			const speedExp = GetStatExponent("Speed", spendings);

			const shades = [perceptionShade, agilityShade, speedShade];
			const roots = [perceptionExp, agilityExp, speedExp];
			if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots.push(2); }
			exponent = Math.floor(GetAverage(roots)) - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Hesitation") {
			const willExp = (spendings.stats.Will.mentalPool as StatSpending).exponent + spendings.stats.Will.eitherPool.exponent;

			exponent = 10 - willExp;
		}
		else if (attributeName === "Stride") {
			exponent = Stocks[stock].stride;
		}
		else if (attributeName === "Greed") {
			const willExp = GetStatExponent("Will", spendings);

			const lifepathsToCheck = ["Dwarf➞Guilder➞Trader", "Dwarf➞Artificer➞Mask Bearer", "Dwarf➞Artificer➞Master of Arches", "Dwarf➞Artificer➞Master of Forges", "Dwarf➞Artificer➞Master Engraver", "Dwarf➞Noble➞Treasurer", "Dwarf➞Host➞Quartermaster", "Dwarf➞Noble➞Seneschal", "Dwarf➞Noble➞Prince"];

			let extras = 0;
			if (willExp <= 4) extras += 1;
			extras += Math.floor(totals.resources.points / 60);
			extras += lifepaths.filter(v => lifepathsToCheck.includes(v)).length;
			if (questions.COVET) extras += 1;
			if (questions.STOLE) extras += 1;
			if (questions.STOLEN) extras += 1;
			if (questions.MASTERCRAFT) extras += 1;
			if (questions.POSSESSION) extras += 1;
			if (totals.years.points > 400) extras += 2;
			else if (totals.years.points > 200) extras += 1;
			// FIX: [RELATIONSHIPS] Add "each romantic relationship -1"
			// FIX: [RELATIONSHIPS] Add "each hateful immediate family relationship +2"
			// FIX: [RELATIONSHIPS] Add "each hateful relationship +1"
			if (GetTraitOpenness("Dwarf Special➞Virtuous", spendings)) extras -= 1;

			exponent = 0 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Grief" || attributeName === "Spite") {
			const steelExp = GetAttributeExponent("Steel", stock, lifepaths, totals, spendings, questions);
			const perceptionExp = GetStatExponent("Perception", spendings);

			const lifepathsToCheck = ["Elf➞Protector➞Lancer", "Elf➞Protector➞Lieutenant", "Elf➞Protector➞Captain"];
			const lifepathsToCheck2 = ["Elf➞Protector➞Lord Protector", "Elf➞Protector➞Soother"];
			const lifepathsToCheck3 = ["Elf➞Citadel➞Loremaster", "Elf➞Citadel➞Adjutant", "Elf➞Citadel➞Althing"];

			let extras = 0;
			if (lifepaths.filter(v => v.split("➞")[1] === "Protector").length > 0) extras += 1;
			if (lifepaths.some(v => lifepathsToCheck.includes(v))) extras += 1;
			if (lifepaths.some(v => lifepathsToCheck2.includes(v))) extras += 1;
			if (lifepaths.some(v => v === "Elf➞Etharch➞Born Etharch")) extras += 1;
			if (lifepaths.some(v => lifepathsToCheck3.includes(v))) extras += 1;
			if (lifepaths.some(v => v === "Elf➞Wilderlands➞Elder")) extras += 1;
			// FIX: [RESOURCES] Add "knows no lamentations +1"
			if (questions.TRAGEDY) extras += 1;
			if (questions.OUTSIDER) extras += 1;
			if (steelExp > 5) extras += (steelExp - 5);
			if (perceptionExp > 5) extras += 1;
			if (totals.years.points > 1000) extras += 3;
			else if (totals.years.points > 750) extras += 2;
			else if (totals.years.points > 500) extras += 1;

			if (attributeName === "Spite") {
				const traitsToCheck = ["Elf Special➞Slayer", "Elf Special➞Exile", "Dark Elf Lifepath➞Feral", "Any Character➞Murderous", "Dark Elf Lifepath➞Saturnine", "Dark Elf Lifepath➞Femme Fatale/Homme Fatal", "Dark Elf Lifepath➞Cold", "Any Character➞Bitter"];

				if (traitsToCheck.filter(v => GetTraitOpenness(v, spendings))) extras += 1;
				// FIX: [RESOURCES] Add "if taken bitter reminders, each 10 rps spent +1"
				if (questions.OUTSIDER) extras += 1;
				if (questions.LOVESICK) extras += 1;
				if (questions.ABANDON) extras += 1;
				if (questions.ABUSED) extras += 1;
				if (questions.RESPECT) extras -= 1;
				if (questions.LOVE) extras -= 1;
			}

			exponent = 0 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Faith") {
			let extras = 0;
			if (questions.TRUST) extras += 1;
			if (questions.CONSULT) extras += 1;
			if (questions.SERVE) extras += 1;

			exponent = 3 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Faith in Dead Gods") {
			let extras = 0;
			if (questions.DEADTRUST) extras += 1;
			if (questions.DEADCONSULT) extras += 1;
			if (questions.DEADSERVE) extras += 1;

			exponent = 3 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Hatred") {
			const willExp = GetStatExponent("Will", spendings);
			const steelExp = GetAttributeExponent("Steel", stock, lifepaths, totals, spendings, questions);
			const perceptionExp = GetStatExponent("Perception", spendings);

			let extras = 0;
			if (questions.WOUND) extras += 1;
			// FIX: Implement "for each 1 rolled on the brutal life table"
			if (questions.TORTURE) extras += 1;
			if (questions.SLAVE) extras += 1;
			if (questions.FRATRICIDE) extras += 1;
			if (questions.HOBGOBLIN) extras += 1;
			if (willExp <= 2) extras + 1;
			if (steelExp >= 5) extras + 1;
			if (perceptionExp >= 6) extras + 1;

			exponent = 0 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Void Embrace") {
			let extras = 0;
			if (questions.MASTER) extras += 1;
			if (questions.FATE) extras += 1;
			if (questions.WELLSPRING) extras += 1;

			exponent = 3 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Ancestral Taint") {
			let extras = 0;
			if (GetTraitOpenness("Great Wolf Lifepath➞Ancestral Taint", spendings)) extras += 1;
			if (GetSkillOpenness("Great Wolf Spirit Hunter Song➞Primal Bark", spendings)) extras += 1;
			if (GetTraitOpenness("Great Wolf Lifepath➞Spirit Nose", spendings)) extras += 1;
			if (GetSkillOpenness("Great Wolf Spirit Hunter Song➞Ancestral Jaw", spendings)) extras += 1;
			if (GetSkillOpenness("Great Wolf Spirit Hunter Song➞Grandfather's Song", spendings)) extras += 1;
			if (GetTraitOpenness("Great Wolf Lifepath➞Stink of the Ancient", spendings)) extras += 1;

			exponent = 0 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Corruption") {
			let extras = 0;
			if (GetTraitOpenness("Human Special➞Gifted", spendings)) extras += 1;
			if (GetTraitOpenness("Human Special➞Faithful", spendings) || GetTraitOpenness("Human Lifepath➞Faith in Dead Gods", spendings)) extras += 1;
			if (GetTraitOpenness("Human Special➞Chosen One", spendings)) extras += 1;
			// FIX: Implement "+1 for each point of spirit marks"
			// FIX: Implement "+1 for each point of orders"
			if (questions.PRAY) extras += 1;
			if (questions.PACT) extras += 1;

			exponent = 0 + extras - spendings.attributes[attributeName].shadeShifted;
		}
		else throw `Unhandled Attribute ${attributeName}`;
	}

	return exponent;
}

// SPEND
export function ModifyAttributeShadeSpending(attributeName: AttributesList, change: 5 | -5, stock: StocksList, lifepaths: string[], totals: LifepathTotals, spendings: CharacterSpendings, questions: CharacterQuestions) {
	const spending = spendings.attributes[attributeName];

	const shade = GetAttributeShade(attributeName, spendings);
	const exponent = GetAttributeExponent(attributeName, stock, lifepaths, totals, spendings, questions);

	if (change === 5 && exponent > 5 && shade !== "W") {
		spending.shadeShifted += change;
	}
	else if (change === -5 && spending.shadeShifted > 0 && shade !== "B") {
		spending.shadeShifted -= change;
	}

	return spending;
}

// REFRESH
export function RefreshAttributesList(spendings: CharacterSpendings): CharacterSpendings {
	const newSpending = JSON.parse(JSON.stringify(spendings)) as CharacterSpendings;

	for (const key in Attributes) {
		const attr = Attributes[key];

		if (attr.requiredTrait) {
			if (attr.requiredTrait in spendings.traits && spendings.traits[attr.requiredTrait].open > 0) {
				if (!(attr.name in spendings.attributes)) {
					newSpending.attributes[attr.name] = { shadeShifted: 0 };
				}
			}
			else {
				delete newSpending.attributes[attr.name];
			}
		}
		else {
			if (!(attr.name in spendings.attributes)) {
				newSpending.attributes[attr.name] = { shadeShifted: 0 };
			}
		}
	}

	return newSpending;
}
