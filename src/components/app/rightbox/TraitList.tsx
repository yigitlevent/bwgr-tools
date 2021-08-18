import { Fragment } from "react";
import shallow from "zustand/shallow";

import { TraitCategories } from "../../../data/traits";

import { ClientStore } from "../../../stores/ClientStore";

import { NoLink } from "../../shared/Links";
import { Subtitle } from "../../shared/Titles";
import { CategoryItem, CategoryWrapper } from "../../shared/Inner";

export function TraitList(): JSX.Element {
	const { traitMenu } = ClientStore(state => ({ traitMenu: state.traitMenu }), shallow);

	return (
		<Fragment>
			<Subtitle>{traitMenu.category}</Subtitle>
			<CategoryWrapper>
				{TraitCategories[traitMenu.category].traits.map((v, i) => {
					return (
						<CategoryItem key={i}>
							<NoLink>{v.name}</NoLink>
						</CategoryItem>
					);
				})}
			</CategoryWrapper>
		</Fragment>
	);
}
