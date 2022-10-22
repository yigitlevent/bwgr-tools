export function CheckDatasets(datasets: Ruleset[], allowed: Ruleset[]): boolean {
	return datasets.some(dataset => allowed.includes(dataset));
}
