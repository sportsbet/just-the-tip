import { AFLRoundData } from "./data"
import { generateStats, TippingStats } from "./tipping_stats_calculator"

const testData: AFLRoundData = {
	teams: {
		"Angus": {},
		"Bon": {},
		"Craigo": {},
		"DLRoth": {},
		"Eddie": {},
		"Freddie": {},
		"Gary": {},
		"Herbie": {},
		"Iggy": {},
		"Jimi": {},
		"Keith": {},
		"Lemmy": {},
		"Neil": {},
		"Mick": {},
		"Ozzie": {},
		"Patti": {},
		"Questlove": {},
		"Roger": {},
		"Suzi": {},
		"Tommy": {},
		"Uli": {},
		"Viv": {},
		"Wilson": {},
		"Xzibit": {},
		"Yngwie": {},
		"Zaphod": {}
	},
	rounds: [
		{
			num: 1,
			matches: [
				{date: "", home: "Craigo", away: "Ozzie", venue: "MCG", time: ""},
				{date: "", home: "Jimi", away: "Patti", venue: "", time: ""},
				{date: "", home: "Zaphod", away: "Gary", venue: "", time: ""},
				{date: "", home: "Questlove", away: "DLRoth", venue: "Wembley", time: ""},
				{date: "", home: "Uli", away: "Bon", venue: "Budokan", time: ""},
				{date: "", home: "Roger", away: "Iggy", venue: "", time: ""},
				{date: "", home: "Lemmy", away: "Yngwie", venue: "Wembley", time: ""},
				{date: "", home: "Angus", away: "Viv", venue: "Madison Square Garden", time: ""},
				{date: "", home: "Suzi", away: "Bon", venue: "Alfheim Stadion", time: ""}
			]
		},
		{
			num: 2,
			matches: [
				{date: "", home: "Ozzie", away: "Jimi", venue: "", time: ""},
				{date: "", home: "Patti", away: "Zaphod", venue: "Wembley", time: ""},
				{date: "", home: "Iggy", away: "Angus", venue: "MCG", time: ""},
				{date: "", home: "Viv", away: "Uli", venue: "Spotless Stadium", time: ""},
				{date: "", home: "Bon", away: "Roger", venue: "", time: ""},
				{date: "", home: "Yngwie", away: "Questlove", venue: "Alfheim Stadion", time: ""},
				{date: "", home: "Bon", away: "Lemmy", venue: "Wembley", time: ""},
				{date: "", home: "DLRoth", away: "Craigo", venue: "", time: ""},
				{date: "", home: "Gary", away: "Suzi", venue: "Madison Square Garden", time: ""}
			]
		},
		{
			num: 3,
			matches: [
				{date: "", home: "Zaphod", away: "Jimi", venue: "", time: ""},
				{date: "", home: "Lemmy", away: "Viv", venue: "", time: ""},
				{date: "", home: "Ozzie", away: "Yngwie", venue: "", time: ""},
				{date: "", home: "Bon", away: "DLRoth", venue: "Wembley", time: ""},
				{date: "", home: "Gary", away: "Angus", venue: "", time: ""},
				{date: "", home: "Suzi", away: "Patti", venue: "Alfheim Stadion", time: ""},
				{date: "", home: "Questlove", away: "Bon", venue: "Wembley", time: ""},
				{date: "", home: "Craigo", away: "Roger", venue: "MCG", time: ""},
				{date: "", home: "Uli", away: "Iggy", venue: "Madison Square Garden", time: ""}
			]
		},
		{
			num: 4,
			matches: [
				{date: "", home: "Yngwie", away: "Zaphod", venue: "Alfheim Stadion", time: ""},
				{date: "", home: "Lemmy", away: "Patti", venue: "Wembley", time: ""},
				{date: "", home: "DLRoth", away: "Suzi", venue: "", time: ""},
				{date: "", home: "Viv", away: "Gary", venue: "", time: ""},
				{date: "", home: "Craigo", away: "Uli", venue: "Wembley", time: ""},
				{date: "", home: "Angus", away: "Roger", venue: "Madison Square Garden", time: ""},
				{date: "", home: "Jimi", away: "Questlove", venue: "Madison Square Garden", time: ""},
				{date: "", home: "Bon", away: "Ozzie", venue: "MCG", time: ""},
				{date: "", home: "Iggy", away: "Bon", venue: "", time: ""}
			]
		},
		{
			num: 5,
			matches: [
				{date: "", home: "Gary", away: "Craigo", venue: "Madison Square Garden", time: ""},
				{date: "", home: "Patti", away: "Bon", venue: "Wembley", time: ""},
				{date: "", home: "Uli", away: "Angus", venue: "", time: ""},
				{date: "", home: "Zaphod", away: "Viv", venue: "", time: ""},
				{date: "", home: "Suzi", away: "Lemmy", venue: "Alfheim Stadion", time: ""},
				{date: "", home: "Questlove", away: "Bon", venue: "Wembley", time: ""},
				{date: "", home: "Iggy", away: "Yngwie", venue: "MCG", time: ""},
				{date: "", home: "Ozzie", away: "DLRoth", venue: "", time: ""},
				{date: "", home: "Roger", away: "Jimi", venue: "", time: ""}
			]
		},
		{
			num: 6,
			matches: [
				{date: "", home: "Viv", away: "Patti", venue: "", time: ""},
				{date: "", home: "Iggy", away: "Questlove", venue: "", time: ""},
				{date: "", home: "Craigo", away: "Zaphod", venue: "", time: ""},
				{date: "", home: "Bon", away: "Gary", venue: "", time: ""},
				{date: "", home: "Lemmy", away: "Uli", venue: "Wembley", time: ""},
				{date: "", home: "Yngwie", away: "Suzi", venue: "Alfheim Stadion", time: ""},
				{date: "", home: "Roger", away: "DLRoth", venue: "Wembley", time: ""},
				{date: "", home: "Bon", away: "Jimi", venue: "MCG", time: ""},
				{date: "", home: "Angus", away: "Ozzie", venue: "Madison Square Garden", time: ""}
			]
		}
	]
}




describe("Tipping calculator", () => {

	describe("generating the favourite team stat", () => {
		it("picks the team with the most tips", () => {
			let match = testData.rounds[0].matches[0]
			match.tip = match.away // tip Ozzie
			
			match = testData.rounds[0].matches[1]
			match.tip = match.away // tip Patti

			match = testData.rounds[0].matches[6]
			match.tip = match.home // tip Lemmy

			match = testData.rounds[2].matches[2]
			match.tip = match.home // tip Ozzie

			const tipStats = generateStats(testData)

			expect(tipStats.favouriteTeam).toBe("Ozzie")
		})
	})
})