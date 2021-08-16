import { Fragment } from "react";

import { TopbarWrapper, Button, Select, Option } from "../shared/Shared";

export function Topbar({ selected, setSelected }: { selected: string, setSelected: React.Dispatch<React.SetStateAction<string>>; }): JSX.Element {
	return (
		<TopbarWrapper>
			<Select value={selected} onChange={(e) => setSelected(e.target.value)}>
				<Option value={"New Faction"}>New Faction</Option>
				<Option value={"Faction"}>Faction</Option>
			</Select>

			{(selected === "New Faction")
				? <Button value="Create" onClick={() => alert("create")} />
				: <Fragment>
					<Button value="Show" onClick={() => alert("show")} />
					<Button value="Duplicate" onClick={() => alert("Duplicate")} />
					<Button value="Delete" onClick={() => alert("Delete")} />
				</Fragment>
			}
		</TopbarWrapper>
	);
};
