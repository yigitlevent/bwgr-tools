import { useCallback, useState } from "react";
import SelectSearch from "react-select-search";
import styled from "styled-components";

import { IsDev } from "../../../index";

import { PracticeTable } from "../../../data/tables";

import { SubBox } from "../../shared/Box";
import { Subtitle } from "../../shared/Titles";
import { Button, Input } from "../../shared/Inputs";
import { Divider } from "../../shared/Divider";
import { Controls, Line } from "../../shared/Single";
import { Icon } from "../../shared/Icon";

const TableWrapper = styled.div`
	width: 100%;
	height: auto;
	min-height: 200px;
	margin: 0;
	padding: 0;
	position: relative;
`;

const Main = styled.div`
	width: 100%;
	height: auto;
	min-height: 22px;
	padding-top: 44px;
`;

const Number = styled.div`
	display: inline-block;
	height: 22px;
	width: 22px;
	vertical-align: middle;
	font-size: 1em;
	position: relative;
	top: -8px;

	&:after {
		content: '.';
	}
`;

const Day = styled.div`
	height: 20px;
	width: max-content;
	margin: 1px 0;
`;

const Hour = styled.div`
	display: inline-block;
	height: 20px;
	width: 20px;
	background: ${(props: bwgr.style.Props) => props.theme.background.subelement};

	&:nth-child(2n) {
		filter: brightness(110%);
	}
`;

const SkillBox = styled.div<{ width: number; position: [number, number]; }>`
	width: ${p => p.width}px;
	height: 22px;
	background: ${(props: bwgr.style.Props) => props.theme.background.input};
	outline: 1px solid ${(props: bwgr.style.Props) => props.theme.status.warning};

	position: absolute;
	left: ${p => p.position[0]}px;
	top: ${p => p.position[1]}px;

	margin: 0;

	z-index: 1;

	cursor: pointer;

	&.selected {
		outline: 1px solid ${(props: bwgr.style.Props) => props.theme.status.success};
	}
`;

const SkillName = styled.div`
	display: inline-block;
	height: 100%;
	width: calc(100% - 10px);
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0 2px;
`;

const SkillDel = styled.div`
	display: inline-block;
	width: 10px;
	height: 100%;
	position: absolute;
	top: 0px;
	right: 0px;
`;

interface Skill {
	name: string;
	type: string;
	category: string;
	position: [x: number, y: number];
}

export function PracticePlanner(): JSX.Element {
	const [rowAmount, setRowAmount] = useState(6);
	const [hourAmount, setHourAmount] = useState(8);

	const [skillCategory, setSkillCategory] = useState("Academic");
	const [testType, setTestType] = useState("Routine");
	const [skillName, setSkillName] = useState("");

	const [days, setDays] = useState<{ hours: number; }[]>([]);
	const [skills, setSkills] = useState<Skill[]>([]);

	const [selectedSkill, setSelectedSkill] = useState<number>();

	const addDays = useCallback((amount: number, hours: number): void => {
		const tempDays: { hours: number; }[] = [];
		for (let i = 0; i < amount; i++) { tempDays.push({ hours }); }
		setDays([...days, ...tempDays]);
	}, [days]);

	const deleteDay = useCallback((index: number): void => {
		const tempDays = days;
		tempDays.splice(index, 1);
		setDays([...tempDays]);
	}, [days]);

	const changeHours = useCallback((index: number, change: number): void => {
		const tempDays = days;
		tempDays[index].hours += change;
		setDays([...tempDays]);
	}, [days]);

	const addSkill = useCallback((name: string, type: string, category: string): void => {
		setSkills([...skills, { name, type, category, position: [0, 0] }]);
	}, [skills]);

	const deleteSkill = useCallback((index: number) => {
		const tempSkills = skills;
		tempSkills.splice(index, 1);
		setSkills([...tempSkills]);
	}, [skills]);

	const switchSkillState = useCallback((skillIndex: number): void => {
		if (selectedSkill === skillIndex) setSelectedSkill(undefined);
		else setSelectedSkill(skillIndex);
	}, [selectedSkill]);

	const placeSkill = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
		const tempSkills = skills;
		if (selectedSkill !== undefined) {
			tempSkills[selectedSkill].position = [(event.target as any).offsetLeft, (event.target as any).offsetTop];
			setSkills([...tempSkills]);
		}
	}, [selectedSkill, skills]);

	return (
		<SubBox>
			<Subtitle>Practice Planner</Subtitle>

			<Controls style={{ zIndex: 200 }}>
				<Line>
					<Input type="number" value={rowAmount} onChange={e => setRowAmount(parseInt(e.target.value))} />
					<span className="big">rows with</span>
					<Input type="number" value={hourAmount} onChange={e => setHourAmount(parseInt(e.target.value))} />
					<span className="big">hours</span>
					<Button value="Add" onClick={() => addDays(rowAmount, hourAmount)} />
				</Line>

				<Divider />

				<Line>
					<SelectSearch
						options={[...Object.keys(PracticeTable).map(v => { return { name: v, value: v }; })]}
						value={skillCategory}
						onChange={(e) => setSkillCategory(e as any)}
					/>
					<SelectSearch
						options={[
							{ name: "Routine", value: "Routine" },
							{ name: "Difficult", value: "Difficult" },
							{ name: "Challenging", value: "Challenging" }
						]}
						value={testType}
						onChange={(e) => setTestType(e as any)}
					/>
					<Input
						type="text"
						value={skillName}
						onChange={e => setSkillName(e.target.value)}
						placeholder="Skill Name"
					/>
					<Button value="Add" onClick={() => addSkill(skillName, testType, skillCategory)} />
				</Line>

				<Divider />
			</Controls>

			<TableWrapper>
				{skills.map((v, i) => {
					return (
						<SkillBox
							key={i}
							className={(selectedSkill === i) ? "selected" : ""}
							width={PracticeTable[v.category][v.type] * 20}
							position={v.position}
							onClick={() => switchSkillState(i)}
						>
							<SkillName>{v.name}</SkillName>
							<SkillDel onClick={() => deleteSkill(i)}>x</SkillDel>
						</SkillBox>
					);
				})}

				<Main className="table">
					{days.map((v, i) => {
						return <Day key={i}>
							<Number>{i + 1}</Number>
							{new Array(v.hours).fill(<Hour />).map((v, i) => {
								return <Hour key={i} onClick={(e) => placeSkill(e)} />;
							})}
							<Icon name={"add"} title={"Add an Hour"} isDev={IsDev} size={16} onClick={() => changeHours(i, 1)} />
							<Icon name={"remove"} title={"Remove an Hour"} isDev={IsDev} size={16} onClick={() => changeHours(i, -1)} />
							<Icon name={"delete"} title={"Delete Day"} isDev={IsDev} size={16} onClick={() => deleteDay(i)} />
						</Day>;
					})}
				</Main>
			</TableWrapper>

		</SubBox>
	);
}
