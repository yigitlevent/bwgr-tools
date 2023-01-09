import { Lifepath, Stock } from "../data/stocks/_stocks";


function CheckString(chosenLifepaths: Lifepath[], conditionString: string): boolean {
	if (conditionString.startsWith("Skill")) {
		const hasSkill = chosenLifepaths.some(lifepath => lifepath.skills.includes((conditionString as any).slice(6)));
		if (!hasSkill) return false;
	}
	else if (conditionString.startsWith("Trait")) {
		const hasTrait = !chosenLifepaths.some(lifepath => lifepath.traits.includes((conditionString as any).slice(6)));
		if (!hasTrait) return false;
	}
	else if (!chosenLifepaths.some(lifepath => lifepath.name === conditionString.split("➞")[2])) {
		return false;
	}

	return true;
}

function CheckBlock(chosenLifepaths: Lifepath[], condition: Condition): boolean {
	if (condition.type === "AND") return condition.items.every(v => (typeof v === "string") ? CheckString(chosenLifepaths, v) : CheckBlock(chosenLifepaths, v));
	else if (condition.type === "OR") return condition.items.some(v => (typeof v === "string") ? CheckString(chosenLifepaths, v) : CheckBlock(chosenLifepaths, v));
	else if (condition.type === "NOT") return !condition.items.every(v => (typeof v === "string") ? CheckString(chosenLifepaths, v) : CheckBlock(chosenLifepaths, v));
	return true;
}

function GetCurrentAge(chosenLifepaths: Lifepath[], leadCount: number) {
	const yrs = chosenLifepaths.map(v => v.years).filter(v => typeof v === "number") as number[];
	const sum = yrs.reduce((prev, curr) => prev + curr);
	return sum + leadCount;
}

function FilterByRequirements(combinedPossibleLifepaths: Lifepath[], chosenLifepaths: Lifepath[], currentAge: number, checkRulesets: (allowed: RulesetId[]) => boolean): Lifepath[] {
	const filteredLifepaths: Lifepath[] = [];

	combinedPossibleLifepaths = combinedPossibleLifepaths.filter(v => v.born === false).filter(v => checkRulesets(v.allowed));

	for (const lifepathKey in combinedPossibleLifepaths) {
		const lp = combinedPossibleLifepaths[lifepathKey];
		const conditions = lp.requirements.conditions;
		const limits = lp.requirements.limits;

		let add = true;
		if (conditions) add = CheckBlock(chosenLifepaths, conditions);
		if (limits) limits.forEach(v => {
			// NOT CONSIDERED: GENDER➞FEMALE/MALE, GRIEF➞MIN/MAX, YEARS➞MIN/MAX
			if (v === "LP➞UNIQUE" && chosenLifepaths.includes(lp)) add = false;
			else if (v.startsWith("LP➞MIN") && chosenLifepaths.length < parseInt(v.split("➞")[2])) add = false;
			else if (v.startsWith("LP➞MAX") && chosenLifepaths.length > parseInt(v.split("➞")[2])) add = false;
			else if (v.startsWith("YEARS➞MIN") && currentAge <= parseInt(v.split("➞")[2])) add = false;
			else if (v.startsWith("YEARS➞MAX") && currentAge >= parseInt(v.split("➞")[2])) add = false;
		});

		if (add) filteredLifepaths.push(lp);
	}

	return filteredLifepaths;
}

export function FilterLifepaths(currentStock: Stock, chosenLifepaths: Lifepath[], maxLeads: number, prevLeadsCount: number, checkRulesets: (allowed: RulesetId[]) => boolean) {
	const lastLP = chosenLifepaths[chosenLifepaths.length - 1];
	let possibilities = [...currentStock.settings[lastLP.setting].lifepaths];
	if (prevLeadsCount < maxLeads) {
		for (const leadKey in lastLP.leads) {
			const leadLifepaths = currentStock.settings[lastLP.leads[leadKey].split("➞")[1]].lifepaths;
			possibilities = [...possibilities, ...leadLifepaths];
		}
	}

	const currentAge = GetCurrentAge(chosenLifepaths, prevLeadsCount);
	return FilterByRequirements(possibilities, chosenLifepaths, currentAge, checkRulesets);
}
