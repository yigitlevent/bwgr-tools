export function randomNumber(min: number, max: number): number {
	return (min - 1) + Math.ceil(Math.random() * (max - min + 1));
}

export function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}