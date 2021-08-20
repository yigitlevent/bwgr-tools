import { Stocks } from "../data/stocks";
import { SkillCategories } from "../data/skills";
import { TraitCategories } from "../data/traits";

function CheckStock(stockName: string, stockPath: string, errorPath: string): bwgr.data.Error | undefined {
	const stockCheck1 = Object.values(Stocks).some(v => v.name === stockName);
	const stockCheck2 = stockName in Stocks;
	if (!stockCheck1 && !stockCheck2) return { path: `${errorPath}`, type: "Lead/Category", error: `'${stockName}' for '${stockPath}'` };
	return undefined;
}

function CheckSetting(stockName: string, settingName: string, stockPath: string, errorPath: string): bwgr.data.Error | undefined {
	const stockCheck1 = Object.values(Stocks[stockName].settings).some(v => v.name === settingName);
	const stockCheck2 = stockName in Stocks[stockName].settings;
	if (!stockCheck1 && !stockCheck2) return { path: `${errorPath}`, type: "Lead/Setting", error: `'${settingName}' for '${stockPath}'` };
	return undefined;
}

function CheckLifepath(stockName: string, settingName: string, lifepathName: string, stockPath: string, errorPath: string): bwgr.data.Error | undefined {
	const lifepathCheck1 = Stocks[stockName].settings[settingName].lifepaths.findIndex(v => v.name === lifepathName);
	if (lifepathCheck1 === -1) return { path: `${errorPath}`, type: "Lead/Lifepath", error: `'${lifepathName}' for '${stockPath}'` };
	return undefined;
}

function CheckSkillCategory(skillCategory: string, skillPath: string, errorPath: string): bwgr.data.Error | undefined {
	const categoryCheck1 = Object.values(SkillCategories).some(v => v.name === skillCategory);
	const categoryCheck2 = skillCategory in SkillCategories;
	if (!categoryCheck1 && !categoryCheck2) return { path: `${errorPath}`, type: "Skill/Category", error: `'${skillCategory}' for '${skillPath}'` };
	return undefined;
}

function CheckSkillName(skillCategory: string, skillName: string, skillPath: string, errorPath: string): bwgr.data.Error | undefined {
	const nameCheck = SkillCategories[skillCategory].skills.some(v => v.name === skillName);
	if (!nameCheck) return { path: `${errorPath}`, type: "Skill/Name", error: `'${skillName}' for '${skillPath}'` };
	return undefined;
}

function CheckTraitCategory(traitCategory: string, traitPath: string, errorPath: string): bwgr.data.Error | undefined {
	const categoryCheck1 = Object.values(TraitCategories).some(v => v.name === traitCategory);
	const categoryCheck2 = traitCategory in TraitCategories;
	if (!categoryCheck1 && !categoryCheck2) return { path: `${errorPath}`, type: "Trait/Category", error: `'${traitCategory}' for '${traitPath}'` };
	return undefined;
}

function CheckTraitName(traitCategory: string, traitName: string, traitPath: string, errorPath: string): bwgr.data.Error | undefined {
	const nameCheck = TraitCategories[traitCategory].traits.some(v => v.name === traitName);
	if (!nameCheck) return { path: `${errorPath}`, type: "Trait/Name", error: `'${traitName}' for '${traitPath}'` };
	return undefined;
}

function CheckLeads(lifepath: bwgr.data.Lifepath, errorPath: string): [bwgr.data.Error[], bwgr.data.Warning[]] {
	const errors: { path: string; type: string; error: string; }[] = [];
	const warnings: { path: string; type: string; warning: string; }[] = [];

	for (const leadKey in lifepath.leads) {
		const [leadStock, leadSetting] = lifepath.leads[leadKey].split("➞");

		const error1 = CheckStock(leadStock, lifepath.leads[leadKey], errorPath);
		if (error1) errors.push(error1);
		else {
			const error2 = CheckSetting(leadStock, leadSetting, lifepath.leads[leadKey], errorPath);
			if (error2) errors.push(error2);
		}
	}

	return [errors, warnings];
}

