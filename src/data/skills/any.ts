import { SkillCategory } from "./_skills";


export const AnyGeneral: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Any General",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Accountants keep track of expenses, income, stocks and taxes. This skill is primarily used to recover taxed Resources.",
			magical: false,
			name: "Accounting",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The skill of imitation and recitation used to affect a performance.",
			magical: false,
			name: "Acting",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Administration is the skill of running a business or organization. This skill is primarily used to recover taxed Resources.",
			magical: false,
			name: "Administration",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This particular and peculiar skill comprises a deep, traditional, and historical knowledge of the seasons, tides, weather, lunar phases, and other climatic phenomena. A character with the Almanac skill can always tell the time of the year nearly to the day. In addition, he can make accurate predictions about this season's weather.",
			magical: false,
			name: "Almanac",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Amercement is the knowledge of fees and criminal fines given as judicial punishment. Such amercements are almost always offered in place of corporal punishment, e.g. 'Ye may take 30 days in the stocks or ye may pay the court a fee.' Using this skill the character may set the Resources obstacle for a fine. The skill test obstacles indicate how accurate and just the amount is according to the law.",
			magical: false,
			name: "Amercement",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Anatomy is the study of the human body's internal functions and structure.",
			magical: false,
			name: "Anatomy",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Ancient and Obscure History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Ancient History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Through this skill, the character knows defunct languages appropriate to the game setting. Use the mechanics for Foreign Languages.",
			magical: false,
			name: "Ancient Languages",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Animal Instruction is used to force captured, defenseless animals to act against their natural impulses in specific ways. Some common examples include performing tricks in front of a crowd, accepting a human rider on their back, and remaining docile despite their bloodthirsty urges.<br>If the trainer finds the animal too willful, they can first use a Whip to make the animal more pliant.",
			magical: false,
			name: "Animal Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Apothecaries use herbs, roots, minerals, and Animalia to cure and prevent common and chronic ailments. Apothecaries may mitigate the symptoms of infection and illness; they may also alleviate wound die penalties.",
			magical: false,
			name: "Apothecary",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill is used to judge the value or worth of certain items such as jewelry, gems, artwork, and antiquities. The Appraisal skill can be used by a player before testing his Resources to ensure that he is getting an accurate price.",
			magical: false,
			name: "Appraisal",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This blanket entry is provided so the player may choose any and all of the weapons appropriate to his lifepaths, character concept and game setting. See thee listing for the individual weapons obstacles and roots.",
			magical: false,
			name: "Appropriate Weapons",
			noList: false,
			restriction: "N/A",
			// BUG: Create a modal to select weapons when this skill is in mandatory or lifepath skills list, as each weapon skill has its own root, and the following root is wrong 
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: []
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Architects possess knowledge of the design and construction of complex structures, such as buildings, arches, and bridges. This skill can be used in game to draw accurate plans of a proposed structure, attempt to draw structural plans for an extant building, or use existing plans and designs to navigate buildings, and structures.",
			magical: false,
			name: "Architect",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "To the unaccustomed, armor is heavy, hot, and uncomfortable. Characters without Armor Training who wear light mail suffer +1 Ob penalty to all tests. Wearing heavy mail or heavier without Armor Training incurs a +2 Ob penalty. Armor Training mitigates these penalties completely. Clumsy Weight penalties still apply.",
			magical: false,
			name: "Armor Training",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Speed"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This specialized and dedicated craft is used to manufacture personal protection worn by soldiers in battle. The skill's knowledge base is diverse, encompassing aspects of a blacksmith, a tailor, and a tanner.",
			magical: false,
			name: "Armorer",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Artillerists use basic physics and mathematics topped with some healthy guesswork to lob indirect-fire projectiles from war machines. They also know the designs for constructing various war engines. Actual construction requires teams of laborers and at least one carpenter.",
			magical: false,
			name: "Artillerist",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The manufacture and maintenance of crossbows.",
			magical: false,
			name: "Atilliator",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is the talent to read an aura and see within it the present, future, and past. Aura readers can decipher gossamer veils of emotion, deception, clarity, and purpose. This skill does not grant the character the ability to see auras. That ability must be acquired through a trait, prayer, or spell.",
			magical: true,
			name: "Aura Reading",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill teaches the character how to use one- and two-handed axes to chop off arms, legs, and heads in battle. The Axe skill can be used to make blade strikes with the weapon, as well as strikes with the haft.",
			magical: false,
			name: "Axe",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Agility"],
			tools: [
				"Other",
				"An axe"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "His bread, flatcakes, and pastries make the baker an important fixture in any civilized town.",
			magical: false,
			name: "Baking",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Beggardry can elicit a few coins from the victim (1D of cash). It may also be used to replenish taxed Resources.",
			magical: false,
			name: "Beggardry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Bird Husbandry is the art of raising and caring for our avian friends.",
			magical: false,
			name: "Bird Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A blacksmith forges iron and steel tools, implements, and weapons. This is an arduous and time-consuming task, requiring tools and a workshop. Blacksmith can also be used to replenish taxed Resources if the character can find a suitable place to ply his trade.",
			magical: false,
			name: "Blacksmith",
			noList: false,
			restriction: "N/A",
			root: ["Agility", "Power"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Bloodletters believe that when a person is ill, his blood is contaminated with disease and impurities. By draining blood from the system, the bloodletter seeks to purify him.",
			magical: false,
			name: "Bloodletting",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill allows the character to construct small watercraft, including canoes, dugouts, barges, and planked and tarred longboats.",
			magical: false,
			name: "Boatwright",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The bow is a simple, effective, tension-drawn weapon that launches thin shafts at high velocity. This skill allows characters to use said device as a weapon in battle.",
			magical: false,
			name: "Bow",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A bow"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A Bowyer creates bows and arrows from suitable wood. He also knows how to make bowstrings from gut.",
			magical: false,
			name: "Bowyer",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is the blanket term used to describe all trained, unarmed 'martial arts.' Boxing and Martial Arts skills allow a character to use all attack, defense, basic, and special actions. Use the skill in place of Power for Push and Lock",
			magical: false,
			name: "Boxing",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Brawling is the 'undisciplined' side of bare-fisted combat. Brawling grants access to attack, defense, and basic actions, but not special actions. Using the Brawling skill in place of Power for the Lock and Push actions. Brawlers may also use 'found weapons.' Found weapons include: clubs, brooms, lamps, rocks, sharp pieces of glass, towels, and pencils. These count as melee weapons but rely on the Brawling skill rather than a weapon skill.",
			magical: false,
			name: "Brawling",
			noList: false,
			restriction: "N/A",
			root: ["Power"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A Brewer is a specialized miller who grinds grain to ferment into alcohol. Obviously, this practice requires a mill (or at least some ground grain) and a vat, if not an actual brewery.",
			magical: false,
			name: "Brewer",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Bureaucracy is the knowledge of the hierarchies within a codified government of officials (or bureaus). This skill allows characters to navigate said structures in order to accomplish certain tasks or impel the bureaucracy to move in a certain direction. Often it involves filling tout lots of forms, researching obscure laws, and paying bribes to people who are very bored with their jobs.",
			magical: false,
			name: "Bureaucracy",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Butchers know how to kill, cut, and carve an animal or carcass into edible portions.",
			magical: false,
			name: "Butchery",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Calligraphy is a formal, stylized handwriting that is required communicating with religious, royal, or governmental bodies.",
			magical: false,
			name: "Calligraphy",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Campaign History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A carpenter can select suitable trees, cut the lumber, and use it to build structures, implements and furniture. Carpentry is a great way to replenish taxed Resources.",
			magical: false,
			name: "Carpentry",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Cartography is the school of mapmaking. This skill imparts a hand for illustration and an eye for detail. And since Cartography is somewhat a language of its own, this skill also allows the interpretation of other maps.",
			magical: false,
			name: "Cartography",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Cartwrights build wheeled conveyances to be hauled by animals.",
			magical: false,
			name: "Cartwright",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Carving is the careful shaping and engraving of wood.",
			magical: false,
			name: "Carving",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Traveling Gear",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Chandler skill allows characters to make candles from wax and tallow.",
			magical: false,
			name: "Chandler",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Child-Rearing is used to raise children with the proper values and manners. The skill can also be used as Instruction, Cooking, and Field Dressing, but only for the benefit of children.",
			magical: false,
			name: "Child-Rearing",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A ballad of history, telling the story of all the great Dwarven kings, their deeds and their riches.",
			magical: false,
			name: "Chronology of Kings",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a specialized legal skill dealing only with ecclesiastical law. Church Law is quite different from civil or courtly law. The punishments for crimes are religious in nature, not monetary or corporal.",
			magical: false,
			name: "Church Law",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill allows the character to navigate sheer surfaces using rope, harnesses, and really strong finger muscles. In addition, rougher surfaces can be scaled with bare hands.",
			magical: false,
			name: "Climbing",
			noList: false,
			restriction: "N/A",
			root: ["Speed"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Physical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The fine art of dyeing cloth and making the color keep.",
			magical: false,
			name: "Cloth Dyeing",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Shoes, glorious shoes. The Cobbler makes all types of foot coverings, from the utilitarian to the fashionable.",
			magical: false,
			name: "Cobbler",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Command is the ability to deliver curt and effective orders on the field of battle. A character's 'command radius' only stretches as far as the sound of his voice—a fairly short distance on the battlefield. But to those around them, a commander can be a great boon.",
			magical: false,
			name: "Command",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Composition is the discipline of formally arranging one's ideas in written form. Using this skill, a character may compose lengthy books or pen erudite letters.",
			magical: false,
			name: "Composition",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Characters with the Conspicuous skill can make themselves noticed above all in a crowd or scene.",
			magical: false,
			name: "Conspicuous",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Preparing meat, veggies, and grains for yummy consumption (or not).",
			magical: false,
			name: "Cooking",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Traveling Gear",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A Cooper uses iron, wood, and wax to make barrels to store wine, grain, and other sundries necessary for the survival of the village.",
			magical: false,
			name: "Cooper",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Similar to a Blacksmith or Whitesmith, a Coppersmith specializes in the use of copper.",
			magical: false,
			name: "Coppersmith",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Counterfeiting is the time-honored art of illegally duplicating money—either clipping coins or cutting dies to replicate printed material.",
			magical: false,
			name: "Counterfeiting",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The crossbow is a mechanical, tension-drawn missile weapon. The most basic crossbow uses a hook system to hold the drawn bowstring so the weapon can be loaded. More complex examples use a stirrup, lever, or winch to draw the bow. They're very powerful weapons; however, they are slow to load and difficult to manufacture. The Crossbow skill allows the character to use this weapon in battle situations. Consult the Range and Cover and Fight chapters.",
			magical: false,
			name: "Crossbow",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A crossbow"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Cryptography is the art of creating and deciphering codes.",
			magical: false,
			name: "Cryptography",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill allows the character to use short, single-handed and long, double-handed blunt implements (aka clubs and staffs) as weapons.",
			magical: false,
			name: "Cudgel",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A big stick"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Doctrine describes the tenets and beliefs of a particular religious faith. A character may only take the following variations if they were available on his lifepaths or through general skill points: <br> Cult Doctrine is the application of a belief system to a non-standard, unapproved, or independent school of thought. <br> Foreign Doctrine is the knowledge or study of an accepted popular religion from another land or culture. <br> Heretical Doctrine is the understanding and knowledge of a set of beliefs and tenets that are an offshoot of the popular religion but are not commonly accepted by the religious power structure.",
			magical: false,
			name: "Cult Doctrine",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The art of moving the body in time with rhythm in an expressive manner.",
			magical: false,
			name: "Dance",
			noList: false,
			restriction: "N/A",
			root: ["Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Physical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Demonology is the study of the history and behavior of demons and devils. This is an academic skill that does not necessarily involve the act of summoning.",
			magical: false,
			name: "Demonology",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Disguise is the art of changing one's face or appearance to look like another person or ethnicity.",
			magical: false,
			name: "Disguise",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The fine and rarefied art of putting holes in the ground.",
			magical: false,
			name: "Ditch Digging",
			noList: false,
			restriction: "N/A",
			root: ["Power"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Doctrine describes the tenets and beliefs of a particular religious faith. A character may only take the following variations if they were available on his lifepaths or through general skill points: <br> Cult Doctrine is the application of a belief system to a non-standard, unapproved, or independent school of thought. <br> Foreign Doctrine is the knowledge or study of an accepted popular religion from another land or culture. <br> Heretical Doctrine is the understanding and knowledge of a set of beliefs and tenets that are an offshoot of the popular religion but are not commonly accepted by the religious power structure.",
			magical: false,
			name: "Doctrine",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Animal Husbandry involves the raising, care, and breeding of animals.",
			magical: false,
			name: "Dog Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Drinking is the skill of getting drunk and not showing it.",
			magical: false,
			name: "Drinking",
			noList: false,
			restriction: "N/A",
			root: ["Forte"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Motivating a team of oxen or horses is an arduous task that requires skill and a certain delicacy. The Driving skill is used for maneuvering carts and carriages over roads.",
			magical: false,
			name: "Driving",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Drum Maker skill involves the curing of skins, carving of wood, and tuning of hollows for the manufacture of percussion instruments.",
			magical: false,
			name: "Drum Maker",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Musical performance is a powerful tool. It can impress an emotion upon the listener—seducing, enraging, pleasing, etc. Choose an instrument: Drum, Flute, and Lyre are but a few of the many options.",
			magical: false,
			name: "Drum",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Dye Manufacture teaches where to find materials and how to convert natural substances into dyes.",
			magical: false,
			name: "Dye Manufacture",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "An embroiderer stitches designs into cloth.",
			magical: false,
			name: "Embroidery",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Empyrealia is the study of the hierarchies, courts, and denizens of the celestial halls of light. It is essentially the opposite of Demonology.",
			magical: false,
			name: "Empyrealia",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Engineers are learned men. They possess the knowledge of the myriad factors used in designing and constructing complex structures. Usually engineers direct a team of masons, carpenters, blacksmiths, and laborers in the construction of a building or bridge.",
			magical: false,
			name: "Engineering",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Engraving is the careful art of carving symbols into unyielding stone.",
			magical: false,
			name: "Engraving",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Ensuring that an estate—its workers, animals, rolling stock, and crops—are all well managed and tended to is a demanding and tedious task. The primary use of this skill is to recover taxed Resources.",
			magical: false,
			name: "Estate Management",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Other",
				"An estate"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Etching is the delicate skill of scratching indelible symbols into metal.",
			magical: false,
			name: "Etching",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Etiquette is proper courtly behavior. One cannot make requests of the court without knowing the appropriate social rituals.",
			magical: false,
			name: "Etiquette",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Extortion is a popular skill at parties! Using it, you can threaten friends and enemies alike so they pay you to remain safe and healthy. Makes a great way to recover taxed Resources",
			magical: false,
			name: "Extortion",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A falconer trains hunting hawks. Falconry is a very popular and expensive sport among nobility of all stripes.",
			magical: false,
			name: "Falconry",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Other",
				"A falcon"
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Falsehood is bare-faced lying.",
			magical: false,
			name: "Falsehood",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Farming is the prodigious knowledge of seeding, planting, and harvesting.",
			magical: false,
			name: "Farming",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Field Dressing is the skill acquired by soldiers in the field who are forced to tend to their own wounded. It imputes a bare knowledge of anatomy and assumes a splash of common sense.",
			magical: false,
			name: "Field Dressing",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Traveling Gear",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Pistols, arquebuses, and even muskets may be safely and accurately discharged using this skill. This skill may be taken under the Appropriate Weapons heading if it is indeed germane to your game. Use Munitions for building and creating ammunition for said weapons.",
			magical: false,
			name: "Firearms",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"A gun"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Firebuilding teaches characters how to light and maintain a fire suitable to their needs under any conditions. Characters without Firebuilding who light fires in the forest are liable to get into trouble.",
			magical: false,
			name: "Firebuilding",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Traveling Gear",
				"Expendable"
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This basic skill teaches characters the nature of fish, where they live, and what they like to eat. Hopefully, this knowledge should help catch some.",
			magical: false,
			name: "Fishing",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A fletcher creates suitable arrows and bolts for bows and crossbows.",
			magical: false,
			name: "Fletcher",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Musical performance is a powerful tool. It can impress an emotion upon the listener—seducing, enraging, pleasing, etc. Choose an instrument: Drum, Flute, and Lyre are but a few of the many options.",
			magical: false,
			name: "Flute",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Folklore encompasses the folk beliefs in a culture—a catalog of superstitions, tall tales, and legends.",
			magical: false,
			name: "Folklore",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using Foraging, a character can gather enough roots, fruit, and greens from the land to feed himself in times of austerity. Usually Foraging is a day-long endeavor.",
			magical: false,
			name: "Foraging",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Doctrine describes the tenets and beliefs of a particular religious faith. A character may only take the following variations if they were available on his lifepaths or through general skill points: <br> Cult Doctrine is the application of a belief system to a non-standard, unapproved, or independent school of thought. <br> Foreign Doctrine is the knowledge or study of an accepted popular religion from another land or culture. <br> Heretical Doctrine is the understanding and knowledge of a set of beliefs and tenets that are an offshoot of the popular religion but are not commonly accepted by the religious power structure.",
			magical: false,
			name: "Foreign Doctrine",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Foreign History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A character with this skill has learned foreign languages over the course of his life. Test this skill when attempting to communicate with another character in a language that is not your native tongue.  <br> There are constraints based on which level of speech you aim for. You can cover basic ground with survival/conversational language, but there are whole swaths of meaning that are simply beyond your grasp if you can't express ideas in metaphor or other abstract concepts. Good luck expressing the meaning behind your actions.  <br> Here are some suggested failure results: The character is able to communicate, but screws up the words for numbers, ordinal directions, etc. Or the character can understand what is said, but can't make his speech understood. Or you can only use single words and gestures to get across your meaning.",
			magical: false,
			name: "Foreign Languages",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Forgery is the ability to copy documents, signatures, and seals flawlessly.",
			magical: false,
			name: "Forgery",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Characters with Formation Fighting training have been taught how to fight shoulder-to-shoulder in a regiment. Characters in formation may help each other with Steel-based maneuvers in Range and Cover. In Fight, if fighting shoulder-to-shoulder with an ally (or allies), reduce the outnumbered penalty by one.",
			magical: false,
			name: "Formation Fighting Training",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Fortifications is a specialized military skill centering on the construction of defensible positions. This skill works well with the Range and Cover rules.",
			magical: false,
			name: "Fortifications",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill represents the character's skill, knowledge, and luck with gambling. To use this skill, first make a wager or set a prize: an item, animal, piece of property, or cash generated from a Resources test. Then make a versus test against another gambler. The winner walks away with the prize.",
			magical: false,
			name: "Gambling",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Traveling Gear",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Use General Skill points to purchase any skills in the General Skill list. Pretty self-explanatory, right? That means stock-specific skills are off-limits, buddy.",
			magical: false,
			name: "General",
			noList: true,
			restriction: "N/A",
			root: [],
			tools: [
				"No",
				""
			],
			training: false,
			type: []
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The particularly dangerous art of raising and tending to Great Wolves.",
			magical: false,
			name: "Great Wolf Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Haggling is the skill required to negotiate prices, terms of purchase, and contracts.",
			magical: false,
			name: "Haggling",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Hammer is a weapon skill focusing on the use of heavy, blunt, crushing weapons typically mounted with reversed beaks or spikes",
			magical: false,
			name: "Hammer",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A hammer"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Use this skill in place of Power when hauling improbable loads on your back.",
			magical: false,
			name: "Hauling",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Power"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Heraldry is the skill of recognizing and deciphering heraldic coats of arms. Medieval family crests exist in a bewildering array of iterations and combinations, and the herald's knowledge of them is encyclopedic.",
			magical: false,
			name: "Heraldry",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Herbalism uses herbs and roots to cure and prevent common and chronic ailments. Herbalism can be used as a medicinal skill for treating wounds and stopping bleeding.",
			magical: false,
			name: "Herbalism",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Doctrine describes the tenets and beliefs of a particular religious faith. A character may only take the following variations if they were available on his lifepaths or through general skill points: <br> Cult Doctrine is the application of a belief system to a non-standard, unapproved, or independent school of thought. <br> Foreign Doctrine is the knowledge or study of an accepted popular religion from another land or culture. <br> Heretical Doctrine is the understanding and knowledge of a set of beliefs and tenets that are an offshoot of the popular religion but are not commonly accepted by the religious power structure.",
			magical: false,
			name: "Heretical Doctrine",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Animal Husbandry involves the raising, care, and breeding of animals.",
			magical: false,
			name: "Horse Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Hunting is used to capture or kill prey animals in the wild so that they might be consumed as food.",
			magical: false,
			name: "Hunting",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Other",
				"A bow or javelin"
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Illumination is the patient art of embellishing manuscripts with illustrations.",
			magical: false,
			name: "Illuminations",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Artist"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Quite simply, Inconspicuous is the ability to go unnoticed in a crowd.",
			magical: false,
			name: "Inconspicuous",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Insect Husbandry is the art of raising and caring for our six-legged friends.",
			magical: false,
			name: "Insect Husbandry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using the Instruction skill, a character may teach another character.",
			magical: false,
			name: "Instruction",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using a peculiar logic, interrogators gain information from unwilling subjects. A successful interrogation means the victim character has given up the information the players are looking for.",
			magical: false,
			name: "Interrogation",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Intimidation is the communication of threat.",
			magical: false,
			name: "Intimidation",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Jargon is the specialized speech used by masons, architects, and engineers.",
			magical: false,
			name: "Jargon",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Javelins are short throwing spears.",
			magical: false,
			name: "Javelin",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill provides the character with a knowledge of metals and precious gems used to create jewelry. With the proper tools, characters can build necklaces, form bracelets, and create brooches.",
			magical: false,
			name: "Jeweler",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Knives skill teaches hand-to-hand knife fighting techniques. This is not a throwing skill.",
			magical: false,
			name: "Knives",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"Something knife-like"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Knots is the knowledge of many rope ties vital to sailors to keep a ship running.",
			magical: false,
			name: "Knots",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Traveling Gear",
				"Expendable"
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill trains the fighter to use a couched lance from horseback",
			magical: false,
			name: "Lance",
			noList: false,
			restriction: "N/A",
			root: ["Agility", "Power"],
			tools: [
				"Tools",
				"A really big, pointy stick"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Lapidary is the careful art of refining gems to be sold on the market or placed into jewelry.",
			magical: false,
			name: "Lapidary",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Local History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The skill of disabling and disarming mechanical locks.",
			magical: false,
			name: "Lock Pick",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Locksmithing is the knowledge of the pins, slides, levers, and keys that comprise locks. A locksmith can build locks as well as disarm those he happens upon in his travels. This skill includes the knowledge and ability of Lock Pick, as well.",
			magical: false,
			name: "Locksmith",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Logistics is a rare skill. It is the knowledge of supply lines, resources, consumption rates, and rates of travel of armies. The skill is used by particularly thoughtful commanders to keep their troops in supply while on campaign.",
			magical: false,
			name: "Logistics",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Other",
				"Supplies for an army"
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Musical performance is a powerful tool. It can impress an emotion upon the listener—seducing, enraging, pleasing, etc. Choose an instrument: Drum, Flute, and Lyre are but a few of the many options.",
			magical: false,
			name: "Lyre",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A mace is a short-hafted, metal-flanged club. Its main purpose in battle is to crush through heavy metal armor.",
			magical: false,
			name: "Mace",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a catch-all skill for any specialist hand-to-hand fighting techniques. We prefer the term Boxing, and you can see a slightly more detailed entry under that heading.",
			magical: false,
			name: "Martial Arts",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: []
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A mason knows how to choose suitable stone, carve it, and use it to build structures. Also, masons are skilled in mixing mortar and setting foundations.",
			magical: false,
			name: "Mason",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "First and foremost, Meditation is a way for a character to calm and center himself. It is both rest and a method for divining solutions to problems via deep thought. While meditating, a character is vaguely aware of his surroundings—cognizant of changes in the environment like noise or the presence of someone near him. He may make Perception/Observation tests to detect Stealthy characters. A Sorcerer can maintain any spells he is currently sustaining while meditating. He must retest Tax as per The Power Still Flows Through Him rules in the Burning Wheel.",
			magical: false,
			name: "Meditation",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Mending is a useful skill. It encompasses the knowledge of the form and function of everything on the farm. This skill allows characters to fix, repair, or darn just about anything.",
			magical: false,
			name: "Mending",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Midwives are an important fixture in any village. They help women give birth to children and survive.",
			magical: false,
			name: "Midwifery",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Milling is the knowledge of building, maintaining, and operating the machinery used to grind grain for consumption.",
			magical: false,
			name: "Miller",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				"A mill"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using this skill, a character may imitate animal sounds and voices.",
			magical: false,
			name: "Mimicry",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Mining is the technique of excavating earth in order to remove valuable ore or minerals like salt. Mining includes prospecting ore, sinking the shafts, and setting up a system to remove the ore.",
			magical: false,
			name: "Mining",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Mounted Combat Training gives the character the ability to fight effectively with melee weapons from horseback. See the Riding and Mounted Combat chapter.",
			magical: false,
			name: "Mounted Combat Training",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Power"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Mounted Combat Bowman Training gives the character the ability to fight effectively with ranged weapons from horseback. See the Riding and Mounted Combat chapter.",
			magical: false,
			name: "Mounted Combat Bowman Training",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Power"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A character with this skill can write musical notation and compose various types of songs, both for voice and instrument.",
			magical: false,
			name: "Music Composition",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Musical performance is a powerful tool. It can impress an emotion upon the listener—seducing, enraging, pleasing, etc. Choose an instrument: Drum, Flute, and Lyre are but a few of the many options.",
			magical: false,
			name: "Musical Instrument",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				"An instrument"
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using charts of the stars, winds, and currents, a navigator safely guides her ship from port to port. True navigation allows ships to journey away from the coastline into the open sea without becoming hopelessly lost.",
			magical: false,
			name: "Navigation",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Obscure History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Observation is the skill used to spot the hidden—characters, traps, ghosts, etc. Test this skill in versus tests against Inconspicuous, Stealthy, Sleight of Hand, or Trapper. Note: Do not use Observation for standard Perception tests—to spot a weakness in armor, to notice details of a flag, or to look for an escape tunnel. Some spells and traits allow Perception to act as Observation.",
			magical: false,
			name: "Observation",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Oratory is the ability to rouse the masses with a stirring speech. It teaches how to project the voice and speaking techniques used to get a point across.",
			magical: false,
			name: "Oratory",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Orienteering is the ability to navigate across land both with and without maps. Maps do, however, provide an advantage die to Orienteering tests. A successful Orienteering test indicates the character has found his way without delay. A failed test indicates the character and his companions have gotten lost. This result either causes the characters to miss any appointment they were trying to keep (but still arrive at their destination) or causes them to arrive in an unintended location.",
			magical: false,
			name: "Orienteering",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Painters use dyes, pigments, and brushes to craft images on a variety of surfaces.",
			magical: false,
			name: "Painting",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Artist"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Persuasion is the art of convincing someone to act on your behalf because it is in his best interest. This skill often involves an exchange of agreements—something very different from Falsehood or Oratory. Those two skills tell someone what to do or believe, whereas using Persuasion, one carefully crafts a suggestion for the victim to agree with. With luck, he'll think it was his idea in the first place.",
			magical: false,
			name: "Persuasion",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Philosophy is the pursuit and discussion of wisdom, discussing the nature of truth, logic, reason, good, evil and the divine. Often it is at odds with Law and Doctrine.",
			magical: false,
			name: "Philosophy",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The pilot is the all-important crewman who guides the ship through storm and calm. A good pilot can stay the course through the most terrible gale.",
			magical: false,
			name: "Pilot",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Power"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A playwright composes dramatic dialogue into scripts to be read and performed by actors on stage. This skill allows a character to convey his own ideas into a written form so that others may transmit them via performance. Writing is required in order for this skill to be taken.",
			magical: false,
			name: "Playwright",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The fine art of plumbing. Using this skill a character may design systems to convey water from one location to another. Typical plumbing in the middle ages was made of lead, wood, and stone.",
			magical: false,
			name: "Plumbing",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Poetry allows the expression of ideas and emotions through metered verse.",
			magical: false,
			name: "Poetry",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Poisons is a specialized apothecary skill that allows the character to concoct harmful substances from herbs, minerals, and Animalia.",
			magical: false,
			name: "Poisons",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A polearm is a versatile weapon. When using this weapon in combat, the player must decide whether his character is using the blade to cut, or the beak (or blade tip) to thrust. Cutting and thrusting have different damages and weapon lengths.",
			magical: false,
			name: "Polearm",
			noList: false,
			restriction: "N/A",
			root: ["Power", "Agility"],
			tools: [
				"Other",
				"A halberd, a glaive, or a voulge"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "'Tis a most ancient and honorable craft. A character with the Potter skill knows how to make vessels of fired clay.",
			magical: false,
			name: "Potter",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Prospecting skill allows the character to locate seams and veins of minerals and metals so that they may be mined.",
			magical: false,
			name: "Prospecting",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Artisan"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Rats have a particular etiquette they prefer in all their dealings. If one is willing and nimble, this social art can be learned and even mastered. Use this skill in place of Etiquette whenever dealing with rats or their cousins. Roden consider Ratiquette a mortal insult.",
			magical: false,
			name: "Ratiquette",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "In the middle ages, reading and writing were two separate and distinct skills. It's difficult for the modern mind to comprehend this, but it is a fact. Therefore, a character may be able to read but not know how to transcribe his thoughts onto paper.",
			magical: false,
			name: "Read",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is a specialized form of Oratory for angry religious types.",
			magical: false,
			name: "Religious Diatribe",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "History is the knowledge of the records of past events pertaining to one culture or society. The character is assumed to have studied the popular history of his culture/people unless the player or lifepath decides otherwise. Specific histories are often listed in the lifepaths. They are fairly self-explanatory: Ancient History, (Military) Campaign History, Foreign History, Religious History, Local History, Obscure History, and Religious History. Each of these is a separate skill that must be purchased and opened.",
			magical: false,
			name: "Religious History",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Research is the art of navigating libraries, gathering data, and collating coherent reports.",
			magical: false,
			name: "Research",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Rhetoric is a form of discourse centered on the conveyance of thoughts, ideas, and concepts in the interest of winning an argument.",
			magical: false,
			name: "Rhetoric",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill reaches the character to effectively maneuver a mount.",
			magical: false,
			name: "Riding",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"Other",
				"A horse or some such thing"
			],
			training: false,
			type: "Physical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Rigging is the knowledge of setting the sails of seagoing vessels. This includes how they work, and the ability to climb the rigging like a monkey climbs a tree.",
			magical: false,
			name: "Rigging",
			noList: false,
			restriction: "N/A",
			root: ["Agility", "Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Priests and monks perform religious rituals for the community.",
			magical: false,
			name: "Ritual",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "The Rule of Law is the body of rules and guides set up to maintain order within the state. Characters familiar with law may act as advocates, lawyers, and magistrates within the system.",
			magical: false,
			name: "Rule of Law",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "School of Thought"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Saddlery is the fine art of creating horse furniture from suitable hides. Saddlers work closely with local tanners to create saddles, bits, bridles, and stirrups.",
			magical: false,
			name: "Saddlery",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A player using his character's Scavenger skill may state what he is looking for—it can be any type of item, but it cannot be a specific or unique thing",
			magical: false,
			name: "Scavenging",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Sculptors carve forms and images from obdurate stone.",
			magical: false,
			name: "Sculpture",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Artist"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Seamanship covers all the basic knowledge and skills, short of actual sailing, necessary to survive on board a boat or ship: stowing, cleaning, mending shipboard paraphernalia, and water discipline.",
			magical: false,
			name: "Seamanship",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Seduction involves the extraction of information or the persuasion of action from a subject through the manipulation of sexual desire and intention. This does not necessarily entail sexual intercourse.",
			magical: false,
			name: "Seduction",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Sewing is used to make garments, blankets, and pillows from swatches of cloth.",
			magical: false,
			name: "Sewing",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Shield Training allows a character to incorporate a shield into his defense. Characters without Shield Training must actively block with a shield in order to gain its benefits. See Armor and Shields in the Burning Wheel for rules. When performing a Strike with a shield use Brawling, an appropriate Boxing skill or Agility.",
			magical: false,
			name: "Shield Training",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Use this skill for to manager supplies and cargo for sea voyages. Success indicates there's no problem. A failed test and the ship runs short of supplies—food, water, medicine, lumber, ammunition, etc.—and serious complications arise. Sailors start dying from one thing or another, because whatever's missing is what is sorely needed, of course! A bad steward is bad for morale.",
			magical: false,
			name: "Ship Management",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Shipbuilding is the art of designing and constructing seagoing vessels. A master shipwright usually directs a team of carpenters, blacksmiths, and laborers in the construction process.",
			magical: false,
			name: "Shipwright",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using this skill and a specially designed lantern or set of flags, a sailor can relay predetermined codes or signals over great distances.",
			magical: false,
			name: "Signaling",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Seafaring"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Singing is the art of celebrating and communicating through voice, verse, and tune. Singing can be used to soothe, invigorate, and inform.",
			magical: false,
			name: "Sing",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Musical"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Soldiers trained in skirmish tactics know how to act as a unit when fighting in dispersed formations. Skirmish Tactics allow a fighter with the training to help another fighter with the training on his team. You can help with maneuver rolls in Range and Cover. Up to five skirmishers may help one another.",
			magical: false,
			name: "Skirmish Tactics Training",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Sleight of Hand allows the character to perform minor tricks with small objects in the hands. The skill also allows the character to surreptitiously place objects on and remove objects from another person.",
			magical: false,
			name: "Sleight of Hand",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill covers all the incredibly boring minutiae of being a soldier—marching, digging latrines, setting up tents, army procedures, and dealing with the paymasters.",
			magical: false,
			name: "Soldiering",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Soothing Platitudes is a skill for placating angered or irksome fellows with words that say nothing but compliment everything.",
			magical: false,
			name: "Soothing Platitudes",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Spears, lances, or pikes are versatile and intuitive weapons. They can be used as a quick slashing weapon, as a thrusting, or even a smashing weapon. This is not a throwing skill.",
			magical: false,
			name: "Spear",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A staff is a thin pole, usually shod with iron at the ends, useful for leaning on when walking and as a weapon.",
			magical: false,
			name: "Staff",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A staff"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Stealthy is the ability to use camouflage, natural surroundings, shadow, light, and a quiet step to move undetected.",
			magical: false,
			name: "Stealthy",
			noList: false,
			restriction: "N/A",
			root: ["Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A character with this skill is well versed in games of strategy popular to his region. Game play was rather common in the middle ages, but this character has developed a particular knack and skill for it.",
			magical: false,
			name: "Strategy Games",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				"A game"
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Strategy is used to guide armies through war. You can use the Strategy skill to choose the field of battle, move your army unseen through an area, find your enemy's supply, choose the proper troops for a task, etc. This is a rare and highly specialized skill reserved for only the greatest of generals.",
			magical: false,
			name: "Strategy",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Streetwise is the etiquette of the city streets. This skill helps characters navigate urban centers safely, allowing them to find places only a native would know.",
			magical: false,
			name: "Streetwise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Suasion is the verbal art of the priest. It is used to enlighten the benighted. This skill allows a Priest to convince others to act on his behalf (because it is in the best interest of their immortal souls). It is a Persuasion skill for the clergy.",
			magical: false,
			name: "Suasion",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Surgery is a highly specialized art that involves cutting and sewing damaged body parts back into a position where they can heal properly. Surgery can be used to repair broken limbs, stop bleeding, and remove bodily aberrations. Failed Surgery tests increase the blood clock for the wound by one stage. Can be used to treat wounds of all types.",
			magical: false,
			name: "Surgery",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Survival teaches a character how to build shelters, find water, and stay warm/cool in adverse conditions.",
			magical: false,
			name: "Survival",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Traveling Gear",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This skill covers the use of any long-bladed, one- or two-handed weapons. Bastard swords, broad swords, short swords, katana, falchions, machetes, rapiers, gladii, or yataghans.",
			magical: false,
			name: "Sword",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"A sword"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Symbology is the study of ancient & obscure symbols. A symbologist can recognize/interpret these marks + signs.",
			magical: false,
			name: "Symbology",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Tactics is the knowledge of how to use small groups of soldiers to maximum effect on the battlefield.",
			magical: false,
			name: "Tactics",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Military"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A tanner treats and cures hides so that they can be used as enduring clothing, furniture, and coverings.",
			magical: false,
			name: "Tanner",
			noList: false,
			restriction: "N/A",
			root: ["Agility", "Forte"],
			tools: [
				"Workshop",
				"A tannery"
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Taxidermy is the process of preparing and preserving the dead for exhibition in a lifelike state.",
			magical: false,
			name: "Taxidermy",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Medicinal"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Theatrics is the familiarity with the mechanics of stage performance. This skill encompasses sets, makeup, and costumes.",
			magical: false,
			name: "Theatrics",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Throwing allows characters to accurately throw knives, pins, rocks, and balls at targets.",
			magical: false,
			name: "Throwing",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Other",
				"Something to throw"
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This is the unsavory skill of including pain in a victim in order to have the victim acquiesce to demands or reveal information. To use the skill, the torturer must state—exactly—what he wishes the victim to submit to or reveal. He does not ask a question of his victim.",
			magical: false,
			name: "Torture",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Tracking is the ability to follow prints, impressions, and traces through the wilderness. Trackers refer to their art as 'following sign.'",
			magical: false,
			name: "Tracking",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Trapping is the art of setting traps and snares to catch small game.",
			magical: false,
			name: "Trapper",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Tree Cutting is the technique of rapidly and safely felling live trees to be used as lumber and firewood.",
			magical: false,
			name: "Tree Cutting",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Power"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Troll Lords learn the axe-blade etiquette for dealing with Troll Bellowers and Warlords.",
			magical: false,
			name: "Troll Etiquette",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "This martial training skill allows a character to fight effectively with a weapon in his off hand. This secondary weapon must be smaller or of equal weight to his other weapon. Both weapons must be one-handed and be at most long weapon length.  <br> When fighting with two weapons, there is no penalty for striking with a weapon in the off-hand. If a player wants to Strike with both weapons simultaneously, divide his dice between his two weapons. They must be of equal length to perform this. The character may perform Block & Strike actions as if he had Shield Training. Skill dice are divided between attack and defense as the combatant sees fit.",
			magical: false,
			name: "Two-Fisted Fighting Training",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Ugly Truth is the singular ability to strip a situation or argument to its bare, naked core.",
			magical: false,
			name: "Ugly Truth",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A Vintner is an artist who grows grapes, mashes them, and ferments them into wine.",
			magical: false,
			name: "Vintner",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Despite what they may say, it takes skill, patience, and cunning to serve customers. A great skill for replenishing taxed Resources.",
			magical: false,
			name: "Waiting Tables",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Weaponsmith is the specialized craft of manufacturing weapons of war.",
			magical: false,
			name: "Weaponsmith",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Weaving is the skill used for taking raw fiber like flax, cotton, wool, or silk and turning it into usable cloth.",
			magical: false,
			name: "Weaving",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Peasant"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Using similar techniques as the blacksmith, a whitesmith forges wares from the softer metals: silver and gold.",
			magical: false,
			name: "Whitesmith",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Workshop",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Tasting wine and discerning its flavors and properties is a highly refined skill. Use the skill to determine the origins of the wine.",
			magical: false,
			name: "Wine Tasting",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A wise is a skill through which a character can call upon the knowledge of various details of the game world—knowledge of 'who's who' or 'what's what' for the areas encompassed by his wises. For the most part, wises are fairly self-explanatory—their name says it all. Some of the more bizarre examples have detailed descriptions in the individual lifepath sections. The following are the general skill obstacles applicable to all wises.",
			magical: false,
			name: "Wises",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Write is the companion skill to Read. As I mentioned in the Read listing, it is possible to have this as a separate skill. Without the benefit of the ability to read, Write is a copyist's skill. The character knows the shapes of letters and how to reproduce them, but he does not know what they mean. A character with Write may transcribe his thoughts onto paper in reasonably coherent chunks.",
			magical: false,
			name: "Write",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				"Expendable"
			],
			training: false,
			type: "Academic"
		}
	]
};

export const AnyMonstrous: SkillCategory = {
	allowed: ["bwc", "msc"],
	name: "Any Monstrous",
	skills: [
		{
			allowed: ["bwc", "msc"],
			description: "It is said that the Great Ancient spoke the true names of the water, loam, wind and prairie fire. Closely guarded, these powerful names have been passed from generation to generation of Great Wolves descended from the last wolf of the ancestral pack -Fell Ancients who bear the Mark.<br>This skill is the wolf equivalent of the Spirit Binding skill. Wolves must have the Mark of the Ancient trait to use this skill.",
			magical: true,
			name: "Ancient Ways",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Begging is the Wolf's version of the Persuasion skill. This skill may be used as Persuasion in a Duel of Wits between Great Wolves or their friends. When a submissive wolf wants something, whether it be food or permission, he must beg the dominant for it. Begging is not humiliating to a wolf; it is part of their nature. Sometimes the female dominant will even need to beg when she is nursing her pups -she begs the pack to bring them food.",
			magical: false,
			name: "Begging ",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Using this skill, a Troll may take on the appearance of his surroundings and remain hidden. The Dread Stone love to build up false stone walls around themselves and then wait for an unsuspecting passerby to wander into reach.<br>Using this skill effectively requires that the Troll remain motionless while camouflaged. Test this skill as a Stealthy skill.",
			magical: false,
			name: "Camouflage",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Carrying a rider on a journey and bearing him into combat are very different skills. A wolf must be trained to modify his fighting style in order to coordinate with his rider and not roll him or throw him.",
			magical: false,
			name: "Combat Mount Training",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Power"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves can learn nearly anything. When trapped or caged, they quickly learn the mechanics of their captivity and devise a method of escape.",
			magical: false,
			name: "Escape Artist",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Bull Trolls sometimes learn that it is more fruitful to let their victims live to extort food and shiny bits from them over the years. This way they can get more than a single meal out of them!",
			magical: false,
			name: "Extortion",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "The Arsonist learns how to mix ingredients to create incendiary bombs. The Mark result damage is listed witch each type. If the explosion hits a character, roll the die of fate to determine IMS(like a spell). This skill does not cover the distribution of such bombs. That would come from Agility, Throwing, Artillery or simply inconspicuous placement. WHen igniting such a device, roll the die of fate. On a 1, the bomb malfunctions. Roll again immediately: Odd, it detonates; even it's a dud.",
			magical: false,
			name: "Firebombs",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Craftsman"
		},
		{
			allowed: ["bwc", "msc"],
			description: "A garrote is a two- to three-foot lenght of cord strung between two small wooden handles or leather loops.Roden use it to throttle victimts to death. To use this skill, the would-be-murderer must attack from stealth or surprise (or against a victim already in Lock). Test Garrote versus Power or Agility (victim's choice, but at double obstacle. If the attacker lands a 2D or greater Lock, the victim loses 1D Forte every exchange thereafter. If Forte reaches zero, the victim falls unconscious.",
			magical: false,
			name: "Garrote",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves learn the habits and nature of their prey.",
			magical: false,
			name: "Hoof-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves love to howl, and they do so for many reasons. It is the combination of the Singing, Oratory and Conspicuous skills.",
			magical: false,
			name: "Howling",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Bellowers bear a massive lash with which they drive on their lessers. So terrible and huge is this whip that it may be used as a weapon.",
			magical: false,
			name: "Lash",
			noList: false,
			restriction: "N/A",
			root: ["Agility"],
			tools: [
				"Tools",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This wolf knows the history of the trees, the streams, the rocks and brush. He knows why the snow falls and why the sun rises. He understands that the sharp tooth of the wolf lengthens the stride of the hoofed ones. He comprehends, vaguely, the interconnectedness of all things. This skill can be used as a FoRK for nearly any other skill (except martial skills), in a similar fashion to the Astrology skill.",
			magical: false,
			name: "Nature of All Things",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the delicate process of weaning pups off the teat and slowly introducing them to meat and forage. Also, this skill is used like Field Dressing.",
			magical: false,
			name: "Nursing",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Special"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is crucial knowledge of the laws of the pack and what behavior is appropriate at what juncture.",
			magical: false,
			name: "Pack Etiquette",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves hunt for their prey in a different mannter than those on two legs. The dominant is always the primary for this test. Last wolves, pups, elders and nursing dominants may not help in this test -only Hunters, Aunts, Uncles and Yearlings.",
			magical: false,
			name: "Pack Hunting",
			noList: false,
			restriction: "N/A",
			root: ["Perception", "Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Preaching relies upon religious doctrine, real-life anecdotes and folk wisdom.",
			magical: false,
			name: "Preaching",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the wolf's instructional skill. Good Uncles and Aunts pass on the knowledge of the hunt and the traditions of the pack to the young pups. Use this skill as Instruction for teaching wolves younger than you.",
			magical: false,
			name: "Rearing",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Social"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This training teaches a wolf how to subordinate itself and accept commands from a rider.",
			magical: false,
			name: "Rider Training",
			noList: false,
			restriction: "N/A",
			root: ["Will"],
			tools: [
				"No",
				""
			],
			training: true,
			type: "Physical"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Orcs train wolves to fight savagely and wildly. Wolves with Savage Attack have access to all of the martial maneuvers, including Lock and Strike when using their Crushing Jaws",
			magical: false,
			name: "Savage Attack",
			noList: false,
			restriction: "N/A",
			root: ["Agility", "Speed"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Martial"
		},
		{
			allowed: ["bwc", "msc"],
			description: "Wolves track in a slightly different manner than humans, Elves and Orcs -they rely on scent and sound in addition to sight.",
			magical: false,
			name: "Scent Tracking",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Forester"
		},
		{
			allowed: ["bwc", "msc"],
			description: "It is said that the Great Ancient whispered his secrets to his last pup before he passed on from this world. He taught his outcast and hated child how to speak the true speech, how to make his words have power beyond understanding.<br>This skill is the equivalent of Sorcery, Great Wolves with the Mark of the Ancient trait may use this skill to cast spells.",
			magical: true,
			name: "Tongue of the Ancient One",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Sorcerous"
		},
		{
			allowed: ["bwc", "msc"],
			description: "This is the Spirit Hunter's history of the world. This skill acts as Ancient History",
			magical: false,
			name: "Way of the First Hunter",
			noList: false,
			restriction: "N/A",
			root: ["Will", "Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Academic"
		}
	]
};

export const AnyWise: SkillCategory = {
	allowed: ["bwg", "bwc", "msc"],
	name: "Any Wise",
	skills: [
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Choose any wise skill.",
			magical: false,
			name: "Any wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Abbey-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Aecer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Alms-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Althing-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ambition-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Ambush-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Animal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Antique-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Any wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Apocalypse-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Apostate-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Apprentice-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Army-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Arson-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Artificer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Artisan-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Assassination-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Aura-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Authority-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Back Alley-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bad End-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Baggage Train-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bandit-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Banner-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bannerman-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bat-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Battle-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bay-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Beast of Burden-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bee-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Beer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Beggar-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Below-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bishop-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Orcs with this skill know the power structure and inner workings of their clan's legion and other legions in the region.",
			magical: false,
			name: "Black Legion-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bone Headed-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bone-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Books-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Border-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Boss-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bow-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bread-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Brew-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bribe-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Bridge-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Bully-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Burden of the Crown-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cadence-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Campaign-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Captain-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Caravan-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cargo-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Cat-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Caulking-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cavalry-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cave-In-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cave-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cell-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cemetary-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cemetery-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Chain-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Champion-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Charcoal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Chattel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cheat-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cheating-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Child-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Church Politics-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Church Treasure-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Church-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Circuit-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Citadel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "City Guard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "City-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Clan-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Clique-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Clothing-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Coin-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Commodities-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Contract-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Countryside-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Court Gossip-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Court-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Craft-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Craftsman-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Creepy Priest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Crew-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Criminal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Crop-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Crowd-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Cult-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Cultist-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Currency-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Current-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Customer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Daily Bread-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Dark Arts-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Dark Elf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Dark Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Darkened Streets-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Darkness-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Deal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Death Cult-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Death-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Debt-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Dirty Secrets-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Disgusting Necromancer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Dog-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Domain-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Drama-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Drink-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Drunk Husband-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Drunk-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Drunkard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Dupe-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Dwarf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Dwarven Art-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Dwarven Heroes-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "A Dwarf with this skill can tell the type of earth and stone, where it came from and generally how old it is.",
			magical: false,
			name: "Earth-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Art-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Artifact-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Blade-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Citadel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Politics-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Ranger-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Elven Songs-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Estate-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Etharch-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Everybody's Innocent-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Evil Necromancer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Excuses-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Extortion-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fabric-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Facet-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Faith-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Fake-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fall Grass-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Family Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Family Secrets-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Family-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fashion-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fat Merchant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fealty-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Feet-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fire and Steel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Flock-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Flower-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Fool-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Forest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Fortress-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Gaol-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Gas Pocket-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Genius-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "God of Death-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Gossip-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Graft-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Grain-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Grape-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Grave-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Graveyard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Graybeard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Great and Black-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Great Masters-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Great Wolf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Grift-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Guard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Guest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Guilder-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Guts-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Handwriting-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hatchet-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Hazing-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Herb-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Herbalist-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Heresy-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hills-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hold-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Honey-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hoof-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Horse-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hospital-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hospital-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Host-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hostel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Hurt-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Husband-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Hypocritical Bastards-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Imperfections-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Inane Requst-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Infection-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Inner Workings-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Intrigue-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Junior Student-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Junk-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Kick Me-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Kingdom-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Knife-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Laborer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Landlord-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Latrine-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Law-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Lazy Bastard-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Lazy-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Leather-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ledger-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Leper-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Leverage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Library-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Local Law-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Lock-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Loot-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Lord-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Lost Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Lost Treasures-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Mad Invention-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Maker's Mark-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Human-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Manor-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Map-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Materials-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Mead-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mercenary Company-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Merchant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Metal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mill-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mineral-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Minister-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Monk-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mount-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mountain-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mouth of Hell-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mule-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Murder-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Mystery Meat-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Nail-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Nest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Night Watch-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Noble-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Nut and Berry-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Oath-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Obligation-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Obscure Text-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Omen-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Orc Rituals-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Orc Servant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Orc-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ore-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Outlaw-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pack-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Paint-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Papal Bull-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Paperwork-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Parish-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Park-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Paths-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pattern-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Peasant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Pecking Order-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Personal Effects-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Petitioner-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Pig-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pilgrim-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pilgrimage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pirate Cove-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Pirates-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Plant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Poacher-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Poison-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Pope Joke-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Prayer-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Priest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Profanity-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Promise-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Prostitute-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Protector-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Quack-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ransom-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Relic-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Religious Rumor-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Reputation-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Rhythm of the City-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ridiculous Request-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Righteous Priest-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Riot-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Rituals-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Road-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Rock-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Roof-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Rope-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Royal Parks-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Royal Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Rumor-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sail-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sailor-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Saint-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sacrament-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Scheme-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "School of Magic-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Scurvy-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Scutwork-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sea-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Seaman-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Secret Cult Worship-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Seed-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Ship-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Shoal-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Shoe-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Shortcut-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Shovel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Shrine-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Slave Deck-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Slavery-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Society-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Soldier-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Soot-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sorcery-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Spiel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Spirit-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Staff-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Stone-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Structural Weakness-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Suicidal Bravery-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Summoner-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Superstition-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Supplier-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Supply-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Sweet Tooth-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Sword-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Swordsman-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Tail-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tall Grass-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tar-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Taskmaster-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tavern Tales-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tax-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tax-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Temple-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Territory-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Terroir-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tithe-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Tomb-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tools-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Torture Devices-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Town-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Toxin-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tragic End-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Trail-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Trails-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Traitor-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Traveler-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Treasure-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tree-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Trial by Combat-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "Troll Lords live among the clan's Trolls. They learn their ways and habits.",
			magical: false,
			name: "Troll-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Trouble-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Troubled Student-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Tunnel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Undermining-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Vagrant-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Vein-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Vessel-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Village Secret-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Village Secrets-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Village-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Vine-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Vintage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Visage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wagon-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Walking Corpse-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "War-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Wasteland-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Waterworks-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wealth-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wealthy-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Web-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Well-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Whip-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Whispered Secrets-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wholesale-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wife-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Windage-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "Window-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wolf-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Wood-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Work-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwc", "msc"],
			description: "",
			magical: false,
			name: "World Domination-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Worshipper-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		},
		{
			allowed: ["bwg", "bwc", "msc"],
			description: "",
			magical: false,
			name: "Writ-wise",
			noList: false,
			restriction: "N/A",
			root: ["Perception"],
			tools: [
				"No",
				""
			],
			training: false,
			type: "Wise"
		}
	]
};
