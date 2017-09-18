import * as React from "react"
import { Round, Match } from "../data"
import { style } from "typestyle"
import { flags } from "../flags/flags.web"
import * as classnames from "classnames"
import { Eggshell, NavyBlue, White } from "../colours"

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
	backgroundColor: Eggshell
})

const halfRow = style({
	flex: 1,
	display: "flex",
	padding: "0.4rem",
	cursor: "pointer"
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

export function RoundView(props: RoundViewProps): JSX.Element {

	const matchDOM = props.selectedRound.matches.map((match, i) => {
		
		let homeSideStyle = halfRow
		if (match.home === match.tip) {
			homeSideStyle = classnames(halfRow, selectedTeamStyle)
		}
		let awaySideStyle = halfRow
		if (match.away === match.tip) {
			awaySideStyle = classnames(halfRow, selectedTeamStyle)
		}
	
		return (
			<div key={i} className={matchRowStyle}>
				<div className={homeSideStyle} onClick={() => {props.selectWinner(match, match.home)}}>
					<div>{match.date}</div>
					<div className={classnames(teamStyle, homeTeamStyle)}>{match.home}</div>
					<div className={classnames(flags.flag, flags[match.home])} />
				</div>
				<div className={awaySideStyle} onClick={() => {props.selectWinner(match, match.away)}}>
					<div className={classnames(flags.flag, flags[match.away])} />
					<div className={classnames(teamStyle, awayTeamStyle)}>{match.away}</div>
					<div>{match.time}</div>
				</div>
			</div>
		)
	})

	return (
		<div className={matchTableStyle}>{matchDOM}</div>
	)
}