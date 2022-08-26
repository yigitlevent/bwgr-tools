import { createRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { THEME } from "../../theme/theme";

import { MWCONST } from "./MagicWheel";


const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 101;
	width: 100%;
`;

export function BackCanvas(): JSX.Element {
	const canvasRef = createRef<HTMLCanvasElement>();
	const [context, setContext] = useState<CanvasRenderingContext2D>();

	const drawCircles = useCallback((): void => {
		if (context) {
			context.fillStyle = THEME.palette.grey[900];

			for (let i = 6; i >= 1; i--) {
				context.beginPath();
				context.arc(MWCONST.canvasSize / 2, MWCONST.canvasSize / 2, MWCONST.circleOffset + (MWCONST.circleRadius * i), 0, 2 * Math.PI);
				context.stroke();
				context.fill();
			}
		}
	}, [context]);

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, MWCONST.canvasSize, MWCONST.canvasSize);
			drawCircles();
		}
	}, [context, drawCircles]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={MWCONST.canvasSize} width={MWCONST.canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
