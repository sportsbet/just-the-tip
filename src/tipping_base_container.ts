import * as React from "react"
import { aflData, AFLRoundData, Round, Match } from "./data"

interface TippingAppState {
	data: AFLRoundData
}

export interface TippingAppProps {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
}

interface TippingBaseAppInterface {
	(props: TippingAppProps): JSX.Element
}

export interface TippingBaseContainerProps {
	child: TippingBaseAppInterface 
}

export class TippingBaseContainer extends React.Component<TippingBaseContainerProps, TippingAppState> {

	componentWillMount() {
		this.setState({data: aflData})
	}

	handleWinnerSelected = (match: Match, team: string) => {
		match.tip = team
		this.setState({data: aflData})
	}

	render() {
		const selectedRound = aflData.rounds[0]
		return this.props.child({selectedRound, selectWinner: this.handleWinnerSelected})
	}

}