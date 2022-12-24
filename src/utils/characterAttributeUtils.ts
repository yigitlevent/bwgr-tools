import { Attributes } from "../data/attributes";
import { Stocks } from "../data/stocks/_stocks";
import { CharacterSpending, StatSpending } from "../state/reducers/characterBurner";
import { GetAverage } from "./misc";


// GET
export function GetAttributeShade(attributeName: AttributesList, spending: CharacterSpending): ShadesList {
	let shade: ShadesList = "B";
	if (attributeName in spending.attributes) {
		if (attributeName === "Faith in Dead Gods" || attributeName === "Ancestral Taint") {
			shade = (spending.stats.Will.mentalPool as StatSpending).shade + spending.stats.Will.eitherPool.shade > 0 ? "G" : "B";
		}
		else { shade = spending.attributes[attributeName].shadeShifted === 5 ? "G" : spending.attributes[attributeName].shadeShifted === 10 ? "W" : "B"; }
	}

	return shade;
}

export function GetAttributeExponent(attributeName: AttributesList, stock: StocksList, spending: CharacterSpending): number {
	let exponent = 0;

	if (attributeName in spending.attributes) {
		if (attributeName === "Health") {
			const willShade = (spending.stats.Will.mentalPool as StatSpending).shade + spending.stats.Will.eitherPool.shade > 0 ? "G" : "B";
			const willExp = (spending.stats.Will.mentalPool as StatSpending).exponent + spending.stats.Will.eitherPool.exponent;
			const forteShade = (spending.stats.Forte.physicalPool as StatSpending).shade + spending.stats.Forte.eitherPool.shade > 0 ? "G" : "B";
			const forteExp = (spending.stats.Forte.physicalPool as StatSpending).exponent + spending.stats.Forte.eitherPool.exponent;

			const shades = [willShade, forteShade];
			const roots = [willExp, forteExp];
			if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots.push(2); }

			const extras = 0;




			// BUG: Implement Questions
			exponent = Math.floor(GetAverage(roots)) - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Steel") {
			// BUG: Implement Questions
			exponent = 3 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Reflexes") {
			const perceptionShade = (spending.stats.Perception.mentalPool as StatSpending).shade + spending.stats.Perception.eitherPool.shade > 0 ? "G" : "B";
			const perceptionExp = (spending.stats.Perception.mentalPool as StatSpending).exponent + spending.stats.Perception.eitherPool.exponent;

			const agilityShade = (spending.stats.Agility.physicalPool as StatSpending).shade + spending.stats.Agility.eitherPool.shade > 0 ? "G" : "B";
			const agilityExp = (spending.stats.Agility.physicalPool as StatSpending).exponent + spending.stats.Agility.eitherPool.exponent;

			const speedShade = (spending.stats.Speed.physicalPool as StatSpending).shade + spending.stats.Speed.eitherPool.shade > 0 ? "G" : "B";
			const speedExp = (spending.stats.Speed.physicalPool as StatSpending).exponent + spending.stats.Speed.eitherPool.exponent;

			const shades = [perceptionShade, agilityShade, speedShade];
			const roots = [perceptionExp, agilityExp, speedExp];
			if (shades.some(v => v === "G") && shades.some(v => v === "B")) { roots.push(2); }
			exponent = Math.floor(GetAverage(roots)) - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Hesitation") {
			const willExp = (spending.stats.Will.mentalPool as StatSpending).exponent + spending.stats.Will.eitherPool.exponent;

			exponent = 10 - willExp;
		}
		else if (attributeName === "Stride") {
			exponent = Stocks[stock].stride;
		}
		else if (attributeName === "Greed") {
			// BUG: Implement Questions
			exponent = 0 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Grief") {
			// BUG: Implement Questions
			exponent = 0 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Spite") {
			// BUG: Implement starting grief
			// BUG: Implement Questions
			// BUG: Implement traits
			// BUG: Implement resource
		}
		else if (attributeName === "Faith") {
			// BUG: Implement Questions
			exponent = 3 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Faith in Dead Gods") {
			// BUG: Implement Questions
			exponent = 3 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Hatred") {
			// BUG: Implement Questions
			exponent = 0 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Void Embrace") {
			// BUG: Implement Questions
			exponent = 3 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Ancestral Taint") {
			// BUG: Implement Questions
			exponent = 0 - spending.attributes[attributeName].shadeShifted;
		}
		else if (attributeName === "Corruption") {
			// BUG: Implement Questions
			exponent = 0 - spending.attributes[attributeName].shadeShifted;
		}
		else throw `Unhandled Attribute ${attributeName}`;
	}

	return exponent;
}

// SPEND
export function ModifyAttributeShadeSpending(attributeName: AttributesList, change: 5 | -5, stock: StocksList, spendings: CharacterSpending) {
	const spending = spendings.attributes[attributeName];

	const shade = GetAttributeShade(attributeName, spendings);
	const exponent = GetAttributeExponent(attributeName, stock, spendings);

	if (change === 5 && exponent > 5 && shade !== "W") {
		spending.shadeShifted += change;
	}
	else if (change === -5 && spending.shadeShifted > 0 && shade !== "B") {
		spending.shadeShifted -= change;
	}

	return spending;
}

// REFRESH
export function RefreshAttributesList(spending: CharacterSpending): CharacterSpending {
	const newSpending = JSON.parse(JSON.stringify(spending)) as CharacterSpending;

	for (const key in Attributes) {
		const attr = Attributes[key];

		if (attr.requiredTrait) {
			if (attr.requiredTrait in spending.traits && spending.traits[attr.requiredTrait].open > 0) {
				if (!(attr.name in spending.attributes)) {
					newSpending.attributes[attr.name] = { shadeShifted: 0 };
				}
			}
			else {
				delete newSpending.attributes[attr.name];
			}
		}
		else {
			if (!(attr.name in spending.attributes)) {
				newSpending.attributes[attr.name] = { shadeShifted: 0 };
			}
		}
	}

	return newSpending;
}
