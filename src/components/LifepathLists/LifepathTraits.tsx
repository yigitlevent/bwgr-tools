import { Fragment } from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { useRulesetStore } from "../../hooks/stores/useRulesetStore";
import type { Lifepath } from "../../data/stocks/_stocks";
import { Trait, TraitCategories } from "../../data/traits/_traits";

import { PopoverLink } from "../Shared/PopoverLink";


export function LifepathTraits({ lifepath }: { lifepath: Lifepath; }) {
	const { checkRulesets } = useRulesetStore();

	const traits =
		lifepath.traits
			.filter(entry => {
				const [category, name] = entry.split("➞");
				const t = TraitCategories[category].traits.find(v => v.name === name) as Trait;
				return checkRulesets(t.allowed);
			})
			.map(path => {
				const [category, name] = path.split("➞");
				return TraitCategories[category].traits.find(v => v.name === name) as Trait;
			});

	return (
		<Fragment>
			<b>Traits: </b> {lifepath.traitPool}{(lifepath.traitPool > 1) ? "pts: " : "pt: "}

			{lifepath.traits.length !== 0
				? traits.map((trait, i) => {
					return (
						<Paper key={i} elevation={2} sx={{ cursor: "pointer", padding: "0 4px", margin: "0 0 0 2px", width: "max-content", display: "inline-block" }}>
							<PopoverLink data={trait} />
						</Paper>
					);
				})
				: <Box sx={{ padding: "0 4px", display: "inline-block" }}>—</Box>
			}
		</Fragment>
	);
}
