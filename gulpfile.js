'use strict';

require("babel-register")({
    "presets": ["es2015"]
});
var gulp = require("gulp");
var config = require("./config");
var requireDir = require("require-dir");

requireDir(config["default"].gulpDir);

gulp.task('default', ['clean'], function () {
    gulp.start('scripts');
});
