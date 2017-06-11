var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');

gulp.task('watch', function () {
  gulp.watch('app/*.js', ['jsLint']);
});

gulp.task('jsLint', function () {
  gulp.src('app/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['watch']);
