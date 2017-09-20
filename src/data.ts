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
		{
			num: 3,
			matches: [
				{date: "07/04/2017", home: "Sydney", away: "Collingwood", venue: "SCG", time: "4.40pm"},
				{date: "08/04/2017", home: "North Melbourne", away: "GWS Giants", venue: "BA", time: "5.30pm"},
				{date: "08/04/2017", home: "Richmond", away: "West Coast", venue: "MCG", time: "2.15pm"},
				{date: "08/04/2017", home: "Geelong", away: "Melbourne", venue: "Etihad Stadium", time: "7.20pm"},
				{date: "08/04/2017", home: "Port Adelaide", away: "Adelaide", venue: "Gabba", time: "7.25pm"},
				{date: "08/04/2017", home: "Fremantle", away: "Western Bulldogs", venue: "Domain Stadium", time: "4.40pm"},
				{date: "09/04/2017", home: "St Kilda", away: "Brisbane", venue: "Etihad Stadium", time: "2.15pm"},
				{date: "09/04/2017", home: "Carlton", away: "Essendon", venue: "MCG", time: "3.20pm"},
				{date: "09/04/2017", home: "Gold Coast", away: "Hawthorn", venue: "Adelaide Oval", time: "3.20pm"}
			]
		},
		{
			num: 4,
			matches: [
				{date: "13/04/2017", home: "West Coast", away: "Sydney", venue: "Domain Stadium", time: "7.50pm"},
				{date: "14/04/2017", home: "North Melbourne", away: "Western Bulldogs", venue: "Etihad Stadium", time: "1.45pm"},
				{date: "15/04/2017", home: "Melbourne", away: "Fremantle", venue: "MCG", time: "1.45pm"},
				{date: "15/04/2017", home: "GWS Giants", away: "Port Adelaide", venue: "UNSW", time: "4.35pm"},
				{date: "15/04/2017", home: "Carlton", away: "Gold Coast", venue: "Etihad Stadium", time: "1.10pm"},
				{date: "15/04/2017", home: "Adelaide", away: "Essendon", venue: "Adelaide Oval", time: "2.30pm"},
				{date: "16/04/2017", home: "Collingwood", away: "St Kilda", venue: "Adelaide Oval", time: "3.15pm"},
				{date: "16/04/2017", home: "Brisbane", away: "Richmond", venue: "Gabba", time: "3.20pm"},
				{date: "17/04/2017", home: "Hawthorn", away: "Geelong", venue: "MCG", time: "7.15pm"}
			]
		},
		{
			num: 5,
			matches: [
				{date: "21/04/2017", home: "Port Adelaide", away: "Carlton", venue: "Adelaide Oval", time: "4.20pm"},
				{date: "22/04/2017", home: "Western Bulldogs", away: "Brisbane", venue: "Etihad Stadium", time: "3.10pm"},
				{date: "22/04/2017", home: "Gold Coast", away: "Adelaide", venue: "UNSW", time: "4.45pm"},
				{date: "22/04/2017", home: "Sydney", away: "GWS Giants", venue: "SCG", time: "5.20pm"},
				{date: "22/04/2017", home: "Fremantle", away: "North Melbourne", venue: "Domain Stadium", time: "6.00pm"},
				{date: "23/04/2017", home: "St Kilda", away: "Geelong", venue: "Etihad Stadium", time: "2.50pm"},
				{date: "23/04/2017", home: "Hawthorn", away: "West Coast", venue: "MCG", time: "1.10pm"},
				{date: "24/04/2017", home: "Richmond", away: "Melbourne", venue: "MCG", time: "3.45pm"},
				{date: "25/04/2017", home: "Essendon", away: "Collingwood", venue: "MCG", time: "4.40pm"}
			]
		},
		{
			num: 6,
			matches: [
				{date: "13/04/2017", home: "GWS Giants", away: "Western Bulldogs", venue: "UNSW", time: "2.25pm"},
				{date: "14/04/2017", home: "Hawthorn", away: "St Kilda", venue: "UTAS", time: "3.30pm"},
				{date: "15/04/2017", home: "Carlton", away: "Sydney", venue: "MCG", time: "7.15pm"},
				{date: "15/04/2017", home: "Brisbane", away: "Port Adelaide", venue: "Gabba", time: "3.35pm"},
				{date: "15/04/2017", home: "North Melbourne", away: "Gold Coast", venue: "Etihad Stadium", time: "1.50pm"},
				{date: "15/04/2017", home: "West Coast", away: "Fremantle", venue: "Domain Stadium", time: "3.25pm"},
				{date: "16/04/2017", home: "Essendon", away: "Melbourne", venue: "Etihad Stadium", time: "2.10pm"},
				{date: "16/04/2017", home: "Geelong", away: "Collingwood", venue: "MCG", time: "4.40pm"},
				{date: "17/04/2017", home: "Adelaide", away: "Richmond", venue: "Adelaide Oval", time: "4.40pm"}
			]
		}/*,
		{
			num: 7,
			matches: [
				{date: "13/04/2017", home: "", away: "", venue: "", time: "7.20pm"},
				{date: "14/04/2017", home: "", away: "", venue: "", time: "7.50pm"},
				{date: "15/04/2017", home: "", away: "", venue: "", time: "1.45pm"},
				{date: "15/04/2017", home: "", away: "", venue: "", time: "4.35pm"},
				{date: "15/04/2017", home: "", away: "", venue: "", time: "7.25pm"},
				{date: "15/04/2017", home: "", away: "", venue: "", time: "7.40pm"},
				{date: "16/04/2017", home: "", away: "", venue: "", time: "1.10pm"},
				{date: "16/04/2017", home: "", away: "", venue: "", time: "3.20pm"},
				{date: "17/04/2017", home: "", away: "", venue: "", time: "4.40pm"}
			]
		},*/
	]
}
