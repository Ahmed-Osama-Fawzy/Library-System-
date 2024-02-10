const gulp = require('gulp')
const gulp_concat = require('gulp-concat')
const gulp_sass = require('gulp-sass')(require('sass'))
const gulp_pug = require('gulp-pug')
const gulp_livereload = require('gulp-livereload')
const gulp_sourcemaps = require('gulp-sourcemaps')
const gulp_typescript = require('gulp-typescript')

gulp.task("HtmlTask", ()=>{
    return gulp
            .src('Project/Pug/**/*.pug')
            .pipe(gulp_pug({pretty:true}))
            .pipe(gulp.dest('dist/Html'))
            .pipe(gulp_livereload())
})

gulp.task("CssTask", ()=>{
    return gulp
            .src('Project/Sass/*.scss')
            .pipe(gulp_sourcemaps.init())
            .pipe(gulp_sass())
            .pipe(gulp_concat('main.css'))
            .pipe(gulp_sourcemaps.write('../Css_Maps'))
            .pipe(gulp.dest('dist/Css'))
            .pipe(gulp_livereload())
})

gulp.task("JsTask", ()=>{
    return gulp
            .src('Project/Ts/*.ts')
            .pipe(gulp_concat('main.ts'))
            .pipe(gulp_typescript())
            .pipe(gulp.dest('dist/Js'))
            .pipe(gulp_livereload())
})

gulp.task("WatchTask", ()=>{
    gulp_livereload.listen()
    gulp.watch('Project/Pug/**/*.*',gulp.series('HtmlTask'))
    gulp.watch('Project/Sass/**/*.*',gulp.series('CssTask'))
    gulp.watch('Project/Js/*.*',gulp.series('JsTask'))
})