var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var jQueryConfig = {
	in: config.jQueryDir + 'dist/jquery.min.js',
	out: config.dest + 'javascripts/',
}

var otherJavascriptsConfig = {
	in: config.source + 'javascripts/**/*',
	out: config.dest + 'javascripts/',
}

gulp.task('build:jquery', function() {
	return gulp.src(jQueryConfig.in)
		.pipe(gulp.dest(jQueryConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});

gulp.task('build:other-javascripts', function() {
	return gulp.src(otherJavascriptsConfig.in)
		.pipe(gulp.dest(otherJavascriptsConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});

gulp.task('watch:other-javascripts', function() {
	return watch(otherJavascriptsConfig.in, function() {
		runSequence('build:other-javascripts');
	});
});