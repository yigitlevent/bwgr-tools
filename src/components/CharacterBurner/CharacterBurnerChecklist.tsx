import { Fragment, useEffect, useRef, useState } from "react";

import Alert from "@mui/material/Alert";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AlertTitle from "@mui/material/AlertTitle";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

import { useCharacterBurnerStore } from "../../hooks/stores/useCharacterBurnerStore";


export function CharacterBurnerChecklist() {
	const { concept, name, beliefs, instincts, limits } = useCharacterBurnerStore();

	const [expanded, setExpanded] = useState<"Errors" | "Warnings" | "Completed" | undefined>(undefined);
	const [warnings, setWarnings] = useState<string[]>([]);
	const [errors, setErrors] = useState<string[]>([]);

	const containerRef = useRef(null);

	useEffect(() => {
		const newWarnings: string[] = [];
		const newErrors: string[] = [];

		if (concept === "") newWarnings.push("Concept is not filled.");
		if (name === "") newWarnings.push("Name is not filled.");
		if (beliefs.filter(v => v !== "").length < limits.beliefs - 1) newWarnings.push("Not all beliefs are filled.");
		if (instincts.filter(v => v !== "").length < limits.instincts - 1) newWarnings.push("Not all instincts are filled.");

		setWarnings(newWarnings);
		setErrors(newErrors);
	}, [beliefs, concept, instincts, limits, name]);

	return (
		<Fragment>
			<Paper variant="outlined" ref={containerRef} sx={{ position: "absolute", top: "8px", right: "16px", padding: "4px 4px" }}>
				<IconButton onClick={() => setExpanded(v => v !== undefined ? undefined : "Warnings")} disabled={warnings.length === 0}>
					<ErrorOutlineOutlinedIcon color={warnings.length === 0 ? "disabled" : "warning"} />
				</IconButton>

				<IconButton onClick={() => setExpanded(v => v !== undefined ? undefined : "Errors")} disabled={errors.length === 0}>
					<CancelOutlinedIcon color={errors.length === 0 ? "disabled" : "error"} />
				</IconButton>
			</Paper>

			<Grow in={expanded !== undefined}>
				<Paper variant="outlined" sx={{ position: "absolute", width: "300px", height: "500px", maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 72px)", top: "64px", right: "16px" }}>
					{expanded === "Warnings"
						? <Box sx={{ padding: "8px 16px" }}>
							<Typography variant="h5" sx={{ textAlign: "center" }}>Warnings</Typography>
							<Divider />
							{warnings.map((v, i) => <Typography key={i} variant="body2">• {v}</Typography>)}
						</Box>
						: null
					}
					{expanded === "Errors"
						? <Alert variant="outlined" severity="error">
							<AlertTitle>Errors</AlertTitle>
							{errors.map((v, i) =>
								<Typography key={i} variant="body2">{v}</Typography>
							)}
						</Alert>
						: null
					}
				</Paper>
			</Grow>
		</Fragment>
	);
}
