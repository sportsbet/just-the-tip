import * as React from "react"
import { RoundView } from "./round_view"
import { style } from "typestyle"
import { NavyBlue, White } from "./colours"
import { TippingAppProps } from "../tipping_base_container"

const contentStyle = style({
	display: "flex",
	flexDirection: "column",
	maxWidth: "70rem"
})

const contentHeaderStyle = style({
	backgroundColor: NavyBlue,
	color: White,
	fontSize: "1.7em",
	padding: "0.82rem",
	display: "flex",
	justifyContent: "space-between"
})

export function TippingBase(props: TippingAppProps) {

	return (
		<div>
			<div className={contentStyle}>
				<div className={contentHeaderStyle}>
					<button>&lt;&lt;</button>
					<div>Pick the winners in round {props.selectedRound.num}</div>
					<button>&gt;&gt;</button>
				</div>
				<RoundView selectedRound={props.selectedRound} selectWinner={props.selectWinner} />
			</div>
		</div>
	)
}