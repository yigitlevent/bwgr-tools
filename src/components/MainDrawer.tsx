import { Fragment } from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";

import { useAppSelector } from "../state/store";
import { DrawerItem } from "../state/reducers/drawer";
import { useStore } from "../state/useStore";


function DrawerListItem({ text, icon, onClick }: { text: string; icon?: JSX.Element; onClick?: () => void; }) {
	return (
		<ListItem key={text} disablePadding>
			<ListItemButton onClick={onClick}>
				{icon ?
					<ListItemIcon>
						{icon}
					</ListItemIcon>
					: null
				}
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}

const Items: DrawerItem[][] = [
	["Dice Roller"],
	["Lifepaths", "Skills", "Traits", "Resources"],
	["Lifepath Randomizer", "Practice Planner", "Magic Wheel"],
	["Duel of Wits Planner", "Range and Cover Planner", "Fight Planner"]
];

export function MainDrawer() {
	const { open, type } = useAppSelector(state => state.drawer);
	const { drwCloseDrawer, drwSetSelectedItem } = useStore().drawer;

	const closeDrawer = () => {
		if (type !== "persistent") drwCloseDrawer();
	};

	return (
		<Drawer
			anchor={"left"}
			variant={type}
			open={open}
			hideBackdrop={type === "persistent"}
			onClose={closeDrawer}
			sx={{ background: "paper" }}
			PaperProps={{ elevation: 2 }}
		>
			<Box sx={{ width: 250, height: "100%" }} onClick={closeDrawer} onKeyDown={closeDrawer}>
				<Typography variant="h4" sx={{ padding: "10px 10px" }}>BWGR Tools</Typography>

				{Items.map((v, i) => {
					return (
						<Fragment key={i}>
							<Divider />
							{v.map((item, ii) => {
								return <DrawerListItem key={ii} text={item} onClick={() => drwSetSelectedItem(item)} />;
							})}
						</Fragment>
					);
				})}
				<Divider />
			</Box>

			<Box sx={{ width: 250, position: "absolute", bottom: "0", padding: 1 }} onClick={closeDrawer} onKeyDown={closeDrawer}>
				<IconButton aria-label="delete" href="https://github.com/yigitlevent/bwgr-tools">
					<GitHubIcon />
				</IconButton>
			</Box>
		</Drawer>
	);
}
