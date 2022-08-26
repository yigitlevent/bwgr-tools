interface FactionCard {
	[key: string]: string | string[] | [string, string, string] | number | ListItem[];
	name: string;
	leader: string;
	type: string;
	membership: string;
	innerCircle: string;
	doctrines: [string, string, string];
	traditions: [string, string, string];
	traits: string[];
	influence: number;
	funds: number;
	alliances: [];
	allegiances: ListItem[];
	rivals: ListItem[];
	territories: ListItem[];
	assets: ListItem[];
}

export const EmptyFaction: FactionCard = {
	name: "",
	leader: "",
	type: "",
	membership: "",
	innerCircle: "",
	doctrines: ["", "", ""],
	traditions: ["", "", ""],
	traits: [],
	influence: 0,
	funds: 0,
	alliances: [],
	allegiances: [],
	rivals: [],
	territories: [],
	assets: []
};
