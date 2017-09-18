import {View} from "react-native"
import * as React from "react"
import { Navigator } from "./ios/navigator"
import { 
    Dimensions,
    NavigatorIOS 
} from "react-native"
import { TippingScreen } from "./ios/tipping_screen"

const style = (dim) => {
    return {
        width: dim.width, 
        height: dim.height, 
        backgroundColor: "#EFEFF2",
        paddingTop: 32
    }
}

export const Root: React.SFC<{}> = (props) => {
    return <Navigator/>
}
