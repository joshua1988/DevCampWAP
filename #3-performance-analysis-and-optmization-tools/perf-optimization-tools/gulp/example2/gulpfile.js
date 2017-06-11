var gulp = require('gulp');
var gutil = require('gulp-util');
// https://www.npmjs.com/package/gulp-htmlmin
var htmlmin = require('gulp-htmlmin');

// Move all files from /app to /dist
gulp.task('moveAll', function () {
  return gulp.src('app/**.*').pipe(gulp.dest('dist'));
});

// Move all files from /app to /dist after minifying the html files
gulp.task('buildAll', ['minifyHTML'], function () {
  return gulp.src('app/**.*').pipe(gulp.dest('dist'));
});

// Minify all the html files in /app
gulp.task('minifyHTML', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});
