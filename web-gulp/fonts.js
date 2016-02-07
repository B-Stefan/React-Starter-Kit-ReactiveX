import gulp from "gulp"
import {paths} from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"


gulp.task("fonts",()=>{

    return gulp.src([
        paths.absolutePaths.src + '**/**/*.{eot,svg,ttf,woff}',
    ])
        .pipe(gulp.dest(paths.absolutePaths.serverPublicDir+ '/fonts/'))
        .pipe(size());
});

