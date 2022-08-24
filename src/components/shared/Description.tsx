import styled from "styled-components";
import shallow from "zustand/shallow";
import { ClientStore } from "../../stores/ClientStore";
import { DarkTheme } from "../../theme/themes";


const DescriptionBox = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.3);
	z-index: 999;
`;

const InnerDescriptionBox = styled.div`
	flex: 0 1 400px;
	background: ${DarkTheme.background.subelement};
	border: ${DarkTheme.border.hard};
	max-width: 100%;
	padding: 10px;

	& > * {
		text-indent: 6px;
		padding-bottom: 4px;
	}

	& > .b {
		float: right;
		margin-top: -38px;
		width: 23px;
		height: 23px;
		border: ${DarkTheme.border.hard};
		cursor: pointer;
		z-index: 1000000;
	}

	& > .t {
		font-size: 18px;
		font-weight: 600;
		text-indent: 10px;
		padding-bottom: 6px;
	}

	& > .it {
		font-style: italic;
	}

	& > .d {
		text-indent: 6px;
	}
`;

export function SkillElement({ skill }: { skill: bwgr.data.Skill; }) {
	const { setDescriptionPopup } = ClientStore(state => ({ setDescriptionPopup: state.setDescriptionPopup }), shallow);

	const subtext = [];
	if (skill.magical) subtext.push("Magical");
	if (skill.training) subtext.push("Training");

	return (
		<DescriptionBox>
			<InnerDescriptionBox>
				<div className="t">{skill.name}</div>

				<div className="b" onClick={() => setDescriptionPopup(undefined)}>X</div>

				<div className="it">Root: {skill.root}</div>

				<div className="it">Type: {skill.type} {(subtext.length > 0) ? "(" + subtext.join(", ") + ")" : ""}</div>

				{(skill.restriction !== "N/A")
					? <div className="it">Restrictions: {skill.restriction}</div>
					: null
				}

				<div className="it">Tools: {skill.tools.filter(v => v !== "").join(", ")}</div>

				{skill.description.split("<br>").map(v => <div key={v} className="d">{v}</div>)}
			</InnerDescriptionBox>
		</DescriptionBox>
	);
}

export function TraitElement({ trait }: { trait: bwgr.data.Trait; }) {
	const { setDescriptionPopup } = ClientStore(state => ({ setDescriptionPopup: state.setDescriptionPopup }), shallow);

	return (
		<DescriptionBox>
			<InnerDescriptionBox>
				<div className="t">{trait.name}</div>

				<div className="b" onClick={() => setDescriptionPopup(undefined)}>X</div>

				<div className="it">Type: {trait.type}</div>

				<div className="it">Stock: {trait.stock}</div>

				{(typeof trait.cost === "number")
					? (trait.cost !== 0)
						? <div className="it">Cost: {trait.cost}</div>
						: null
					: <div className="it">Cost: {trait.cost.join(", ")}</div>
				}

				{trait.description.split("<br>").map(v => <div key={v} className="d">{v}</div>)}
			</InnerDescriptionBox>
		</DescriptionBox>
	);
}
