import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { DuelOfWitsActions, DuelOfWitsAction } from "../../data/duelOfWits";


export function DuelOfWitsActionDetails({ action }: { action: DuelOfWitsAction; }) {
	return (
		<Stack spacing={0} sx={{ width: "100%" }}>
			{action.tests
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Tests:</b>
					<Typography variant="body2">{action.tests.join(", ")}</Typography>
				</Box>
				: null
			}

			{action.speakingThePart
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Speaking the part:</b>
					{action.speakingThePart.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}
			{action.special
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Special:</b>
					{action.special.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}
			{action.effects
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Effects:</b>
					{action.effects.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}
			{action.resolution
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Resolution:</b>
					{DuelOfWitsActions.map((v, i) => {
						const res = action.resolution[v.name] ? action.resolution[v.name] : "—";
						return <Typography variant="body2" key={i}>{v.name}: {res}</Typography>;
					})}
				</Box>
				: null
			}
		</Stack>
	);
}
