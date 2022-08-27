export function RandomNumber(min: number, max: number) {
	return (min - 1) + Math.ceil(Math.random() * (max - min + 1));
}

export function Clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}

export function GetOrdinalSuffix(number: number) {
	const div10 = number % 10;
	const div100 = number % 100;
	if (div10 === 1 && div100 !== 11) return `${number}st`;
	if (div10 === 2 && div100 !== 12) return `${number}nd`;
	if (div10 === 3 && div100 !== 13) return `${number}rd`;
	return `${number}th`;
}

export function MakeName(name: string, index: number, extension?: [singular: string, plural: string]) {
	const split = name.split("➞");

	if (split[index].includes("*")) {
		const numberStr = parseInt(split[index][0]);
		const categoryStr = (split[index - 1].includes(" ")) ? split[index - 1].split(" ")[1].toLowerCase() : split[index - 1];
		const extensionStr = (extension) ? (numberStr > 1) ? ` ${extension[1]}` : ` ${extension[0]}` : "";

		if (split[index].includes("*-")) {
			return `${numberStr} ${categoryStr}-type${extensionStr}`;
		}
		else if (split[index].includes("*ANY")) {
			return `any ${numberStr} ${categoryStr}${extensionStr}`;
		}
		else if (split[index].includes("*")) {
			return `${numberStr} ${split[index].split("*")[1]}${extensionStr}`;
		}
	}
	return split[index];
}
