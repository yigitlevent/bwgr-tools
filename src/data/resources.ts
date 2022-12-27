export interface Resource {
	name: string;
	allowed: Ruleset[];
	type: "Gear" | "Property" | "Relationship" | "Affiliation" | "Reputation" | "Magical";
	description?: string;
	cost: number | [string, number][] | "various";
	modifiers?: [string, number][];
	magical?: {
		origin: "Personal" | "Presence" | "Double Presence" | "Sight";
		element: ("Anima" | "Arcana" | "Heaven" | "White" | "Fire" | "Air" | "Earth" | "Water")[];
		duration: "Instantaneous" | "Sustained" | `Elapsed Time (${"Exchanges" | "Minutes" | "Hours"})` | "Permanent";
		areaOfEffect: "Caster" | "Double Area" | `Measured Area (${"paces" | "10s of paces" | "100s of paces" | "miles"})` | "Half Area" | "Double Natural Effect" | "Natural Effect" | "Half Natural Eff." | "Double Presence" | "Presence" | "Half Presence" | "Single Target";
		impetus: ("Create" | "Destroy" | "Tax" | "Transmute" | "Control" | "Influence" | "Enhance")[];
		obstacle: number | `${number}^` | StatsAndAttributesList | `${StatsAndAttributesList}^` | `${number}+${StatsAndAttributesList}` | `${StatsAndAttributesList}/${StatsAndAttributesList}` | "See description";
		actions: number | string;
	};
}

interface ResourceGroup {
	[key: string]: {
		name: string;
		allowed: Ruleset[];
		resources: Resource[];
	};
}

const Relationship: Resource = {
	name: "Relationship",
	allowed: ["bwg"],
	type: "Relationship",
	cost: [
		["A relationship with a character who is considered powerful and who plays a large role in the game setting", 15],
		["A relationship with a character who is considered significant or important to the game setting", 10],
		["A relationship with a character who plays a minor role in the setting or situation", 5]
	],
	modifiers: [
		["Immediate family", -2],
		["Other family", -1],
		["Romantic", -2],
		["Forbidden", -1],
		["Hateful", -2]
	]
};

const Reputation: Resource = {
	name: "Reputation",
	allowed: ["bwg"],
	type: "Reputation",
	cost: [
		["1D: Local or minor reputation", 7],
		["2D: Regional or notable reputation", 25],
		["3D: National or major reputation", 45]
	]
};

const Affiliation: Resource = {
	name: "Affiliation",
	allowed: ["bwg"],
	type: "Affiliation",
	cost: [
		["1D: A small, local or specialized group", 10],
		["2D: A large, regional or expansive group", 25],
		["3D: A national, powerful or ruling group", 50]
	]
};

const OrcAffiliation: Resource = {
	name: "Clans and Warbands",
	allowed: ["bwg"],
	type: "Affiliation",
	description: "Orcs frequently gather together in groups, warbands, clans and hordes. Relationships in the group/clan are purchased as normal. Additional characters and functionaries can be generated using the Circles rules in play. Orc commanders are often unaware of who precisely is working under them. It's usually a nest of rabble, a few bitter enemies and one or two die hard heavies. The exact nature of who's who is up to the Circles tests. The character's own position in the warband/horde is dependent on his reputation. Use the standard rules described in Step 8. Spending Resource Points to generate this.",
	cost: [
		["1D: A typical/minor clan", 10],
		["2D: An important or powerful clan or horde", 25]
	]
};

