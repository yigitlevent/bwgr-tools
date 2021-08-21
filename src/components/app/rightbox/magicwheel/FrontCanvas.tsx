import { createRef, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { DarkTheme } from "../../../../theme/themes";

import { ClientStore } from "../../../../stores/ClientStore";

const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 103;
	width: 100%;
`;

export function FrontCanvas({ isHidden }: { isHidden: boolean; }): JSX.Element {
	const { canvasSize, circleRadius, circleOffset } = ClientStore(state => ({
		canvasSize: state.magicwheelMenu.canvasSize,
		circleRadius: state.magicwheelMenu.circleRadius,
		circleOffset: state.magicwheelMenu.circleOffset
	}), shallow);

	const canvasRef = createRef<HTMLCanvasElement>();
	const [context, setContext] = useState<CanvasRenderingContext2D>();

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

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, canvasSize, canvasSize);
			if (isHidden) drawAntiWedge();
		}
	}, [context, isHidden, canvasSize, drawAntiWedge]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={canvasSize} width={canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
