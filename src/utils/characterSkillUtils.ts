import { Attributes } from "../data/attributes";
import { Stats } from "../data/stats";
import { CharacterSpending } from "../state/reducers/characterBurner";
import { GetAttributeExponent, GetAttributeShade } from "./characterAttributeUtils";
import { GetStatExponent, GetStatShade } from "./characterStatUtils";
import { LifepathTotals } from "./lifepathTotals";
import { GetAverage } from "./misc";
import { GetSkillFromPath } from "./pathFinder";


export interface SkillRemaining {
	generalPoints: number;
	lifepathPoints: number;
}

// GET
export function GetSkillShade(skillName: string, spending: CharacterSpending): ShadesListLimited {
	const skill = GetSkillFromPath(skillName);
	const statShades = [
		...Stats.filter(v => skill.root.includes(v.name)).map(v => GetStatShade(v.name, spending)),
		...Attributes.filter(v => skill.root.includes(v.name)).map(v => GetAttributeShade(v.name, spending))
	];
	return statShades.every(v => v === "G") ? "G" : "B";
}

export function GetSkillExponent(skillName: string, stock: StocksList, spending: CharacterSpending): number {
	const skill = GetSkillFromPath(skillName);

	return Math.floor(GetAverage([
		...Stats.filter(v => skill.root.includes(v.name)).map(v => GetStatExponent(v.name, spending)),
		...Attributes.filter(v => skill.root.includes(v.name)).map(v => GetAttributeExponent(v.name, stock, spending))
	]) / 2) + spending.skills[skillName].general.advance + spending.skills[skillName].lifepath.advance;
}

export function GetSkillOpenness(skillName: string, spending: CharacterSpending): boolean {
	return spending.skills[skillName].general.open + spending.skills[skillName].lifepath.open > 0;
}

// REMAINING
export function GetRemainingSkillTotals(totals: LifepathTotals, spending: CharacterSpending): SkillRemaining {
	const generalSpending =
		Object.values(spending.skills).map(v => v.general.open + v.general.advance);

	const lifepathSpending =
		Object.values(spending.skills).map(v => v.lifepath.open + v.lifepath.advance);

	// BUG: This does not take extensions into account
	return {
		generalPoints: totals.skills.generalPoints.points - ((generalSpending.length > 0) ? generalSpending.reduce((v, a) => v + a) : 0),
		lifepathPoints: totals.skills.lifepathPoints.points - ((lifepathSpending.length > 0) ? lifepathSpending.reduce((v, a) => v + a) : 0)
	};
}

// SPEND
export function TryOpenSkill(skillName: string, totals: LifepathTotals, spendings: CharacterSpending, toOpen: boolean, isLifepath: boolean) {
	const spending = spendings.skills[skillName];

	const skill = GetSkillFromPath(skillName);
	const skillRemainings = GetRemainingSkillTotals(totals, spendings);

	if (toOpen) {
		const cost = skill.magical || skill.training ? 2 : 1;

		if (isLifepath && skillRemainings.lifepathPoints >= cost) {
			spending.lifepath.open = cost;
		}
		else if (isLifepath && cost === 2 && skillRemainings.lifepathPoints > 0 && skillRemainings.generalPoints > 0) {
			spending.lifepath.open = 1;
			spending.general.open = 1;
		}
		else if (skillRemainings.generalPoints >= cost) {
			spending.general.open = cost;
		}
	}
	else {
		spending.lifepath.open = 0;
		spending.general.open = 0;
	}

	return spending;
}

export function ModifySkillExponentSpending(skillName: string, spendings: CharacterSpending, totals: LifepathTotals, change: 1 | -1, isLifepath: boolean) {
	const spending = spendings.skills[skillName];
	const remaining = GetRemainingSkillTotals(totals, spendings);

	if (change === 1) {
		if (isLifepath && remaining.lifepathPoints > 0) spending.lifepath.advance += 1;
		else if (remaining.generalPoints > 0) spending.general.advance += 1;
	}
	else if (change === -1) {
		if (spending.general.advance > 0) spending.general.advance -= 1;
		else if (spending.lifepath.advance > 0) spending.lifepath.advance -= 1;
	}

	return spending;
}

// REFRESH
export function RefreshSkillList(totals: LifepathTotals, spending: CharacterSpending): CharacterSpending {
	const newSpending = JSON.parse(JSON.stringify(spending)) as CharacterSpending;

	for (const key in spending.skills) {
		if (key in totals.skills.mandatoryList || key in totals.skills.lifepathList) {
			newSpending.skills[key] = spending.skills[key];
		}
		else delete newSpending.skills[key];
	}

	totals.skills.mandatoryList.map(skillName => {
		if (!(skillName in newSpending.skills)) {
			newSpending.skills[skillName] = { general: { open: 0, advance: 0 }, lifepath: { open: 0, advance: 0 } };
			TryOpenSkill(skillName, totals, newSpending, true, true);
		}
	});

	totals.skills.lifepathList.map(skillName => {
		if (!(skillName in newSpending.skills)) newSpending.skills[skillName] = { general: { open: 0, advance: 0 }, lifepath: { open: 0, advance: 0 } };
	});

	return newSpending;
}
