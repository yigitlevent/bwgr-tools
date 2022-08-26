import { ChangeEvent, createRef, Fragment, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { useAppDispatch, useAppSelector } from "../../state/store";
import { MagicData } from "../../data/magic";
import { clamp, randomNumber } from "../../utils/misc";

import { BackCanvas } from "./BackCanvas";
import { MainCanvas } from "./MainCanvas";
import { FrontCanvas } from "./FrontCanvas";


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
	const dispatch = useAppDispatch();

	const wrapperRef = createRef<HTMLDivElement>();
	const [size, setSize] = useState("0px");
	const [blockAngle, setBlockAngle] = useState([0, 0, 0, 0, 0]);
	const [currentAngle, setCurrentAngle] = useState([0, 0, 0, 0, 0]);
	const [isRotating, setIsRotating] = useState(false);

	const changeAOE = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_AOE", payload: { aoe: event.target.value } });
	};

	const changeElement = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ELEMENT", payload: { element: event.target.value } });
	};

	const changeImpetus = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_IMPETUS", payload: { impetus: event.target.value } });
	};

	const changeDuration = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_DURATION", payload: { duration: event.target.value } });
	};

	const changeOrigin = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ORIGIN", payload: { origin: event.target.value } });
	};

	const changeDirection = (event: SelectChangeEvent) => {
		dispatch({ type: "CHANGE_MAGIC_WHEEL_DIRECTION", payload: { direction: event.target.value as any } });
	};

	const changeSteps = (event: ChangeEvent<HTMLInputElement>) => {
		const value = clamp(event.target.value === "" ? 0 : parseInt(event.target.value), 0, 10);
		dispatch({ type: "CHANGE_MAGIC_WHEEL_STEPS", payload: { steps: value } });
	};

	const toggleCover = () => {
		dispatch({ type: "TOGGLE_MAGIC_WHEEL_COVER" });
	};

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

		dispatch({ type: "CHANGE_MAGIC_WHEEL_AOE", payload: { aoe: selected[4] } });
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ELEMENT", payload: { element: selected[3] } });
		dispatch({ type: "CHANGE_MAGIC_WHEEL_IMPETUS", payload: { impetus: selected[2] } });
		dispatch({ type: "CHANGE_MAGIC_WHEEL_DURATION", payload: { duration: selected[1] } });
		dispatch({ type: "CHANGE_MAGIC_WHEEL_ORIGIN", payload: { origin: selected[0] } });

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
	}, [blockAngle, currentAngle, aoe, dispatch, duration, element, impetus, origin]);

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

	return (
		<Fragment>
			<Typography variant="h3">Magic Wheel</Typography>

			<Grid container spacing={1} columns={5} sx={{ marginTop: 1 }}>
				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-aoe-l">Area of Effect</InputLabel>
						<Select labelId="mw-aoe-l" id="mw-aoe" label="Area of Effect" value={isRotating ? "" : aoe} onChange={changeAOE} disabled={isRotating}>
							{Object.values(MagicData[4]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-el-l">Element</InputLabel>
						<Select labelId="mw-el-l" id="mw-el" label="Element" value={isRotating ? "" : element} onChange={changeElement} disabled={isRotating}>
							{Object.values(MagicData[3]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-imp-l">Impetus</InputLabel>
						<Select labelId="mw-imp-l" id="mw-imp" label="Impetus" value={isRotating ? "" : impetus} onChange={changeImpetus} disabled={isRotating}>
							{Object.values(MagicData[2]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-dur-l">Duration</InputLabel>
						<Select labelId="mw-dur-l" id="mw-dur" label="Duration" value={isRotating ? "" : duration} onChange={changeDuration} disabled={isRotating}>
							{Object.values(MagicData[1]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={5} sm={2} md={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-or-l">Origin</InputLabel>
						<Select labelId="mw-or-l" id="mw-or" label="Origin" value={isRotating ? "" : origin} onChange={changeOrigin} disabled={isRotating}>
							{Object.values(MagicData[0]).map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>
			</Grid>

			<Divider sx={{ margin: "10px 0 10px" }} />

			<Grid container spacing={1} columns={1} justifyContent="center" alignItems="center">
				<Grid item>
					<Button
						variant="outlined"
						disabled={isRotating}
						onClick={() => { if (!isRotating) rotate(((Math.random() > 0.5) ? 1 : -1) * randomNumber(1, 6)); }}
					>
						Pray to the Lady Luck
					</Button>
				</Grid>
			</Grid>

			<Divider sx={{ margin: "2px 0 -8px" }}>
				<Typography>OR</Typography>
			</Divider>

			<Grid container spacing={1} columns={2} sx={{ marginTop: 1 }} justifyContent="center" alignItems="center">
				<Grid item xs={2} sm={1}>
					<FormControl fullWidth>
						<InputLabel id="mw-dir-l">Direction</InputLabel>
						<Select labelId="mw-dir-l" id="mw-dir" label="Direction" value={direction} onChange={changeDirection} disabled={isRotating}>
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
						onChange={changeSteps}
						fullWidth
						disabled={isRotating}
					/>
				</Grid>

				<Grid item>
					<Button
						variant="outlined"
						disabled={isRotating}
						onClick={() => { if (!isRotating) rotate((direction === "Clockwise" ? 1 : 0) * steps); }}
					>
						Turn the Wheel
					</Button>
				</Grid>
			</Grid>

			<Divider sx={{ margin: "10px 0 8px" }} />

			<CanvasWrapper ref={wrapperRef} size={size}>
				<BackCanvas />
				<MainCanvas currentAngle={currentAngle} blockAngle={blockAngle} />
				<FrontCanvas show={cover} />
			</CanvasWrapper>

			<FormControlLabel
				label="Toggle Cover"
				labelPlacement="start"
				control={<Checkbox checked={cover} onChange={toggleCover} />}
			/>
		</Fragment >
	);
}
