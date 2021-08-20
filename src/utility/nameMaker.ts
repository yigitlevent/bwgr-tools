export function NameMaker(name: string, extension: string): string {
	const split = name.split("➞");

	if (split[1].includes("*-")) {
		return `${split[1][0]} ${split[0].split(" ")[1].toLowerCase()}-type${(extension) ? ` ${extension}` : ""}`;
	}
	else if (split[1].includes("*ANY")) {
		return `any ${split[1][0]} ${split[0].split(" ")[1].toLowerCase()}${(extension) ? ` ${extension}` : ""}`;
	}
	else if (split[1].includes("*")) {
		return `${split[1][0]} ${split[0].split(" ")[1].toLowerCase()}${(extension) ? ` ${extension}` : ""}`;
	}

	return split[1];
}
