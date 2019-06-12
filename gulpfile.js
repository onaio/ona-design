'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: false,
      directoryListing: true,
      allowEmpty: true,
      port: 8001,
    }));
});

gulp.task('watch', function () {
  gulp.watch('./src/*.scss', gulp.series('sass'));
});

gulp.task('serve', gulp.series('sass', gulp.parallel('watch', 'webserver')));