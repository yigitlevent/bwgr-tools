import { Fragment, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useAppSelector } from "../../state/store";
import { CheckDatasets } from "../../utils/checkDatasets";

import { Lifepath, Setting, Stocks } from "../../data/stocks/_stocks";
import { Skill, SkillCategories } from "../../data/skills/_skills";
import { Trait, TraitCategories } from "../../data/traits/_traits";

import { GenericGrid } from "../Shared/Grids";


interface SkillExtended extends Skill {
	category: string;
}

interface TraitExtended extends Trait {
	category: string;
}

export function LifepathMaker() {
	const { datasets } = useAppSelector(state => state.dataset);

	const [name, setName] = useState<string>("");
	const [stock, setStock] = useState<string>(Object.values(Stocks)[0].name);
	const [setting, setSetting] = useState<string>(Object.values(Stocks[stock].settings)[0].name);
	const [leads, setLeads] = useState<Setting[]>([]);
	const [years, setYears] = useState<string>("0");
	const [eitherPool, setEitherPool] = useState<string>("0");
	const [mentalPool, setMentalPool] = useState<string>("0");
	const [physicalPool, setPhysicalPool] = useState<string>("0");
	const [genSkillPoints, setGenSkillPoints] = useState<string>("0");
	const [skillPoints, setSkillPoints] = useState<string>("0");
	const [traitPoints, setTraitPoints] = useState<string>("0");
	const [resourcePoints, setResourcePoints] = useState<string>("0");
	const [skills, setSkills] = useState<SkillExtended[]>([]);
	const [traits, setTraits] = useState<TraitExtended[]>([]);
	const [requirements, setRequirements] = useState<string>("");

	const [lp, setLp] = useState<Lifepath>({
		name: name, allowed: [], stock: stock as StocksList, setting: setting, leads: [], years: 0, born: false,
		eitherPool: 0, mentalPool: 0, physicalPool: 0, generalSkillPool: 0, skillPool: 0,
		traitPool: 0, resources: 0, skills: [], traits: [], requirements: {}
	});

	useEffect(() => {
		const lifepath: Lifepath = {
			name: name,
			allowed: [],
			stock: stock as StocksList,
			setting: setting,
			leads: leads.map<SettingPath>(v => `${v.stock}➞${v.name}`),
			years: (parseInt(years) === 0) ? "*" : parseInt(years),
			born: false,
			eitherPool: parseInt(eitherPool),
			mentalPool: parseInt(mentalPool),
			physicalPool: parseInt(physicalPool),
			generalSkillPool: parseInt(genSkillPoints),
			skillPool: (parseInt(skillPoints) === 0) ? "*" : parseInt(skillPoints),
			traitPool: parseInt(traitPoints),
			resources: (parseInt(resourcePoints) === 0) ? "*" : (parseInt(resourcePoints) < 0) ? `${parseInt(resourcePoints)}/yr` : parseInt(resourcePoints),
			skills: skills.map<SkillPath>(v => `${v.category}➞${v.name}` as SkillPath),
			traits: traits.map<TraitPath>(v => `${v.category}➞${v.name}` as TraitPath),
			requirements: {}
		};
		if (requirements.length > 0) lifepath.requirements.texts = [requirements];
		setLp(lifepath);
	}, [eitherPool, genSkillPoints, leads, mentalPool, name, physicalPool, requirements, resourcePoints, setting, skillPoints, skills, stock, traitPoints, traits, years]);


	return (
		<Fragment>
			<Typography variant="h3">Lifepath Maker</Typography>

			<GenericGrid columns={8} spacing={1} center>
				<Grid item xs={8} sm={8} md={4}>
					<TextField
						label="Name"
						value={name}
						onChange={e => setName(e.target.value)}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={8} sm={4} md={2}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Stock</InputLabel>
						<Select label="Stock" value={stock} onChange={e => setStock(e.target.value)}>
							{Object.values(Stocks)
								.filter(v => CheckDatasets(datasets, v.allowed))
								.map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={8} sm={4} md={2}>
					<FormControl fullWidth variant="standard">
						<InputLabel>Setting/Subsetting</InputLabel>
						<Select label="Setting/Subsetting" value={setting} onChange={e => setSetting(e.target.value)}>
							{Object.values(Stocks[stock].settings)
								.filter(v => CheckDatasets(datasets, v.allowed))
								.map(v => { return <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>; })}
						</Select>
					</FormControl>
				</Grid>

				<Grid item xs={8} sx={{ marginTop: 2 }}>
					<Typography variant="h5">Skills</Typography>
				</Grid>

				<Grid item xs={8}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Rules</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body2" sx={{ margin: 1 }}>
								The first skill listed in a lifepath is required for those who walk it. The other skills are optional, unless the lifepath is repeated.
							</Typography>

							<Typography variant="h6">Required Skill</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								What skill is required to fulfill the promise of a lifepath’s concept? Even a careless peasant will know a bit about farming. The required skill imposes a little history on the character.
							</Typography>

							<Typography variant="h6">Optional Skills</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								A lifepath should contain one main skill (required) and one to three optional, additional skills.
							</Typography>

							<Typography variant="body2" sx={{ margin: 1 }}>
								What skills does a lifepath teach? These skills are listed first. What skills are available for them to learn if they are ambitious? These skills should be listed last. No single lifepath teaches a character everything they need to know about life and love—insert skills conservatively.
							</Typography>

							<Typography variant="subtitle2" sx={{ margin: 1 }}>
								The Captain lifepath within the Professional Soldier subsetting is a good example. The lifepath offers no weapon skills. If a character has been a soldier all their life and been promoted to captain, then likely they won’t need any more weapon skills. But a captain who has risen through the ranks via an alternate route could have achieved the position without any weapons training—it’s all Intimidation!
							</Typography>

							<Typography variant="body2" sx={{ margin: 1 }}>
								Avoid including repeated or redundant skills in lifepaths within a setting, especially if a lifepath is one in a series of requirements.
							</Typography>

							<Typography variant="h6">Wises</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Each lifepath should contain at least one wise that relates to the lifepath or that relates the lifepath to its context in your world. Including two or three wises per lifepath will create vibrant, credible characters. List wises after skills in the lifepath list. A lifepath that grants only wises should be reconsidered (yes, I am criticizing some of my own choices).
							</Typography>
						</AccordionDetails>
					</Accordion>


					<FormControl fullWidth variant="standard">
						<Autocomplete
							multiple
							disableCloseOnSelect
							value={skills}
							onChange={(e, newValue: SkillExtended[]) => setSkills(newValue)}
							groupBy={(option) => option.category}
							getOptionLabel={(option) => option.name}
							options={
								Object.values(SkillCategories)
									.filter(v => CheckDatasets(datasets, v.allowed))
									.filter(v => v.name.includes(stock) || v.name.includes("Any"))
									.map<SkillExtended[]>(v => v.skills.map(s => ({ ...s, category: v.name })))
									.flat()
									.sort()
							}
							filterOptions={(o, s) => o.filter(v => v.name.toLocaleLowerCase().includes(s.inputValue.toLocaleLowerCase())).sort()}
							renderInput={(params) => <TextField {...params} variant="standard" label="Skills" />}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={8} sx={{ marginTop: 2 }}>
					<Typography variant="h5">Requirements</Typography>
				</Grid>

				<Grid item xs={8}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Rules</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body2">
								If a profession or station requires some experience beforehand, be sure to give it proper prerequisites. Requirements are the last bit of insurance that everything “makes sense.” A peasant can’t immediately command a company of mercenaries, but they can rise through the ranks over ten years to become a professional captain.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<TextField
						label="Requirements"
						value={requirements}
						onChange={e => setRequirements(e.target.value)}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={8} sx={{ marginTop: 2 }}>
					<Typography variant="h5">Leads</Typography>
				</Grid>

				<Grid item xs={8}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Rules</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Leads are story builders. They create a culture or society around the character, allowing the environment to shape them. Life doesn’t always go the way the players would like it to, and leads represent this.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Leads are determined by the quality of opportunity in the society you are trying to create. Is it an open and fluid society? If so, there should be many leads to other opportunities. Is the society rigidly structured? This makes it difficult to travel from one setting to the next, so leads should be restricted.
							</Typography>
							<Typography variant="subtitle2" sx={{ margin: 1 }}>
								For example, both Dwarven and Orc lifepaths are strictly organized around an unforgiving social code. People who buck the system are either killed or exiled.
							</Typography>
							<Typography variant="subtitle2" sx={{ margin: 1 }}>
								Even in the more fluid human lifepaths, there is a social structure. It is nearly impossible for a peasant child to be inducted directly into the nobility. A winding path must be walked to achieve this status. For example, a child could be born into the fields (Villager), given to a monastery (lead to Religious subsetting), become a Zealous Convert, and by age 14 find themselves entertaining the court with their religious diatribes.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<FormControl fullWidth variant="standard">
						<Autocomplete
							multiple
							disableCloseOnSelect
							value={leads}
							onChange={(e, newValue: Setting[]) => setLeads(newValue)}
							getOptionLabel={(option) => option.name}
							options={
								Object.values(Stocks[stock].settings)
									.filter(v => CheckDatasets(datasets, v.allowed))
									.filter(v => v.name !== setting && v.stock === stock)
							}
							filterOptions={(o, s) => o.filter(v => v.name.toLocaleLowerCase().includes(s.inputValue.toLocaleLowerCase())).sort()}
							renderInput={(params) => <TextField {...params} variant="standard" label="Leads" />}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={8} sx={{ marginTop: 2 }}>
					<Typography variant="h5">Traits</Typography>
				</Grid>

				<Grid item xs={8}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Rules</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Lifepath traits represent the scars, injustices and indelible marks life imprints on us. Assign one to three traits to a lifepath by default. The first trait listed in a lifepath is required for those who walk it. The others are optional, unless the lifepath is repeated.
							</Typography>

							<Typography variant="body2" sx={{ margin: 1 }}>
								If the lifepath drills some special, non-skill ability into the character, this should be added as a lifepath trait.
							</Typography>

							<Typography variant="subtitle2" sx={{ margin: 1 }}>
								The Astride the Beast lifepath gives Cry of Doom. This is a wolf-rider’s special badge, and it strikes fear in the enemies of the Black Legion!
							</Typography>

							<Typography variant="body2" sx={{ margin: 1 }}>
								Alternately, if a lifepath essentially requires a trait in order to be a member of a group—Mark of Privilege for Born Noble or Gifted for Arcane Devotee—the trait must be offered on the lifepath.
							</Typography>

							<Typography variant="h6">Ordering Traits</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Since the first lifepath trait listed is required, don’t put the really meaty traits up front. Try to lead with a representative character trait, and put the heavier die traits as secondary options, not requirements.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Placing the juicy traits second forces a player to spend at least two trait points on that lifepath. This builds investment in the character and helps focus their concept on what is really important.
							</Typography>

							<Typography variant="h6">Balancing Traits</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								If a lifepath forces so many skills on the character that, for a while, they become nothing but the lifepath, it should not grant any lifepath traits.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								If the lifepath is overpowered in the skill department or just uncool, don’t offer any lifepath traits (or at least no die traits or call-ons). This de-emphasizes it and strips away rewards for taking what could be a problematic lifepath.
							</Typography>

							<Typography variant="h6">Free Trait Points</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Lifepaths without a required trait should be rare. If the lifepath itself is generally special or unique (with steep requirements), it can grant trait points without any traits.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• You can also create incentive to take mundane or prosaic lifepaths by granting them free trait points. But keep these lifepaths rare. Too many free trait points makes for gifted-faithful-greater muse characters.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<FormControl fullWidth variant="standard">
						<Autocomplete
							multiple
							disableCloseOnSelect
							value={traits}
							onChange={(e, newValue: TraitExtended[]) => setTraits(newValue)}
							groupBy={(option) => option.category}
							getOptionLabel={(option) => option.name}
							options={
								Object.values(TraitCategories)
									.filter(v => CheckDatasets(datasets, v.allowed))
									.filter(v => v.name.includes(stock) || v.name.includes("Any"))
									.map<TraitExtended[]>(v => v.traits.map(t => ({ ...t, category: v.name })))
									.flat()
									.sort()
							}
							filterOptions={(o, s) => o.filter(v => v.name.toLocaleLowerCase().includes(s.inputValue.toLocaleLowerCase())).sort()}
							renderInput={(params) => <TextField {...params} variant="standard" label="Traits" />}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={8} sx={{ margin: "16px 0" }}>
					<Divider />
				</Grid>

				<Grid item xs={8} sx={{ marginTop: 2 }}>
					<Typography variant="h5">Points</Typography>
				</Grid>

				<Grid item xs={8}>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Rules</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography variant="h6">Skill Points</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Assign a number of skill points to a lifepath using this rubric:
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Assign one skill point per skill and wise listed on the lifepath.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath provides rigorous training, mentorship and opportunity, add one skill point to that total.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath is one of grinding drudgery, subtract one skill point from that total.
							</Typography>

							<Typography variant="h6">General Skill Points</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Lifepaths that provide wealth, privilege, travel or great opportunity grant one to three general skill points.
							</Typography>
							<Typography variant="subtitle2" sx={{ margin: 1 }}>
								Master Craftsman, Duke and Orc Great One are all good examples of this.
							</Typography>

							<Typography variant="h6">Born Lifepaths</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Born Lifepaths always grant general skill points. The basic allotment is three general skill points. Settings with more opportunity and wealth grant four general skill points. Born lifepaths in settings with the highest wealth, privilege or opportunity grant five general skill points.
							</Typography>

							<Typography variant="h6">Lifepath Trait Points</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Assign a number of trait points to a lifepath using this rubric:
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Most lifepaths should grant one trait point.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Lifepaths outside of the mainstream instead grant two trait points.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• Lifepaths for weird, magical problem children can instead grant two or three trait points.
							</Typography>

							<Typography variant="h6">Lifepath Stat Points</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Assign stat points to a lifepath using this rubric:
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath is mentally demanding, it grants +1M.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath is physically demanding, it grants +1P.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath puts the character in a position of leadership or power, it grants the option +1M/P.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath represents the pinnacle of training or achievement, it grants both +1M, +1 P. These should be rare.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath just grinds the character down in the gears of life, it grants no stat points.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								• If the lifepath destroys mind or body, subtract -1M or -1P.
							</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								Born lifepaths never grant stat point bonuses.
							</Typography>

							<Typography variant="h6">Root Skills Rubric</Typography>
							<Typography variant="body2" sx={{ margin: 1 }}>
								An alternate method to determine a lifepath’s stat point assignment is to assess the root stat of the required lifepath skill: If it’s Will or Perception, the lifepath grants one mental stat point. If it’s any other stat, it grants one physical stat point. If the skill has two stats as its root, like craftsman skills, it grants an offer of either one mental or one physical stat point.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Skill Points"
						value={skillPoints}
						onChange={e => setSkillPoints(e.target.value)}
						error={!(/^[0-9]+$/.test(skillPoints))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="General Skill Points"
						value={genSkillPoints}
						onChange={e => setGenSkillPoints(e.target.value)}
						error={!(/^[0-9]+$/.test(genSkillPoints))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Trait Points"
						value={traitPoints}
						onChange={e => setTraitPoints(e.target.value)}
						error={!(/^[0-9]+$/.test(traitPoints))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Physical Pool"
						value={physicalPool}
						onChange={e => setPhysicalPool(e.target.value)}
						error={!(/^[0-9]+$/.test(physicalPool))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Mental Pool"
						value={mentalPool}
						onChange={e => setMentalPool(e.target.value)}
						error={!(/^[0-9]+$/.test(mentalPool))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Either Pool"
						value={eitherPool}
						onChange={e => setEitherPool(e.target.value)}
						error={!(/^[0-9]+$/.test(eitherPool))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Resource Points"
						value={resourcePoints}
						onChange={e => setResourcePoints(e.target.value)}
						error={!(/^[0-9]+$/.test(resourcePoints))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={4} sm={2} md={1}>
					<TextField
						label="Years"
						value={years}
						onChange={e => setYears(e.target.value)}
						error={!(/^[0-9]+$/.test(years))}
						fullWidth
						variant="standard"
					/>
				</Grid>

				<Grid item xs={8} sx={{ margin: "16px 0" }}>
					<Divider />
				</Grid>

				<Grid item xs={8} sx={{ whiteSpace: "break-spaces" }}>
					{JSON.stringify(lp, null, "\t")}
				</Grid>
			</GenericGrid>
		</Fragment>
	);
}
