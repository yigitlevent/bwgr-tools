import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Divider from "@mui/material/Divider";

import { useCharacterBurnerStore } from "../../hooks/stores/useCharacterBurnerStore";

import { StepIcon } from "../Shared/StepIcon";


const ChecklistSteps: { label: string, description: string[]; }[] = [
	{
		label: "Write character concept",
		description: [
			"Concepts should abide by two guidelines: They should be feasible for the genre/style of your group, and they should be tied into the situation at hand."
		]
	},
	{
		label: "Choose lifepaths",
		description: [
			"Choose lifepaths by clicking the 'Add Lifepath' menu. You can also use random lifepaths menu to get a list of random lifepaths.",
			"At this stage, you should also head into the 'Special Lifepaths' and/or 'Special Skills' menus if they are enabled."
		]
	},
	{
		label: "Check stock specifics",
		description: [
			"Head into 'Stock Specific' menu to determine all the required stock specific information."
		]
	},
	{
		label: "Spend stat points",
		description: [
			"Spend your physical, mental, and either pools to their respective stats."
		]
	},
	{
		label: "Spend skill points",
		description: [
			"Spend your general and lifepath skill points on skill exponents or opening skills. You may also use 'Add General Skill' menu to add new skills that can be opened and advanced with general points."
		]
	},
	{
		label: "Spend trait points",
		description: [
			"Spend your trait points on opening traits. You may also use 'Add General Trait' menu to add new trait that can be opened."
		]
	},
	{
		label: "Answer questions",
		description: [
			"Use 'Answer Questions' menu to give the answers about your character's past.",
			"You may also shift the shade of some of the attributes that have an exponent 6 or more."
		]
	},
	{
		label: "Spend resource points",
		description: [
			"Spend your resource points on buying resources.",
			"Fill up the description of these resources as you wish. You can edit the descriptions after adding resources, but not the cost or modifiers."
		]
	},
	{
		label: "Design Beliefs and Instincts",
		description: [
			"Fill all the enabled beliefs and instincts. Usually, you need to write three beliefs and three instincts, but some traits may modify this."
		]
	},
	{
		label: "Name the character",
		description: [
			"Name the character and you are finished with the character burning."
		]
	}
];

export function Checklist({ expanded }: { expanded: boolean; }) {
	const {
		stock, concept, name, beliefs, instincts, /*limits,*/ lifepathPaths, stockSpecific, questions,
		getStatRemainings, getSkillRemainings, getTraitRemainings, getResourceRemainings
	} = useCharacterBurnerStore();

	const [activeStep, setActiveStep] = useState(0);

	const statRemainings = getStatRemainings();
	const skillRemainings = getSkillRemainings();
	const traitRemainings = getTraitRemainings();
	const resourceRemainings = getResourceRemainings();

	useEffect(() => {
		const stockSpecificFulfilled =
			!(stock === "Orc" && stockSpecific.brutalLife.traits.length < lifepathPaths.length - 5)
			&& !(stock === "Great Wolf" && stockSpecific.territory.huntingGround === undefined);

		if (concept === "") setActiveStep(0);
		else if (lifepathPaths.length === 0) setActiveStep(1);
		else if (!stockSpecificFulfilled) setActiveStep(2);
		else if ((statRemainings.mentalPool + statRemainings.physicalPool + statRemainings.eitherPool) !== 0) setActiveStep(3);
		else if (skillRemainings.generalPoints + skillRemainings.lifepathPoints !== 0) setActiveStep(4);
		else if (traitRemainings.traitPoints !== 0) setActiveStep(5);
		else if (!Object.values(questions).includes(true)) setActiveStep(6);
		else if (resourceRemainings.resourcePoints !== 0) setActiveStep(7);
		else if ((beliefs.list.filter(v => v !== "").length < 4 /* limits.beliefs - 1*/ || instincts.list.filter(v => v !== "").length < 4/*limits.instincts - 1*/)) setActiveStep(8);
		else if (name === "") setActiveStep(9);
		else setActiveStep(10);
	}, [beliefs,
		concept,
		instincts,
		lifepathPaths.length,
		name,
		questions,
		resourceRemainings.resourcePoints,
		skillRemainings.generalPoints,
		skillRemainings.lifepathPoints,
		statRemainings.eitherPool,
		statRemainings.mentalPool,
		statRemainings.physicalPool,
		stock,
		stockSpecific.brutalLife.traits.length,
		stockSpecific.territory.huntingGround,
		traitRemainings.traitPoints]);

	return (
		<Slide direction="left" in={expanded}>
			<Card variant="outlined" sx={{ overflow: "auto", position: "fixed", width: "350px", height: "calc(100% - 72px)", maxWidth: "calc(100% - 32px)", maxHeight: "calc(100% - 72px)", top: "64px", right: "16px", zIndex: 100000 }}>
				<Box sx={{ padding: "12px 16px 36px" }}>
					<Typography variant="h5" sx={{ textAlign: "center" }}>Checklist</Typography>

					<Divider />

					<Stepper activeStep={activeStep} orientation="vertical">
						{ChecklistSteps.map((step, i) => (
							<Step key={i} expanded>
								<StepLabel StepIconComponent={StepIcon}>
									<Typography variant="body1" sx={{ marginBottom: "4px" }} color={activeStep !== i ? "gray" : undefined}>{step.label}</Typography>
								</StepLabel>
								<StepContent>
									{step.description.map((desc, ii) =>
										<Typography key={ii} variant="body2" sx={{ fontSize: "13px" }} color={activeStep !== i ? "gray" : undefined}>
											{desc}
										</Typography>
									)}
								</StepContent>
							</Step>
						))}
					</Stepper>
				</Box>
			</Card>
		</Slide>
	);
}
