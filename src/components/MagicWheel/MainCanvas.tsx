import { createRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { MagicFacet } from "../../data/magic";

import { THEME } from "../../theme/theme";

import { MWCONST } from "./MagicWheel";


const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 102;
	width: 100%;
`;

export function MainCanvas({ currentAngles, blockAngle, magicData }: { currentAngles: number[]; blockAngle: number[]; magicData: MagicFacet[][]; }): JSX.Element {
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
			for (const arrayKey in magicData) {
				for (const stringKey in magicData[arrayKey]) {
					const length = magicData[arrayKey][stringKey].name.length;

					const radius = MWCONST.circleRadius * (parseInt(arrayKey) + 1) + MWCONST.textOffset;
					const anglePerCharacter = 8 * (1 / radius);

					const stringStartAngle = ((blockAngle[parseInt(arrayKey)] - (anglePerCharacter * length)) / 2);
					const blockStartAngle = ((blockAngle[parseInt(arrayKey)] * -parseInt(stringKey) - (anglePerCharacter * 2)) / 2);

					context.save();
					context.translate(MWCONST.canvasSize / 2, MWCONST.canvasSize / 2);
					context.rotate(rotationArray[parseInt(arrayKey)] + stringStartAngle + blockStartAngle - (blockAngle[parseInt(arrayKey)] / 2));

					drawString(magicData[arrayKey][stringKey].name, radius, anglePerCharacter);

					context.restore();
				}
			}
		}
	}, [context, magicData, blockAngle, drawString]);

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, MWCONST.canvasSize, MWCONST.canvasSize);
			drawText(currentAngles);
		}
	}, [context, blockAngle, currentAngles, drawText]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={MWCONST.canvasSize} width={MWCONST.canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
