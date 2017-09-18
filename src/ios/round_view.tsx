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
        flexDirection: "row",
        marginBottom: 8,
        padding: 15,
        flex: 1
    },
    halfRow: {

    },
    selectedTeamStyle: {
        backgroundColor: NavyBlue
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
            <View key={i} style={{flexDirection: "column", flex: 1}}>
                <View style={{flexDirection: "row"}}>
                    <Text>{match.date}</Text>
                    <Text>{match.time}</Text>
                </View>
                <View style={styles.matchRowStyle}>
                    <TouchableHighlight onPress={() => props.selectWinner(match, match.home)}>
                        <View style={{flexDirection: "row", flex: 1, flexGrow: 1, alignItems: "flex-end"}}>
                            <Text style={{}}>{match.home}</Text>
                            <Image style={{width: 38, height: 26}} source={flags[match.home]} />
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => props.selectWinner(match, match.away)}>
                        <View style={{flexDirection: "row", flex: 1, flexGrow: 1, alignItems: "flex-start"}}>
                            <Image style={{width: 38, height: 26}} source={flags[match.away]} />
                            <Text style={{}}>{match.away}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        )
    })

    return (
        <View style={styles.matchTableStyle}>{matchTable}</View>
    )
}