import gulp from "gulp"
import {paths} from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import webpack from "webpack"

gulp.task("bundle",(callback)=>{

    webpack({
        context: paths.absolutePaths.tempDir+ "/app",
        entry: paths.absolutePaths.tempDir +"/app/Bootstrap",
        output: {
            path: paths.absolutePaths.tempDir +"/server/public/js/",
            filename: "bundle.js"
        }
    }).run((err)=>{
        callback()
    });

});

