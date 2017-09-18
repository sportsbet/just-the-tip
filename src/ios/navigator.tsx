import * as React from "react"
import { NavigatorIOS, NavigatorIOSStatic } from "react-native"
import { TippingScreenRoute } from "./tipping_screen"

export let globalNavigator: NavigatorIOSStatic = null

export const Navigator = (props) =>
	<NavigatorIOS 
		initialRoute={TippingScreenRoute(0)}
		style={{flex: 1}}
		ref={(nav: any) => globalNavigator = nav}
	/>
