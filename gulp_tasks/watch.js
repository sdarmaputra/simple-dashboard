var gulp = require('gulp');

gulp.task('watch', [
	'watch:bootstrap-sass', 
	'watch:pug',
	'watch:other-javascripts']);