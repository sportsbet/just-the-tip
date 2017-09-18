import * as React from "react"
import { NavigationIOS, Route } from "react-native"
import { TippingBaseContainer } from "../tipping_base_container"
import { TippingBase } from "./tipping_base"
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
            <TippingBaseContainer child={TippingBase} initialRoundNum={this.props.roundNum}/>
        )
    }
}
