export interface AFLRoundData {
	teams: TeamList
	rounds: Round[]
}

export interface TeamList {
	[teamName: string]: any
}

export interface Match {
	date: string
	home: string
	away: string
	venue: string
	time: string
	tip?: string
}

export interface Round {
	num: number
	matches: Match[]
}

export const aflData: AFLRoundData = {
	teams: {
		"Adelaide": {},
		"Brisbane": {},
		"Carlton": {},
		"Collingwood": {},
		"Essendon": {},
		"Fremantle": {},
		"Geelong": {},
		"Gold Coast": {},
		"GWS Giants": {},
		"Hawthorn": {},
		"Melbourne": {},
		"North Melbourne": {},
		"Port Adelaide": {},
		"Richmond": {},
		"St Kilda": {},
		"Sydney": {},
		"West Coast": {},
		"Western Bulldogs": {}
	},
	rounds: [
		{
			num: 1,
			matches: [
				{date: "23/03/2017", home: "Carlton", away: "Richmond", venue: "MCG", time: "7.20pm"},
				{date: "24/03/2017", home: "Collingwood", away: "Western Bulldogs", venue: "MCG", time: "7.50pm"},
				{date: "25/03/2017", home: "Sydney", away: "Port Adelaide", venue: "SCG", time: "4.35pm"},
				{date: "25/03/2017", home: "St Kilda", away: "Melbourne", venue: "Etihad Stadium", time: "4.35pm"},
				{date: "25/03/2017", home: "Gold Coast", away: "Brisbane", venue: "Metricon Stadium", time: "7.25pm"},
				{date: "25/03/2017", home: "Essendon", away: "Hawthorn", venue: "MCG", time: "7.25pm"},
				{date: "26/03/2017", home: "North Melbourne", away: "West Coast", venue: "Etihad Stadium", time: "1.10pm"},
				{date: "26/03/2017", home: "Adelaide", away: "GWS Giants", venue: "Adelaide Oval", time: "3.20pm"},
				{date: "26/03/2017", home: "Fremantle", away: "Geelong", venue: "Domain Stadium", time: "7.40pm"}
			]
		},
		{
			num: 2,
			matches: [
				{date: "30/03/2017", home: "Richmond", away: "Collingwood", venue: "MCG", time: "7.20pm"},
				{date: "30/03/2017", home: "Western Bulldogs", away: "Sydney", venue: "Etihad Stadium", time: "7.50pm"},
				{date: "01/04/2017", home: "Hawthorn", away: "Adelaide", venue: "MCG", time: "1.45pm"},
				{date: "01/04/2017", home: "GWS Giants", away: "Gold Coast", venue: "Spotless Stadium", time: "4.35pm"},
				{date: "01/04/2017", home: "Brisbane", away: "Essendon", venue: "Gabba", time: "7.25pm"},
				{date: "01/04/2017", home: "West Coast", away: "St Kilda", venue: "Domain Stadium", time: "7.40pm"},
				{date: "02/04/2017", home: "Geelong", away: "North Melbourne", venue: "Etihad Stadium", time: "1.10pm"},
				{date: "02/04/2017", home: "Melbourne", away: "Carlton", venue: "MCG", time: "3.20pm"},
				{date: "02/04/2017", home: "Port Adelaide", away: "Fremantle", venue: "Adelaide Oval", time: "4.40pm"}
			]
		},
	]
}