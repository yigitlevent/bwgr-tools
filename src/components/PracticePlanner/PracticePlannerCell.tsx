import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StopIcon from "@mui/icons-material/Stop";

import { useAppSelector } from "../../state/store";
import { useStore } from "../../state/useStore";


export function PracticePlannerCell({ cell, cellIndex, setNotification }: { cell: Cell; cellIndex: number; setNotification: (value: React.SetStateAction<JSX.Element | null>) => void; }) {
	const { cells } = useAppSelector(state => state.practicePlanner);
	const { prpDeleteCell, prpChangeCellHour, prpDeletePractice } = useStore();

	return (
		<Paper elevation={3} sx={{ padding: "5px 10px", margin: "10px 10px 10px" }}>
			<Stack spacing={0}>
				<Typography>
					Day {cellIndex + 1}
					<IconButton size="small" sx={{ float: "right" }} onClick={() => prpDeleteCell(cellIndex)}><DeleteOutlineIcon fontSize="small" /></IconButton>
					<IconButton size="small" sx={{ float: "right" }} onClick={() => setNotification(prpChangeCellHour(cellIndex, -1, cells, setNotification))}><RemoveCircleOutlineIcon fontSize="small" /></IconButton>
					<IconButton size="small" sx={{ float: "right" }} onClick={() => setNotification(prpChangeCellHour(cellIndex, 1, cells, setNotification))}><AddCircleOutlineIcon fontSize="small" /></IconButton>
				</Typography>

				<Box sx={{ margin: "0 5px 0" }}>
					{[...Array(cell.maxHours)].map((vv, ii) => {
						const filled = (cell.placed.length > 0 ? cell.placed.map(v => v.hours).reduce((pv, cv) => pv + cv) : 0);
						return (
							<StopIcon
								key={ii}
								fontSize="small"
								color={filled >= cell.maxHours ? "error" : ii >= filled ? "success" : "warning"}
								sx={{ margin: "0 0 0 -8px", "&:nth-child(6n)": { marginRight: "3px" } }}
							/>
						);
					})}
				</Box>

				{cell.placed.length > 0 ? <Divider /> : null}

				<Stack spacing={1} sx={{ margin: "6px 0" }}>
					{cell.placed.map((placed, practiceIndex) =>
						<Paper key={practiceIndex} elevation={4} sx={{ padding: "2px 4px" }}>
							{placed.skillName} <Typography variant="caption">({placed.skillType}, {placed.testType}, {placed.hours}hr{placed.hours > 1 ? "s" : ""})</Typography>
							<IconButton size="small" sx={{ float: "right" }} onClick={() => prpDeletePractice(cellIndex, practiceIndex)}><DeleteOutlineIcon fontSize="small" /></IconButton>
						</Paper>
					)}
				</Stack>
			</Stack>
		</Paper>
	);
}
