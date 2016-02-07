import gulp from "gulp"
import {paths} from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import sass from "gulp-sass"
import merge from "merge-stream"
gulp.task("styles",()=>{

    const sassFilter = filter(['**/*.scss'], {restore:true});
    const sassOptions = {
        style: 'expanded'
    };

    const appStyles = gulp.src([
        paths.absolutePaths.src + "**/*.{css,scss}",
    ],{ base: paths.absolutePaths.src + "/app/" });
    const assetStyles = gulp.src([
        paths.relativePaths.assetDir+ "/css/" + "**/*.{css,scss}",
    ],{ base: paths.relativePaths.assetDir+ "/css/" })

    return merge(appStyles,assetStyles)
        .pipe(sassFilter)
        .pipe(sass(sassOptions).on('error',function(){
            console.log.apply(null,arguments)
        }))
        .pipe(sassFilter.restore)
        .pipe(gulp.dest(paths.absolutePaths.serverPublicDir + "/css/"))
        .pipe(size())
});

