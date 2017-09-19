import * as React from "react"
import { NavigationIOS, Route } from "react-native"
import { Container } from "../container"
import { MatchList } from "./match_list"
import { globalNavigator } from "./navigator"
import { aflData } from "../data"

export function TippingScreenRoute(roundNum: number): Route {
	return {
		component: TippingScreen,
		passProps: {
			roundNum: roundNum
		},
		title: `Round ${roundNum + 1}`,
		rightButtonTitle: roundNum + 1 >= aflData.rounds.length ? null : "Next",
		onRightButtonPress: () => globalNavigator.push(TippingScreenRoute(roundNum + 1))
	}
}

interface Props {
	navigation: NavigationIOS,
	roundNum: number
}

export class TippingScreen extends React.Component<Props,{}> {

	render(): JSX.Element {
		return (
			<Container child={MatchList} initialRoundNum={this.props.roundNum}/>
		)
	}
}
