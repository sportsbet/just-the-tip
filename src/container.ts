import * as React from "react"
import { aflData, AFLRoundData, Round, Match } from "./data"
import { TippingStats, generateStats } from "./tipping_stats_calculator"

interface TippingAppState {
	data: AFLRoundData
	selectedRoundNum: number
	stats: TippingStats
}

export interface TippingAppProps {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
	goPrevRound: () => void
	goNextRound: () => void
	stats: TippingStats
}

interface TippingBaseAppInterface {
	(props: TippingAppProps): JSX.Element
}

export interface ContainerProps {
	child: TippingBaseAppInterface
	initialRoundNum?: number
}

export class Container extends React.Component<ContainerProps, TippingAppState> {

	constructor(props: ContainerProps) {
		super(props)
		this.state = {
			data: aflData,
			selectedRoundNum: props.initialRoundNum ? props.initialRoundNum : 0,
			stats: generateStats(aflData)
		}
	}

	handleWinnerSelected = (match: Match, team: string) => {
		match.tip = team
		this.setState({
			data: aflData,
			stats: generateStats(aflData)
		})
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
			goNextRound: this.goNextRound,
			stats: this.state.stats
		})
	}

}