import gulp from "gulp"
import {paths} from "./../config"
import filter from "gulp-filter"
import size from "gulp-size"
import imagemin from "gulp-imagemin"
import pngquant from "pngquant"

gulp.task("images",()=>{

    let filterImgs = filter('**/*{png,jpg}',{restore: true});


    return gulp.src([
          paths.relativePaths.assetDir + '/img/**/*'
    ])
        .pipe(filterImgs)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(filterImgs.restore)
        .pipe(gulp.dest(paths.absolutePaths.serverPublicDir+ '/img/'))
        .pipe(size());
});

