import { TraitCategories } from "../../../../data/traits";
import { NameMaker } from "../../../../utility/nameMaker";

import { List, ListTitle, ListBlock, ListPoint } from "../../../shared/Inner";
import { NoLink } from "../../../shared/Links";

function GetTrait(traitPath: string): bwgr.data.Trait {
	const path = traitPath.split("➞");
	const trait = TraitCategories[path[0]].traits.find(v => v.name === path[1]);
	if (trait === undefined) console.error(`Cannot find '${traitPath}'`);
	return trait as bwgr.data.Trait;
}

export function Traits({ traitPool, traits }: { traitPool: number; traits: bwgr.path.Trait[]; }): JSX.Element {
	return (
		<List>
			<ListTitle>Traits:</ListTitle>
			<ListBlock>
				<ListPoint>{traitPool}{(traitPool > 1) ? "pts" : "pt"}:</ListPoint>
				{(traits.length !== 0)
					? traits.map((traitPath, traitIndex) => <NoLink key={traitIndex} data={["Trait", GetTrait(traitPath)]} seperator={","}>{NameMaker(traitPath, 1, ["trait", "traits"])}</NoLink>)
					: "—"}
			</ListBlock>
		</List>
	);
}
