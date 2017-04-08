var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var pugConfig = {
	in: [config.source + 'pug/**/*', '!' + config.source + 'pug/**/_*'],
	out: config.dest,
	watch: config.source + 'pug/**/*'
}

gulp.task('clear:pug', function() {
	return del([pugConfig.out + '**/*.html']);
});

gulp.task('build:pug', ['clear:pug'], function() {
	return gulp.src(pugConfig.in)
		.pipe(plumber({
			errorHandler: notify.onError("Pug Error: <%= error.message %>")
		}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(pugConfig.out));
});

gulp.task('watch:pug', function() {
	return watch(pugConfig.watch, function() {
		runSequence('clear:pug', 'build:pug');
	});
});