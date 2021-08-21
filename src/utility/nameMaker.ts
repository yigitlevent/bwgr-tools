export function NameMaker(name: string, index: number, extension?: [singular: string, plural: string]): string {
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
