const gulp = require('gulp'),
    webpack = require('webpack-stream'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('webpack', function () {
    return gulp.src([
            './src/app/**/*.js'
        ])
        .pipe(webpack({
            module: {
                loaders: [{
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                }]
            },
            devtool: 'source-map',
            output: {
                filename: 'app.js'
            }
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('./src/public'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function () {
    return gulp.src([
            './src/scss/**/*.scss'
        ])
        .pipe(sass())
        .pipe(gulp.dest('./src/public/css'))
        .pipe(browserSync.stream());
});

gulp.task('serve',['webpack', 'sass'], function () {
    browserSync.init({
        server: './src'
    });

    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/app/**/*.js', ['webpack']);
    gulp.watch('./src/index.html').on('change', browserSync.reload)
});

gulp.task('default', ['serve']);