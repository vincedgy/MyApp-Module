/**
 * Created by Vincent on 02/11/2014.
 */
var gulp       = require('gulp');
var less       = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var plumber    = require('gulp-plumber');
var minify     = require('gulp-minify-css');

gulp.task('css', function () {
    return gulp.src('styles/style.less')
        .pipe(sourcemaps.init())
        .pipe(plumber()) // prevents compilation errors from killing gulp
        .pipe(less({
            paths: ['styles/style.less']
        }))
        .pipe(sourcemaps.write())
        .pipe(minify())
        .pipe(gulp.dest('assets'))
});

gulp.task('css:watch', ['css'], function () {
    gulp.watch('styles/*.less', ['css'])
});