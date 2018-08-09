var gulp = require("gulp");

var watch = require("gulp-watch");

var sass = require("gulp-sass");

var sourcemaps = require("gulp-sourcemaps");

var autoprefixer = require("gulp-autoprefixer");

// var inject = require("gulp-inject");

var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//kompilacja sassa na css!
gulp.task("sass", function(){
    return gulp.src("./scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(sass().on("error", sass.logError))//zeby nam nie wywalal w konsoli
    .pipe(sass({
        outputStyle:"compressed"
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))//wysle do tego folderu i nazwie domyslnie
    .pipe(browserSync.stream());

});

//tworzymy task z watcherem
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./scss/*.scss", ['sass']),
    // gulp.watch('./_*.html', ['inject']),
    gulp.watch("./*.html").on('change', browserSync.reload);
});
