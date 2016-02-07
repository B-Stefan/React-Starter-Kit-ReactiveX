import gulp from "gulp"
import {paths} from "./../config"
import gulpDevServer from "gulp-develop-server"
import {scripts} from "./scripts"
import size from "gulp-size"
import filter from "gulp-filter"
import gCallback from "gulp-callback"


gulp.task("watch", ["build"],()=>{
    var path = ['.', paths.absolutePaths.tempDir, paths.relativePaths.serverDir, "Main.js"];

    let server = gulpDevServer.listen({
     path: path.join("/")
    });

    let srcPath =  ['.', paths.absolutePaths.src, "**/**/*.{js,ts,tsx}"].join("/").replace("//", "/");

    gulp.watch(srcPath,()=>{
        scripts()
        .pipe(gCallback(()=>{
                gulp.start("bundle")
                server.restart((err)=>{
                    if(err){
                        server.kill();
                        throw new Error("Please restart gulp-watch")
                    }
                });
            }));
    });
    gulp.watch([paths.absolutePaths.src  + "**/**{html,hbs,tmpl}"],["inject"]);
    gulp.watch([paths.absolutePaths.src  + "**/**{css,scss,less}"], ["styles"]);
    gulp.watch([paths.absolutePaths.src  + "server/assets/img/**/**"], ["images"]);
    gulp.watch([paths.absolutePaths.src  + "server/assets/fonts/**/**"], ["fonts"]);
});