import { forwardRef, Fragment, useMemo } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Fingerprint from "@mui/icons-material/Fingerprint";
import GroupWorkOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import SportsKabaddiOutlinedIcon from "@mui/icons-material/SportsKabaddiOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { THEME } from "../../theme/theme";


// eslint-disable-next-line @typescript-eslint/naming-convention
function RouteButton({ title, route, Icon }: { title: string; route: string; Icon: OverridableComponent<any>; }) {
	const location = useLocation();

	const renderLink = useMemo(() => forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(itemProps, ref) {
		return <RouterLink to={route} ref={ref} {...itemProps} role={undefined} />;
	}), [route]);

	return (
		<ListItem disablePadding>
			<ListItemButton component={renderLink}>
				<ListItemIcon sx={{ margin: 0 }}>
					<Icon color={location.pathname === route ? "primary" : undefined} />
				</ListItemIcon>
				<ListItemText primary={title} sx={{ margin: "0 0 2px -10px", color: location.pathname === route ? THEME.palette.primary.main : undefined }} />
			</ListItemButton>
		</ListItem>
	);
}

export function Menu({ expanded }: { expanded: boolean; }) {
	const items: [string, string, OverridableComponent<any>][] = [
		["Lifepaths List", "/lifepaths", Fingerprint],
		["Skills List", "/skills", GroupWorkOutlinedIcon],
		["Traits List", "/traits", CategoryOutlinedIcon],
		["Resources List", "/resources", PaidOutlinedIcon],
		["Practice Planner", "/practiceplanner", EventNoteOutlinedIcon],
		["Fight Planner", "/fightplanner", SportsKabaddiOutlinedIcon],
		["Range and Cover Planner", "/racplanner", ModeStandbyOutlinedIcon],
		["Duel of Wits Planner", "/dowplanner", QuestionAnswerOutlinedIcon],
		["Dice Roller", "/diceroller", CasinoOutlinedIcon],
		["Character Burner", "/characterburner", LocalFireDepartmentOutlinedIcon],
		["Magic Wheel", "/magicwheel", AutoAwesomeOutlinedIcon]
	];

	return (
		<Slide direction="left" in={expanded}>
			<Card variant="outlined" sx={{ overflow: "auto", position: "fixed", width: "350px", height: "calc(100% - 72px)", maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 72px)", top: "64px", right: "16px", zIndex: 100000 }}>
				<Box sx={{ padding: "12px 16px 36px" }}>
					<Typography variant="h5" sx={{ textAlign: "center" }}>Menu</Typography>

					<Divider />

					<List>
						{items.map((item, i) => {
							return (
								<Fragment key={i}>
									<RouteButton title={item[0]} route={item[1]} Icon={item[2]} />
									{[3, 7].includes(i) ? <Divider /> : null}
								</Fragment>
							);
						})}
					</List>
				</Box>
			</Card>
		</Slide>
	);
}
