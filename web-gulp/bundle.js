import gulp from "gulp"
import config from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import webpack from "webpack"

gulp.task("bundle",(callback)=>{

    webpack({
        context: __dirname + "/../web-tmp/app",
        entry: __dirname  + "/../web-tmp/app/Bootstrap",
        output: {
            path: __dirname + "/../web-tmp/server/public/js/",
            filename: "bundle.js"
        }
    }).run((err)=>{
        callback()
    });

});

