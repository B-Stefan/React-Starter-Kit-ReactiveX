'use strict';

import gulp from "gulp"
import {paths} from "./../config"
import size from "gulp-size"
import babel from "gulp-babel"

const babelOptions = {
    presets: ['es2015', 'react']
};

export function scripts (){


    return gulp.src([ paths.absolutePaths.src + "**/*.{js,es6}"])
        .pipe(babel(babelOptions))
        .pipe(gulp.dest(paths.tempDir+ '/'))
        .pipe(size())

}

gulp.task('scripts',function () {
   return scripts()
});