const SorcerySpells: Resource[] = [
	{
		name: "Arcane Kindness",
		allowed: ["bwg"],
		type: "Magical",
		description: "Soothing rhythms emanate from the sorcerer and make agreeable his desires.<br>This incant ation grants bonus dice to Seduction, Haggling, Oratory, Persuasion and Circles tests. Meeting the obstacle adds +1D to the listed abilities. Up to two more successes can be spent to add two mor e dice to a maximum bonus of +3D.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Enhance"],
			obstacle: "4^",
			actions: 10
		}
	},
	{
		name: "Bilious Smoke",
		allowed: ["bwg"],
		type: "Magical",
		description: "Inky, sulphurous vapor pours forth from the wizard's black mouth.<br>The stinging smoke obscures vision for those trapped in it and looking through it (+5 Ob to Perception, +3 Ob to Observation). In addition, those within the cloud are st ung and smothered. Every exchange spent in the cloud requires an Ob 3 Forte test. Margin of failure is temporarily s ubtrac ted from the victim's Health. If Health reaches zero, the victim falls unconscious. Health is recovered at one die per exchange.<br>Weapon Length: as Missile; Range: as Thrown.",
		cost: 24,
		magical: {
			origin: "Personal",
			element: ["Fire", "Air"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Create", "Tax"],
			obstacle: 5,
			actions: 16
		}
	},
	{
		name: "Binding",
		allowed: ["bwg"],
		type: "Magical",
		description: "The shipwrecked sorcerer called the flotsam together to form a raft and save his bedraggled skin.<br>This useful incantation allows the wizard to sorcerously bond two or more similar items together, so that they lock together like pieces of a puzzle. A sorcerer may choose a number of items of eart h , stone, wood or metal equa l to his Will exponent within the area of effect. Th ese items are held together with a Power eq ual to his Will exponent.<br>Weapon Length: as Sword; Range: as Melee.",
		cost: 4,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Half Presence",
			impetus: ["Control"],
			obstacle: 2,
			actions: 2
		}
	},
	{
		name: "Blessed Hands",
		allowed: ["bwg"],
		type: "Magical",
		description: "Fire is the breath of life.<br>The sorcerer lays hands upon a wounded target. Meeting the obstacle grants+ 1D to Health. Each success over the obstacle adds another + 1D to his recovery roll. This spell does not count as treatment. An herbalist or surgeon must attend to the wound first. This spell is then cast to speed recovery.",
		cost: 20,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Health^",
			actions: 750
		}
	},
	{
		name: "Blue-Blooded Heart",
		allowed: ["bwg"],
		type: "Magical",
		description: "Cold holds no pain for one who knows the secret of the Blue-Blooded Heart.<br>This incantation protects the recipient from the drain of cold. No Health or Forte tests need to be made due to cold, and no injury is sustained from cold air, water or frost damage.",
		cost: 8,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 4,
			actions: 15
		}
	},
	{
		name: "Breath of Wind",
		allowed: ["bwg"],
		type: "Magical",
		description: "Roaring winds howl from the throat of the sorcerer.<br>Natural effects of the winds: Success: Kicks up dust; 1 over: A nice breeze, papers flutter, candles doused; 2 over: Branches blown down from trees, shutters broken; 3 over: Larger branches blown from trees; 4 over: Wooden buildings damaged, people picked up and to ssed down; 5 over: Trees blown down , 12-foot swells; 6 over: Doors ripped from hinges, 15-foot swells; 7 over: Sturdy roofs damaged; 18-foot swells; 8 over: Wooden buildings collapse; 9 over: Most structures destroyed.<br>Weapon Length: as Missile; Range: as Great Bow.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Air"],
			duration: "Instantaneous",
			areaOfEffect: "Natural Effect",
			impetus: ["Destroy"],
			obstacle: "4^",
			actions: 4
		}
	},
	{
		name: "Call of Iron",
		allowed: ["bwg"],
		type: "Magical",
		description: "With a flick of the wizard's wrist, the knife is wrenched from the assassin's hand.<br>Using Call of Iron, a wizard can grab objects made of metal —a sword, for example— with his mystical might and call them to him. Pulling something is a Power test, where Power= Will. For example, wresting a metal weapon from an enemy's hand would be a versus test: your Will versus the enemy's Power.<br>Weapon Length: as Missile; Range: as Thrown.",
		cost: 6,
		magical: {
			origin: "Double Presence",
			element: ["Earth"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 3,
			actions: 2
		}
	},
	{
		name: "Cat's Eye",
		allowed: ["bwg"],
		type: "Magical",
		description: "Twilight becomes bright and what lies in the shadows is revealed.<br>This incantation reduces obstacle penalties for dimness, haziness and darkness by two.",
		cost: 6,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: 3,
			actions: 7
		}
	},
	{
		name: "Chameleon",
		allowed: ["bwg"],
		type: "Magical",
		description: "Skin and clothing swirl and fade as the sorcerer blends seamlessly into his surroundings.<br>Meeting the obstacle grants +1D to the Stealthy skill. Each success over the obstacle adds another +1D to the Stealthy skill. In addition, so long as one success over the obstacle is generated, the chameleoned character cannot be casually spotted. An other character must explicitly stat ethat he is looking about (either via expressed action or by an Instinct or trait). Only then can his Perception7Observation be tested to spot the one so concealed . If cast successfully, the character counts as having one additional level of cover in Range and Cover. In Fight, other characters suffer a +1 Ob disadvantage to hit him with any missile or thrown weapon.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: "4^",
			actions: 8
		}
	},
	{
		name: "Chaos Ward",
		allowed: ["bwg"],
		type: "Magical",
		description: "A cacophony of lights and sounds swirls round, obscuring the very earth from thy feet and the sun from thy brow.<br>This incantation causes confusion to all who fall under it. Meeting the obstacle imposes a +1 Obpenalty to all act ions in the area of effect. Additional successes increase the penalty.<br>Weapon Length: as Missile; Range: as Heavy Crossbow +1D.",
		cost: 20,
		magical: {
			origin: "Sight",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Influence", "Tax"],
			obstacle: "5^",
			actions: 45
		}
	},
	{
		name: "Choking Hand",
		allowed: ["bwg"],
		type: "Magical",
		description: "His malignant will forms an invisible appendage eager to do his terrible bidding.<br>This incantation conjuresa 'hand' with a Power equal to the caster's Will plus 1D per three successes over the obstacle. The Hand chokes its victims using the rules for Locks, but it does not have to vie for position. The mage tests the spell Power vs the victim's Power. If the victim breaks the hold of the Choking Hand , then the spell is broken and ends.<br>Weapon Length: as Polearm; Range: as Pistol.",
		cost: 12,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Tax"],
			obstacle: "3^",
			actions: 4
		}
	},
	{
		name: "Courage",
		allowed: ["bwg"],
		type: "Magical",
		description: "The word is fire in thy veins.<br>This simple incantation negates your allies' current hesitation. Meeting the obstacle eliminates all hesitation",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Presence",
			impetus: ["Influence"],
			obstacle: 4,
			actions: 2
		}
	},
	{
		name: "Dark of Night",
		allowed: ["bwg"],
		type: "Magical",
		description: "A dim pall suffocates the hall as the wizard enters, shadows lengthen and deepen, lamps shine but give no light.<br>This spell creates darkness and smothers light. Thus a candle can be seen as a point of light, but it illuminates nothing. Successful casting creates the dim light condition (+1 Ob to any action requiring light) . Extra successes can be spent to increase the level of darkness up to a maximum of +4 Ob. Extra successes can also increase the area of effect.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Tax"],
			obstacle: "3^",
			actions: 5
		}
	},
	{
		name: "Delirium Tremens",
		allowed: ["bwg"],
		type: "Magical",
		description: "The touch of the wizard sends all thy senses reeling.<br>This spell increases obstacles by 10 minus the victim's Will. Effects lessen over time; obstacle penalty drop s by one per test or after an hour of rest.<br>Weapon Length: as Hands; Range: as Melee.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Tax"],
			obstacle: "Forte",
			actions: 3
		}
	},
	{
		name: "Dexterity of the Cat",
		allowed: ["bwg"],
		type: "Magical",
		description: "Purring incantations imbue the recipient with the infallible balance of the cat.<br>+2D are added to the character's Speed for purposes of climbing, leaping, dodging and other cat-like actions (including fighting, but not sprinting or long distance running).",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "1+Speed",
			actions: 35
		}
	},
	{
		name: "Dog's Ear",
		allowed: ["bwg"],
		type: "Magical",
		description: "Suddenly the world is a storm crashing through an ocean of sound-a man's breath like a gust of wind, a baby's cry like the howl of a gale,<br>footfalls like lightning strikes. Increases Perception by+ 1D overall, and by +2D for strictly auditory-based Perception tests. Anima Enhancers like this spell can be used to affect positioning and maneuvers.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Perception",
			actions: 35
		}
	},
	{
		name: "Eldritch Shield",
		allowed: ["bwg"],
		type: "Magical",
		description: "I call upon thee, Powers Arcane. Protect this humbl e supplicant from the depredations of evil!<br>The Eldritch Shield protects the caster from the Destroy and Tax impetus spells -Fire Breath, Rain of Fire, White Fire, Fire Fan, Emperor's Hand, Havoc's Hand, Choking Hand, etc. It will not protect against a spell like The Fear or Persuasion.<br>Meeting the obstacle creates a strength 1 shield. Successes over the obstacle increase the shield strength by one per success. When a spell effect hits the shield, subtract the shield's strength from the successes used to cast the spell. If the shield reduces the incoming spell's successes below the obstacle needed to cast it, then the spell is completely absorbed. If the spell is not completely reduced, subtract the shield strength from the spell cast and use this number as the new Power/effect for the spell.<br>For example, the sorcerer is sustaining a 10 strength Eldritch Shield and a witch throws a Fire Fan (ob 3) at him with six extra successes. The shield needs to absorb seven successes in order to negate the spell effect (and reduce the casting successes below the obstacle}. The shield is now strength 3. If the shield then absorbs a white Fire bolt at seven successes, three of them are blocked by the shield and the other four get through. Just enough to meet the spell obstacle. Damage for the spell is factored using the remaining successes.<br>If the shield is knocked down, the caster must make an Ob 2 tax test. Also shield failure counts as a 'may not' for Sustained spells.<br>A sorcerer may extend his shield to his friends. Additional successes may be spent to cover additional characters. Those characters gain the full benefits of the remaining strength of the shield.<br>If six successes are rolled, the mage may touch touch his friend and bring him into the shield. It's an Ob 3 spell, one additional success is spen; and now a strength two shield protects them both.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Arcana"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: "3^",
			actions: 9
		}
	},
	{
		name: "Emperor's Hand",
		allowed: ["bwg"],
		type: "Magical",
		description: "Cold blue fire arcs from the wizard's hand into the very soul of his prey, draining his strength.<br>Meeting the obstacle temporarily drains 1D of  		from the victim. Each success over the obstacle drains an additional point of Forte. Reducing Forte to zero incapacitates the victim. Forte recovers at 1D per exchange.<br>Weapon Length: as Polearm; Range: as Pistol.",
		cost: 12,
		magical: {
			origin: "Presence",
			element: ["White"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Tax"],
			obstacle: "Forte^",
			actions: 4
		}
	},
	{
		name: "Falcon Skin",
		allowed: ["bwg"],
		type: "Magical",
		description: "Invoking the names and powers of the shaper, the sorceress and the trickster, the wizard transmutes his form into that of a sleek falcon.<br>While sustaining Falcon Skin, the caster takes on the stats of the Bird of Prey listed in the Creature Codex PDF download on www.burningwheel.com. He may fly as the bird does, but since he cannot speak or gesticulate, he may not cast spells. For the purposes of The Power Still Flows Through Him rules, use the wizard's own Forte.",
		cost: 8,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Transmute"],
			obstacle: 4,
			actions: 12
		}
	},
	{
		name: "The Fear",
		allowed: ["bwg"],
		type: "Magical",
		description: "Fear radiates from him like chill from a winter night.<br>This charm causes all in the sorcerer's presence-who are looking at him-to make Steel tests. Only works once per target.<br>Weapon Length: as Polearm; Range: as Pistol.",
		cost: 6,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Presence",
			impetus: ["Influence"],
			obstacle: 3,
			actions: 1
		}
	},
	{
		name: "Fire Breath",
		allowed: ["bwg"],
		type: "Magical",
		description: "A tongue of fire lashes out from the caster's gaping maw and bathes his enemies inflames.<br>Damaging effect spell: Power=Will +3, VA: 2. Die of Fate to determine IMS. Weapon Length: as Sword; Range: as Pi stol.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Fire"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (paces)",
			impetus: ["Destroy"],
			obstacle: "3^",
			actions: 3
		}
	},
	{
		name: "Fire Fan",
		allowed: ["bwg"],
		type: "Magical",
		description: "Flickering flames flare out from the caster's fingertips and scorch his enemies.<br>Damaging effect: Power=½ Will +3 , VA 2. Die of Fate to determine IMS. Weapon Length: as Spear; Range: as Pistol.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Fire"],
			duration: "Instantaneous",
			areaOfEffect: "Presence",
			impetus: ["Destroy"],
			obstacle: "3^",
			actions: 1
		}
	},
	{
		name: "Firewalker",
		allowed: ["bwg"],
		type: "Magical",
		description: "Fire cannot burn one who knows this secret.<br>This incantation will protect the caster and his belongings from the ravages of fire. This does not protect against fire created via the Destroy facet.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 4,
			actions: 4
		}
	},
	{
		name: "Fish Lung",
		allowed: ["bwg"],
		type: "Magical",
		description: "Briny water becomes like air for the lungs.<br>Fish Lung allows the recipient to breathe underwater.",
		cost: 10,
		magical: {
			origin: "Presence",
			element: ["Water", "Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: 5,
			actions: 10
		}
	},
	{
		name: "Flame Finger",
		allowed: ["bwg"],
		type: "Magical",
		description: "A small, bright flame leaps into being in the palm of the sorcerer.<br>This flame can be used to ignite fires (like a brand would) or shed a little candlelight.",
		cost: 6,
		magical: {
			origin: "Presence",
			element: ["Fire"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Create"],
			obstacle: 4,
			actions: 12
		}
	},
	{
		name: "Force of Will",
		allowed: ["bwg"],
		type: "Magical",
		description: "The most foul sorcerous power is that of twisting man's will.<br>This spell allows the mage to implant forceful commands into the victim's mind. The words of the mage become thoughts —as if the victim had formulated them himself. This is a very powerful spell. The words of the sorcerer are permanently embedded into the mind of the victim. They resonate against the character's personality for the rest of his days. The sorcerer may rewrite one Belief. That Belief may not be changed without use of another Force of Will spell.",
		cost: 22,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Permanent",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: "6+Will",
			actions: 133
		}
	},
	{
		name: "Gray Cloak",
		allowed: ["bwg"],
		type: "Magical",
		description: "Cold tendrils of gray mist unfold from the sorcerer's robes, blurring shape and hiding form.<br>The Gray Cloak increases all Observation and Perception obstacles within (or looking into) its folds by +3 Ob.<br>Weapon Length: as Missile; Range: as Thrown.",
		cost: 8,
		magical: {
			origin: "Personal",
			element: ["Water", "Air"],
			duration: "Elapsed Time (Minutes)",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Control"],
			obstacle: 5,
			actions: 12
		}
	},
	{
		name: "Havoc's Hand",
		allowed: ["bwg"],
		type: "Magical",
		description: "The sorcerer's hand becomes a venomous blade. The merest touch wreaks havoc upon his victim.<br>The sorcerer's hand becomes a weapon. He must simply touch his opponent to deliver his retribution. The damage done is according to the spell, not the successes of the hit.<br>The touch has a damaging effect Power=Will +4. VA 1. Die of Fate to determine IMS. Weapon Length: as Hands; Range: as Melee.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Destroy"],
			obstacle: "3^",
			actions: 4
		}
	},
	{
		name: "Horror",
		allowed: ["bwg"],
		type: "Magical",
		description: "Terrible emanations of fear and loathing pour forth from the wizard.<br>This spell causes all in the mage's presence who can see him to make a Steel test, +1 Ob for each success over the spell obstacle. If hesitating, victims must run screaming.<br>Weapon Length: as Polearm; Range: as Pistol.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Presence",
			impetus: ["Influence"],
			obstacle: "4^",
			actions: 2
		}
	},
	{
		name: "Horse's Stride",
		allowed: ["bwg"],
		type: "Magical",
		description: "The swiftness of the running mare courses through the sorcerer's shanks.<br>This spell increases the recipient's stride to that of a horse (12).",
		cost: 6,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: 3,
			actions: 4
		}
	},
	{
		name: "Lights of St. Andrew",
		allowed: ["bwg"],
		type: "Magical",
		description: "A rushing blast of color and light flies from the outstretched hands of the caster and stuns all in its path.<br>This spell causes the victim to make a Forte test. Meeting the spell obstacle is triggers an Ob 1 Forte test. Extra successes from the spell increase the victim's obstacle. Margin of failure for the Forte test becomes an obstacle penalty for all of the victim's actions. The penalty drops by one each volley after the first.<br>Weapon Length: as Sword; Range: as Pistol.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (paces)",
			impetus: ["Tax"],
			obstacle: "3^",
			actions: 2
		}
	},
	{
		name: "Low Speech",
		allowed: ["bwg"],
		type: "Magical",
		description: "<br>This spell allows you to speak with animals: apes and simians, Ob 1; dogs, pigs and dolphins, Ob 2; horses, oxen, Ob 3; wild beasts, Ob 4; birds, Ob 5; reptiles, Ob 6; fish, Ob 7; insects, Ob 8. Decide which type before casting.",
		cost: 8,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Presence",
			impetus: ["Enhance"],
			obstacle: "See description",
			actions: "×3"
		}
	},
	{
		name: "Mage Light",
		allowed: ["bwg"],
		type: "Magical",
		description: "He rapped his staff upon the flagstones and gentle illumination flowed forth.<br>Mage Light is a subtle and powerful spell that dispels darkness. It can be used to call upon the simple light of a candle or the awesome light of day. Before casting, the sorcerer must indicate where the light is set to emanate from on his person: his brow, his staff, a ring on his finger, etc. Successfully casting the spell brings forth a warm light, and negates the penalty for dim light and reduces all other darkness penalties by one. Extra successes may be spent to reduce the stiffer penalties of dee per darknesses.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Presence",
			impetus: ["Create"],
			obstacle: "4^",
			actions: 12
		}
	},
	{
		name: "Magesense",
		allowed: ["bwg"],
		type: "Magical",
		description: "<br>Magesense is a powerful spell that extends the sorcerer's senses from the realm of the mundane into that of the arcane. When this spell is erected , the mage sees, hears and smells magic. When a spell is cast within or an active spell enters his Magesense area of effect, the mage may make a Perception test using the following obstacles: high powered magic (major miracles, Mjölnir, the Burning Wheel, Ob 10 spells, Strength 10 spirits etc.) are Ob 1 to detect; moderately powered magic (minor miracles, Ob 5 spells, a risen corpse, the Belt of Flying, Dragon Slaying Sword, Spirit Weapons, Strength 5 spirits), Ob 5; low powered magic (Jade Amulet, bless/curse, Ob 2 spells, Strength 2 spirits), Ob 8. If successful, he can pinpoint the location of the magical effec the does not instantly know the nature of the magic.<br>Extra successes of the spell must be divided between the area of effect and the sensitivity. Area of effect expands the range, but sensitivity adds +1D per success to Perception for the purpose of detecting magic. Magesense is one of the abilities that allows a sorcerer to use Aura Reading. Therefore, once magic is detected, Aura Reading may be used to determine the exact nature of the ability.<br>Lastly, while the Magesense is being sustained, the sorcerer's Perception counts as Observation for detecting Stealthy and Inconspicuous characters, and the sorcerer suffers a +1 Ob penalty to all physical activities like fighting, running and jumping.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima", "Arcana"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Enhance"],
			obstacle: "4^",
			actions: 300
		}
	},
	{
		name: "Magic Whistle",
		allowed: ["bwg"],
		type: "Magical",
		description: "A miniature firework launch es from the magician's outstretched finger and corkscrews crazily off into the air.<br>Its journey ends with a magical whistle. Multicolor sparks drift to the ground.<br>Weapon Length: as Sword; Range: as Pistol.",
		cost: 2,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (paces)",
			impetus: ["Influence"],
			obstacle: 1,
			actions: 2
		}
	},
	{
		name: "Mask",
		allowed: ["bwg"],
		type: "Magical",
		description: "A wizard can walk in the guise of any man.<br>A mage may alter the appearance of his face with this simple illusion. The spell forces others to make an Observation test to recognize the mage. The obstacle is 1 plus the margin of success.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Control"],
			obstacle: "3^",
			actions: 4
		}
	},
	{
		name: "Mend",
		allowed: ["bwg"],
		type: "Magical",
		description: "Under the witch's careful tending, the wear and tear of daily life disappears from cloth, wood and even metal.<br>Meeting the obstacle repairs clothing and shoes; 1 success over mends tools, weapons or 1D of shield damage; 2 over mends 1D of armor; 3 over repairs stuff like gears or 2D of armor; 4 over repairs machines, like a mill, or large tools like a plowshare.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: "4^",
			actions: 27
		}
	},
	{
		name: "Minor Maker",
		allowed: ["bwg"],
		type: "Magical",
		description: "Know this simple spell and you'll never be without that which you need.<br>Starting with a scrap, piece or fragment, the wizard can recreate and multiply wood, rope, cloth or paper.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Create"],
			obstacle: "3^",
			actions: 12
		}
	},
	{
		name: "Persuasion",
		allowed: ["bwg"],
		type: "Magical",
		description: "Sorcery renders supple the words and tongue of a magician.<br>Using Persuasion, a sorcerer may offer a suggestion to his target. It must be a minor request or suggestion and seemingly normal or mundane; the sorcerer may not command his target to do anything. If the spell is successfully cast, then the victim must do as the sorcerer suggests. He must attempt to complete the request in the time allotted by the duration. After that time, the suggestion will lose importance, and the victim will move on.",
		cost: 10,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Influence"],
			obstacle: "Will",
			actions: 4
		}
	},
	{
		name: "Phantasmagoria",
		allowed: ["bwg"],
		type: "Magical",
		description: "Shadows, dreams and phantasms come at the witch's beck and call.<br>Using Phantasmagoria, a witch may conjure images and illusions. The size, scope, depth, texture and detail of the vision depend on the success of the spell. Meeting the obstacle allows her to change the shape of one small, palm-sized object —but to all who view it, it seems real enough. Exceeding the obstacle allows her to increase the size and breadth of that illusion: 1 success over for an object or animal the size of a hat; 2 over for a dog or chair; 3 over creates a person, a wall or a bed; 4 over for a horse or cart or a complex image like a painting or tapestry; 5 over to create a small house or a crowd of people; 6 over to create a house, a court or a monstrous creature like a Giant or Ancient Seneschal.<br>To penetrate an illusion, a character must pass an Ob 3 Perception test or an Ob 2 Observation test. To make the illusions harder to penetrate, the witch may add her extra successes into complexity instead of scope. Successes allocated to the complexity of the illusion are added to the Perception/Observation obstacle.",
		cost: 12,
		magical: {
			origin: "Presence",
			element: ["Heaven", "Anima"],
			duration: "Sustained",
			areaOfEffect: "Natural Effect",
			impetus: ["Control"],
			obstacle: "3^",
			actions: 56
		}
	},
	{
		name: "Philosopher's Perch",
		allowed: ["bwg"],
		type: "Magical",
		description: "His pure thoughts render him weightless; he floats in air akin to a feather.<br>This incantation allows the wizard to rise straight up into the air. He may rise a number of paces equal to his Will, and may only rise straight up.",
		cost: 6,
		magical: {
			origin: "Presence",
			element: ["Air"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 3,
			actions: 4
		}
	},
	{
		name: "Pyrotechnics",
		allowed: ["bwg"],
		type: "Magical",
		description: "The sorcerer commands the life of fire.<br>He may cause it to burn high and bright or cause it to be low and smoking. This spell affects bonfire-sized fires and smaller. The mage may increase or reduce a fire's strength by two steps on the natural magic scale. Fires reduced to zero are doused.",
		cost: 6,
		magical: {
			origin: "Presence",
			element: ["Fire"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 3,
			actions: 8
		}
	},
	{
		name: "Rain of Fire",
		allowed: ["bwg"],
		type: "Magical",
		description: "The sky turns a smoky red and streams of fire erupt on the wind, annihilating the wizard's enemies.<br>Damaging effect spell: Power=Will+2, VA 5. Di e of Fate to determine IMS. Weapon Length: as Missile; Range: as Heavy Crossbow +1D.",
		cost: 20,
		magical: {
			origin: "Sight",
			element: ["Fire", "Air"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Destroy"],
			obstacle: "5^",
			actions: 7
		}
	},
	{
		name: "Rainstorm",
		allowed: ["bwg"],
		type: "Magical",
		description: "Leaden clouds rush to the sorcerer's call; thick, stinging rain sweeps the fields, causing his enemies to despair.<br>This incantation causes a torrential downpour that turns the earth to soupy mud, drowns out the cries of men and washes out bridges and homes. 1 over: light rain; 2 over: rain; 3 over: heavy rain; 4 over: downpour with accompanying, minor flash floods; 5 over: storm squall with flooding and minor damage to buildings; 6 over: storm and serious flooding, cows float away; 7 over: heavy storm with damage to wooden buildings; 8 over: flooding and sudden downpour causes buildings to collapse.<br>Weapon Length: as Missile; Range: as Heavy Crossbow +2D.",
		cost: 16,
		magical: {
			origin: "Sight",
			element: ["Water", "Air"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (100s of paces)",
			impetus: ["Control"],
			obstacle: "4^",
			actions: 256
		}
	},
	{
		name: "Sarch's Glare",
		allowed: ["bwg"],
		type: "Magical",
		description: "Arcane power flares from the brow of the sorcerer, and his eyes become scintillating stars of fear.<br>Those who look into his eyes fre eze; their limbs go dead, paralyzed. The sorcerer may nominate one character to be the recipient of his gaze and attempt to paralyze him. Obstacle is the target's Will or Forte, whichever is lower.<br>Weapon Length: as Missile; Range: as Pistol.",
		cost: 12,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Tax"],
			obstacle: "Will/Forte",
			actions: 4
		}
	},
	{
		name: "Shards",
		allowed: ["bwg"],
		type: "Magical",
		description: "With a gesture, the sorcerer gouges massive splinters from nearby wood and stone and flings them with great velocity into the unwary.<br>The spell leaves deep grooves in the material used as its source.<br>Damaging effect spell: Power=½ Will+2, VA 3. Die of Fate to determine IMS. Weapon Length: as Polearm; Range: as Pistol.",
		cost: 8,
		magical: {
			origin: "Presence",
			element: ["Earth"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (paces)",
			impetus: ["Destroy"],
			obstacle: "2^",
			actions: 1
		}
	},
	{
		name: "Sight of the Eagle",
		allowed: ["bwg"],
		type: "Magical",
		description: "Light sharpens, and that which is distant becomes clear.<br>The recipient gains +2D to Perception tests. Anima Enhancers like this spell can be used to affect positioning and maneuvers.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Perception",
			actions: 30
		}
	},
	{
		name: "Spark Shower",
		allowed: ["bwg"],
		type: "Magical",
		description: "Fire leaps and spits sparks at the sorcerer's call.<br>Anyone sitting around the targeted fire suffers. Must be cast into a fire source. Will douse torches when cast, but will not unduly affect campfires or larger blazes.<br>Damaging effect spell: Base Power=½ Will +3, VA 2. Die of Fate to determine IMS. Weapon Length: as Polearm; Range: as Pistol.",
		cost: 8,
		magical: {
			origin: "Presence",
			element: ["Fire"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Destroy"],
			obstacle: "2^",
			actions: 1
		}
	},
	{
		name: "Spirit Servant",
		allowed: ["bwg"],
		type: "Magical",
		description: "A ghostly presence forms and shadows the sorcerer, serving his need and whim.<br>The servant may perform simple functions for the caster: carry, serve, open, etc. The servant's Speed and Power are equal to the caster's Will. The Servant may not leave the sorcerer's sight.",
		cost: 6,
		magical: {
			origin: "Presence",
			element: ["Arcana", "Earth"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 3,
			actions: 50
		}
	},
	{
		name: "Storm of Lightning",
		allowed: ["bwg"],
		type: "Magical",
		description: "The sky chokes into a purple rage and voices its displeasure with searing thunderbolts.<br>Damaging effect spell: Power= Will+5, VA 6. Die of Fate to determine IMS. Weapon Length: as Missile; Range: as Heavy Crossbow + 1D.",
		cost: 24,
		magical: {
			origin: "Sight",
			element: ["White", "Air"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Destroy"],
			obstacle: 6,
			actions: 20
		}
	},
	{
		name: "Strength of the Ox",
		allowed: ["bwg"],
		type: "Magical",
		description: "Calling forth the power of ancient spirits, the sorcerer summons the limitless strength of the ox into his veins.<br>The recipient gains +2D to Power.",
		cost: 10,
		magical: {
			origin: "Presence",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Power",
			actions: 30
		}
	},
	{
		name: "Thunderclap",
		allowed: ["bwg"],
		type: "Magical",
		description: "Speaking this primal incantation and bringing his hands together, the wizard causes a small thunderclap to erupt and deafen his enemies.<br>Thunderclap deafens all those around the caster for one hour and causes +1 Ob to all actions for one exchange. Victims may make a Forte test to reduce time of deafness: 10 minutes per success. Multiple thunderclaps have no cumulative effect (What? I can't hear you).<br>Weapon Length: as Polearm; Range: as Pistol.",
		cost: 6,
		magical: {
			origin: "Personal",
			element: ["Air"],
			duration: "Instantaneous",
			areaOfEffect: "Presence",
			impetus: ["Tax"],
			obstacle: 3,
			actions: 2
		}
	},
	{
		name: "Turn Aside the Blade",
		allowed: ["bwg"],
		type: "Magical",
		description: "A true sorcerer is untouchable by swords, arrows, spears and fists.<br>Turn Aside the Blade in creases the obstacle to strike or shoot the caster. The obstacle penalty is 1 plus the margin of success of the spell. Thus, if a sorcerer casts the spell with five successes, all in coming attacks are at +2 Ob.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima", "Earth"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Control"],
			obstacle: "4^",
			actions: 11
		}
	},
	{
		name: "Valor",
		allowed: ["bwg"],
		type: "Magical",
		description: "Waves of courage and zeal pour steadily forth from the wizard.<br>This spell adds + 1D to Steel plus +1 D per margin of success to all allies in his presence.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Presence",
			impetus: ["Enhance"],
			obstacle: "4^",
			actions: 6
		}
	},
	{
		name: "Voice Caster",
		allowed: ["bwg"],
		type: "Magical",
		description: "The voice of the sorcerer has no source. He may produce sound wheresoever he desires in his presence.<br>This spell takes the sound from the sorcerer's throat and projects it elsewhere. The sorcerer is silent; his voice is heard from a different point.",
		cost: 8,
		magical: {
			origin: "Presence",
			element: ["Anima", "Air"],
			duration: "Sustained",
			areaOfEffect: "Natural Effect",
			impetus: ["Control"],
			obstacle: 4,
			actions: 5
		}
	},
	{
		name: "Wall Walker",
		allowed: ["bwg"],
		type: "Magical",
		description: "Like a hunting spider, the witch clings to walls and clambers about.<br>This spell allows the witch to walk upon walls as if they were horizontal surfaces. Count Speed as Climbing skill. Add +1D to Speed when able to utilize walls and ceilings for advantage.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Control", "Enhance"],
			obstacle: 3,
			actions: 3
		}
	},
	{
		name: "Water Walker",
		allowed: ["bwg"],
		type: "Magical",
		description: "Water becomes like ice to the ensorcelled feet of the witch.<br>The recipient of this spell may tread up on water as if it were solid ground. White/rough water counts as unstable ground —at least +1 Ob to all actions. The character can climb rapids with Speed and/or Climbing tests.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 5,
			actions: 4
		}
	},
	{
		name: "Wave",
		allowed: ["bwg"],
		type: "Magical",
		description: "Smashing his hand against the glassy surface of the water, the incanter sends a powerful wave rippling across the surface.<br>Natural effects of waves: Success, ripples. 1 over, don't rock the boat, baby. 2 over, small craft sway dangerously, people have difficulty standing. 3 over, people knocked down. 4 over, small boats capsized, people flattened. 5 over, mid-sized craft swamped, small boats shattered. 6 over, mid-sized boats capsized. 7 over, large vessels swamped, mid-sized vessels shattered. 8 over, large vessels capsized. 9 over, large seagoing vessels shattered.<br>Wave must be cast in as uitably sized body of water. Deep pools of water (like a big fountain in a city) can only produce up to '4 over' effects. Ponds and streams can only produce up to '5 over' effects.<br>Weapon Length: as Missile; Range: as Crossbow.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Water"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (100s of paces)",
			impetus: ["Control", "Destroy"],
			obstacle: "4^",
			actions: 8
		}
	},
	{
		name: "Weatherworker",
		allowed: ["bwg"],
		type: "Magical",
		description: "With a word, a plea and a pinch of luck, the weather witch asks the clouds, wind and rain to move along, remain a little longer or even calm down a bit.<br>The caster may influence clouds, rain, and storms. He may not influence sun or light independent of moving clouds about. When successfully cast, the spell reduces any nasty weather to some thing merely bothersome, and can magnify bother some weather to some thing nasty. Weatherworker can reduce or increase the intensity of weather by up to three steps on the Natural Effect scale. Reducing the effect to zero moves the phenomenon completely out of the caster's vicinity. Weather may only be increased up to the '9-over' effects —an act tantamount to suicide.",
		cost: 10,
		magical: {
			origin: "Sight",
			element: ["Air", "Water"],
			duration: "Elapsed Time (Hours)",
			areaOfEffect: "Natural Effect",
			impetus: ["Influence"],
			obstacle: 5,
			actions: 12
		}
	},
	{
		name: "Whisper on the Wind",
		allowed: ["bwg"],
		type: "Magical",
		description: "Power arcane sends words winging like divine messengers across the gulf of distance into the ear of the named receiver.<br>The caster can deliver a short (syllables = 2x Caster's Will) message to a named and known recipient. Spell travels 1 mile (1500p). This distance may be increased by upping the obstacle for area of effect.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Air"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: "3^",
			actions: 8
		}
	},
	{
		name: "White Fire",
		allowed: ["bwg"],
		type: "Magical",
		description: "A crashing bolt of lightning arcs from the caster's brow, obliterating his enemies.<br>After striking its intended target and resolving the effect (the most likely result being a pair of smoking boots where once stood your foe), roll the Die of Fate. On a 2-6, the spell dissipates. On a 1, the bolt jumps to another target —friend, foe or self. Roll randomly to determine the new target giving equal weight to all possibilities. After resolving this impact, roll the Die of Fate and go through the process again.<br>Damaging effect spell: Power=Will+5, VA 4. Die of Fate to determine IMS. Weapon Length: as Missile; Range: as Great Bow.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["White"],
			duration: "Instantaneous",
			areaOfEffect: "Natural Effect",
			impetus: ["Destroy"],
			obstacle: "4^",
			actions: 3
		}
	},
	{
		name: "Windlash",
		allowed: ["bwg"],
		type: "Magical",
		description: "Rain and wind grow hostile and lash out at the enemies of the witch.<br>Windlash increases obstacle penalties for those out in the weather: +2 Ob for light rain; heavy rain is +3 Ob; storms are +6 Ob. If a test is, for some reason, not normally penalized by being performed in the rain, Windlash adds a +2 Ob modifier.<br>Weapon Length: as Missile; Range: as Heavy Crossbow +1D.",
		cost: 8,
		magical: {
			origin: "Sight",
			element: ["Air"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Control", "Tax"],
			obstacle: 4,
			actions: 10
		}
	},
	{
		name: "Wisdom of the Ancients",
		allowed: ["bwg"],
		type: "Magical",
		description: "Voices whisper answers and questions across the indigo gulf of time.<br>This spell grants the wizard +2D Will.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Will",
			actions: 30
		}
	},
	{
		name: "Witch Flight",
		allowed: ["bwg"],
		type: "Magical",
		description: "<br>This spell launches the witch in a long leap and allows her to come safely to earth. Increase stride by four for your next positioning test. Leap 10 paces per success.",
		cost: 6,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "3^",
			actions: 4
		}
	},
	{
		name: "Witch Key",
		allowed: ["bwg"],
		type: "Magical",
		description: "A sorcerer's merest whim is the key to any lock.<br>Witch Key opens any mundane lock for the caster.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Instantaneous",
			areaOfEffect: "Single Target",
			impetus: ["Control"],
			obstacle: 3,
			actions: 4
		}
	},
	{
		name: "Wolf Snout",
		allowed: ["bwg"],
		type: "Magical",
		description: "To the witch, a man's scent becomes as distinct as his voice, fear becomes a taste on the tongue.<br>This incantation increases Perception by +1D overall, by +2D for strictly olfactory/taste-based tests. Also, Perception counts as Observation for detecting Stealthy characters.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Enhance"],
			obstacle: "Perception",
			actions: 32
		}
	},
	{
		name: "Wyrd Light",
		allowed: ["bwg"],
		type: "Magical",
		description: "<br>Globes of swirling light orbit the caster and move with a Speed equal to the caster's Will. The lights hover and float at the caster's command, illuminate as if they were torches, and may not move beyond the limits of the caster's presence.",
		cost: 4,
		magical: {
			origin: "Presence",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Natural Effect",
			impetus: ["Control"],
			obstacle: 2,
			actions: 9
		}
	}
];

