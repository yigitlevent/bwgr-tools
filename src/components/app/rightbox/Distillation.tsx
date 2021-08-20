import { useCallback, useState } from "react";
import SelectSearch from "react-select-search";

import { MagicData } from "../../../data/magic";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { Controls, Line } from "../../shared/Single";
import { Divider } from "../../shared/Divider";

export function Distillation(): JSX.Element {
	const [selected, setSelected] = useState<string[]>([MagicData[0][0].name, MagicData[1][0].name, MagicData[2][0].name, MagicData[3][0].name, MagicData[4][0].name]);

	const facetChange = useCallback((value: string, circleIndex: number): void => {
		const tempSel = [...selected];
		tempSel[circleIndex] = value;
		setSelected(tempSel);
	}, [selected]);

	return (
		<SubBox>
			<Subtitle>Distillation</Subtitle>


			<Controls>
				<Line>
					<SelectSearch
						options={[...Object.values(MagicData[4]).map(v => { return { name: v.name, value: v.name }; })]}
						value={selected[4]}
						onChange={(e) => facetChange(e as any, 4)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[3]).map(v => { return { name: v.name, value: v.name }; })]}
						value={selected[3]}
						onChange={(e) => facetChange(e as any, 3)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[2]).map(v => { return { name: v.name, value: v.name }; })]}
						value={selected[2]}
						onChange={(e) => facetChange(e as any, 2)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[1]).map(v => { return { name: v.name, value: v.name }; })]}
						value={selected[1]}
						onChange={(e) => facetChange(e as any, 1)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[0]).map(v => { return { name: v.name, value: v.name }; })]}
						value={selected[0]}
						onChange={(e) => facetChange(e as any, 0)}
					/>
				</Line>

				<Divider />

				<Line>

				</Line>
			</Controls>


		</SubBox>
	);
}
