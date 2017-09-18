import * as React from "react"
import { TippingBaseContainer } from "../tipping_base_container"
import { TippingBase } from "./tipping_base"

export class TippingScreen extends React.Component<any,{}> {
    render(): JSX.Element {
        return (
            <TippingBaseContainer child={TippingBase}/>
        )
    }
}
