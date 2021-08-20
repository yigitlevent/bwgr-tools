import { useCallback, useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import styled from "styled-components";

import { MagicData } from "../../../data/magic";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { Button, Input } from "../../shared/Inputs";
import { Divider } from "../../shared/Divider";
import { RandomNumber } from "../../../utility/randomNumber";

import { BackCanvas } from "./magicwheel/BackCanvas";
import { MainCanvas } from "./magicwheel/MainCanvas";
import { FrontCanvas } from "./magicwheel/FrontCanvas";

const CanvasWrapper = styled.div`
	max-height: 100%;
	max-width: 100%;
	width: 580px;
	height: 580px;
	
	position: relative;

	z-index: 100;
`;

const Controls = styled.div`
	width: 100%;
`;

const Line = styled.div`
	width: auto;
	margin: 0 auto;

	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	& > input:is([type="button"]) {
		margin: 3px 0;
	}

	& > span {
		font-size: 18px;
		width: max-content;
		padding: 0 8px 3px;
	}

	& > div {
		width: 160px;
	}

	& > * {
		flex: 0 0 auto;
	}
`;

export function MagicWheel(): JSX.Element {
	const [isHidden, setIsHidden] = useState(true);
	const [isClockwise, setIsClockwise] = useState(1);
	const [steps, setSteps] = useState(0);

	const [isRotating, setIsRotating] = useState(false);
	const [selected, setSelected] = useState<string[]>([MagicData[0][0].name, MagicData[1][0].name, MagicData[2][0].name, MagicData[3][0].name, MagicData[4][0].name]);
	const [blockAngle, setBlockAngle] = useState([0, 0, 0, 0, 0]);
	const [currentAngle, setCurrentAngle] = useState([0, 0, 0, 0, 0]);

	const rotate = useCallback((amount: number): void => {
		setIsRotating(true);

		const tmpSel: string[] = ["", "", "", "", ""];
		for (const key in MagicData) {
			const currentIndex = MagicData[key].findIndex(v => v.name === selected[key]);

			let newIndex = currentIndex + amount;
			if (newIndex > MagicData[key].length - 1) {
				newIndex = newIndex % MagicData[key].length;
			}
			else if (newIndex < 0) {
				newIndex = (newIndex % MagicData[key].length + MagicData[key].length) % MagicData[key].length;
			}

			tmpSel[key] = MagicData[key][newIndex].name;
		}
		setSelected([...tmpSel]);

		const currentRotation = [...currentAngle];
		const targetRotation = [...currentAngle].map((v, i) => v + (amount * (blockAngle[i] / 2)));

		let myReq: number = 0;

		let tempRotation = [...currentRotation];

		let skip = true;
		let done = false;
		const step = () => {
			skip = !skip;

			tempRotation = [...tempRotation].map((v, i) => {
				const tempVal = (v + (0.05 * amount));
				if ((amount > 0 && tempVal >= targetRotation[i])
					|| (amount < 0 && tempVal <= targetRotation[i])) return targetRotation[i];
				return tempVal;
			});

			if (!skip) {
				setCurrentAngle(tempRotation);

				if ((amount > 0 && tempRotation.every((v, i) => v >= targetRotation[i]))
					|| (amount < 0 && tempRotation.every((v, i) => v <= targetRotation[i]))) {
					done = true;
				}
			}

			if (done) {
				cancelAnimationFrame(myReq);
				setIsRotating(false);
			}
			else myReq = requestAnimationFrame(step);
		};

		myReq = requestAnimationFrame(step);
	}, [selected, blockAngle, currentAngle]);

	const startConditionChange = useCallback((value: string, circleIndex: number): void => {
		const selectionIndex = MagicData[circleIndex].findIndex(v => v.name === value);
		if (selectionIndex > -1) {
			const tempSel = [...selected];
			tempSel[circleIndex] = MagicData[circleIndex][selectionIndex].name;

			currentAngle[circleIndex] = (blockAngle[circleIndex] / 2) * selectionIndex;
			setCurrentAngle([...currentAngle]);
			setSelected(tempSel);
		}
	}, [blockAngle, currentAngle, selected]);

	useEffect(() => {
		const tempArr = [0, 0, 0, 0, 0];
		for (const arrayKey in MagicData) {
			tempArr[parseInt(arrayKey)] = 4 * Math.PI / MagicData[arrayKey].length;
		}
		setBlockAngle(tempArr);
	}, []);

	return (
		<SubBox>
			<Subtitle>Magic Wheel</Subtitle>

			<Controls>
				<Line>
					<SelectSearch
						options={[...Object.values(MagicData[4]).map(v => { return { name: v.name, value: v.name }; })]}
						value={(!isRotating) ? selected[4] : ""}
						onChange={(e) => startConditionChange(e as any, 4)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[3]).map(v => { return { name: v.name, value: v.name }; })]}
						value={(!isRotating) ? selected[3] : ""}
						onChange={(e) => startConditionChange(e as any, 3)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[2]).map(v => { return { name: v.name, value: v.name }; })]}
						value={(!isRotating) ? selected[2] : ""}
						onChange={(e) => startConditionChange(e as any, 2)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[1]).map(v => { return { name: v.name, value: v.name }; })]}
						value={(!isRotating) ? selected[1] : ""}
						onChange={(e) => startConditionChange(e as any, 1)}
					/>
					<SelectSearch
						options={[...Object.values(MagicData[0]).map(v => { return { name: v.name, value: v.name }; })]}
						value={(!isRotating) ? selected[0] : ""}
						onChange={(e) => startConditionChange(e as any, 0)}
					/>
				</Line>

				<Divider />

				<Line>
					<SelectSearch
						options={[{ name: "clockwise", value: 1 }, { name: "counterclockwise", value: -1 }]}
						value={`${isClockwise}`}
						onChange={(selected) => { setIsClockwise(parseInt(selected as any)); }}
					/>
					<Input
						type={"number"}
						value={steps}
						min={1} max={6}
						onChange={(e) => setSteps(parseInt(e.target.value))}
					/>
					<span>steps</span>
					<Button
						value={"Turn the Wheel"}
						onClick={() => { if (!isRotating) rotate(isClockwise * steps); }}
					/>
				</Line>

				<Divider title={"or"} />

				<Line>
					<Button
						value={"Pray to the Lady of Luck"}
						onClick={() => {
							if (!isRotating) rotate(((RandomNumber(0, 2) > 1) ? 1 : -1) * RandomNumber(1, 6));
						}}
					/>
				</Line>
			</Controls>

			<CanvasWrapper>
				<BackCanvas />
				<MainCanvas currentAngle={currentAngle} blockAngle={blockAngle} />
				<FrontCanvas isHidden={isHidden} />
			</CanvasWrapper>

			<Controls>
				<Line>
					<Button value={"Toggle Cover"} onClick={() => setIsHidden(v => !v)} />
				</Line>
			</Controls>
		</SubBox>
	);
}
