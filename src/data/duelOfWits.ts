import { DuelOfWitsAction } from "../state/reducers/duelOfWits";


export const DuelOfWitsActions: DuelOfWitsAction[] = [
	{
		name: "Avoid the Topic",
		tests: ["Will"],
		speakingThePart: "The speaking player must veer off topic, even to the point of sounding desperate or ridiculous.",
		effects: "Avoid successes are subtracted from your opponent's Point, Obfuscate or Incite successes. This reduces the effectiveness of an opposed action. If Obfuscate or Incite successes aren't reduced to zero, then the incoming action wins and takes effect. Avoid never suffers a double obstacle penalty for stat versus skill. It's special.",
		resolution: { "Incite": "Vs", "Obfuscate": "Vs", "Point": "Vs" }
	},
	{
		name: "Dismiss",
		tests: ["Coarse Persuasion", "Command", "Intimidation", "Oratory", "Religious Diatribe", "Rhetoric", "Stentorious Debate", "Ugly Truth"],
		speakingThePart: "This maneuver is used for the cataclysmic and undeniable conclusion of an argument. Loudly declare that your opponent knows nothing about the topic at hand and, furthermore, he's a fool and a dullard and shouldn't be listened to any further!",
		special: "If a character fails to win the duel via his Dismiss action, he must hesitate for his next volley. Either cross off the next action, or skip the first volley of the coming exchange.",
		effects: "Scripting a Dismiss adds +2D to the character's skill. In a standard test, subtract each success rolled from your opponent's body of argument. Against Rebuttal, subtract your margin of success over your opponent's defense from the body of argument. If you win against Obfuscate, all Dismiss successes are subtracted from the body of argument —not just your margin of success.",
		resolution: { "Avoid the Topic": "Std", "Dismiss": "Std", "Feint": "Std", "Incite": "Std", "Obfuscate": "Vs", "Point": "Std", "Rebuttal": "Vs" }
	},
	{
		name: "Feint",
		tests: ["Extortion", "Falsehood", "Interrogation", "Persuasion", "Poisonous Platitudes", "Religious Diatribe", "Rhetoric", "Soothing Platitudes", "Seduction"],
		speakingThePart: "Using a Feint, the speaker leads his opponent on into a trap. He lures him to think he is discussing one point, until the hidden barb is revealed.",
		effects: "Feint can be used to bypass Rebuttal and to attack Feint, Incite and Obfuscate. In a standard test, each success subtracts from your opponent's body of argument. In a versus test, margin of success is subtracted from your opponent's body of argument.",
		resolution: { "Feint": "Vs", "Incite": "Vs", "Obfuscate": "Vs", "Rebuttal": "Std" }
	},
	{
		name: "Incite",
		tests: ["Coarse Persuasion", "Command", "Extortion", "Falsehood", "Intimidation", "Seduction", "Ugly Truth"],
		speakingThePart: "With an acid tongue and biting wit, a character may attempt to distract or dismay his opponent. The speaking player must pronounce an outright insult to his opponent.",
		effects: "In a standard test, the obstacle is equal to the victim's Will exponent. If the In citing player passes the standard test or wins the versus test, the victim must make a Steel test. If the victim hesit ates, he misses his next action. However, if the Incite fails, the margin of failure is added as advantage dice to the opponent's next test.",
		resolution: { "Avoid the Topic": "Vs", "Dismiss": "Std", "Feint": "Vs", "Incite": "Std", "Obfuscate": "Vs", "Point": "Std", "Rebuttal": "Std" }
	},
	{
		name: "Obfuscate",
		tests: ["Falsehood", "Oratory", "Poisonous Platitudes", "Rhetoric", "Religious Diatribe", "Soothing Platitudes", "Stentorious Debate", "Suasion", "Ugly Truth"],
		speakingThePart: "Obfuscate is a verbal block . The player attempting to Obfuscate must present some non sequitur or bizarre, unrelated point in an attempt to confuse or distract his opponent. Obfuscate is spoken while your opponent is speaking.",
		effects: "Obfuscate is tested versus everything, even itself. If the Obfuscator wins, the victim of this tactic loses his current action. If the Obfuscator exceeds his obstacle, his opponent also suffers a +1 Ob to his next action. If the Obfuscator loses the versus test, his opponent's current action goes off and his successes are applied as per his action description. Furthermore, he gain +1D to his next action.",
		resolution: { "Avoid the Topic": "Vs", "Dismiss": "Vs", "Feint": "Vs", "Incite": "Vs", "Obfuscate": "Vs", "Point": "Vs", "Rebuttal": "Vs" }
	},
	{
		name: "Point",
		tests: ["Coarse Persuasion", "Interrogation", "Oratory", "Persuasion", "Poisonous Platitudes", "Rhetoric", "Stentorious Debate"],
		speakingThePart: "The Point action is the main attack of the verbal duelist. Hammer away using your statement of purpose and related points!",
		effects: "In a standard test, subtract your Point successes from your opponent's body of argument. In a versus test, subtract the margin of success from your opponent's body of argument. This is the way to win debates!",
		resolution: { "Avoid the Topic": "Vs", "Dismiss": "Std", "Feint": "Std", "Incite": "Std", "Obfuscate": "Vs", "Point": "Std", "Rebuttal": "Vs" }
	},
	{
		name: "Rebuttal",
		tests: ["Extortion", "Interrogation", "Oratory", "Persuasion", "Poisonous Platitudes", "Rhetoric", "Stentorious Debate", "Suasion"],
		speakingThePart: "The player first lets his opponent make his attack. He then refutes the arguments made while making a fresh point himself.",
		special: "When making a Rebuttal, you must divide your dice between attack and defense. This division happens before his opponent roll s. You must put at least one die in each pool. Any penalties to the action are applied to both pools. Any bonuses to the action are only applied to either attack or defense. If you only have one die, you can choose whether you attack or defend.",
		effects: "Successes from the defense roll are subtracted from the opponent's successes. To fully defend against an Obfuscate action, you must get more defense successes than your opponent's Obfuscate successes. Each success on the attacking portion of a Rebuttal reduces your opponent's body of argument.",
		resolution: { "Dismiss": "Vs", "Obfuscate": "Vs", "Point": "Vs" }
	},
	{
		name: "Pray/Cast/etc",
		resolution: { "Dismiss": "Ob 1", "Feint": "Ob 1", "Incite": "Ob=Will", "Obfuscate": "Ob 1", "Point": "Ob 1" }
	},
	{
		name: "Hesitate",
		resolution: { "Dismiss": "Ob 1", "Feint": "Ob 1", "Incite": "Ob=Will", "Obfuscate": "Ob 1", "Point": "Ob 1" }
	}
];
