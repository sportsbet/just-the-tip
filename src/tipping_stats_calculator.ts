import { AFLRoundData } from "./data"

export interface TippingStats {
	favouriteTeam: string
	tipCount: number
}

/*
const arbitraryTeamWheightings: any = {
	"Adelaide": 1.1,
	"Brisbane": 1.2,
	"Carlton": 1.2,
	"Collingwood": 1.1,
	"Essendon": 1.7,
	"Fremantle": 1.3,
	"Geelong": 1.5,
	"Gold Coast": 1.1,
	"GWS Giants": 1.2,
	"Hawthorn": 1.5,
	"Melbourne": 1.4,
	"North Melbourne": 1.6,
	"Port Adelaide": 1.2,
	"Richmond": 1.3,
	"St Kilda": 1.5,
	"Sydney": 1.1,
	"West Coast": 1.1,
	"Western Bulldogs": 1.4
}
*/

const teamCounts: any = {
	"Adelaide": 0,
	"Brisbane": 0,
	"Carlton": 0,
	"Collingwood": 0,
	"Essendon": 0,
	"Fremantle": 0,
	"Geelong": 0,
	"Gold Coast": 0,
	"GWS Giants": 0,
	"Hawthorn": 0,
	"Melbourne": 0,
	"North Melbourne": 0,
	"Port Adelaide": 0,
	"Richmond": 0,
	"St Kilda": 0,
	"Sydney": 0,
	"West Coast": 0,
	"Western Bulldogs": 0
}

export function generateStats(data: AFLRoundData): TippingStats {

	const tipsPerTeam = Object.assign({}, teamCounts)

	data.rounds.map((round) => {
		round.matches.map((match) => {
			if (match.tip) {
				tipsPerTeam[match.tip] = tipsPerTeam[match.tip] || 0
				tipsPerTeam[match.tip]++
			}
		})
	})
	
	let team = null
	let favouriteTeam = ""
	let tipCount = 0
	let max = 0

	for (team in tipsPerTeam) {
		if (tipsPerTeam[team] > max) {
			favouriteTeam = team
			tipCount = tipsPerTeam[team]
			max = tipsPerTeam[team]
		}
	}	

	return {
		favouriteTeam,
		tipCount
	}

}