import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

import { GenericGrid } from "../../Shared/Grids";


export function QuestionModal({ openQu, openQuModal }: { openQu: boolean; openQuModal: (open: boolean) => void; }) {



	return (
		<Modal open={openQu} onClose={() => openQuModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none" }}>
				<GenericGrid columns={1} spacing={[2, 2]} center>
					<Grid item xs={1}>
					</Grid>
				</GenericGrid>
			</Paper>
		</Modal>
	);
}
