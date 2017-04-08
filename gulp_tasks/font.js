var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var bootstrapFontsConfig = {
	in: config.bootstrapDir + 'assets/fonts/bootstrap/**/*',
	out: config.dest + 'fonts/'
}

var otherFontsConfig = {
	in: config.source + 'fonts/**/*',
	out: config.dest + 'fonts/'
}

gulp.task('build:bootstrap-fonts', function() {
	return gulp.src(bootstrapFontsConfig.in)
		.pipe(gulp.dest(bootstrapFontsConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});

gulp.task('build:other-fonts', function() {
	return gulp.src(otherFontsConfig.in)
		.pipe(gulp.dest(otherFontsConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});