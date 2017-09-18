import * as React from "react"
import {
    View,
    ScrollView,
    Button,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle
} from "react-native"
import { RoundView } from "./round_view"
import { NavyBlue, White } from "../colours"
import { TippingAppProps } from "../tipping_base_container"

const contentStyle: ViewStyle = {
	flex: 1,
    flexDirection: "column"
}

export function TippingBase(props: TippingAppProps) {
	return (
		<ScrollView>
			<View style={contentStyle}>
				<RoundView selectedRound={props.selectedRound} selectWinner={props.selectWinner} />
			</View>
		</ScrollView>
	)
}
