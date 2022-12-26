import Button, { ButtonProps } from "@mui/material/Button";


export function AbilityButton(props: ButtonProps): JSX.Element {
	return <Button
		size="small"
		variant="outlined"
		sx={{ minWidth: "30px", width: "30px", display: "inline-block", marginRight: 1 }}
		{...props}
	/>;
}
