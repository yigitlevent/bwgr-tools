import { createRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import { THEME } from "../../theme/theme";

import { MWCONST } from "./MagicWheel";


const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 103;
	width: 100%;
`;

export function FrontCanvas({ show }: { show: boolean; }): JSX.Element {
	const canvasRef = createRef<HTMLCanvasElement>();
	const [context, setContext] = useState<CanvasRenderingContext2D>();

	const drawAntiWedge = useCallback((): void => {
		if (context) {
			context.fillStyle = THEME.palette.common.black;

			context.beginPath();
			context.moveTo(MWCONST.canvasSize / 2, MWCONST.canvasSize / 2);
			context.arc(MWCONST.canvasSize / 2, MWCONST.canvasSize / 2, MWCONST.circleOffset + (MWCONST.circleRadius * 6), -Math.PI * 7 / 18, Math.PI * 25 / 18);
			context.closePath();
			context.fill();
		}
	}, [context]);

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, MWCONST.canvasSize, MWCONST.canvasSize);
			if (show) drawAntiWedge();
		}
	}, [context, show, drawAntiWedge]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={MWCONST.canvasSize} width={MWCONST.canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