const RitualsOfNightRituals: Resource[] = [
	{
		name: "Black-Blooded Rage",
		allowed: ["bwg"],
		type: "Magical",
		description: "Calling upon memories of torture in the pits, goading them with visions of hated enemies, the Black-Blooded Rage sends Ores into a howling fury.<br>While under this spell, Orcs add +2D to Steel and half hesitation (round up). Also, so furious are they, these Ores ignore pain-they do not suffer the +1 Ob effects of superficial wounds.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Elapsed Time (Minutes)",
			areaOfEffect: "Double Presence",
			impetus: ["Influence"],
			obstacle: 6,
			actions: 8
		}
	},
	{
		name: "Black Cloak",
		allowed: ["bwg"],
		type: "Magical",
		description: "The Servant covers himself in a humming field of ebon eldritch power.<br>This spell combines the effects of Eldritch Shield and Turn Aside the Blade. Divide successes between physical and spell protection.",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Arcana", "Earth"],
			duration: "Sustained",
			areaOfEffect: "Caster",
			impetus: ["Tax", "Control"],
			obstacle: "4^",
			actions: 10
		}
	},
	{
		name: "Black Rust",
		allowed: ["bwg"],
		type: "Magical",
		description: "At the touch of the Servant's black hand, the Black Rust turns flesh into a charred, twisted ruin.<br>The Black Rust ruptures skin and bone. Damaging Effect: Power exponent of caster plus 1 per extra success; straight damage, no DoF or IMS. Caster need only touch his victim (Ob 1 Agility test or Strike). Armor does not work against this spell. The caster may poison his hand as he would a blade and use the touch of the Black Rust to deliver the venom.<br>Weapon length: as Knife. Range dice: as Melee.",
		cost: 8,
		magical: {
			origin: "Personal",
			element: ["Anima"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Destroy"],
			obstacle: "2^",
			actions: 3
		}
	},
	{
		name: "Call of the Pit",
		allowed: ["bwg"],
		type: "Magical",
		description: "Violent, black words tear a rift in the skin of the earth, spewing fire and vapors: tremors shiver the ground into shards like a hammer shatters a mirror.<br>This spell counts as five successes of Siege Engineer against materials. Extra successes allocated to effect (rather than area) increase the Siege Engineer successes by one per success. All characters caught in the area of effect must make a Speed test with an obstacle equal to all effect successes. Failure indicates they have fallen into the pit and must climb out or be rescued.<br>Weapon length: as Missile. Range dice: as Heavy Crossbow +2D.",
		cost: 20,
		magical: {
			origin: "Sight",
			element: ["Earth"],
			duration: "Instantaneous",
			areaOfEffect: "Measured Area (100s of paces)",
			impetus: ["Destroy"],
			obstacle: "5^",
			actions: 14
		}
	},
	{
		name: "Dark of Night",
		allowed: ["bwg"],
		type: "Magical",
		description: "A dim pall suffocates the hall as the Servant enters; shadows lengthen and deepen; lamps shine but give no light.<br>This spell creates darkness and smothers light. Successful casting creates the dim light condition (+1 Ob to any action requiring light). Extra successes can be spent to increase the level of darkness up to a maximum of +4 Ob. Extra successes can also increase the area of effect.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (10s of paces)",
			impetus: ["Tax"],
			obstacle: "3^",
			actions: 5
		}
	},
	{
		name: "Death's Howl",
		allowed: ["bwg"],
		type: "Magical",
		description: "A frigid wind erupts howling from the mouth of the Servant of Night. The cold is so terrible it freezes flesh on the bone, the wind so powerful it topples trees.<br>Damaging effect: Base Power equals caster's Will. Roll DoF for IMS. VA 8. Weapon length: as Missile. Ranged dice: as Great Bow.<br>The caster may also allocate successes to knock down targets. Successes so allocated count as the obstacle for a Forte test. Failure indicates the character is knocked supine. These successes count on the Natural Effect list, too.",
		cost: 12,
		magical: {
			origin: "Personal",
			element: ["Air"],
			duration: "Instantaneous",
			areaOfEffect: "Natural Effect",
			impetus: ["Destroy", "Control"],
			obstacle: "3^",
			actions: 7
		}
	},
	{
		name: "Enemy of the Sun",
		allowed: ["bwg"],
		type: "Magical",
		description: "A gray haze falls across the sky, shielding the Ores from the sun's rays.<br>This spell turns the light in the sky to a dim twilight —ideal conditions for Orcs going to war.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Heaven"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (miles)",
			impetus: ["Influence"],
			obstacle: 5,
			actions: 8
		}
	},
	{
		name: "His Creeping Hand",
		allowed: ["bwg"],
		type: "Magical",
		description: "His Creeping Hand flings forth a crawling black vapor.<br>The vapor is noxious to breathe and obscures light. However, once released, His Creeping Hand has a will of its own and is not under the control of the caster —it goes where it wants, moving with a Speed equal to the ca ster's Will and a Stride of 8. Successes over the spell obstacle increase obstacles for all in the cloud due to the darkness and noxious vapors (+1 Ob per success). Anyone touched by His Creeping Hand must make a Steel test. Extra successes may also be spent to increase the duration (one exchange per extra success).",
		cost: 16,
		magical: {
			origin: "Personal",
			element: ["Air", "Heaven"],
			duration: "Elapsed Time (Exchanges)",
			areaOfEffect: "Double Presence",
			impetus: ["Tax"],
			obstacle: "4^",
			actions: 6
		}
	},
	{
		name: "Impenetrable Gloom",
		allowed: ["bwg"],
		type: "Magical",
		description: "The Servant summons gloom to conceal his den from the prying eyes of Elves and Men.<br>Impenetrable Gloom conceals caves and warrens from normal sight. Spotting them require s an Ob 5 Observation test. Any attempts to track the Ores to their den suffer an +5 Ob penalty. Impenetrable Gloom also conceals the Ores from magical detection; even the spell itself is difficult to detect. Increase Magesense or Second Sight obstacles by +2 Ob. Air of Gates requires an Ob 5 test in order to detect Impenetrable Gloom and those it protects.",
		cost: 20,
		magical: {
			origin: "Personal",
			element: ["Arcana", "Heaven"],
			duration: "Sustained",
			areaOfEffect: "Natural Effect",
			impetus: ["Control"],
			obstacle: 5,
			actions: 10
		}
	},
	{
		name: "Intonation of Earth's Dark Secrets",
		allowed: ["bwg"],
		type: "Magical",
		description: "Dirt and loam foam and froth, marking a pathway to the nearest caves.<br>The Servant may guide those in his charge to the safety of the underworld. Caves are never more than a mile or two away.",
		cost: 8,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Measured Area (miles)",
			impetus: ["Influence"],
			obstacle: 4,
			actions: 7
		}
	}
];

