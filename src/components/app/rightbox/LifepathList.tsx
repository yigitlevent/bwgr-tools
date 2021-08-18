import { Fragment } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";

import { Stocks } from "../../../data/stocks";

import { ClientStore } from "../../../stores/ClientStore";

import { NoLink } from "../../shared/Link";
import { Subtitle } from "../../shared/Titles";
import { ListBlock } from "../../shared/Lifepath";

import { Skills } from "./lifepathlist/Skills";
import { Traits } from "./lifepathlist/Traits";
import { Requirements } from "./lifepathlist/Requirements";

const LifepathBox = styled.div`
	width: 100%;
	margin: 4px 0 10px;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto);
`;

const LifepathTop = styled.div`
	width: 100%;
	padding: 2px 6px 5px;

	display: grid;
	grid-template-columns: 2fr repeat(3, 56px) 3fr;
	grid-template-rows: 1fr;

	background: ${(props: bwgr.style.Props) => props.theme.background.subelement};

	& > * {
		align-self: center;
	}

	& > *:first-child {
		font-weight: bold;
		font-size: 1.1em;
	}

	& > *:last-child {
		padding-left: 10px;
	}

	& > *:not(:first-child, :last-child) {
		text-align: center;
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

		return (
			<LifepathBox key={i}>
				<LifepathTop>
					<div>{lifepath.name}</div>
					<div>{lifepath.years}{yearString}</div>
					<div>{lifepath.resources}{resourcesString}</div>
					<div>{statPoolsString.join(", ")}</div>
					<div>
						<ListBlock>
							{(lifepath.leads.length === 0) ? "—" : lifepath.leads.map((lead, leadIndex) => {
								const path = lead.split("➞");
								return <NoLink key={leadIndex} seperator={","}>{Stocks[path[0]].settings[path[1]].short}</NoLink>;
							})}
						</ListBlock>
					</div>
				</LifepathTop>

				<Skills generalSkillPool={lifepath.generalSkillPool} skillPool={lifepath.skillPool} skills={lifepath.skills} />

				<Traits traitPool={lifepath.traitPool} traits={lifepath.traits} />

				{(Object.keys(lifepath.requirements).length > 0)
					? <Requirements requirements={lifepath.requirements} />
					: null
				}
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
