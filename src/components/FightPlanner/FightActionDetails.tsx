import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { FightActionExtended } from "../../state/reducers/fight";


const FightResolutionActions = [
	"Great Strike", "Strike", "Avoid", "Block", "Counterstrike", "Beat", "Disarm", "Faint", "Charge/Tackle", "Lock", "Push", "Throw"
];

export function FightPlannerActionDetails({ action }: { action: FightActionExtended; }) {
	return (
		<Stack spacing={0} sx={{ width: "100%" }}>
			{action.test
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Tests:</b>
					<Typography variant="body2">{action.test}</Typography>
				</Box>
				: null
			}

			<Box sx={{ margin: "0 0 10px" }}>
				<b>Action Type:</b>
				<Typography variant="body2">{action.group}</Typography>
			</Box>

			{action.restrictions
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Restrictions:</b>
					{action.restrictions.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}

			{action.effect
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Effect:</b>
					{action.effect.split("<br>").map((v, i) =>
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

			{action.cost
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Action Cost:</b>
					{action.cost.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}

			{action.interactions
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Interactions:</b>
					{action.interactions.split("<br>").map((v, i) =>
						<Typography variant="body2" key={i}>{v}</Typography>
					)}
				</Box>
				: null
			}

			{action.resolution
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Resolution:</b>
					{FightResolutionActions.map((v, i) => {
						if (action.resolution) {
							const res = action.resolution[v] ? action.resolution[v] : "—";
							return <Typography variant="body2" key={i}>{v}: {res}</Typography>;
						}
						return null;
					})}
				</Box>
				: null
			}

			{action.resolutionAgainst
				? <Box sx={{ margin: "0 0 10px" }}>
					<b>Resolution:</b>
					{FightResolutionActions.map((v, i) => {
						if (action.resolutionAgainst) {
							const res = action.resolutionAgainst[v] ? action.resolutionAgainst[v] : "—";
							return <Typography variant="body2" key={i}>{v}: {res}</Typography>;
						}
						return null;
					})}
				</Box>
				: null
			}
		</Stack>
	);
}
