import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { GetSkillFromPath, GetTraitFromPath } from "../../utils/pathFinder";

import { PopoverLink } from "../Shared/PopoverLink";


interface BlockTextProps {
	text: string;
	hasLeftPadding?: boolean;
}

export function BlockText({ text, hasLeftPadding }: BlockTextProps) {
	return (
		<Grid item>
			<Typography sx={{ paddingLeft: hasLeftPadding ? "10px" : undefined, paddingTop: "3px" }}>{text}</Typography>
		</Grid>
	);
}

interface BlockSkillPopoverProps {
	skillName: string;
	checkbox?: {
		checked: boolean;
		disabled?: boolean;
		onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	};
}

export function BlockSkillPopover({ skillName, checkbox }: BlockSkillPopoverProps) {
	return (
		<Grid item>
			{checkbox
				? <Checkbox
					checked={checkbox.checked}
					disabled={checkbox.disabled}
					onChange={checkbox.onChange}
					sx={{ margin: "0 0 4px 0", padding: "0" }}
				/>
				: null
			}
			<Typography sx={{ cursor: "pointer", display: "inline-block", margin: "6px 0 0 8px" }}>
				<PopoverLink data={GetSkillFromPath(skillName)} />
			</Typography>
		</Grid>
	);
}

interface BlockTraitPopoverProps {
	traitName: string;
	checkbox?: {
		checked: boolean;
		disabled?: boolean;
		onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
	};
}

export function BlockTraitPopover({ traitName, checkbox }: BlockTraitPopoverProps) {
	return (
		<Grid item>
			{checkbox
				? <Checkbox
					checked={checkbox.checked}
					disabled={checkbox.disabled}
					onChange={checkbox.onChange}
					sx={{ margin: "0 0 4px 0", padding: "0" }}
				/>
				: null
			}
			<Typography sx={{ cursor: "pointer", display: "inline-block", margin: "6px 0 0 8px" }}>
				<PopoverLink data={GetTraitFromPath(traitName)} />
			</Typography>
		</Grid>
	);
}
