const {
	withMappedNavigationProps,
	withMappddNavigationAndConfigProps
} = require("react-navigation-props-mapper")
import { NavigatorIOS } from "react-native"
import { TippingScreen } from "./tipping_screen"

export const Navigator = (props) =>
	<NavigatorIOS 
		initialRoute={{component: TippingScreen, title: "Test"}}
		style={{flex: 1}}
	/>
