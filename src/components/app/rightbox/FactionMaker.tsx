import { useCallback, useEffect, useState } from "react";
import shallow from "zustand/shallow";

import { EmptyFaction } from "../../../data/faction";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Divider } from "../../shared/Divider";
import { Button, Input, Textarea } from "../../shared/Inputs";
import { BlockCenterer, MakerBlock, MakerSideBlock, MakerWrapper } from "../../shared/Maker";
import { Subtitle } from "../../shared/Titles";

export function FactionMaker(): JSX.Element {
	const { currentIndex, factions, addFaction, removeFaction } = ClientStore(state => ({
		currentIndex: state.factionMenu.currentIndex,
		factions: state.factionMenu.factions,
		addFaction: state.addFaction,
		removeFaction: state.removeFaction,
	}), shallow);

	const [currentFaction, setCurrentFaction] = useState<bwgr.data.FactionCard>(EmptyFaction);

	const changeValue = useCallback((property: string, value: any, index?: number, subproperty?: "name" | "description"): void => {
		const newFac = { ...currentFaction };

		if (index !== undefined && subproperty !== undefined) {
			((newFac[property] as bwgr.data.ListItem[])[index] as bwgr.data.ListItem)[subproperty] = value;
		}
		else if (index !== undefined && subproperty === undefined) {
			(newFac[property] as any[])[index] = value;
		}
		else if (index === undefined && subproperty === undefined) {
			newFac[property] = value;
		}

		setCurrentFaction({ ...newFac });
	}, [currentFaction]);

	const createList = useCallback((listName: string, name: string): JSX.Element[] => {
		let elements: JSX.Element[] = [];
		if (currentFaction[listName]) {
			elements = (currentFaction[listName] as bwgr.data.ListItem[]).map((value, index) => {
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
					const newItem = [...(currentFaction[listName] as bwgr.data.ListItem[]), { name: "", description: "" }];
					const newFac = { ...currentFaction };
					newFac[listName] = newItem;
					setCurrentFaction({ ...newFac });
				}}
			/>
		);

		return elements;
	}, [changeValue, currentFaction]);

	useEffect(() => {
		setCurrentFaction((currentIndex > -1) ? factions[currentIndex] : EmptyFaction);
	}, [currentIndex, factions]);

	return (
		<SubBox>
			<Subtitle>Faction Maker</Subtitle>

			<MakerWrapper>
				<Input type="text" placeholder="name"
					value={currentFaction.name} onChange={(e) => changeValue("name", e.target.value)}
				/>
				<Input type="text" placeholder="leader"
					value={currentFaction.leader} onChange={(e) => changeValue("leader", e.target.value)}
				/>
				<Input type="text" placeholder="type"
					value={currentFaction.type} onChange={(e) => changeValue("type", e.target.value)}
				/>

				<Textarea className="short" placeholder="inner circle"
					value={currentFaction.innerCircle} onChange={(e) => changeValue("innerCircle", e.target.value)}
				/>

				<div>
					<MakerSideBlock columns={"70px 30px"} rows={"auto"}>
						<label>Influence</label>
						<Input type="number" placeholder="0" min={0} max={3}
							value={currentFaction.influence} onChange={(e) => changeValue("influence", e.target.value)}
						/>
					</MakerSideBlock>

					<MakerSideBlock columns={"70px 30px"} rows={"auto"}>
						<label>Funds</label>
						<Input type="number" placeholder="0" min={0} max={100}
							value={currentFaction.funds} onChange={(e) => changeValue("funds", e.target.value)}
						/>
					</MakerSideBlock>
				</div>

				<Divider title={"Doctrines & Traditions"} />

				<Textarea placeholder="doctrine"
					value={currentFaction.doctrines[0]} onChange={(e) => changeValue("doctrines", e.target.value, 0)}
				/>
				<Textarea placeholder="doctrine"
					value={currentFaction.doctrines[1]} onChange={(e) => changeValue("doctrines", e.target.value, 1)}
				/>
				<Textarea placeholder="doctrine"
					value={currentFaction.doctrines[2]} onChange={(e) => changeValue("doctrines", e.target.value, 2)}
				/>

				<Input type="text" placeholder="tradition"
					value={currentFaction.traditions[0]} onChange={(e) => changeValue("traditions", e.target.value, 0)}
				/>
				<Input type="text" placeholder="tradition"
					value={currentFaction.traditions[1]} onChange={(e) => changeValue("traditions", e.target.value, 1)}
				/>
				<Input type="text" placeholder="tradition"
					value={currentFaction.traditions[2]} onChange={(e) => changeValue("traditions", e.target.value, 2)}
				/>

				<Divider title={"Traits"} />
				{createList("traits", "trait")}

				<Divider title={"Alliances"} />
				{createList("alliances", "ally")}

				<Divider title={"Allegiances"} />
				{createList("allegiances", "subject")}

				<Divider title={"Rivals"} />
				{createList("rivals", "rival")}

				<Divider title={"Territories"} />
				{createList("territories", "territory")}

				<Divider title={"Assets"} />
				{createList("assets", "asset")}

				<Divider />

				<BlockCenterer>
					<Button value={"Save Faction"} onClick={() => addFaction(currentFaction)} />
					<Button value={"Delete Faction"} onClick={() => removeFaction(currentIndex)} />
				</BlockCenterer>
			</MakerWrapper>
		</SubBox>
	);
}
