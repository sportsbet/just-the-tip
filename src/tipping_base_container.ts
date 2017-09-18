import * as React from "react"
import { aflData, AFLRoundData, Round, Match } from "./data"

interface TippingAppState {
	data: AFLRoundData
	selectedRoundNum: number
}

export interface TippingAppProps {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
	goPrevRound: () => void
	goNextRound: () => void
}

interface TippingBaseAppInterface {
	(props: TippingAppProps): JSX.Element
}

export interface TippingBaseContainerProps {
	child: TippingBaseAppInterface
	initialRoundNum?: number
}

export class TippingBaseContainer extends React.Component<TippingBaseContainerProps, TippingAppState> {

	constructor(props: TippingBaseContainerProps) {
		super(props)
		this.state = {
			data: aflData,
			selectedRoundNum: props.initialRoundNum ? props.initialRoundNum : 0
		}
	}

	handleWinnerSelected = (match: Match, team: string) => {
		match.tip = team
		this.setState({data: aflData})
	}

	goPrevRound = () => {
		if (this.state.selectedRoundNum > 0) {
			this.setState({selectedRoundNum: this.state.selectedRoundNum - 1})
		}
	}

	goNextRound = () => {
		if (this.state.selectedRoundNum < this.state.data.rounds.length - 1) {
			this.setState({selectedRoundNum: this.state.selectedRoundNum + 1})
		}
	}

	render() {
		const selectedRound = aflData.rounds[this.state.selectedRoundNum]
		return this.props.child({
			selectedRound, 
			selectWinner: this.handleWinnerSelected, 
			goPrevRound: this.goPrevRound, 
			goNextRound: this.goNextRound
		})
	}

}