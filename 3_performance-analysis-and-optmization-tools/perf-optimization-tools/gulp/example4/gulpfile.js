var gulp = require("gulp");
// What Plumber does is catches errors and prevents the pipe from breaking
var plumber = require('gulp-plumber');
// combine multiple javascript files into one js file to reduce the number of network requests
var concat = require('gulp-concat');
// spinning up a web server that helps us do live-reloading easily
var browserSync = require('browser-sync').create();
// optimize the size of images
var imagemin = require('gulp-imagemin');
// optimizing images takes a lot of time so it would be better to cache them after process
var cache = require('gulp-cached');
// clean files in the selected directory
var del = require('del');
// call the arguments in order
var runSequence = require('run-sequence');
var htmlmin = require('gulp-htmlmin');
// js minification
var uglify = require('gulp-uglify');
var pump = require('pump');
// sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// log the size of files
var size = require('gulp-size');
// js lint
var eslint = require('gulp-eslint');

gulp.task('html-minify', function() {
  return gulp.src('app/**/*.html')
    .pipe(sourcemaps.init())
    .pipe(size({title: '#before-minified-html'}))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      removeOptionalTags: true
    }))
    .pipe(gulp.dest('dist/templates'))
    .pipe(size({title: '#after-minified-html'}));
});

gulp.task('js-minify', function (cb) {
  return gulp.src('app/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(size({title: '#before-minified-js'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(size({title: '#after-minified-js'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-libs-concat', function() {
	return gulp.src('./js/*/*.js')
    .pipe(sourcemaps.init())
		.pipe(concat('merged-libs.js'))
    .pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(size({title: '#before-compressed-images'}))
  .pipe(imagemin([
  	imagemin.gifsicle({interlaced: true}),
  	imagemin.jpegtran({progressive: true}),
  	imagemin.optipng({optimizationLevel: 3}),
  	imagemin.svgo({plugins: [{removeViewBox: true}]})
  ]))
  .pipe(size({title: '#after-compressed-images'}))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('clean:dist', function() {
  return del.sync('dist/**.*');
});

gulp.task('build', [`clean:dist`, `html-minify`, `js-minify`, `images`], function (callback){
  console.log('Building files');
});

gulp.task('watch', ['browserSync'], function () {
	gulp.watch('app/js/**/*.js', ['jsLint']);
	gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
});

gulp.task('jsLint', function () {
  gulp.src(['app/**/*.js', '!app/js/libs/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './app'
    },
  })
});

gulp.task('default', function (callback) {
  runSequence(['browserSync', 'watch'],
    callback
  )
});
