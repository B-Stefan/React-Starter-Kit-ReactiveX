import Routes from "./Routes"
import * as React from "react"
import * as ReactDom  from "react-dom"
import {renderToString} from "react-dom/server"
import {createMemoryHistory, createHistory} from "history"
import Utils from "../server/utils/Utils";
import Home from "./components/Home";

export default class Bootstrap {

    run(url) {
        if (Utils.isNodeEnv()) {
            return this.runOnServer(url);
        }
        return this.runOnBrowser();

    }

    runOnBrowser() {
        console.log("INIT REACT ON BROWSER");
        return new Promise((resolve, reject)=> {
                const history = createHistory();

                ReactDom.render(React.createElement(Routes, {history: history}), document.getElementById("root"));
            });

    }

    runOnServer(url) {
        console.log("INIT REACT ON SERVER");

        return new Promise((resolve, reject)=> {

                const history = createMemoryHistory(url);

                const markup = renderToString(React.createElement(Routes, {
                        history: history
                    }));

                resolve(markup);
            });
    }
}

if (!Utils.isNodeEnv()) {
    window['AppBootstrap'] = Bootstrap;
}