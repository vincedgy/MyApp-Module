/**
 * Created by A6252532 on 28/10/2014.
 */

/* jshint camelcase:false */
'use strict';

var fs = require('fs');
var gulp = require('gulp');
var del = require('del');

fs.readdirSync(__dirname + '/gulp').forEach(function (module) {
    require(__dirname + '/gulp/' + module)
});

gulp.task('clean', function (cb) {
    del(['assets'], cb);
});

gulp.task('build', ['rev']);
gulp.task('watch', ['js:watch', 'css:watch']);
gulp.task('default', ['clean', 'rev', 'watch']);
//gulp.task('default', ['js:watch', 'css:watch', 'server']);


