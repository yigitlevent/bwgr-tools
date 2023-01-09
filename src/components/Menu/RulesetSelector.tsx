import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useRulesetStore } from "../../hooks/stores/useRulesetStore";
import { CoreRulesets, ExpansionRuleset, ExpansionRulesets } from "../../data/rulesets";


export function RulesetSelector({ expanded }: { expanded: boolean; }) {
	const { checkRulesets, checkExactRulesets, toggleDataset } = useRulesetStore();

	return (
		<Slide direction="left" in={expanded}>
			<Card variant="outlined" sx={{ overflow: "auto", position: "fixed", width: "350px", height: "calc(100% - 72px)", maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 72px)", top: "64px", right: "16px", zIndex: 100000 }}>
				<Box sx={{ padding: "12px 16px 36px" }}>
					<Typography variant="h5" sx={{ textAlign: "center" }}>Datasets</Typography>

					<Divider />

					{CoreRulesets.map((coreRuleset, i) =>
						<List key={i} disablePadding>
							<ListItemButton onClick={() => toggleDataset(coreRuleset.id)}>
								<ListItemIcon sx={{ margin: 0 }}>
									{checkRulesets([coreRuleset.id])
										? <CheckIcon color="success" />
										: <CloseIcon color="error" />}
								</ListItemIcon>
								<ListItemText primary={coreRuleset.name} sx={{ margin: "0 0 2px -10px" }} />
								{coreRuleset.isOffical
									? <CheckCircleOutlineIcon titleAccess="Official" fontSize="small" />
									: null
								}
							</ListItemButton>

							{coreRuleset.expansions.length > 0
								? <List disablePadding sx={{ marginLeft: 4 }}>
									{coreRuleset.expansions.map((expansionRulesetId, ii) => {
										const expansionRuleset = ExpansionRulesets.find(er => er.id === expansionRulesetId) as ExpansionRuleset;
										return (
											<ListItemButton key={ii} onClick={() => toggleDataset(expansionRuleset.id)} disabled={!checkRulesets([coreRuleset.id])}>
												<ListItemIcon sx={{ margin: 0 }}>
													{checkExactRulesets([coreRuleset.id, expansionRuleset.id])
														? <CheckIcon color="success" />
														: <CloseIcon color="error" />
													}
												</ListItemIcon>
												<ListItemText primary={expansionRuleset.name} sx={{ margin: "0 0 2px -10px" }} />
												{coreRuleset.isOffical
													? <CheckCircleOutlineIcon titleAccess="Official" fontSize="small" />
													: null
												}
											</ListItemButton>
										);
									})}
								</List>
								: null
							}
						</List>
					)}
				</Box>
			</Card>
		</Slide >
	);
}
