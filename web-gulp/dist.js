import gulp from "gulp"
import {paths} from "./../config"

gulp.task("dist",["build"],()=>{
  gulp.src(paths.absolutePaths.tempDir + "/**/*")
  .pipe(gulp.dest(paths.absolutePaths.buildDir+ '/'))
});

