var gulp = require("gulp");

gulp.task("default",["watchApp"], function(){
    return console.log("gulp is running");
});

gulp.task("moveFiles", function(){
    gulp.src("dev/**.*").pipe(gulp.dest("dist"))
    console.log("fileMoves")
});

gulp.task("watchApp", function(){
    gulp.watch("dev/app.js", ["moveFiles"])
})

gulp.task("log", function(){
    console.log("file has been changed")
})
/*
gulp.task("log", function(){
    return console.log("gulp is running 2");
})

gulp.task("task1", function(){
    var a = 1, b = 2;

    console.log(a + b);
    console.log("task1 success");

});

gulp.task("task2",["task1"], function(){
    console.log("task2 실행")
})*/