const PracticalMagicSchools: Resource[] = [
	{
		name: "Practical Magic — Schools",
		allowed: ["bwc"],
		type: "Magical",
		cost: [
			["Academic", 16],
			["Artisan", 12],
			["Artist", 7],
			["Craftsman", 18],
			["Forester", 15],
			["Martial", 12],
			["Medicinal", 13],
			["Military", 9],
			["Musical", 7],
			["Peasant", 12],
			["Physical", 7],
			["School of Thought", 9],
			["Seafaring", 12],
			["Social", 25],
			["Sorcerous", 0],
			["Special", 18]
		]
	}
];

const SpiritBindingDomainBindingLevels: Resource[] = [
	{
		name: "Spirit Binding — Domain Binding Levels",
		allowed: ["bwc"],
		type: "Magical",
		cost: [
			["0D: Bound", 5],
			["1D: Sworn", 7],
			["2D: Embodied", 25],
			["3D: Mastered", 45]
		]
	}
];

const SpiritBindingSpiritMarkLevels: Resource[] = [
	{
		name: "Spirit Binding — Spirit Mark Levels",
		allowed: ["bwc"],
		type: "Magical",
		cost: [
			["1D: Touched", 10],
			["2D: Marked", 25],
			["3D: Infused", 50]
		]
	}
];

