interface FactionCard {
	basics: {
		name: string;
		leader: string;
		type: string;
		membership: string;
		innerCircle: string;
		doctrines: [string, string, string];
		traditions: [string, string, string];
		traits: string[];
	};
	stats: {
		influence: number;
		funds: number;
	};
	politics: {
		alliances: { name: string; description: string; }[];
		allegiances: { name: string; description: string; }[];
		rivals: { name: string; description: string; }[];
		territories: { name: string; description: string; }[];
		assets: { name: string; description: string; }[];
	};
}