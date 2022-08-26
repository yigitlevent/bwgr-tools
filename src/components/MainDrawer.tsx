import { Fragment } from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import MailIcon from "@mui/icons-material/Mail";

import { useAppDispatch, useAppSelector } from "../state/store";
import { DrawerItem } from "../state/reducers/drawer";

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
	["Lifepaths", "Skills", "Traits"],
	["Lifepath Randomizer", "Practice Planner", "Magic Wheel"]
	//["Faction", "Unit"]
];

export function MainDrawer() {
	const { open, type } = useAppSelector(state => state.drawer);
	const dispatch = useAppDispatch();

	const closeDrawer = () => {
		dispatch({ type: "CLOSE_DRAWER" });
	};

	const setSelectedItem = (value: DrawerItem) => {
		dispatch({ type: "SELECT_DRAWER_ITEM", payload: { selected: value } });
	};

	return (
		<Drawer
			anchor={"left"}
			variant={type}
			open={open}
			hideBackdrop={true}
			onClose={closeDrawer}
		>
			<Box
				sx={{ width: 250, height: "100%" }}
				role="presentation"
				onClick={() => { if (type !== "persistent") closeDrawer(); }}
				onKeyDown={() => { if (type !== "persistent") closeDrawer(); }}
			>
				<Typography variant="h4" sx={{ padding: "10px 10px" }}>BWGR Tools</Typography>

				{Items.map((v, i) => {
					return (
						<Fragment key={i}>
							<Divider />
							{v.map((item, ii) => {
								return <DrawerListItem key={ii} text={item} icon={<MailIcon />} onClick={() => setSelectedItem(item)} />;
							})}
						</Fragment>
					);
				})}

				<Divider />
			</Box>
		</Drawer>
	);
}
