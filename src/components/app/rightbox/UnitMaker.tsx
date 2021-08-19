import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { EmptyUnit } from "../../../data/emptyUnit";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Divider } from "../../shared/Divider";
import { Button, Input, Textarea } from "../../shared/Inputs";
import { MakerWrapper } from "../../shared/Maker";
import { Subtitle } from "../../shared/Titles";

export function UnitMaker(): JSX.Element {
	const { unitIndex, units, addUnit, removeUnit } = ClientStore(state => ({
		unitIndex: state.unitMenu.unitIndex,
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
		return elements;
	}, [changeValue, currentUnit]);

	useEffect(() => {
		setCurrentUnit((unitIndex > -1) ? units[unitIndex] : EmptyUnit);
	}, [unitIndex, units]);

	return (
		<SubBox>
			<Subtitle>Unit Maker</Subtitle>

			<MakerWrapper>
				{/** */}

				<Divider title={"Traits"} />
				{/** */}

				<Divider title={"Stats"} />
				{/** */}

				<Divider title={"Aspects"} />
				{/** */}
			</MakerWrapper>
		</SubBox>
	);
}
