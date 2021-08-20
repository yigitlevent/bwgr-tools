import { createRef, useCallback, useState } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { DarkTheme } from "../../../../theme/themes";

import { ClientStore } from "../../../../stores/ClientStore";
import { useEffect } from "react";

const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0; 
	z-index: 101;
`;

export function BackCanvas(): JSX.Element {
	const { canvasSize, circleRadius, circleOffset } = ClientStore(state => ({
		canvasSize: state.magicwheelMenu.canvasSize,
		circleRadius: state.magicwheelMenu.circleRadius,
		circleOffset: state.magicwheelMenu.circleOffset
	}), shallow);

	const canvasRef = createRef<HTMLCanvasElement>();
	const [context, setContext] = useState<CanvasRenderingContext2D>();

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

	useEffect(() => {
		if (context) {
			context.clearRect(0, 0, canvasSize, canvasSize);
			drawCircles();
		}
	}, [context, canvasSize, drawCircles]);

	useEffect(() => {
		setContext(canvasRef.current?.getContext("2d") as CanvasRenderingContext2D);
	}, [canvasRef]);

	return (
		<Canvas ref={canvasRef} height={canvasSize} width={canvasSize}>Your browser does not support canvas.</Canvas>
	);
}
