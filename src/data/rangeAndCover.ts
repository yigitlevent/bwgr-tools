export interface RangeAndCoverAction {
	name: string;
	group: "Closing" | "Maintaining" | "Withdrawal";
	test: string;
	effect?: string;
	specialRestriction?: string;
	specialAction?: string;
	however?: string;
	resolution: { [key: string]: string; };
}

export const RangeAndCoverActions: RangeAndCoverAction[] = [
	{
		name: "Close",
		group: "Closing",
		test: "Close tests Speed plus advantage from weapon range, position and stride.",
		effect: "Using Close, the character attempts to dash into position quickly. If successful, the character advances one range category for his weapon.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Perception",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Sneak In",
		group: "Closing",
		test: "Sneak In tests Stealthy plus FoRKs, advantage from weapon range, position and stride.",
		effect: "Using camouflage and stealth, you move unseen toward your opponent's position. If successful, the character advances one range category.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Observation",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Flank",
		group: "Closing",
		test: "Flank tests Tactics plus FoRKs, advantage from weapon range, position and stride.",
		effect: "Using your knowledge of battle, you outmaneuver your opponent. If successful, the character advances one range category.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Observation",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Charge",
		group: "Closing",
		test: "Charge tests Steel plus advantage from weapon range, position and stride. The test is open-ended.",
		effect: "A player may choose to press on using his character's Steel rather than Speed, Stealth or Tactics. He pricks up his nerve, dashes from cover and charges screaming at his opponent. This is a difficult and dangerous maneuver. If he wins the versus test, then he closes one range.",
		however: "Your opponents may always shoot —even if they lose the positioning test. If your Charge is successful, your opponent gets one free shot before you close in. If the Charge is tied, everyone on both teams gets to shoot. Very ugly. If the Charge is failed, your opponent gets two free shots plus whatever successes he spends on shooting.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Perception",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Maintain",
		group: "Maintaining",
		test: "Maintain tests Speed plus advan tage from weapon range, position and stride.",
		effect: "Using his footwork and reflexes, the character attempts to get the better of his opponent. If your opponent moves forward, you move back. If he moves back, you move forward. If the character is successful, he's held his opponent at the current range.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Perception",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Hold",
		group: "Maintaining",
		test: "Test Perception against Close, Charge, Maintain, Hold, Withdraw and Retreat. Test Observation against Sneak In, Flank, Sneak Out and Fall Back. Both variant s gain advantage from weapon range and position, but not from stride.",
		effect: "When using the Hold action, the team does not move. Feet planted, they hold their ground and let fly for all they're worth.",
		specialAction: "There are three special effects for the Hold action. First, your opponent always moves in with a close-type maneuver or away with a withdraw-type. Second, you always shoot, even if you lose the maneuver test. If you win the maneuver test, you get a free shot in addition to your other actions. Finally, advantage dice from a position are carried over from Hold into your next maneuver.",
		resolution: {
			"Close": "Perception vs Speed",
			"Sneak In": "Observation vs Stealthy",
			"Flank": "Observation vs Tactics",
			"Charge": "Perception vs Steel",
			"Maintain": "Perception vs Speed",
			"Hold": "Perception vs Perception",
			"Withdraw": "Perception vs Speed +2D",
			"Sneak Out": "Observation vs Stealthy",
			"Fall Back": "Observation vs Tactics",
			"Retreat": "Perception vs Steel +2D"
		}
	},
	{
		name: "Withdraw",
		group: "Withdrawal",
		test: "Speed +2D plus advantage from weapon range, po sition and stride. Run!",
		effect: "Using Speed to Withdraw you beat a hasty retreat. If successful, you withdraw one range category. Position dice are not carried to the next volley. You abandon your position. You may allocate margin of success to finding a new position in this maneuver if appropriate.",
		specialRestriction: "While this maneuver grants a +2D advant age, any actions taken while using Withdraw cost two successes. Taking a shot, shrugging off a wound or bolting a door closed requires that you win by at least two.",
		specialAction: "For two successes from a successful Withdraw action, you can remain at your current range but then consult your range chart to find your opponent's adjusted range. You rerange your weapons!",
		resolution: {
			"Close": "+2D vs Speed",
			"Sneak In": "+2D vs Stealthy",
			"Flank": "+2D vs Tactics",
			"Charge": "+2D vs Steel",
			"Maintain": "+2D vs Speed",
			"Hold": "+2D vs Perception",
			"Withdraw": "+2D vs Speed +2D",
			"Sneak Out": "+2D vs Stealthy",
			"Fall Back": "+2D vs Tactics",
			"Retreat": "+2D vs Steel +1D"
		}
	},
	{
		name: "Sneak Out",
		group: "Withdrawal",
		test: "Sneak Out tests Stealthy plus FoRKs, advantage from weapon range, position and stride. ",
		effect: "Using guile and subterfuge, you move unseen away from your opponent's position. If successful, the character withdraws one range category. Position dice are not carried to the next volley. You abandon your position. You may allocate margin of success to finding a new position in this maneuver if appropriate.",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Observation",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Fall Back",
		group: "Withdrawal",
		test: "Fall Back tests Tactics plus FoRKs, adv a ntage from range, position and stride.",
		effect: "Using sound tactics, you abandon your position to take up another, better rearward one. If successful, the character withdraws one range category. Position dice are not carried to the next volley. You abandon your position. You may allocate margin of success to finding a new position in this maneuver if appropriate.",
		specialAction: "For two successes from a successful Fall Back action, you can set your range to your current range but then consult your range chart to find your opponent's range. You rerang e your weapons!",
		resolution: {
			"Close": "vs Speed",
			"Sneak In": "vs Stealthy",
			"Flank": "vs Tactics",
			"Charge": "vs Steel",
			"Maintain": "vs Speed",
			"Hold": "vs Observation",
			"Withdraw": "vs Speed +2D",
			"Sneak Out": "vs Stealthy",
			"Fall Back": "vs Tactics",
			"Retreat": "vs Steel +1D"
		}
	},
	{
		name: "Retreat",
		group: "Withdrawal",
		test: "Retreat tests Steel +1D plus advantage from range, position and stride. This test is open-ended.",
		effect: "Sometimes you've had quite enough. Screw this position, it's time to beat a retreat. This takes nerves! A player may choose to make tracks using his character's Steel rather than Speed, Stealth or Tactics. He pricks up his nerve, dashes from cover and makes a hasty advance to the rear. If successful, the character withdraws one range category. Position dice are not carried to the next volley. You abandon your position. You may allocate margin of success to finding a new position in this maneuver if appropriate.",
		however: "Your opponents may always, shoot —even if they lose the positioning test. If the Retreat is successful, your opponent gets one free shot before you move out. If the Retreat is tied, your opponent gets two free shots. If the Retreat is failed, your opponents gets two free shots plus whatever he spends on his margin of success. Lastly, if you fail a Retreat, you hesitate in the next volley.",
		resolution: {
			"Close": "+1D vs Speed",
			"Sneak In": "+1D vs Stealthy",
			"Flank": "+1D vs Tactics",
			"Charge": "+1D vs Steel",
			"Maintain": "+1D vs Speed",
			"Hold": "+1D vs Perception",
			"Withdraw": "+1D vs Speed +2D",
			"Sneak Out": "+1D vs Stealthy",
			"Fall Back": "+1D vs Tactics",
			"Retreat": "+1D vs Steel +1D"
		}
	}
];
