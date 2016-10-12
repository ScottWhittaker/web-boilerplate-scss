'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var scss = require('gulp-sass');
var reload = browserSync.reload;

var config = {
    css: {
        dest: './app/css'
    },
    html: {
        source: './app/**/*.html'
    },
    js: {
        source: './app/js/**/*.js'
    },
    scss: {
        root: './app/scss/app.scss',
        source: './app/scss/**/*.scss'
    }
};

gulp.task('browserSync', function () {
    return browserSync({
        server: {
            baseDir: './app'
        },
        browser: ['google chrome canary']
    });
});

gulp.task('html', function () {
    return gulp.src(config.html.source)
        .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src(config.js.source)
        .pipe(reload({stream: true}));
});

gulp.task('scss', function () {
    return gulp.src(config.scss.root)
        .pipe(scss())
        .pipe(gulp.dest(config.css.dest))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['scss', 'browserSync'], function () {
    gulp.watch(config.html.source, ['html']);
    gulp.watch(config.js.source, ['js']);
    gulp.watch(config.scss.source, ['scss']);
});