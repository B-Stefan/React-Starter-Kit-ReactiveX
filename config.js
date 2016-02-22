/**
 * Simple prefix for the folders
 * @type {string}
 */
const basePrefix    = "web";
const temDir        = "tmp";
const buildDir      = "build";
const gulpDir       = "gulp";
const serverDir     = "server";
const assetDir      = "assets";
const layoutDir     = "layout";
const src           = __dirname + "/" + basePrefix + "/";
function buildFullName(name){
    return __dirname + "/" + basePrefix + "-" + name;
}
export const paths = {
    absolutePaths: {
        src: src,
        gulpDir: buildFullName(gulpDir),
        tempDir: buildFullName(temDir),
        buildDir: buildFullName(buildDir),
        serverPublicDir: buildFullName(temDir) + "/" + serverDir + "/" + "public",
    },
    relativePaths: {
        assetDir: src + serverDir +"/"+ assetDir,
        layoutDir: layoutDir,
        serverDir: serverDir
    }
};
export default function (AppConstructor) {
    console.log("App constrcutor ")
};
