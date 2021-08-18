import { Fragment } from "react";
import shallow from "zustand/shallow";

import { SkillCategories } from "../../../data/skills";

import { ClientStore } from "../../../stores/ClientStore";

import { NoLink } from "../../shared/Links";
import { Subtitle } from "../../shared/Titles";
import { CategoryItem, CategoryWrapper } from "../../shared/Inner";

export function SkillList(): JSX.Element {
	const { skillMenu } = ClientStore(state => ({ skillMenu: state.skillMenu }), shallow);

	return (
		<Fragment>
			<Subtitle>{skillMenu.category}</Subtitle>
			<CategoryWrapper>
				{SkillCategories[skillMenu.category].skills.map((v, i) => {
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
