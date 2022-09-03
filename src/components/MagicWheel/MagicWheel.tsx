import { createRef, Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import code from "../../assets/fonts/SourceCodePro-SemiBold.woff";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";
import { MagicData } from "../../data/magic";
import { RandomNumber } from "../../utils/misc";

import { BackCanvas } from "./BackCanvas";
import { MainCanvas } from "./MainCanvas";
import { FrontCanvas } from "./FrontCanvas";
import { GenericGrid } from "../Shared/Grids";


const CanvasWrapper = styled.div<{ size: string; }>`
	max-width: 100%;
	width: ${p => (p.size === "0px") ? "580px" : p.size};
	height: ${p => (p.size === "0px") ? "580px" : p.size};

	position: relative;
	margin: 0 auto;

	z-index: 100;
`;

export const MWCONST = { canvasSize: 580, circleRadius: 32, circleOffset: 90, textOffset: 100 };

export function MagicWheel() {
	const { aoe, element, impetus, duration, origin, direction, steps, cover } = useAppSelector(state => state.magicWheel);
	const { mgwChangeAOE, mgwChangeElement, mgwChangeImpetus, mgwChangeDuration, mgwChangeOrigin, mgwChangeDirection, mgwChangeSteps, mgwToggleCover } = useStore().magicWheel;

	const wrapperRef = createRef<HTMLDivElement>();
	const [size, setSize] = useState("0px");
	const [blockAngle, setBlockAngle] = useState([0, 0, 0, 0, 0]);
	const [currentAngle, setCurrentAngle] = useState([0, 0, 0, 0, 0]);
	const [isRotating, setIsRotating] = useState(false);

	const [isFontLoaded, setIsFontLoaded] = useState(false);

	const rotate = useCallback((amount: number): void => {
		setIsRotating(true);

		const facets = [aoe, element, impetus, duration, origin];
		const selected: string[] = ["", "", "", "", ""];
		for (const key in MagicData) {
			const currentIndex = MagicData[key].findIndex(v => facets.includes(v.name));
			let newIndex = currentIndex + amount;
			if (newIndex > MagicData[key].length - 1) { newIndex = newIndex % MagicData[key].length; }
			else if (newIndex < 0) { newIndex = (newIndex % MagicData[key].length + MagicData[key].length) % MagicData[key].length; }

			selected[key] = MagicData[key][newIndex].name;
		}

		mgwChangeAOE(selected[4]);
		mgwChangeElement(selected[3]);
		mgwChangeImpetus(selected[2]);
		mgwChangeDuration(selected[1]);
		mgwChangeOrigin(selected[0]);

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
	}, [aoe, element, impetus, duration, origin, mgwChangeAOE, mgwChangeElement, mgwChangeImpetus, mgwChangeDuration, mgwChangeOrigin, currentAngle, blockAngle]);

	useEffect(() => {
		if (wrapperRef && wrapperRef.current) setSize(window.getComputedStyle(wrapperRef.current).width);
	}, [wrapperRef]);

	useEffect(() => {
		const tempArr = [0, 0, 0, 0, 0];
		for (const arrayKey in MagicData) {
			tempArr[parseInt(arrayKey)] = 4 * Math.PI / MagicData[arrayKey].length;
		}
		setBlockAngle(tempArr);
	}, []);

	useEffect(() => {
		if (!isFontLoaded) {
			const font = new FontFace("Code", `url(${code})`);
			font.load().then(
				(font) => {
					document.fonts.add(font);
					setIsFontLoaded(true);
				},
				console.error
			);
		}
	}, [isFontLoaded]);

	return (
		<Fragment>
			<Typography variant="h3">Magic Wheel</Typography>

			<GenericGrid columns={5} center>
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Area of Effect</InputLabel>
						<Select label="Area of Effect" value={isRotating ? "" : aoe} onChange={mgwChangeAOE} disabled={isRotating}>
							{Object.values(MagicData[4]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Element</InputLabel>
						<Select label="Element" value={isRotating ? "" : element} onChange={mgwChangeElement} disabled={isRotating}>
							{Object.values(MagicData[3]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Impetus</InputLabel>
						<Select label="Impetus" value={isRotating ? "" : impetus} onChange={mgwChangeImpetus} disabled={isRotating}>
							{Object.values(MagicData[2]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Duration</InputLabel>
						<Select label="Duration" value={isRotating ? "" : duration} onChange={mgwChangeDuration} disabled={isRotating}>
							{Object.values(MagicData[1]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Origin</InputLabel>
						<Select label="Origin" value={isRotating ? "" : origin} onChange={mgwChangeOrigin} disabled={isRotating}>
							{Object.values(MagicData[0]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>
			</GenericGrid>

			<Divider sx={{ margin: "10px 0 10px" }} />

			<Button
				variant="outlined"
				disabled={isRotating}
				onClick={() => { if (!isRotating) rotate(((Math.random() > 0.5) ? 1 : -1) * RandomNumber(1, 6)); }}
				fullWidth
			>
				Pray to the Lady Luck
			</Button>

			<Divider sx={{ margin: "2px 0 -8px" }}>
				<Typography>OR</Typography>
			</Divider>

			<GenericGrid columns={2} center>
				<Grid item xs={2} sm={1}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Direction</InputLabel>
						<Select label="Direction" value={direction} onChange={mgwChangeDirection} disabled={isRotating}>
							<MenuItem value={"Clockwise"}>Clockwise</MenuItem>
							<MenuItem value={"Counterclockwise"}>Counterclockwise</MenuItem>
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={2} sm={1}>
					<TextField
						label="Steps"
						inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
						value={steps}
						onChange={mgwChangeSteps}
						fullWidth
						disabled={isRotating}
						variant="standard"
					/>
				</Grid>

				<Grid item xs={2}>
					<Button
						variant="outlined"
						disabled={isRotating}
						onClick={() => { if (!isRotating) rotate((direction === "Clockwise" ? 1 : 0) * steps); }}
						fullWidth
					>
						Turn the Wheel
					</Button>
				</Grid>
			</GenericGrid>

			<Divider sx={{ margin: "10px 0 8px" }} />

			{isFontLoaded
				? <Fragment>
					<CanvasWrapper ref={wrapperRef} size={size}>
						<BackCanvas />
						<MainCanvas currentAngle={currentAngle} blockAngle={blockAngle} />
						<FrontCanvas show={cover} />
					</CanvasWrapper>

					<FormControlLabel
						label="Toggle Cover"
						labelPlacement="start"
						control={<Checkbox checked={cover} onChange={mgwToggleCover} />}
					/>
				</Fragment>
				: <CircularProgress />
			}
		</Fragment >
	);
}
