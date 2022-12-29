import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useCharacterBurnerStore } from "../../../hooks/stores/useCharacterBurnerStore";
import { AttributeQuestions, AttributeQuestionsKeys } from "../../../data/attributes";

import { GenericGrid } from "../../Shared/Grids";


export function QuestionModal({ openQu, openQuModal }: { openQu: boolean; openQuModal: (open: boolean) => void; }) {
	const { questions, switchAnswer } = useCharacterBurnerStore();

	return (
		<Modal open={openQu} onClose={() => openQuModal(false)}>
			<Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "800px", width: "100%", padding: "0 24px 24px", border: "none", overflow: "auto" }}>
				<GenericGrid columns={1} spacing={[2, 2]} center>
					{Object.keys(questions)
						.map((v, i) => {
							const qkey = v as AttributeQuestionsKeys;
							const question = AttributeQuestions[qkey].text;
							const isTrue = questions[qkey];
							return (
								<Grid key={i} item xs={1}>
									<Checkbox checked={isTrue} onChange={() => switchAnswer(qkey)} sx={{ margin: "0 0 3px", padding: 0, display: "inline-block", height: "24px" }} />
									<Typography sx={{ display: "inline", margin: "6px 0 0 8px" }}>
										{question}
									</Typography>
								</Grid>
							);
						})}
				</GenericGrid>
			</Paper>
		</Modal>
	);
}
