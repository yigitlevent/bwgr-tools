import { Attributes } from "../data/attributes";
import { Stats } from "../data/stats";
import { CharacterQuestions, CharacterSpendings, CharacterStockSpecific } from "../state/reducers/characterBurner";
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
export function GetSkillShade(skillName: string, spendings: CharacterSpendings): ShadesListLimited {
	const skill = GetSkillFromPath(skillName);
	const statShades = [
		...Stats.filter(v => skill.root.includes(v.name)).map(v => GetStatShade(v.name, spendings)),
		...Attributes.filter(v => skill.root.includes(v.name)).map(v => GetAttributeShade(v.name, spendings))
	];
	return statShades.every(v => v === "G") ? "G" : "B";
}

export function GetSkillExponent(skillName: string, stock: StocksList, lifepaths: string[], totals: LifepathTotals, spendings: CharacterSpendings, questions: CharacterQuestions, stockSpecific: CharacterStockSpecific): number {
	const skill = GetSkillFromPath(skillName);

	return Math.floor(GetAverage([
		...Stats.filter(v => skill.root.includes(v.name)).map(v => GetStatExponent(v.name, spendings)),
		...Attributes.filter(v => skill.root.includes(v.name)).map(v => GetAttributeExponent(v.name, stock, lifepaths, totals, spendings, questions, stockSpecific))
	]) / 2) + spendings.skills[skillName].general.advance + spendings.skills[skillName].lifepath.advance;
}

export function GetSkillOpenness(skillName: string, spendings: CharacterSpendings): boolean {
	return spendings.skills[skillName].general.open + spendings.skills[skillName].lifepath.open > 0;
}

// REMAINING
export function GetRemainingSkillTotals(totals: LifepathTotals, spendings: CharacterSpendings): SkillRemaining {
	const generalSpending =
		Object.values(spendings.skills).map(v => v.general.open + v.general.advance);

	const lifepathSpending =
		Object.values(spendings.skills).map(v => v.lifepath.open + v.lifepath.advance);

	return {
		generalPoints: totals.skills.generalPoints.points - ((generalSpending.length > 0) ? generalSpending.reduce((v, a) => v + a) : 0),
		lifepathPoints: totals.skills.lifepathPoints.points - ((lifepathSpending.length > 0) ? lifepathSpending.reduce((v, a) => v + a) : 0)
	};
}

// SPEND
export function TryOpenSkill(skillName: string, totals: LifepathTotals, spendings: CharacterSpendings, toOpen: boolean, isLifepath: boolean) {
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

export function ModifySkillExponentSpending(skillName: string, spendings: CharacterSpendings, totals: LifepathTotals, change: 1 | -1, isLifepath: boolean) {
	const spending = spendings.skills[skillName];
	const remaining = GetRemainingSkillTotals(totals, spendings);

	if (change === 1) {
		if (isLifepath && remaining.lifepathPoints > 0) spending.lifepath.advance += 1;
		else if (!isLifepath && remaining.generalPoints > 0) spending.general.advance += 1;
	}
	else if (change === -1) {
		if (spending.general.advance > 0) spending.general.advance -= 1;
		else if (spending.lifepath.advance > 0) spending.lifepath.advance -= 1;
	}

	return spending;
}

// REFRESH
export function RefreshSkillsList(totals: LifepathTotals, spendings: CharacterSpendings): CharacterSpendings {
	const newSpending = JSON.parse(JSON.stringify(spendings)) as CharacterSpendings;

	for (const key in spendings.skills) {
		if (key in totals.skills.mandatoryList || key in totals.skills.lifepathList || key in totals.skills.generalList) {
			if (key in totals.skills.generalList) {
				newSpending.skills[key] = { ...spendings.skills[key], lifepath: { open: 0, advance: 0 } };
			}
			else {
				newSpending.skills[key] = spendings.skills[key];
			}
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

	totals.skills.generalList.map(skillName => {
		if (!(skillName in newSpending.skills)) newSpending.skills[skillName] = { general: { open: 0, advance: 0 }, lifepath: { open: 0, advance: 0 } };
	});

	return newSpending;
}
