import { Resource } from "./_resources";


export const SorcerySpells: Resource[] = [
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

export const RitualsOfNightRituals: Resource[] = [
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

export const DireHauntSpells: Resource[] = [
	{
		name: "Ancient Grip",
		allowed: ["bwc"],
		type: "Magical",
		description: "The Ghost of the Woods cals upon the strength of roots, branches, bladess and vines to reach forth ad pul down the unwary and weak.<br>Ensorcelling grass and brush, 2 Ob; vines and hangers, Ob 3; small branches and saplings, Ob 4; large thick branches, Ob 5.<br>f the spell is successfully cast, the flora will do the bidding of the wolf as best they are able. They will carry or retrieve objects, close off paths or even subdue an opponent. Test the victim's Power versus that of the spell. The Power of the spell is equal to the caster's Will exponent modified like so: -1D for grass; no bonus/penalty for vines; +1D for branches +2D fr large or thick branches. The weapon length for each type of flora is as follows: Grass is shortest, vines are short, small branches are long, and large branches are longer.<br>The spell can affect all those in the wolf's presence, should he so desire. Rll separate Power tests for each victim.",
		cost: 10,
		magical: {
			origin: "Personal",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Presence",
			impetus: ["Control"],
			obstacle: "See description",
			actions: "Ob x1"
		}
	},
	{
		name: "Blue-Blooded Heart",
		allowed: ["bwc"],
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
		name: "Chameleon",
		allowed: ["bwc"],
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
		name: "Dark of Night",
		allowed: ["bwc"],
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
		name: "The Fear",
		allowed: ["bwc"],
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
		name: "Gray Cloak",
		allowed: ["bwc"],
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
		name: "High Speech",
		allowed: ["bwc"],
		type: "Magical",
		description: "<br>This spell allows you to speak with animals: apes and simians, Ob 1; humans, orcs, and elves, Ob 8; horses, oxen, Ob 3; wild beasts, Ob 4; birds, Ob 5; reptiles, Ob 6; fish, Ob 7; insects, Ob 8. Decide which type before casting.",
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
		name: "Howl Caster",
		allowed: ["bwc"],
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
		name: "Trackless Path",
		allowed: ["bwc"],
		type: "Magical",
		description: "When ensorcelled with this spell, the traveler leaves no trace of his passage.<br>Success adds a +1 Ob penalty to anyone attempting to track or stalk this wolf. Each successs over the obstacle increases the penalty by one.",
		cost: 12,
		magical: {
			origin: "Presence",
			element: ["Earth"],
			duration: "Sustained",
			areaOfEffect: "Single Target",
			impetus: ["Influence"],
			obstacle: "3^",
			actions: 4
		}
	},
	{
		name: "Water Walker",
		allowed: ["bwc"],
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
		name: "Witch Flight",
		allowed: ["bwc"],
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
	}
];

export const PracticalMagicSchools: Resource[] = [
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

export const SpiritBindingDomainBindingLevels: Resource[] = [
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

export const SpiritBindingSpiritMarkLevels: Resource[] = [
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

export const SummoningAffiliatedOrderLevels: Resource[] = [
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
