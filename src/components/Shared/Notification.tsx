import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


export function Notification({ text, severity, onClose }: { text: string; severity: AlertColor, onClose: () => void; }) {
	return (
		<Snackbar open={true} autoHideDuration={5000} onClose={onClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
			<Alert severity={severity} sx={{ width: "100%" }}>
				{text}
			</Alert>
		</Snackbar>
	);
}
