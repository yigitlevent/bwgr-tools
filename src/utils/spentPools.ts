import { CharacterBurnerStatsState } from "../state/reducers/characterBurner";
import { LifepathTotals } from "./lifepathTotals";


export function GetRemainingMentalPool(totals: LifepathTotals, stats: CharacterBurnerStatsState) {
	const base = totals.ageStats[0] + totals.mental;
	const minus = stats.Perception.main
		+ stats.Will.main;
	return base - minus;
}

export function GetRemainingPhysicalPool(totals: LifepathTotals, stats: CharacterBurnerStatsState) {
	const base = totals.ageStats[1] + totals.physical;
	const minus = stats.Power.main + (stats.Power.shade === "G" ? 5 : 0)
		+ stats.Agility.main + (stats.Agility.shade === "G" ? 5 : 0)
		+ stats.Forte.main + (stats.Forte.shade === "G" ? 5 : 0)
		+ stats.Speed.main + (stats.Speed.shade === "G" ? 5 : 0);
	return base - minus;
}

export function GetRemainingEitherPool(totals: LifepathTotals, stats: CharacterBurnerStatsState) {
	const base = totals.either;
	const minus = stats.Perception.either + stats.Will.either + stats.Power.either + stats.Agility.either + stats.Forte.either + stats.Speed.either;
	return base - minus;
}
