import * as React from "react"
import { RoundView } from "./web/round_view"
import { aflData } from "./data"


export function AppLayout(props: any) {

	return (
		<div>
			<div>Pick your win tips and margins</div>
			<RoundView selectedRound={aflData.rounds[0]} />
		</div>
	)
}