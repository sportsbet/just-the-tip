import * as React from "react"
import { Round } from "../data"
import { style } from "typestyle"
import { flags } from "../flags/flags"

interface RoundViewProps {
	selectedRound: Round
}

const matchTableStyle = style({
	display: "flex",
	flexDirection: "column"
})

const matchRowStyle = style({
	height: "2rem",
	display: "flex",
	justifyContent: "space-between"
})

const homeTeamStyle = style({
})

const awayTeamStyle = style({
})


export function RoundView(props: RoundViewProps): JSX.Element {

	const matchDOM = props.selectedRound.matches.map((match) => {
		return (
			<div className={matchRowStyle}>
				<div>{match.date}</div>
				<div className={homeTeamStyle}>{match.home}</div>
				<div className={flags.flag + " " + flags[match.home]} />
				<div className={flags.flag + " " + flags[match.away]} />
				<div className={awayTeamStyle}>{match.away}</div>
				<div>{match.time}</div>
			</div>
		)
	})

	return (
		<div className={matchTableStyle}>{matchDOM}</div>
	)
}