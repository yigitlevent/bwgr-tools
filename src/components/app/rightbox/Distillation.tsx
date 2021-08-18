import { Fragment } from "react";
import shallow from "zustand/shallow";

import { SkillCategories } from "../../../data/skills";

import { ClientStore } from "../../../stores/ClientStore";

import { NoLink } from "../../shared/Links";
import { Subtitle } from "../../shared/Titles";
import { CategoryItem, CategoryWrapper } from "../../shared/Inner";

export function Distillation(): JSX.Element {
	const { skillMenu } = ClientStore(state => ({ skillMenu: state.skillMenu }), shallow);

	return (
		<Fragment>
			<Subtitle>Distillation</Subtitle>
			
		</Fragment>
	);
}
