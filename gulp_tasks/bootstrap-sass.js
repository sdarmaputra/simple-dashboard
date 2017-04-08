var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var sassConfig = {
	in: config.source + 'scss/main.scss',
	out: config.dest + 'stylesheets/',
	watch: config.source + 'scss/**/*',
	sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [config.bootstrapDir + 'assets/stylesheets']
    }
}

gulp.task('clear:bootstrap-sass', function() {
	return del([sassConfig.out + 'main.css']);
});

gulp.task('build:bootstrap-sass', ['clear:bootstrap-sass'], function() {
	return gulp.src(sassConfig.in)
		.pipe(plumber({
			errorHandler: notify.onError("Sass Error: <%= error.message %>")
		}))
		.pipe(sass(sassConfig.sassOpts))
		.pipe(sass())
		.pipe(gulp.dest(sassConfig.out));
});

gulp.task('watch:bootstrap-sass', function() {
	return watch(sassConfig.watch, function() {
		runSequence('clear:bootstrap-sass', 'build:bootstrap-sass');
	});
});