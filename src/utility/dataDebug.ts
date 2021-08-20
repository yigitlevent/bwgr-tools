import { Stocks } from "../data/stocks";
import { SkillCategories } from "../data/skills";
import { TraitCategories } from "../data/traits";

function ScanFaultyPaths(): void {
	const errors: { path: string; type: string; error: string; }[] = [];

	for (const stockKey in Stocks) {
		const stock = Stocks[stockKey];

		for (const settingKey in stock.settings) {
			const setting = stock.settings[settingKey];

			for (const lifepathKey in setting.lifepaths) {
				const lifepath = setting.lifepaths[lifepathKey];

				const errorPath = `${stock.name}/${setting.name}/${lifepath.name}`;

				// Scan for broken Leads
				for (const leadKey in lifepath.leads) {
					const [leadStock, leadSetting] = lifepath.leads[leadKey].split("➞");

					const stockCheck1 = Object.values(Stocks).some(v => v.name === leadStock);
					const stockCheck2 = leadStock in Stocks;
					if (!stockCheck1 && !stockCheck2) {
						errors.push({
							path: `${errorPath}`,
							type: "Lead/Stock",
							error: `'${leadStock}' for '${lifepath.leads[leadKey]}'`
						});
					}
					else {
						const settingCheck1 = Object.values(Stocks[leadStock].settings).some(v => v.name === leadSetting);
						const settingCheck2 = leadSetting in Stocks[leadStock].settings;
						if (!settingCheck1 && !settingCheck2) {
							errors.push({
								path: `${errorPath}`,
								type: "Lead/Setting",
								error: `'${leadSetting}' for '${lifepath.leads[leadKey]}'`
							});
						}
					}
				}

				// Scan for broken Skills
				for (const skillKey in lifepath.skills) {
					const [skillCategory, skillName] = lifepath.skills[skillKey].split("➞");

					const categoryCheck1 = Object.values(SkillCategories).some(v => v.name === skillCategory);
					const categoryCheck2 = skillCategory in SkillCategories;
					if (!categoryCheck1 && !categoryCheck2) {
						errors.push({
							path: `${errorPath}`,
							type: "Skill/Category",
							error: `'${skillCategory}' for '${lifepath.skills[skillKey]}'`
						});
					}
					else {
						const nameCheck = SkillCategories[skillCategory].skills.some(v => v.name === skillName);
						if (!nameCheck) {
							errors.push({
								path: `${errorPath}`,
								type: "Skill/Name",
								error: `'${skillName}' for '${lifepath.skills[skillKey]}'`
							});
						}
					}
				}

				// Scan for broken Traits
				for (const traitKey in lifepath.traits) {
					const [traitCategory, traitName] = lifepath.traits[traitKey].split("➞");

					const categoryCheck2 = traitCategory in TraitCategories;
					if (!categoryCheck2) {
						errors.push({
							path: `${errorPath}`,
							type: "Trait/Category",
							error: `'${traitCategory}' for '${lifepath.traits[traitKey]}'`
						});
					}
					else {
						const nameCheck = TraitCategories[traitCategory].traits.some(v => v.name === traitName);
						if (!nameCheck) {
							errors.push({
								path: `${errorPath}`,
								type: "Trait/Name",
								error: `'${traitName}' for '${lifepath.traits[traitKey]}'`
							});
						}
					}
				}

			}
		}
	}

	console.log(errors);
}

export function DataDebug(): void {
	ScanFaultyPaths();
}
