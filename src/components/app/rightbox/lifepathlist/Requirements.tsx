import styled from "styled-components";

import { NameMaker } from "../../../../utility/nameMaker";
import { GetOrdinalSuffix } from "../../../../utility/ordinalSuffix";

import { List, ListTitle } from "../../../shared/Inner";

const ReqBlock = styled.div`
	display: inline;

	&:not(:nth-child(2)) {
		display: block;
	}
`;

const ReqPoint = styled.div`
	display: inline;
	padding-right: 4px;
`;

export function Requirements({ requirements }: { requirements: bwgr.data.Requirements; }): JSX.Element {
	const requirementsResolver = (conditionsBlock: bwgr.data.Condition): string => {
		const tempSet = new Set<string>();

		conditionsBlock.items.forEach(condition => {
			if (typeof condition === "string") tempSet.add(NameMaker(condition, 2, ["lifepath", "lifepaths"]));
			else tempSet.add(requirementsResolver(condition));
		});

		const array = [...tempSet];
		if (array.length > 1 && conditionsBlock.type !== "NOT") {
			array[array.length - 1] = `${conditionsBlock.type.toLowerCase()} ${array[array.length - 1]}`;
		}
		else if (conditionsBlock.type === "NOT") {
			array[0] = `Character cannot have ${array[0]}`;

			if (array.length > 1) {
				array[array.length - 1] = `and ${array[array.length - 1]}`;
			}
		}

		return (array.length < 3) ? array.join(" ") : array.join(", ");
	};

	const limitsResolver = (limitsBlock: bwgr.data.Limit[]): JSX.Element[] => {
		const limits: string[] = [];
		limitsBlock.forEach((limit) => {
			const temp = limit.split("➞");
			if (temp[0] === "LP") {
				if (temp[1] === "UNIQUE") limits.push("This cannot be selected twice.");
				else if (temp[1] === "MIN") limits.push(`This can be selected as the ${GetOrdinalSuffix(parseInt(temp[2]))} lifepath or higher.`);
				else if (temp[1] === "MAX") limits.push(`This can be selected as the ${GetOrdinalSuffix(parseInt(temp[2]))} lifepath or lower.`);
			}
			else if (temp[0] === "YEARS") {
				if (temp[1] === "MIN") limits.push(`Character must be at least ${parseInt(temp[2])} years old.`);
				else if (temp[1] === "MAX") limits.push(`Character must be at most ${parseInt(temp[2])} years old.`);
			}
			else if (temp[0] === "GRIEF") {
				if (temp[1] === "MIN") limits.push(`Character must have at least a ${temp[0].toLowerCase()} of ${parseInt(temp[2])}.`);
				else if (temp[1] === "MAX") limits.push(`Character must have at most a ${temp[0].toLowerCase()} of ${parseInt(temp[2])}.`);
			}
			else if (temp[0] === "GENDER") {
				limits.push(`Character's must be a ${temp[1].toLowerCase()}.`);
			}
		});

		return limits.map((limit, limitIndex) => <ReqPoint key={limitIndex}>{limit}</ReqPoint>);
	};

	return (
		<List>
			<ListTitle>Requirements:</ListTitle>
			<ReqBlock>
				{(requirements.conditions)
					? <span>{requirementsResolver(requirements.conditions)}.</span>
					: null}
			</ReqBlock>

			<ReqBlock>
				{(requirements.limits)
					? limitsResolver(requirements.limits)
					: null}
			</ReqBlock>

			<ReqBlock>
				{(requirements.texts)
					? requirements.texts.map((text, textIndex) => <span key={textIndex}>{text}</span>)
					: null}
			</ReqBlock>
		</List>
	);
}
