export function CheckDatasets(datasets: Ruleset[], allowed: Ruleset[]): boolean {
	return datasets.some(dataset => allowed.includes(dataset));
}

export function CheckExactDatasets(datasets: Ruleset[], allowed: Ruleset[]): boolean {
	return datasets.every(dataset => allowed.includes(dataset));
}
