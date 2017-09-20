import * as React from "react"
import {
	View,
	Text,
	ViewStyle,
	TextStyle,
	Image,
	TouchableHighlight,
	StyleSheet,
	ScrollView
} from "react-native"
import { Round, Match } from "../data"
import { flags } from "../flags/flags.ios"
import { TippingStats } from "../tipping_stats_calculator"

import * as Colours from "../colours"

interface Props {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
	stats: TippingStats
}

const styles: {[index: string]: ViewStyle | TextStyle} = {
	matchRowStyle: {
		flexDirection: "row",
		flex: 1,
		backgroundColor: Colours.Eggshell,
	},
	timeAndDateContainerStyle: {
		backgroundColor: Colours.White,
		flexDirection: "row", 
		flex: 1,
		justifyContent: "space-between", 
		paddingHorizontal: 15,
		paddingVertical: 8
	},
	homeTextStyle: {
		marginRight: 8, 
		alignSelf: "center",
		color: Colours.DarkText
	},
	awayTextStyle: {
		marginLeft: 8, 
		alignSelf: "center",
		color: Colours.DarkText
	},
	homeTeamStyle: {
		flex: 1, 
		flexGrow: 1, 
		alignItems: "flex-end",
		paddingVertical: 8
	},
	awayTeamStyle: {
		flex: 1, 
		flexGrow: 1, 
		alignItems: "flex-start",
		paddingVertical: 8
	}
}

export function MatchList(props: Props): JSX.Element {

	const statsBar = 
		<Text>Your favourite team is {props.stats.favouriteTeam} with {props.stats.tipCount} tips</Text>

	const matchTable = props.selectedRound.matches.map((match, i) => {
		
		let homeSideStyle: ViewStyle = Object.assign({}, styles.homeTeamStyle)
		let homeTextStyle: TextStyle = Object.assign({}, styles.homeTextStyle)
		if (match.home === match.tip) {
			homeSideStyle.backgroundColor = Colours.NavyBlue
			homeTextStyle.color = Colours.White
		}
		let awaySideStyle: ViewStyle = Object.assign({}, styles.awayTeamStyle)
		let awayTextStyle: TextStyle = Object.assign({}, styles.awayTextStyle)
		if (match.away === match.tip) {
			awaySideStyle.backgroundColor = Colours.NavyBlue
			awayTextStyle.color = Colours.White
		}
	
		return (
			<View key={i} style={{flexDirection: "column", flex: 1, backgroundColor: Colours.Eggshell}}>
				<View style={styles.timeAndDateContainerStyle}>
					<Text style={{fontSize: 12}}>{match.date}</Text>
					<Text style={{fontSize: 10}}>{match.time}</Text>
				</View>
				<View style={styles.matchRowStyle}>
					<TouchableHighlight onPress={() => props.selectWinner(match, match.home)}
						style={homeSideStyle}>
						<View style={{flexDirection: "row", padding: 8}}>
							<Text style={homeTextStyle}>{match.home}</Text>
							<Image style={{width: 38, height: 26}} source={flags[match.home]} />
						</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => props.selectWinner(match, match.away)}
						style={awaySideStyle}>
						<View style={{flexDirection: "row", padding: 8}}>
							<Image style={{width: 38, height: 26}} source={flags[match.away]} />
							<Text style={awayTextStyle}>{match.away}</Text>
						</View>
					</TouchableHighlight>
				</View>
				<View>
					<Text style={awayTextStyle}>{match.away}</Text>
				</View>
			</View>
		)
	})

	return (
		<View style={{flex: 1}}>
			<ScrollView style={{flex: 1}}>
				<View style={{flex: 1, flexDirection: "column"}}>
					<View style={styles.matchTableStyle}>{matchTable}</View>
				</View>
				{statsBar}
			</ScrollView>
			<View style={{backgroundColor: "gray", height: 64}}>{statsBar}</View>
		</View>
	)
}