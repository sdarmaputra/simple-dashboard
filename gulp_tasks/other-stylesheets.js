var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var otherStylesheetsConfig = {
	in: config.source + 'stylesheets/**/*',
	out: config.dest + 'stylesheets/'
}

gulp.task('build:other-stylesheets', function() {
	return gulp.src(otherStylesheetsConfig.in)
		.pipe(gulp.dest(otherStylesheetsConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});