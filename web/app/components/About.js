var RxReact = require('rx-react');
var Rx = require('rx');

var React = require("react")

export default class About extends RxReact.Component {
    getStateStream() {
        return Rx.Observable.interval(1000).map(function (interval) {
            return {
                secondsElapsed: interval
            };
        });
    }

    render() {
        var secondsElapsed = this.state ? this.state.secondsElapsed : 0;
        return (
            <div>Seconds Elapsed: {secondsElapsed}</div>
        );
    }
}


/*
export default class About extends RxReact.Component {

    constructor(props, context) {
        super(props, context);
        console.log("Here I'm the About-Page")
    }
    getStateStream() {
        return Rx.Observable.interval(1000).map(function (interval) {
            return {
                secondsElapsed: interval
            };
        });
    }

    render() {
        let secondsElapsed = this.state ? this.state.secondsElapsed : 0;
        return (
            <span>Here is my about page and you viewed this page {secondsElapsed} seconds</span>
        )
    }

}*/