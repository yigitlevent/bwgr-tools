import { Fragment, useState } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import DatasetOutlinedIcon from "@mui/icons-material/DatasetOutlined";

import { Menu } from "./Menu";
import { Checklist } from "./Checklist";
import { RulesetSelector } from "./RulesetSelector";
import { useLocation } from "react-router-dom";


export function Drawers() {
	const location = useLocation();

	const [menuExpanded, setMenuExpanded] = useState(false);
	const [datasetsExpanded, setDatasetsExpanded] = useState(false);
	const [checklistExpanded, setChecklistExpanded] = useState(false);

	return (
		<Fragment>
			<Paper variant="outlined" sx={{ position: "fixed", top: "8px", right: "132px", padding: "4px 4px", zIndex: 100000 }}>
				<IconButton
					title="Menu"
					onClick={() => {
						setDatasetsExpanded(false);
						setChecklistExpanded(false);
						setMenuExpanded(v => !v);
					}}
				>
					<ListAltOutlinedIcon color="primary" />
				</IconButton>
			</Paper>

			<Paper variant="outlined" sx={{ position: "fixed", top: "8px", right: "74px", padding: "4px 4px", zIndex: 100000 }}>
				<IconButton
					title="Datasets"
					onClick={() => {
						setMenuExpanded(false);
						setChecklistExpanded(false);
						setDatasetsExpanded(v => !v);
					}}
				>
					<DatasetOutlinedIcon color="primary" />
				</IconButton>
			</Paper>

			<Paper variant="outlined" sx={{ position: "fixed", top: "8px", right: "16px", padding: "4px 4px", zIndex: 100000 }}>
				<IconButton
					title="Datasets"
					onClick={() => {
						setMenuExpanded(false);
						setDatasetsExpanded(false);
						setChecklistExpanded(v => !v);
					}}
					disabled={location.pathname !== "/characterburner"}
				>
					<FactCheckOutlinedIcon color={location.pathname === "/characterburner" ? "primary" : undefined} />
				</IconButton>
			</Paper>

			<Menu expanded={menuExpanded} />
			<RulesetSelector expanded={datasetsExpanded} />
			<Checklist expanded={checklistExpanded} />
		</Fragment>
	);
}
