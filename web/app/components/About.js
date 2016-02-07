/// <reference path="./../../../typings/tsd.d.ts" />
import * as React from "react"


export default class About extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log("Here I'm the About-Page")
    }

    render() {
        return (
            <span>Here is my about page</span>
        )
    }

}