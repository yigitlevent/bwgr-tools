export function NameMaker(name: string, index: number, extension?: string): string {
	const split = name.split("➞");

	if (split[index].includes("*-")) {
		return `${split[index][0]} ${split[index - 1].split(" ")[1].toLowerCase()}-type${(extension) ? ` ${extension}` : ""}`;
	}
	else if (split[index].includes("*ANY")) {
		return `any ${split[index][0]} ${split[index - 1].split(" ")[1].toLowerCase()}${(extension) ? ` ${extension}` : ""}`;
	}
	else if (split[index].includes("*")) {
		return `${split[index][0]} ${split[index - 1].split(" ")[1].toLowerCase()}${(extension) ? ` ${extension}` : ""}`;
	}

	return split[index];
}
