import { createRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { THEME } from "../../theme/theme";

import { MagicData } from "../../data/magic";

import { MWCONST } from "./MagicWheel";


const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 102;
	width: 100%;
`;

export function MainCanvas({ currentAngle, blockAngle }: { currentAngle: number[]; blockAngle: number[]; }): JSX.Element {
	const canvasRef = createRef<HTMLCanvasElement>();
	const [context, setContext] = useState<CanvasRenderingContext2D>();

	const drawString = useCallback((string: string, radius: number, anglePerCharacter: number): void => {
		if (context) {
			for (let i = 0; i < string.length; i++) {
				context.rotate(anglePerCharacter);

				context.save();

				context.translate(0, -1 * radius);
				context.font = "14px 'Code'";
				context.fillStyle = THEME.palette.primary.light;
				context.fillText(string[i].toLowerCase(), 0, 0);

				context.restore();
			}
		}
	}, [context]);

	const drawText = useCallback((rotationArray: number[]): void => {
		if (context) {
			for (const arrayKey in MagicData) {
				for (const stringKey in MagicData[arrayKey]) {
					const length = MagicData[arrayKey][stringKey].name.length;

					const radius = MWCONST.circleRadius * (parseInt(arrayKey) + 1) + MWCONST.textOffset;
					const anglePerCharacter = 8 * (1 / radius);

					const stringStartAngle = ((blockAngle[parseInt(arrayKey)] - (anglePerCharacter * length)) / 2);
					const blockStartAngle = ((blockAngle[parseInt(arrayKey)] * -parseInt(stringKey) - (anglePerCharacter * 2)) / 2);

					context.save();
					context.translate(MWCONST.canvasSize / 2, MWCONST.canvasSize / 2);
					context.rotate(rotationArray[parseInt(arrayKey)] + stringStartAngle + blockStartAngle - (blockAngle[parseInt(arrayKey)] / 2));

					drawString(MagicData[arrayKey][stringKey].name, radius, anglePerCharacter);

					context.restore();
				}
			}
		}
	}, [context, blockAngle, drawString]);

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, MWCONST.canvasSize, MWCONST.canvasSize);
			drawText(currentAngle);
		}
	}, [context, currentAngle, drawText]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={MWCONST.canvasSize} width={MWCONST.canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
