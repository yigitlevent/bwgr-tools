import { Fragment } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { Stocks } from "../../../data/stocks";

import { ClientStore } from "../../../stores/ClientStore";

import { Subtitle } from "../../shared/Titles";

const LifepathBox = styled.div`
	width: 100%;
	margin: 4px 0 10px;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto);
`;

const LifepathTop = styled.div`
	width: 100%;
	padding: 2px 6px;

	display: grid;
	grid-template-columns: 4fr 1fr 1fr 1fr 6fr;
	grid-template-rows: 1fr;

	background: ${(props: bwgr.style.Props) => props.theme.background.subelement};

	& > *:first-child {
		font-weight: bold;
		font-size: 1.1em;
	}
`;

const List = styled.div`
	padding: 2px 0 2px 8px;


	& > span {
		font-weight: bold;
		font-style: italic;
		margin-right: 4px;
	}
`;

export function LifepathList(): JSX.Element {
	const { lifepathMenu } = ClientStore(state => ({ lifepathMenu: state.lifepathMenu }), shallow);

	const setting = Stocks[lifepathMenu.stock].settings[lifepathMenu.setting];

	const lifepaths = setting.lifepaths.map((lifepath, i) => {
		const yearString = typeof lifepath.years !== "number" ? "" : (lifepath.skillPool > 1) ? "yrs" : "yr";
		const resourcesString = typeof lifepath.resources !== "number" ? "" : (lifepath.resources > 1) ? "rps" : "rp";

		const statPoolsString = [];
		if (lifepath.eitherPool === 0 && lifepath.mentalPool === 0 && lifepath.physicalPool === 0) { statPoolsString.push("—"); }
		else if (lifepath.eitherPool !== 0) {
			statPoolsString.push(`${(lifepath.eitherPool > 0) ? `+${lifepath.eitherPool}` : lifepath.eitherPool}M/P`);
		}
		else {
			if (lifepath.mentalPool !== 0) {
				statPoolsString.push(`${(lifepath.mentalPool > 0) ? `+${lifepath.mentalPool}` : lifepath.mentalPool}M`);
			}
			if (lifepath.physicalPool !== 0) {
				statPoolsString.push(`${(lifepath.physicalPool > 0) ? `+${lifepath.physicalPool}` : lifepath.physicalPool}P`);
			}
		}

		const skillsString = [];
		if (typeof lifepath.generalSkillPool === "string" || lifepath.generalSkillPool > 0) {
			skillsString.push(`${lifepath.generalSkillPool}${(lifepath.generalSkillPool > 1) ? "pts" : "pt"}: General`);
		}
		if (typeof lifepath.skillPool === "string" || lifepath.skillPool > 0) {
			skillsString.push(`${lifepath.skillPool}${(lifepath.skillPool > 1) ? "pts" : "pt"}: ${lifepath.skills?.map(v => v.split("➞")[1]).join(", ")}`);
		}

		const traitsString = `${lifepath.traitPool}${(lifepath.traitPool > 1) ? "pts" : "pt"}: ${(lifepath.traits?.length === 0) ? "—" : lifepath.traits?.map(v => v.split("➞")[1]).join(", ")}`;

		return (
			<LifepathBox key={i}>
				<LifepathTop>
					<div>{lifepath.name}</div>
					<div>{lifepath.years}{yearString}</div>
					<div>{lifepath.resources}{resourcesString}</div>
					<div>{statPoolsString.join(", ")}</div>
					<div>{lifepath.leads?.map(v => v.split("➞")[1]).join(", ")}</div>
				</LifepathTop>

				<List><span>Skills:</span> {skillsString.join("; ")}</List>
				<List><span>Traits:</span> {traitsString}</List>
			</LifepathBox>
		);
	});

	return (
		<Fragment>
			<Subtitle>{setting.stock} / {setting.name}</Subtitle>
			{lifepaths}
		</Fragment>
	);
}
