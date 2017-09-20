import * as React from "react"
import { MatchList } from "./match_list"
import { style } from "typestyle"
import { NavyBlue, White } from "../colours"
import { TippingAppProps } from "../container"

const contentStyle = style({
	display: "flex",
	flexDirection: "column",
	maxWidth: "70rem",
	fontFamily: "Titillium Web"
})

const contentHeaderStyle = style({
	backgroundColor: NavyBlue,
	color: White,
	fontSize: "1.7em",
	padding: "0.82rem",
	display: "flex",
	justifyContent: "space-between"
})

const tipsBarStyle = style({
	backgroundColor: NavyBlue,
	color: White,
	fontSize: "1.7em",
	padding: "0.82rem"
})

export function TippingBase(props: TippingAppProps) {

	const statsBar = 
		<div className={tipsBarStyle}>Your favourite team is {props.stats.favouriteTeam} with {props.stats.tipCount} tips</div>

	return (
		<div>
			<div className={contentStyle}>
				<div className={contentHeaderStyle}>
					<button onClick={() => {props.goPrevRound()}}>&lt;&lt;</button>
					<div>Pick the winners in round {props.selectedRound.num}</div>
					<button onClick={() => {props.goNextRound()}}>&gt;&gt;</button>
				</div>
				<MatchList selectedRound={props.selectedRound} selectWinner={props.selectWinner} />
				{(props.stats.tipCount > 1) ? statsBar : null}
			</div>
		</div>
	)
}