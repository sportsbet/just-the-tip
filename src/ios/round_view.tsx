import * as React from "react"
import {
    View,
    Text,
    ViewStyle,
    TextStyle,
    Image,
    TouchableHighlight,
    StyleSheet
} from "react-native"
import { Round, Match } from "../data"
import { Eggshell, NavyBlue, White } from "../colours"
import { flags } from "../flags/flags.ios"

interface RoundViewProps {
	selectedRound: Round
	selectWinner: (match: Match, winner: string) => void
}

const styles: {[index: string]: ViewStyle | TextStyle} = {
    matchRowStyle: {

    },
    halfRow: {

    },
    selectedTeamStyle: {

    }
}

export const RoundView: React.SFC<RoundViewProps> = (props) => {
    const matchTable = props.selectedRound.matches.map((match, i) => {
        
        let homeSideStyle = styles.halfRow
        if (match.home === match.tip) {
            homeSideStyle = styles.selectedTeamStyle
        }
        let awaySideStyle = styles.halfRow
        if (match.away === match.tip) {
            awaySideStyle = styles.selectedTeamStyle
        }
    
        return (
            <View key={i} style={styles.matchRowStyle}>
                <TouchableHighlight onPress={() => props.selectWinner(match, match.home)}>
                    <View style={homeSideStyle}>
                        <Text>{match.date}</Text>
                        <Text style={{}}>{match.home}</Text>
                        <Image style={{}} source={flags[match.home]} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => props.selectWinner(match, match.away)}>
                    <View style={awaySideStyle}>
                        <Image style={{}} source={flags[match.away]} />
                        <Text style={{}}>{match.away}</Text>
                        <Text>{match.time}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    })

    return (
        <View style={styles.matchTableStyle}>{matchTable}</View>
    )
}