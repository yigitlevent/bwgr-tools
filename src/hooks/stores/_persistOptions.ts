export const EnablePersist = import.meta.env.MODE !== "development";

const Versions: { [key: string]: number; } = {
	interface: 1,
	ruleset: 1,
	characterBurner: 1,
	lifepathRandomizer: 1,
	practicePlanner: 1,
	fightPlanner: 1,
	rangeAndCoverPlanner: 1,
	duelOfWitsPlanner: 1,
	magicWheel: 1
};

function GetVersion(key: string) {
	return EnablePersist ? Versions[key] : Math.round(Math.random() * 100000);
}

export const InterfaceStoreVersion = GetVersion("interface");
export const RulesetStoreVersion = GetVersion("rulesetStore");
export const CharacterBurnerStoreVersion = GetVersion("characterBurner");
export const LifepathRandomizerStoreVersion = GetVersion("lifepathRandomizer");
export const PracticePlannerStoreVersion = GetVersion("practicePlanner");
export const FightPlannerStoreVersion = GetVersion("fightPlanner");
export const RangeAndCoverPlannerStoreVersion = GetVersion("rangeAndCoverPlanner");
export const DuelOfWitsPlannerStoreVersion = GetVersion("duelOfWitsPlanner");
export const MagicWheelStoreVersion = GetVersion("magicWheel");