const SummoningAffiliatedOrderLevels: Resource[] = [
	{
		name: "Summoning — Affiliated Order Levels",
		allowed: ["bwc"],
		type: "Magical",
		cost: [
			["0D: Journeyman Order", 10],
			["1D: First Order", 20],
			["2D: Second Order", 25],
			["3D: Third Order", 50]
		],
		modifiers: [
			["Restless Dead", 0],
			["Sanctified Dead", 4],
			["Minor Major Corporal Spirit", 5],
			["Corporal Spirit", 6],
			["Major Corporal Spirit", 7],
			["Minor Deity", 8],
			["Deity", 9],
			["Chief Deity", 10]
		]
	}
];

export const Resources: ResourceGroup = {
	"Dwarf": {
		name: "Dwarf",
		allowed: ["bwg"],
		resources: [
			Relationship,
			Reputation,
			Affiliation,
			{
				name: "Shoddy Arms",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Arms",
				allowed: ["bwg"],
				type: "Gear",
				cost: 20,
				description: "All Dwarven Arms are considered superior quality items. In addition, they add a +1D balance die to the skill of the wielder. Traditionally, Dwarves use axes and hammers, throwing axes and knives. But swords and maces are acceptable as well. Players may purchase beaks, spikes and weights for their character's weapons at +4rps per modification, per weapon."
			},
			{
				name: "Shoddy Crossbow",
				allowed: ["bwg"],
				type: "Gear",
				cost: 6,
				description: "Any gear choice listed as 'shoddy' merely means the is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Arbalest",
				allowed: ["bwg"],
				type: "Gear",
				cost: 20,
				description: "The arbalest is a special Dwarven make of the traditional crossbow. It can fire rocks or bolts. It counts as a crossbow but only requires 10 actions to load when firing bolts, or 6 actions when firing rocks. These devices are so well-made they add a +1D balance die to the wielder 's skill.<br>Rocks IMS: I: B3, M: B6, S: B9, VA: —. When firing rocks, the arbalest counts as an arquebus for Range and Cover and DoF rules.<br>It can fire bolts using the range and damage of a crossbow."
			},
			{
				name: "Dwarven-made Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: [["Light Mail", 9], ["Heavy Mail", 10], ["Plated Mail", 20]],
				description: "This is run of the mill armor made by Dwarves. It obeys the standard rules for armor, except that the first '1' rolled on an armor test per piece may be ignored. After that, it obeys the normal rules for armor failure. Once the 1 is gone, the special ability is gone. Lastly, Dwarven-made armor does not cause a Clumsy Weight Speed penalty (no obstacle penalty or -1D)."
			},
			{
				name: "Dwarven Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: 100,
				description: "This is the most precious of all armors. Dwarven mail covers the bearer in fine and supple chainmail. It gives no clumsy weight penalties except for gauntlets and penalties for Stealthy. The armor counts as gray shade heavy mail from head to hand to boot. It is, of course, superior quality. Dwarven mail counts as property when factoring Resources."
			},
			{
				name: "Forge Mask",
				allowed: ["bwg"],
				type: "Gear",
				cost: 40,
				description: "This is a highly coveted piece of Dwarven craftsmanship. Forge Masks are constructed under great secrecy using the most complex and obscure Dwarven forging techniques. Designed to withstand the extreme heat of the Dwarven forge and errant heavy blows of the smithing process, they are requisite protection for every Artificer and Mask Bearer, as well as a sign of rank and skill. The mask may also be worn as a piece of armor added onto another suit and counts as 4D of gray shade armor for the face and head (with only a +1 Ob clumsy weight penalty). The mask is highly resistant to heat and flame. It allows an armor test against flames directed at the head. Also, the mask can cause an opponent to make a Steel test at the time of the wearer's choosing. This fear effect only works once per target, costs one action to activate and can only be us ed on a target face to face with the Mask Bearer."
			},
			{
				name: "Dwarven Shield",
				allowed: ["bwg"],
				type: "Gear",
				cost: 20,
				description: "This magnificent device counts as a 3D gray shade superior quality shield. Against heat and flame, the shield counts as magical armor. The bearer of a Dwarven shield may make an armor test (3D) against any incoming flame attacks. Black s hade fire has no VA, gray shade is VA 1, and white shade is VA 2. Use these VAs instead of any spell VA . If the shield bearer is wearing a Forge Mask, he may add +2D to this armor test. When used as a weapon, the shield's weapon shade is that of its bearer 's Power."
			},
			{
				name: "Riding Mount or Pack Animal",
				allowed: ["bwg"],
				type: "Gear",
				cost: 8,
				description: "Dwarves tend to ride ponies or mules."
			},
			{
				name: "Clothes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1
			},
			{
				name: "Traveling Gear",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Sturdy Shoes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1
			},
			{
				name: "Finery",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5
			},
			{
				name: "Chronicles",
				allowed: ["bwg"],
				type: "Gear",
				cost: 15,
				description: "Chronicles add +1D to any history type test about Dwarves."
			},
			{
				name: "Keg o' Nog",
				allowed: ["bwg"],
				type: "Gear",
				cost: 20,
				description: "A Keg o' Nog provides the Dwarf with 12 tall mugfuls of the fabled drink. Each mug is worth +1D to one Health test, but +1 Ob to social skill tests for the scene. (Only one bonus/penalty is in effect, no matter how much of the brew is quaffed by Dwarves.) One sip is enough to get any non-Dwarf drunk."
			},
			{
				name: "Shoddy Tools",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "Any gear choice listed as 'shoddy' merely means the stuff is not Dwarf-made. It counts as run of the mill gear and provides none of the bonuses of the more expensive Dwarven gear."
			},
			{
				name: "Dwarven Tools",
				allowed: ["bwg"],
				type: "Gear",
				cost: 10,
				description: "Every Master Artificer builds and maintain s his own tools. It is an ancient and proud art passed down from master to student: a vital tradition, for the tools are the Artificer's fingers and hands in the forge. Dwarven Tools (of any type) provide the user with +1D of equipment dice when used with the appropriate skill."
			},
			{
				name: "Property",
				allowed: ["bwg"],
				type: "Property",
				cost: [["A small house", 10], ["Large house", 15], ["A Dwarven hall (a large apartment in a hold)", 30], ["A Graybeard's hold*", 40], ["An Engineer's hold*", 45], ["A Master Artificer's hold*", 60], ["A Warden's hold*", 75], ["A High Captain's hold*", 90], ["A Prince's hold*", 105]],
				description: "These all count as property when factoring Resources. *Only Dwarves of the listed rank or higher may take this kind of property."
			},
			{
				name: "Workshop",
				allowed: ["bwg"],
				type: "Property",
				cost: 60,
				description: "Workshops are necessary to completely utilize Dwarven Artificer and Dwarven craftsman skills-without one, the Dwarf may only undertake smaller projects (Ob 3 tests or lower). Also, Dwarven Workshops are required if the character will be building special Dwarven items like masks, shields, arms or mail. Dwarven Workshops include (portable) skill tool kits as part of their cost (see below). Workshops count as property when factoring Resources."
			},
			{
				name: "Carts and Baggage",
				allowed: ["bwg"],
				type: "Property",
				description: "Guilders bring their wares down from the holds in great lumbering carts. Carts and Baggage represents trade and salable go ods for Guilder Dwarves . They count as property when factoring resources and may be purc ha sed multiple times for multiple bonuses.",
				cost: 15
			}
		]
	},
	"Elf": {
		name: "Elf",
		allowed: ["bwg"],
		resources: [
			Relationship,
			Reputation,
			Affiliation,
			{
				name: "Run of the Mill Weapons and Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: [["Bow", 5], ["Arms", 5], ["Reinforced Leather", 3], ["Light Mail", 6], ["Heavy Mail", 10], ["Plated Mail", 20]],
				description: "Use the stats for the equipment listed in the Human Lifepaths and run of the mill lists for this gear."
			},
			{
				name: "Elven Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: [["Elven gambeson", 9], ["Elven reinforced leather", 20], ["Elven light mail", 30], ["Elven heavy mail", 40], ["Elven plated mail", 75]],
				description: "Elven Armor is superior quality armor. Also, there are no Clumsy Weight penalties for all, except plated mail. Elves may buy armor piecemeal as described in the Human Resources section."
			},
			{
				name: "Elven Arms",
				allowed: ["bwg"],
				type: "Gear",
				cost: 15,
				description: "Elven Arms are considered superior quality weapons. Players may purchase beaks, spikes and weights for their characters' weapons at +3 rps per modification, per weapon."
			},
			{
				name: "Elven Bow",
				allowed: ["bwg"],
				type: "Gear",
				cost: 25,
				description: "These are the weapons made using the Elven Bowcraft skill. Elven Bows are bigger than hunting bows, but not as big as the great bows of men. They provide 3D of range dice at extreme, and 3D at optimal. Maximum range is 250 paces. In the Fight rules, they have a Nock and Draw time of five actions.<br>When purchasing an Elven Bow, Elves may choose from these arrows:<br>Hunting Head: I: B4, M: B8, S: B11, VA 2, Free<br>Leaf Head: I: BS, M: B9, S: B12, VA 1, +1rp<br>Bodkin: I: B4, M: B7, S: B10, VA 3, +2rps<br>Elven characters who take four or fewer lifepaths and whose last lifepath is Elven Bowyer may take an Elven Bow for 5 rps."
			},
			{
				name: "Elven Cloak",
				allowed: ["bwg"],
				type: "Gear",
				cost: 30,
				description: "Elven Cloaks are also known as Gray Mantles. They are imbued with the Threne of the Chameleon and conceal Elven rangers who guard the fences of the hidden kingdoms of the Elves. Gray Mantles count as a 4D Threne of the Chameleon. If the character is using Stealthy and/or the actual Threne, he may add the cloak's dice to the skill or song when rolling to hide. In addition, Elven Cloaks are warm in winter, cool in summer, covering in rain and quick to dry."
			},
			{
				name: "Elven Steed",
				allowed: ["bwg"],
				type: "Gear",
				cost: 8,
				description: "Elven Steeds are swift in travel and steadfast in war. Pe: B3(4), Wi: B2, Ag: B3, Sp: B6, Po: B6, Fo: B6. Hea: B6, Ste: B6 , Ref: B3, MW: B12 (Tough). Hesitation: 7 (Determined), Stride: 13. Skills: Mounted Combat Training, Rider Training, Intimidation B3, Foraging B4. Traits: Good Bone, Fleet of Hoof, Obedient, Loyal, Tough, Brute, Determined, Long-Limbed, Keen Hearing, Hooved, Ungulate."
			},
			{
				name: "Elven Clothes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 2
			},
			{
				name: "Elven Shoes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1
			},
			{
				name: "Elven Finery",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5
			},
			{
				name: "Elven Rope",
				allowed: ["bwg"],
				type: "Gear",
				cost: 12,
				description: "Elven Rope is light and strong. It weighs half as much as its normal counterpart and holds twice as much for its thickness. Climbing, Knots and Rigging tests taken using Elven Rope may add +1D. It counts as tools for Knots and Climbing. Any Elf or Elf-friend may cue his rope to unknot and untie itself with a tug, nod or gesture."
			},
			{
				name: "Elven Bread",
				allowed: ["bwg"],
				type: "Gear",
				cost: 10,
				description: "This rare and cherished bread is nourishing and restorative. After it is eaten, it grants +3D to all Health tests taken for the day after it is eaten. One portion of Elven Bread will suffice as a meal for a day. 10 rps buys six portions."
			},
			{
				name: "Elven Mirrorwine",
				allowed: ["bwg"],
				type: "Gear",
				cost: 8,
				description: "Mirrorwine refreshes and restores those who taste it. Add two open-ended dice to the next Health test taken. 8 rps buys four draughts."
			},
			{
				name: "Starlight",
				allowed: ["bwg"],
				type: "Gear",
				cost: 50,
				description: "A bottle of starlight to illuminate the darkest times with the silver halo of the favored star. The Starlight is as bright as Mage Light with four successes over the obstacle. Counts as sunlight for creatures with Cold Black Blood or Enemy of the Sun traits."
			},
			{
				name: "Tome of Lore",
				allowed: ["bwg"],
				type: "Gear",
				cost: 20,
				description: "The tome of lore contains knowledge both prosaic and rare. It grants + 1D to all Elven academic skills, skill songs and appropriate wises."
			},
			{
				name: "Elven Instrument",
				allowed: ["bwg"],
				type: "Gear",
				cost: 6,
				description: "Elves are renowned for their music, both in song and instrument. Elven instruments —flutes, trumpets, lyres, etc.— grant +1D to the bearer 's musical instrument skill."
			},
			{
				name: "Traveling Gear",
				allowed: ["bwg"],
				type: "Gear",
				cost: 2,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Personal Effects",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "A player may purchase for his character personal effects of sentimental value: a lock of hair, a mirror, a book, a ring, a cane, a locket or any other similar item."
			},
			{
				name: "Skill Tools",
				allowed: ["bwg"],
				type: "Gear",
				cost: 9,
				description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
			},
			{
				name: "Workshops",
				allowed: ["bwg"],
				type: "Property",
				cost: [["Elven Smithy", 50], ["Artisan's Shop", 60]],
				description: "Workshops are necessary to completely utilize Stonecraft, Smithcraft, Starcraft and Gemcraft skills-without one, the Elf may only undertake smaller projects (Ob 3 or lower). Also, Elven Workshops are required if the character will be building special 'Elven works'. Workshops count as property when factoring Resources."
			},
			{
				name: "Elven Ship",
				allowed: ["bwg"],
				type: "Property",
				cost: 80,
				description: "This is a beautiful, sleek and sturdy sea-going vessel. She has two masts and can accommodate a crew of about twenty. The crew is included so long as the player purchases a relationship with an Elf who acts as his pilot, navigator or first mate. Their exact abilities are determined via the I Need a Gang or Crew rules. A ship counts as property when factoring Resources."
			},
			{
				name: "Elven Land",
				allowed: ["bwg"],
				type: "Property",
				cost: [
					["Pastoral lands. This includes a single important terrain feature like a lake, a length of river, a hill or prairie and a modest but comfortable dwelling for the Elf's family.", 20],
					["A large country manor and land", 50],
					["A palace", 100],
					["Allows the Elf and his family to occupy a major terrain feature like a forest, bay or mountain.", 150],
					["A sumptuous apartment in the Citadel.", 25]
				],
				description: "Elves, though not as particular or land-hungry as Men and Dwarves, do lay some claims of ownership to certain tracts. Elven Land counts as property when factoring Resources."
			}
		]
	},
	"Dark Elf": {
		name: "Dark Elf",
		allowed: ["bwc"],
		resources: [
			Relationship,
			Reputation,
			Affiliation,
			{
				name: "Bitter Reminder",
				allowed: ["bwc"],
				type: "Gear",
				cost: "various",
				description: "Dark Elf characters may purchase items from the Elven Resources list on page 156 of die Burning Wheel. Each 10 rps spent on this items adds +1D to starting Spite."
			},
			{
				name: "Bitter Poison",
				allowed: ["bwc"],
				type: "Gear",
				cost: 10,
				description: "One dose of this ingested poison causes victim to lose 1D of Health per day for five days. If Health drops to zero, the victim dies. If not, the victim recovers his Health at 1D per week."
			},
			{
				name: "Spiteful Poison",
				allowed: ["bwc"],
				type: "Gear",
				cost: 20,
				description: "One small cut from a needle or blade so poisoned is enough to kill. If an Incidental hit is delivered from a blade or barb with this poison, roll a die of fate. On a 1-2, the victim is poisoned. If a Mark hit is delivered, the victim is poisoned on a 1-4. Superb hits always deliver the poison. If poisoned, the victim must pass an Ob 5 Health test. If failed, the victim —unaware that he or she has been poisoned— will exhibit no symptoms for eight hours or more, after which time he or she will fall into a swoon and die. If somehow detected in the interim, the poison can be countered usign the Song of Soothing. If the victim passes the Health test, the victim's Forte is taxed by four. Recover as per Sickness rules, but in days of hours."
			},
			{
				name: "Lock Pick",
				allowed: ["bwc"],
				type: "Gear",
				cost: 10,
				description: "These tppşs are required to use the Lock Pick skill."
			},
			{
				name: "Long Knife",
				allowed: ["bwc"],
				type: "Gear",
				cost: 5,
				description: "These insidious weapons count as daggers and are designed to cause maximum harm to their targets. Pow 2, Add 1, VA —, WS 3, Short. Can be concealed like a dagger or knife."
			},
			{
				name: "Barbed Javelins",
				allowed: ["bwc"],
				type: "Gear",
				cost: 3,
				description: "Barbed Javelins are designed to cause their victims grievous harm even after impact. If a Superb hit is scored, the javelin has embedded itself in the victim. All medicinal skill rolls to stop bleeding or being recovery suffer +2 Ob penalty due to the javelin's ugly barbs that must be extracted before the victim can heal."
			},
			{
				name: "Garrote",
				allowed: ["bwc"],
				type: "Gear",
				cost: 3,
				description: "A garrote is a two- to three-foot length of cord strung between two small wooden handles. It is used to throttle victims to death. To use this weapon, a character must win positioning at hands fighting distance. Once there, a 2D or greater Lock must be estabilished around the neck with garrote. If such a Lock is achieved, the victim loses 1D Forte every volley thereafter. If Forte reaches zero, the victim falls unconscious."
			},
			{
				name: "Caltrops",
				allowed: ["bwc"],
				type: "Gear",
				cost: 3,
				description: "Caltrops are sharp barbs scattered on the ground to interfere with a creature's movement. If approached while moving quickly or if simply walking into the trap unawared, make an Ob 3 Speed test to avoid. Failure indicates damage. Roll the Die of Fate. 1: B7; 2-4: B5; 5-6: B4."
			},
			{
				name: "Tools of the Trade",
				allowed: ["bwc"],
				type: "Gear",
				cost: 9,
				description: "Skill kits for Disguise, Poisons or any other kit the Dark Elf may need."
			},
			{
				name: "Cloak of Darkness",
				allowed: ["bwc"],
				type: "Gear",
				cost: 30,
				description: "Adds +4D of open ended helping dice to Stealthy skill. If you have no Stealthy skill, roll the cloak's own four dice to create the Observation obstacle."
			},
			{
				name: "Climbing Claws",
				allowed: ["bwc"],
				type: "Gear",
				cost: 5,
				description: "These odd devices help the Dark Elf thieves in their second-story operations. Add +1D to the Climbing skill, but +1 Ob to all other Agility based skills while wearing them (except when using Climbing Claws with Brawling). They can also act as a weapon: Pow 1, Add 2, VA —, WS 2, Shortest."
			},
			{
				name: "Remote Refuge",
				allowed: ["bwc"],
				type: "Property",
				cost: [
					["Pastoral lands. This includes a single important terrain feature like a lake, a length of river, a hill or prairie and a modest but comfortable dwelling for the Elf's family.", 20],
					["A large country manor and land", 50],
					["A palace", 100],
					["Allows the Elf and his family to occupy a major terrain feature like a forest, bay or mountain.", 150],
					["A sumptuous apartment in the Citadel.", 25]
				],
				description: "Dark Elves often find remote refuges where they can live in isolation: deep in ancient woods, lost in wastelands or even under the earth in vast caves. Use the Elven Land list for prices and translate the actual purchases into something suitably dark and forlorn."
			},
			{
				name: "Morlin Armor",
				allowed: ["bwc"],
				type: "Gear",
				cost: [
					["Black metal light mail", 30],
					["Black metal heavy mail", 40],
					["Black metal plated mail", 100]
				],
				description: "The first Dark Elf, in the centuries of his isolation and contemplation, developed a special black metal that was light and supple but as strong as steel. When he ventured forth from his refuge, he was always clad in this harness. Dark Elven black metal armor is superior quality armor and incurs no clumsy weight penalties."
			},
			{
				name: "Morlin Weapons",
				allowed: ["bwc"],
				type: "Gear",
				cost: 15,
				description: "Weapons made of the Dark Elven black metal count as superior quality. You may modify the weapon thusly:<br>For an additional +15 rps, you may add an additional point of weapon speed or VA to the weapon's stats.<br>For +30 rps, you may add +1 Power to the weapon.<br>However, to qualify for this bonus, you must name the weapon and it must be unique in your campaign. For example, if you take a black metal dagger with VA 2, it can be the only one of its type."
			}
		]
	},
	"Human": {
		name: "Human",
		allowed: ["bwg"],
		resources: [
			Relationship,
			Reputation,
			Affiliation,
			{
				name: "Arms",
				allowed: ["bwg"],
				type: "Gear",
				cost: [
					["Poor Quality Arms", 3],
					["Run of the Mill Quality Arms", 5],
					["Superior Quality Arms", 20]
				],
				description: "Arms covers the necessary hand weaponry to suit a character's idiom. Arms for a knight would consist of a sword, lance and dagger. For a foot soldier, perhaps an axe and spear. Whatever it is, just take what you need. Players may purchase beaks, spikes and weights for their characters' weapons at + 1 rp per modification per weapon, +4 rps per modification per weapon of superior quality.<br>Poor Quality Arms - sing poor quality weapon incurs a +1 Ob penalty to all combat tests using the weapon.<br>Run of the Mill Quality Arms - Use run of the mill stats for weapons<br>Superior Quality Arms - Use the superior quality weapon stats."
			},
			{
				name: "Missiles",
				allowed: ["bwg"],
				type: "Gear",
				cost: [
					["Throwing weapons like knives or javelins", 3],
					["Hunting bow", 5],
					["Great bow", 10],
					["Crossbow", 7],
					["Heavy crossbow", 12],
					["Pistol", 15],
					["Arquebus", 20]
				],
				description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special arrowheads are not included and cost extra resource points. They cost 1 rp per special head type-take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix.<br>Poor Quality Missiles - Half resource points cost rounded up. Poor quality missiles are + 1 Ob to hit.<br>Superior Quality Missiles- 3x rps cost. Superior quality missile weapons grant the character a +1D bonus balance die. This is added to his skill every time he takes a shot."
			},
			{
				name: "Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: [
					["Gambeson", 3],
					["Reinforced leather", 6],
					["Light mail", 10],
					["Heavy mail", 15],
					["Plated mail", 20],
					["Full plated mail", 50]
				],
				description: "When you buy armor, you buy the whole suit-helmet, arms, chest and legs. The player may choose individual pieces if he likes. A helmet or br eastplate costs half the full suit. Grea ves or leggin gs cost a third of the full price. Round up any fractional costs. Shields may be included in an armor kit at no extra cost.<br>Poor Quality Armor - Half of the run of the mill cost rounded up. This armor falls apart; all 1s count for losing armor dice.<br>Superior Quality Armor - 4x cost of a full suit. Only the first 1 counts, which is rerolled; if that die comes up a 1 again, an armor die is lost."
			},
			{
				name: "Riding Mount or Pack Animal",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "A horse, pony, camel and so forth can be bought with this choice. Basic riding horse stats follow: Stats: Pe: B3(4), Wi: B2, Ag: B2, Sp: B6, Po: B6, Fo: B6. Attributes: He: B4, St: B3, Re: B4 , MW: B12. Hesitation: 8. Skills: Rider Training, Foraging B2. Traits: Gelded, Docile, Obedient, Proud, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride: 12."
			},
			{
				name: "Warhorse (Courser)",
				allowed: ["bwg"],
				type: "Gear",
				cost: 12,
				description: "A warhorse is trained to carry its master into battle. Basic warhorse stats: Pe: B3(4), Wi: B2, Ag: B4, Sp: B6, Po: B7, Fo: B7. Attributes: He: B5, St: B7, Re: B4, MW: B13. Hesitation: 5 (Fearless and Determined). Skills: Rider Training, Mounted Combat Training, Armor Training, Formation Fighting Training, Intimidation B2, Brawling B3, Foraging B2. Traits: Level-Headed, Loyal, Determined, Fearless, Aggressive, Long-Limbed, Keen Hearing, Hooved, Ungulate. Stride : 12."
			},
			{
				name: "Clothes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "This resource purchase includes all of the clothing a character would need for everyday life in his station. It is not just one outfit. Like the Arms purchase, Clothing allows the player to take what he needs to trick out his character (short of finery)."
			},
			{
				name: "Traveling Gear",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "This is all the necessary bits, odds and ends and what-no ts that are needed for survival on the road-candles, matches, flint and steel, a pocket knife, a rain cloak, a rain hat, a good sturdy rucksack, a thick leather belt, a money purse or wallet, a warm coat, etc. The exact choices are up to the player, but the GM has some say —no flamethrowers or Elven cloaks in traveling gear. Oh, yes, I almost forgot... don't forget to bring a good length of rope; you'll want one if you don't."
			},
			{
				name: "Shoes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "Shoes"
			},
			{
				name: "Personal Effects",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "A player may purchase for his character personal effects of sentimental value: a religious trinket, a mirror, a book, a ring, a cane, a locket or any other similar item."
			},
			{
				name: "Finery",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "Finery covers specialty clothing and expensive items that one would wear either on special occasions or when trying to make a point: courtly regalia for nobles, vestments for priests, shining robes for mages, etc. Like clothing, this purchase includes a whole wardrobe, not just a single outfit. Take as much or as little as you like. Improper dress imposes obstacle penalties to Inconspicuous and Etiquette tests among others"
			},
			{
				name: "Cash",
				allowed: ["bwg"],
				type: "Gear",
				cost: 6,
				description: "A player may start with a pocketful of cash. This grants 1D of cash that can be used as per the Resources rules. Once used, the cash is expended."
			},
			{
				name: "Skill Toolkits",
				allowed: ["bwg"],
				type: "Gear",
				cost: 8,
				description: "Many skills require tools. This resource can represent anything from medicine to books. If a skill is listed with 'Tools: Yes,' then a character must spend resource points on a toolkit in order to be able to adequately perform skill tests. Tests without tools (for skills that require them) are at a double obstacle penalty.<br>A toolkit that has finite supplies —like medicine for Herbalism— can run dry. Each use after the first, roll a d6. If a 1 comes up, the kit is empty. The character must make an Ob 2-5 Resources test to replenish it. The GM may set the obstacle depending on how rare the contents of the kit are. Ob 2 for peasant tools, Ob 4 for surgeon's tools, Ob 5 for sorcerous tools. Only one character can help you when you're using a toolkit."
			},
			{
				name: "Workshop",
				allowed: ["bwg"],
				type: "Property",
				cost: 20,
				description: "A workshop is just a big toolkit. It is used for artisan and craftsman skill tests that require more than just simple tools. Purchasing this gives the character an appropriate room/building/tower to house the workshop. Workshops allow for more than one character to help on a skill test. This counts as property when factoring resources."
			},
			{
				name: "Companion Animal",
				allowed: ["bwg"],
				type: "Gear",
				cost: 3,
				description: "Some players may wish to take a dog, cat or falcon as an accoutrement to their character. Stats are provided for these beasties in the Creature Codex PDF, but they are really there more for show than for stealing the spotlight in an adventure."
			},
			{
				name: "Herd of Animals",
				allowed: ["bwg"],
				type: "Property",
				cost: 20,
				description: "Characters with the Animal Husbandry skill, or the Master of Horses, Merchant or Magnate lifepath, may take an appropriate herd of animals. This purchase counts as property when factoring resources."
			},
			{
				name: "Rent",
				allowed: ["bwg"],
				type: "Property",
				cost: 5,
				description: "Characters who cannot afford to own property live on leased land or rented houses/apartments. It's a common condition of the age. This purchase gives the character a place to live and counts as an Ob 2 Resources maintenan ce test. Paying rent counts as property when factoring Resources."
			},
			{
				name: "Property",
				allowed: ["bwg"],
				type: "Property",
				cost: [
					["A leaky shack", 1],
					["A small cottage", 3],
					["A house or 'cottage industry' like a weaver", 10],
					["A villa or a farm or a knight's fee", 15],
					["A small business", 20],
					["Moderate-sized business", 30],
					["Manor or estate, an urban hotel*", 40],
					["Well-paid position (like mayor)*", 45],
					["Successful small business, a large business, a keep*", 60],
					["A fortress or moderate-sized estate*", 75],
					["A castle with attendant town, a large estate*", 90],
					["A palace or government position in a prosperous town*", 105],
					["Rowboat or skiff", 5],
					["Longboat", 10],
					["Junk", 15],
					["Felucca", 30],
					["Carrack", 60],
					["Caravel", 75],
					["Treasure ship", 105]
				],
				description: "Property counts as property when factoring Resources.<br>*Note that only Noble Born characters or characters with the Minister, Town Official, Merchant, Magnate, Steward, Master of Horse, Master of Hounds, Bailiff, Justiciar, Coroner, Constable, Treasurer, Bishop or Abbot LPs may spend more than 40 rps on property. Other characters simply may not own that degree of property (unless otherwi sespecified). The property purchase comes with appropriate staff, buildings and accoutrements. It does not provide the character with other free purchases from the Resources list."
			},
			{
				name: "Exotic Beast",
				allowed: ["msc"],
				type: "Property",
				cost: 20,
				description: "Characters with the Animal Instruction skill, or the Merchant, Magnate, Lord, Baron, Viscount, Count, Duke, or Noble Prince lifepath, may take an appropriate exotic animal foreign to their land. This purchase counts as property when factoring Resources."
			},
			{
				name: "Flails, Whips, Slings",
				allowed: ["msc"],
				type: "Gear",
				cost: [
					["Shepherd sling", 2],
					["War sling", 3]
				],
				description: "For Flails and Whip, resource points cost found in the Arms section on pg. 202 of the Burning Wheel Gold."
			},
			...SorcerySpells,
			...PracticalMagicSchools,
			...SpiritBindingDomainBindingLevels,
			...SpiritBindingSpiritMarkLevels,
			...SummoningAffiliatedOrderLevels
		]
	},
	"Orc": {
		name: "Orc",
		allowed: ["bwg"],
		resources: [
			Relationship,
			Reputation,
			OrcAffiliation,
			{
				name: "Rags",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1
			},
			{
				name: "Traveling Gear",
				allowed: ["bwg"],
				type: "Gear",
				cost: 3
			},
			{
				name: "Hobnailed Boots",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1
			},
			{
				name: "Orc Arms",
				allowed: ["bwg"],
				type: "Gear",
				cost: [["Poor quality arms", 3], ["Run of the mill arms", 5]],
				description: "You may purchase run of the mill or poor quality weapons for your character. You may purchase beaks, spikes and weights for your character's weapons at +1 rp per modification, per weapon."
			},
			{
				name: "Orc Armor",
				allowed: ["bwg"],
				type: "Gear",
				cost: [
					["Poor quality hides (gambeson equivalent)", 1],
					["Poor quality reinforced hides (reinforced leather equivalent)", 3],
					["Poor quality light mail", 5],
					["Poor quality heavy mail", 8],
					["Run of the mill reinforced leather", 8],
					["Run of the mill light mail", 12],
					["Run of the mill heavy mail", 20],
					["Superior quality reinforced leather", 25]
				],
				description: "Orc players may purchase the following types of armor for their characters. They may purchase armor piecemeal as described in the Human Resources section. See the Spoils of War for more options."
			},
			{
				name: "Orc Missiles",
				allowed: ["bwg"],
				type: "Gear",
				cost: [
					["Poor quality bow (+1 Ob to hit)", 3],
					["Poor quality crossbow (+1 Ob to hit)", 4],
					["Run of the mill bow", 5],
					["Run of the mill crossbow", 6],
					["Iron-cased bombs", 10]
				],
				description: "Included in the costs of these weapons are enough missiles to adequately outfit the character. Special heads for arrows and bolts can be purchased for 1 rp apiece. Take as many of each head as you like. Rules for special arrowheads are given in the Weapon Appendix of the Burning Wheel."
			},
			{
				name: "Black Iron Helmet",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "A helmet complete with spikes, horse hair tassels and a prison-gate mask. 5D, +2 Ob to Perception tests."
			},
			{
				name: "Black Iron Shield",
				allowed: ["bwg"],
				type: "Gear",
				cost: 4,
				description: "A large, iron, circular shield, stained coal black. The outer edge is sharpened to add a little surprise for those who want to get close. 3D shield. Power 2, Add 2, VA 1, WS 1, short weapon."
			},
			{
				name: "Riding Mount or Pack Animal",
				allowed: ["bwg"],
				type: "Gear",
				cost: 9
			},
			{
				name: "Great Wolf Mount",
				allowed: ["bwg"],
				type: "Gear",
				cost: 15,
				description: "The Great Wolf is the pr eferred mount of the Orcish cavalry. Though not as swift as horses, they mak e up for their loss in cunning and ferocity. Use the stats in the Monsters section in the Burning Wheel for the Black Destroyer and Astride the Beast wolves (they're too long to li st here) or burn up th e wolf using the Great Wolf lifepaths in the Codex. Burned wolves have one less lifepath than their master and obey the other rules for relationships. Lastly, the wolf can be burned up as a character by another player. This creates a powerful partnership, rather than a master/slave, rider/mount relation ship. When using a player character wolf, lifepath limits are the same as for any other character."
			},
			{
				name: "Whip",
				allowed: ["bwg"],
				type: "Gear",
				cost: 2,
				description: "The lash is required for making use of the Where There's a Whip, There's a Way trait. The whip is not a weapon of any consequence. This may only be purchased by characters with the Where There's a Whip, There's a Way trait."
			},
			{
				name: "Poison",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "Three doses of one of the types of poison listed under Vile Poisoner."
			},
			{
				name: "Brazen Horn or Clan Banner",
				allowed: ["bwg"],
				type: "Gear",
				cost: 9,
				description: "The Brazen Horn adds +1D to the Brazen Horn of Despair skill and allows Despair Shouters to help a Named with Command or Brutal Intimidation. The banner reduces hesitation by one for all in the clan who can see it."
			},
			{
				name: "Skill Toolkits",
				allowed: ["bwg"],
				type: "Gear",
				cost: 9
			},
			{
				name: "Riding Harness for Wolf",
				allowed: ["bwg"],
				type: "Gear",
				cost: 5,
				description: "The saddle, bit and bridle, stirrups and reins add +1D to Riding tests for wolves."
			},
			{
				name: "Spoils of War",
				allowed: ["bwg"],
				type: "Gear",
				cost: "various",
				description: "Named, Great Ones, Whisperers, Head Takers, Summoners and Masters may purchase one item from any character stock resources/gear list they wish. Troll Lords may purchase gear from the Troll resources list in the Codex. Any Orc character who has 'failed' a Brutal Life test may also purchase Spoils of War from other character stocks, but the cost of the item/property may not exceed half the Orc's total resource points. Named, Great Ones, etc. may take a second item, but to do so counts as failing a Brutal Life roll at his current lifepath level. If an Orc player takes property as part of their Spoils of War, be sure to include its cost when calculating his Resources."
			},
			{
				name: "Black Robes",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "Servants only."
			},
			{
				name: "Leather Apron",
				allowed: ["bwg"],
				type: "Gear",
				cost: 1,
				description: "Servants only."
			},
			{
				name: "Ceremonial Knives",
				allowed: ["bwg"],
				type: "Gear",
				cost: 3,
				description: "Servants only. These ornate and hallowed weapons are vital to the Servant for performing his dark rituals. Otherwise they are simply ornate run of the mill weapons."
			},
			{
				name: "Ceremonial Axe or Sword",
				allowed: ["bwg"],
				type: "Gear",
				cost: 7,
				description: "Servants only. These ornate and hallowed weapons are vital to the Servant for performing his dark rituals. Otherwise they are simply ornate run of the mill weapons."
			},
			{
				name: "Tools of the Trade",
				allowed: ["bwg"],
				type: "Gear",
				cost: 7,
				description: "Servants only. These are a collection of knives, blades, pins, clamps and other strange devices. Tools of the Trade add +1D to the Torture skill."
			},
			{
				name: "Poisoner's Toolkit",
				allowed: ["bwg"],
				type: "Gear",
				cost: 7,
				description: "Servants only. This kit allows the Knower of Secrets to mix poisons. All of the ingredients necessary for concocting the poisons listed under the Vile Poisoner skill are present in this foul smelling pouch. After using this kit, roll the Die of Fate. On a 1, the supplies have run out and the character must refill the kit via a Resources, Foraging or Scavenging test (or another means sanctioned by the GM)."
			},
			...RitualsOfNightRituals
		]
	},
	"Roden": {
		name: "Roden",
		allowed: ["bwc"],
		resources: [
			Relationship,
			Reputation,
			Affiliation,
			// TODO: [RESOURCES] Add Roden resources
			...SorcerySpells,
			...PracticalMagicSchools,
			...SpiritBindingDomainBindingLevels,
			...SpiritBindingSpiritMarkLevels,
			...SummoningAffiliatedOrderLevels
		]
	},
	"Troll": {
		name: "Troll",
		allowed: ["bwc"],
		resources: [
			Relationship,
			Reputation,
			Affiliation
			// TODO: [RESOURCES] Add Troll resources
		]
	},
	"Great Wolf": {
		name: "Great Wolf",
		allowed: ["bwc"],
		resources: [
			Relationship,
			Reputation,
			Affiliation
			// TODO: [RESOURCES] Add Great Wolf resources
		]
	}
};
