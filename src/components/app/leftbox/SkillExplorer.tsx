import { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import shallow from "zustand/shallow";

import { SkillCategories } from "../../../data/skills";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Button } from "../../shared/Inputs";
import { Subtitle } from "../../shared/Titles";

export function SkillExplorer(): JSX.Element {
	const { skillMenu, setActiveMenu, setSkillCategory } = ClientStore(state => ({
		skillMenu: state.skillMenu,
		setActiveMenu: state.setActiveMenu,
		setSkillCategory: state.setSkillCategory
	}), shallow);

	const [category, setCategory] = useState(skillMenu.category);

	return (
		<SubBox>
			<Subtitle>Skill Explorer</Subtitle>

			<SelectSearch
				options={[{ name: "", value: "" }, ...Object.keys(SkillCategories).map(k => { return { name: k, value: k }; })]}
				value={category}
				search filterOptions={fuzzySearch}
				placeholder="Choose a Skill Category"
				onChange={(selectedValue) => { setCategory(selectedValue as any); }}
			/>

			{(category !== "")
				? <Button value={"List"} onClick={() => { setActiveMenu("skill"); setSkillCategory(category); }} />
				: null
			}
		</SubBox>
	);
}
