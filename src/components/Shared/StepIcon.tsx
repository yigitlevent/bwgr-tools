import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { StepIconProps } from "@mui/material/StepIcon";


const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean; }; }>(
	({ theme }) => ({
		display: "flex",
		height: 22,
		alignItems: "center",
		"& .QontoStepIcon-completedIcon": {
			color: theme.palette.success.main,
			zIndex: 1,
			fontSize: 18,
			marginLeft: "4px"
		},
		"& .QontoStepIcon-circle": {
			color: theme.palette.warning.main,
			width: 8,
			height: 8,
			marginLeft: "8px",
			borderRadius: "50%",
			backgroundColor: "currentColor"
		},
		"& .QontoStepIcon-nextIcon": {
			color: theme.palette.error.main,
			zIndex: 1,
			fontSize: 18,
			marginLeft: "4px"
		}
	})
);

export function StepIcon(props: StepIconProps) {
	const { active, completed, className } = props;

	return (
		<QontoStepIconRoot ownerState={{ active }} className={className}>
			{completed
				? <CheckIcon className="QontoStepIcon-completedIcon" />
				: active
					? <div className="QontoStepIcon-circle" />
					: <CloseIcon className="QontoStepIcon-nextIcon" />
			}
		</QontoStepIconRoot>
	);
}
