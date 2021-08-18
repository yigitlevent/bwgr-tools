export function GetOrdinalSuffix(number: number): string {
	const div10 = number % 10;
	const div100 = number % 100;
	if (div10 === 1 && div100 !== 11) return `${number}st`;
	if (div10 === 2 && div100 !== 12) return `${number}nd`;
	if (div10 === 3 && div100 !== 13) return `${number}rd`;
	return `${number}th`;
}
