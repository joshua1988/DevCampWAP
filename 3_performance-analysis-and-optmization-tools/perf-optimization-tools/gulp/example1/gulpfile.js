var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('default', function () {
  // return console.log("hello gulp");
  return gutil.log("Hello Gulp");
});

// Task 1
gulp.task('sumNumbers', function () {
  var a = 10;
  var b = 20;
  var sum = a + b;
  return gutil.log(" # Task 1 - sumNumbers() : a + b  = " + sum);
});

// Task 2
gulp.task('logNumbers', ['sumNumbers'], function () {
  var arr = ["a", "b", "c"];
  var log = "";
  arr.forEach(function (idx) {
    log += arr[idx];
  });
  return gutil.log(" # Task 2 - logAlphabets() : ", log);
});
