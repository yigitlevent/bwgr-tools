import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { useRulesetStore } from "../../hooks/stores/useRulesetStore";


export function Datasets({ expanded }: { expanded: boolean; }) {
	const { checkRulesets, toggleDataset } = useRulesetStore();

	return (
		<Slide direction="left" in={expanded}>
			<Card variant="outlined" sx={{ overflow: "auto", position: "fixed", width: "350px", height: "calc(100% - 72px)", maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 72px)", top: "64px", right: "16px", zIndex: 100000 }}>
				<Box sx={{ padding: "12px 16px 36px" }}>
					<Typography variant="h5" sx={{ textAlign: "center" }}>Datasets</Typography>

					<Divider />

					<List>
						<ListItem disablePadding>
							<ListItemButton disabled>
								<ListItemIcon sx={{ margin: 0 }}>{checkRulesets(["bwg"]) ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</ListItemIcon>
								<ListItemText primary="Burning Wheel Gold Revised" sx={{ margin: "0 0 2px -10px" }} />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton onClick={() => toggleDataset("bwc")}>
								<ListItemIcon sx={{ margin: 0 }}>{checkRulesets(["bwc"]) ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</ListItemIcon>
								<ListItemText primary="Burning Wheel Codex" sx={{ margin: "0 0 2px -10px" }} />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton onClick={() => toggleDataset("msc")}>
								<ListItemIcon sx={{ margin: 0 }}>{checkRulesets(["msc"]) ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</ListItemIcon>
								<ListItemText primary="House Rules" sx={{ margin: "0 0 2px -10px" }} />
							</ListItemButton>
						</ListItem>

						<ListItem disablePadding>
							<ListItemButton onClick={() => toggleDataset("amw")}>
								<ListItemIcon sx={{ margin: 0 }}>{checkRulesets(["amw"]) ? <CheckIcon color="success" /> : <CloseIcon color="error" />}</ListItemIcon>
								<ListItemText primary="Alternative Magic Wheel" sx={{ margin: "0 0 2px -10px" }} />
							</ListItemButton>
						</ListItem>
					</List>
				</Box>
			</Card>
		</Slide >
	);
}
