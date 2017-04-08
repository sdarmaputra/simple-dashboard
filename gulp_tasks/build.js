var gulp = require('gulp');
var notify = require('gulp-notify');

gulp.task('build', [
	'build:bootstrap-sass', 
	'build:bootstrap-javascripts',	
	'build:bootstrap-fonts',
	'build:pug',
	'build:other-fonts',
	'build:other-stylesheets',
	'build:other-javascripts',
	'build:jquery']);