import * as React from "react"
import { Round, Match } from "../data"
import { style } from "typestyle"
import { flags } from "../flags/flags"
import * as classnames from "classnames"
import { Eggshell, NavyBlue, White } from "./colours"

interface RoundViewProps {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
}

const matchTableStyle = style({
	display: "flex",
	flexDirection: "column"
})

const matchRowStyle = style({
	padding: "0.65rem",
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: Eggshell
})

const teamStyle = style ({
	flex: 1
})

const homeTeamStyle = style({
	textAlign: "right",
	paddingRight: "1rem"
})

const awayTeamStyle = style({
	paddingLeft: "1rem"
})

const selectedTeamStyle = style({
	backgroundColor: NavyBlue,
	color: White
})

const centerSpacer = style({
	width: "1rem"
})

export function RoundView(props: RoundViewProps): JSX.Element {

	

	const matchDOM = props.selectedRound.matches.map((match, i) => {
		
		let homeTeamClassName = classnames(teamStyle, homeTeamStyle)
		if (match.home === match.tip) {
			homeTeamClassName = classnames(teamStyle, homeTeamStyle, selectedTeamStyle)
		}
		let awayTeamClassName = classnames(teamStyle, awayTeamStyle)
		if (match.away === match.tip) {
			awayTeamClassName = classnames(teamStyle, awayTeamStyle, selectedTeamStyle)
		}
	
		return (
			<div key={i} className={matchRowStyle}>
				<div>{match.date}</div>
				<div className={homeTeamClassName} onClick={() => {props.selectWinner(match, match.home)}}>{match.home}</div>
				<div className={classnames(flags.flag, flags[match.home])} />
				<div className={centerSpacer} />
				<div className={classnames(flags.flag, flags[match.away])} />
				<div className={awayTeamClassName} onClick={() => {props.selectWinner(match, match.away)}}>{match.away}</div>
				<div>{match.time}</div>
			</div>
		)
	})

	return (
		<div className={matchTableStyle}>{matchDOM}</div>
	)
}