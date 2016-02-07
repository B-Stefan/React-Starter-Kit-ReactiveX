'use strict';

import gulp from "gulp"
import {paths} from "./../config"
import vinylPaths from "vinyl-paths"
import del from "del"
gulp.task('clean', function () {
    return gulp.src(paths.tempDir)
        .pipe(vinylPaths(del))
});