function CheckSkills(lifepath: bwgr.data.Lifepath, errorPath: string): [bwgr.data.Error[], bwgr.data.Warning[]] {
	const errors: { path: string; type: string; error: string; }[] = [];
	const warnings: { path: string; type: string; warning: string; }[] = [];

	for (const skillKey in lifepath.skills) {
		const [skillCategory, skillName] = lifepath.skills[skillKey].split("➞");

		const error1 = CheckSkillCategory(skillCategory, lifepath.skills[skillKey], errorPath);
		if (error1) errors.push(error1);
		else {
			const error2 = CheckSkillName(skillCategory, skillName, lifepath.skills[skillKey], errorPath);
			if (error2) errors.push(error2);
		}
	}

	return [errors, warnings];
}

function CheckTraits(lifepath: bwgr.data.Lifepath, errorPath: string): [bwgr.data.Error[], bwgr.data.Warning[]] {
	const errors: { path: string; type: string; error: string; }[] = [];
	const warnings: { path: string; type: string; warning: string; }[] = [];

	for (const traitKey in lifepath.traits) {
		const [traitCategory, traitName] = lifepath.traits[traitKey].split("➞");

		const error1 = CheckTraitCategory(traitCategory, lifepath.traits[traitKey], errorPath);
		if (error1) errors.push(error1);
		else {
			const error2 = CheckTraitName(traitCategory, traitName, lifepath.traits[traitKey], errorPath);
			if (error2) errors.push(error2);
		}
	}

	return [errors, warnings];
}

function CheckRequirements(lifepath: bwgr.data.Lifepath, errorPath: string): [bwgr.data.Error[], bwgr.data.Warning[]] {
	const errors: { path: string; type: string; error: string; }[] = [];
	const warnings: { path: string; type: string; warning: string; }[] = [];

	const check = (condition: bwgr.data.ConditionItem) => {
		if (typeof condition === "string") {
			if (condition.startsWith("Skill")) {
				const [, skillCategory, skillName] = condition.split("➞");

				const error1 = CheckSkillCategory(skillCategory, condition, errorPath);
				if (error1) errors.push(error1);
				else {
					const error2 = CheckSkillName(skillCategory, skillName, condition, errorPath);
					if (error2) errors.push(error2);
				}
			}
			else if (condition.startsWith("Trait")) {
				const [, traitCategory, traitName] = condition.split("➞");

				const error1 = CheckTraitCategory(traitCategory, condition, errorPath);
				if (error1) errors.push(error1);
				else {
					const error2 = CheckTraitName(traitCategory, traitName, condition, errorPath);
					if (error2) errors.push(error2);
				}
			}
			else {
				const [leadStock, leadSetting, leadLifepath] = condition.split("➞");

				const error1 = CheckStock(leadStock, condition, errorPath);
				if (error1) errors.push(error1);
				else {
					const error2 = CheckSetting(leadStock, leadSetting, condition, errorPath);
					if (error2) errors.push(error2);
					else {
						const error3 = CheckLifepath(leadStock, leadSetting, leadLifepath, condition, errorPath);
						if (error3) errors.push(error3);
					}
				}
			}
		}
		else {
			for (const itemKey in condition.items) {
				check(condition.items[itemKey]);
			}
		}
	};

	if (lifepath.requirements.conditions) {
		for (const conditionKey in lifepath.requirements.conditions?.items) {
			const condition = lifepath.requirements.conditions.items[conditionKey];
			check(condition);
		}
	}

	return [errors, warnings];
}

function ScanFaultyPaths(): void {
	let errors: { path: string; type: string; error: string; }[] = [];
	let warnings: { path: string; type: string; warning: string; }[] = [];

	for (const stockKey in Stocks) {
		const stock = Stocks[stockKey];

		for (const settingKey in stock.settings) {
			const setting = stock.settings[settingKey];

			for (const lifepathKey in setting.lifepaths) {
				const lifepath = setting.lifepaths[lifepathKey];

				const errorPath = `${stock.name}/${setting.name}/${lifepath.name}`;

				const [lErr, lWarn] = CheckLeads(lifepath, errorPath);
				const [sErr, sWarn] = CheckSkills(lifepath, errorPath);
				const [tErr, tWarn] = CheckTraits(lifepath, errorPath);
				const [rErr, rWarn] = CheckRequirements(lifepath, errorPath);

				errors = [...errors, ...lErr, ...sErr, ...tErr, ...rErr];
				warnings = [...warnings, ...lWarn, ...sWarn, ...tWarn, ...rWarn];
			}
		}
	}

	console.log("/// ERRORS ///");
	console.log(errors);
	console.log("/// WARNINGS ///");
	console.log(warnings);
	console.log("/// END ///");
}

export function DataDebug(): void {
	ScanFaultyPaths();
}
