import { NameMaker } from "../../../../utility/nameMaker";

import { List, ListTitle, ListBlock, ListPoint } from "../../../shared/Inner";
import { NoLink } from "../../../shared/Links";

export function Traits({ traitPool, traits }: { traitPool: number; traits: bwgr.path.Trait[]; }): JSX.Element {
	return (
		<List>
			<ListTitle>Traits:</ListTitle>
			<ListBlock>
				<ListPoint>{traitPool}{(traitPool > 1) ? "pts" : "pt"}:</ListPoint>
				{(traits.length !== 0)
					? traits.map((trait, traitIndex) => <NoLink key={traitIndex} seperator={","}>{NameMaker(trait, 1, ["trait", "traits"])}</NoLink>)
					: "—"}
			</ListBlock>
		</List>
	);
}
