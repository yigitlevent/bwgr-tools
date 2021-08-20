import { useCallback, useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import shallow from "zustand/shallow";

import { EmptyUnit, UnitStatuses } from "../../../data/unit";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Divider } from "../../shared/Divider";
import { Button, Input, Textarea } from "../../shared/Inputs";
import { MakerBlock, MakerSideBlock, MakerWrapper } from "../../shared/Maker";
import { Subtitle } from "../../shared/Titles";

export function UnitMaker(): JSX.Element {
	const { currentIndex, units, addUnit, removeUnit } = ClientStore(state => ({
		currentIndex: state.unitMenu.currentIndex,
		units: state.unitMenu.units,
		addUnit: state.addUnit,
		removeUnit: state.removeUnit,
	}), shallow);

	const [currentUnit, setCurrentUnit] = useState<bwgr.data.UnitCard>(EmptyUnit);

	const changeValue = useCallback((property: string, value: any, index?: number, subproperty?: "name" | "description"): void => {
		const newUnt = { ...currentUnit };

		if (index !== undefined && subproperty !== undefined) {
			((newUnt[property] as bwgr.data.ListItem[])[index] as bwgr.data.ListItem)[subproperty] = value;
		}
		else if (index !== undefined && subproperty === undefined) {
			(newUnt[property] as any[])[index] = value;
		}
		else if (index === undefined && subproperty === undefined) {
			newUnt[property] = value;
		}

		setCurrentUnit({ ...newUnt });
	}, [currentUnit]);

	const createList = useCallback((listName: string, name: string): JSX.Element[] => {
		let elements: JSX.Element[] = [];
		if (currentUnit[listName]) {
			elements = (currentUnit[listName] as bwgr.data.ListItem[]).map((value, index) => {
				return (
					<MakerBlock key={index}>
						<Input type="text" placeholder={`${name} name`}
							value={value.name} onChange={(e) => changeValue(listName, e.target.value, index, "name")}
						/>
						<Textarea placeholder="description"
							value={value.description} onChange={(e) => changeValue(listName, e.target.value, index, "description")}
						/>
					</MakerBlock>
				);
			});
		}

		elements.push(
			<Button
				key={"button"}
				value={"Add New"}
				onClick={() => {
					const newItem = [...(currentUnit[listName] as bwgr.data.ListItem[]), { name: "", description: "" }];
					const newUnt = { ...currentUnit };
					newUnt[listName] = newItem;
					setCurrentUnit({ ...newUnt });
				}}
			/>
		);

		return elements;
	}, [changeValue, currentUnit]);

	useEffect(() => {
		setCurrentUnit((currentIndex > -1) ? units[currentIndex] : EmptyUnit);
	}, [currentIndex, units]);

	return (
		<SubBox>
			<Subtitle>Unit Maker</Subtitle>

			<MakerWrapper>
				<Input type="text" placeholder="name"
					value={currentUnit.name} onChange={(e) => changeValue("name", e.target.value)}
				/>
				<Input type="text" placeholder="commander"
					value={currentUnit.commander} onChange={(e) => changeValue("commander", e.target.value)}
				/>

				<SelectSearch
					options={[...UnitStatuses.map(v => { return { name: v, value: v }; })]}
					value={currentUnit.status} onChange={(e) => changeValue("status", (e as any).value)}
				/>
				<Input type="text" placeholder="type"
					value={currentUnit.type} onChange={(e) => changeValue("type", e.target.value)}
				/>
				<Input type="text" placeholder="composition"
					value={currentUnit.composition} onChange={(e) => changeValue("composition", e.target.value)}
				/>

				<Divider title={"Doctrine & Tradition"} />
				<Textarea className="short" placeholder="doctrine"
					value={currentUnit.doctrine} onChange={(e) => changeValue("doctrine", e.target.value)}
				/>
				<Input type="text" placeholder="tradition"
					value={currentUnit.tradition} onChange={(e) => changeValue("tradition", e.target.value)}
				/>

				<Divider title={"Gear"} />
				<Textarea className="short" placeholder="weaponry"
					value={currentUnit.weaponry} onChange={(e) => changeValue("weaponry", e.target.value)}
				/>
				<Textarea className="short" placeholder="armor"
					value={currentUnit.armor} onChange={(e) => changeValue("armor", e.target.value)}
				/>
				<Textarea className="short" placeholder="trainings"
					value={currentUnit.trainings} onChange={(e) => changeValue("trainings", e.target.value)}
				/>

				<Divider title={"Traits"} />
				{createList("traits", "trait")}

				<Divider title={"Stats"} />
				<MakerSideBlock>
					<label>Ambush</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.ambush[0]} onChange={(e) => changeValue("ambush", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.ambush[1]} onChange={(e) => changeValue("ambush", e.target.value, 1)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Battle</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.battle[0]} onChange={(e) => changeValue("battle", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.battle[1]} onChange={(e) => changeValue("battle", e.target.value, 1)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Siege</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.siege[0]} onChange={(e) => changeValue("siege", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.siege[1]} onChange={(e) => changeValue("siege", e.target.value, 1)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Skirmish</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.skirmish[0]} onChange={(e) => changeValue("skirmish", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.skirmish[1]} onChange={(e) => changeValue("skirmish", e.target.value, 1)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Soldiering</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.soldiering[0]} onChange={(e) => changeValue("soldiering", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.soldiering[1]} onChange={(e) => changeValue("soldiering", e.target.value, 1)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Seamanship</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.seamanship[0]} onChange={(e) => changeValue("seamanship", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.seamanship[1]} onChange={(e) => changeValue("seamanship", e.target.value, 1)}
					/>
				</MakerSideBlock>

				<Divider title={"Attributes"} />
				<MakerSideBlock>
					<label>Health</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.health[0]} onChange={(e) => changeValue("health", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.health[1]} onChange={(e) => changeValue("health", e.target.value, 1)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.health[2]} onChange={(e) => changeValue("health", e.target.value, 2)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Steel</label>
					<SelectSearch
						options={[{ name: "B", value: "B" }, { name: "G", value: "G" }, { name: "W", value: "W" }]}
						value={currentUnit.steel[0]} onChange={(e) => changeValue("steel", (e as any).value, 0)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.steel[1]} onChange={(e) => changeValue("steel", e.target.value, 1)}
					/>
					<Input type="number" placeholder="0" min={0} max={6}
						value={currentUnit.steel[1]} onChange={(e) => changeValue("steel", e.target.value, 2)}
					/>
				</MakerSideBlock>

				<Divider title={"Aspects"} />
				<MakerSideBlock>
					<label>Strature</label>
					<Input type="number" placeholder="0" min={0} max={10}
						value={currentUnit.strature} onChange={(e) => changeValue("strature", e.target.value)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Strength</label>
					<Input type="number" placeholder="0" min={0} max={10}
						value={currentUnit.strength} onChange={(e) => changeValue("strength", e.target.value)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Stride</label>
					<Input type="number" placeholder="0" min={0} max={10}
						value={currentUnit.stride} onChange={(e) => changeValue("stride", e.target.value)}
					/>
				</MakerSideBlock>
				<MakerSideBlock>
					<label>Supply</label>
					<Input type="number" placeholder="0" min={0} max={10}
						value={currentUnit.supply} onChange={(e) => changeValue("supply", e.target.value)}
					/>
				</MakerSideBlock>

				<Button key={"button"} value={"Save Unit"} onClick={() => addUnit(currentUnit)} />
				<Button key={"button"} value={"Delete Unit"} onClick={() => removeUnit(currentIndex)} />
			</MakerWrapper>
		</SubBox>
	);
}
