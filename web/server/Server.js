import express from "express";
import IndexRoute  from "./routes/IndexRoute"
import Utils from "./utils/Utils";
import {NotFoundRoute} from "./routes/NotFoundRoute";


export class Server {

    constructor() {
        this.config = {
            PORT: 3000,
            HOST: "localhost",
            PUBLIC_DIR: __dirname + "/public",
            PUBLIC_FONT_DIR: __dirname + "/public/fonts",
            PUBLIC_IMAGE_DIR: __dirname + "/public/img",
        };

        this.routeNotFound = new NotFoundRoute();
        this.routeIndex = new IndexRoute();


        this.app = express();
        this.applyRoutes();
    }

    applyRoutes() {
        if (Utils.isDevelopmentEnv()) {
            this.app.use("/bower_components", express.static(__dirname + "/../../bower_components"));
            this.app.get("/bower_components/**", this.routeNotFound.getRequest.bind(this.routeNotFound));
        }
        this.app.use('/public', express.static(this.config.PUBLIC_DIR));
        this.app.use('/fonts', express.static(this.config.PUBLIC_FONT_DIR));
        this.app.use('/images', express.static(this.config.PUBLIC_IMAGE_DIR));

        this.app.get("/scripts/**", this.routeNotFound.getRequest.bind(this.routeNotFound));
        this.app.get("/public/**", this.routeNotFound.getRequest.bind(this.routeNotFound));
        this.app.get("/fonts/**", this.routeNotFound.getRequest.bind(this.routeNotFound));
        this.app.get("/images/**", this.routeNotFound.getRequest.bind(this.routeNotFound));
        this.app.get('/**', this.routeIndex.getRequest.bind(this.routeIndex));
    }

    start() {

        return new Promise((resolve, reject)=> {

            this.app.listen(this.config.PORT, (e)=> {
                if (e) {
                    reject(e);
                    return;
                }
                resolve(this.config.HOST + ":" + this.config.PORT);
            });

        });
    }

}