import { createRef, useCallback, useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { DarkTheme } from "../../../theme/themes";

import { MagicData } from "../../../data/magic";

import { ClientStore } from "../../../stores/ClientStore";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { Button, Input } from "../../shared/Inputs";
import { Divider } from "../../shared/Divider";
import { RandomNumber } from "../../../utility/randomNumber";

const Canvas = styled.canvas`
	max-height: 100%;
	max-width: 100%;

	margin: 10px auto;
`;

const Controls = styled.div`
	width: 100%;
`;

const Line = styled.div`
	width: max-content;
	margin: 0 auto;

	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	& > input:is([type="button"]) {
		margin: 3px auto;
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
	const { canvasSize, circleRadius, circleOffset, textOffset } = ClientStore(state => ({
		canvasSize: state.magicwheelMenu.canvasSize,
		circleRadius: state.magicwheelMenu.circleRadius,
		circleOffset: state.magicwheelMenu.circleOffset,
		textOffset: state.magicwheelMenu.textOffset
	}), shallow);

	const canvasRef = createRef<HTMLCanvasElement>();

	const [context, setContext] = useState<CanvasRenderingContext2D>();

	const [isHidden, setIsHidden] = useState(true);
	const [isClockwise, setIsClockwise] = useState(1);
	const [steps, setSteps] = useState(0);

	const [isRotating, setIsRotating] = useState(false);
	const [blockAngle, setBlockAngle] = useState([0, 0, 0, 0, 0]);
	const [currentAngle, setCurrentAngle] = useState([0, 0, 0, 0, 0]);

	const drawCircles = useCallback((): void => {
		if (context) {
			const color = DarkTheme.background.subelement
				.substring(4, DarkTheme.background.subelement.length - 1)
				.split(", ")
				.map(v => parseInt(v));

			context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

			for (let i = 6; i >= 1; i--) {
				context.beginPath();
				context.arc(canvasSize / 2, canvasSize / 2, circleOffset + (circleRadius * i), 0, 2 * Math.PI);
				context.stroke();
				context.fill();
			}
		}
	}, [context, canvasSize, circleRadius, circleOffset]);

	const drawString = useCallback((string, radius, anglePerCharacter): void => {
		if (context) {
			const color = DarkTheme.text.main
				.substring(4, DarkTheme.text.main.length - 1)
				.split(", ")
				.map(v => parseInt(v));

			context.font = "16px Consolas";
			context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

			for (let i = 0; i < string.length; i++) {
				context.rotate(anglePerCharacter);

				context.save();
				context.translate(0, -1 * radius);
				context.fillText(string[i], 0, 0);

				context.restore();
			}
		}
	}, [context]);

	const drawText = useCallback((rotationArray: number[]): void => {
		if (context) {
			for (const arrayKey in MagicData) {
				for (const stringKey in MagicData[arrayKey]) {
					const length = MagicData[arrayKey][stringKey].length;

					const radius = circleRadius * (parseInt(arrayKey) + 1) + textOffset;
					const anglePerCharacter = 8 * (1 / radius);

					const stringStartAngle = ((blockAngle[parseInt(arrayKey)] - (anglePerCharacter * length)) / 2);
					const blockStartAngle = ((blockAngle[parseInt(arrayKey)] * parseInt(stringKey) - (anglePerCharacter * 2)) / 2);

					context.save();
					context.translate(canvasSize / 2, canvasSize / 2);
					context.rotate(rotationArray[parseInt(arrayKey)] + stringStartAngle + blockStartAngle);

					drawString(MagicData[arrayKey][stringKey], radius, anglePerCharacter);

					context.restore();
				}
			}
		}
	}, [context, canvasSize, circleRadius, blockAngle, textOffset, drawString]);

	const drawAntiWedge = useCallback((): void => {
		if (context) {
			const color = DarkTheme.background.surface
				.substring(4, DarkTheme.background.surface.length - 1)
				.split(", ")
				.map(v => parseInt(v));

			context.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

			context.beginPath();
			context.moveTo(canvasSize / 2, canvasSize / 2);
			context.arc(canvasSize / 2, canvasSize / 2, circleOffset + (circleRadius * 6), -Math.PI * 7 / 18, Math.PI * 25 / 18);
			context.closePath();
			context.fill();
		}
	}, [canvasSize, circleRadius, context, circleOffset]);

	const drawAll = useCallback((rotationArray: number[]): void => {
		if (context) {
			context.clearRect(0, 0, canvasSize, canvasSize);
			context.fillStyle = DarkTheme.background.element;
			context.fillRect(0, 0, canvasSize, canvasSize);

			drawCircles();
			drawText(rotationArray);
			if (isHidden) drawAntiWedge();
		}
	}, [context, isHidden, canvasSize, drawCircles, drawText, drawAntiWedge]);

	const rotate = useCallback((amount: number): void => {
		setIsRotating(true);

		const currentRotation = [...currentAngle];
		const targetRotation = [...currentAngle].map((v, i) => v + (amount * (blockAngle[i] / 2)));

		let myReq: number = 0;

		let tempRotation = [...currentRotation];

		let skip = true;
		let done = false;
		const step = () => {
			skip = !skip;
			if (!skip) {
				tempRotation = [...tempRotation].map((v, i) => {
					const tempVal = v + (0.05 * amount);
					if ((amount > 0 && tempVal >= targetRotation[i])
						|| (amount < 0 && tempVal <= targetRotation[i])) return targetRotation[i];
					return tempVal;
				});

				drawAll(tempRotation);

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

	}, [blockAngle, currentAngle, drawAll]);

	useEffect(() => {
		const tempArr = [0, 0, 0, 0, 0];
		for (const arrayKey in MagicData) {
			tempArr[parseInt(arrayKey)] = 4 * Math.PI / MagicData[arrayKey].length;
		}
		setBlockAngle(tempArr);
	}, []);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d", { alpha: false }) as CanvasRenderingContext2D);
	}, [canvasRef]);

	useEffect(() => {
		drawAll(currentAngle);
	}, [currentAngle, drawAll]);

	return (
		<SubBox>
			<Subtitle>Magic Wheel</Subtitle>

			<Controls>
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

			<Canvas id={"MWCanvas"} ref={canvasRef} height={canvasSize} width={canvasSize}></Canvas>

			<Controls>
				<Line>
					<Button value={"Toggle Cover"} onClick={() => setIsHidden(v => !v)} />
				</Line>
			</Controls>
		</SubBox>
	);
}
