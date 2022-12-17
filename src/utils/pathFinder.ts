import { Lifepath, Stocks } from "../data/stocks/_stocks";

export function GetPathFromLifepath(lp: Lifepath) {
	return `${lp.stock}➞${lp.setting}➞${lp.name}`;
}

export function GetLifepathFromPath(path: string) {
	const spl = path.split("➞");
	return Stocks[spl[0]].settings[spl[1]].lifepaths.find(lp => lp.name === spl[2]);
}
