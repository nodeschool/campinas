var gulp = require('gulp'),
	debug = require('gulp-debug'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	minify = require('gulp-minify-css'),
	rename = require('gulp-rename');

/* Constants. */
var components = './bower_components';
var bootstrap = components + '/bootstrap/dist';

var src = {
	css: bootstrap + '/css/bootstrap.{css,css.map,min.css}',
	js: bootstrap + '/js/bootstrap.{js,min.js}',
	icons: bootstrap + '/fonts/*.{eot,svg,ttf,woff,woff2}',
	sass: './sass/*.{sass,scss}',
};

var dist = {
	css: './css',
	fonts: './fonts',
	js: './js'
};

/* Build sass stylesheets. */
gulp.task('sass', function () {
	gulp.src(src.sass)
		.pipe(sass())
		.pipe(sourcemaps.init())
			.pipe(minify())
			.pipe(rename({
				suffix: '.min'
			}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dist.css))
		.pipe(debug());
});

/* Copy stylesheets from components. */
gulp.task('css', function () {
	gulp.src(src.css)
		.pipe(gulp.dest(dist.css))
		.pipe(debug());
});

/* Copy js from components. */
gulp.task('js', function () {
	gulp.src(src.js)
		.pipe(gulp.dest(dist.js))
		.pipe(debug());
});

/* Copy icon fonts from components. */
gulp.task('icons', function () {
	gulp.src(src.icons)
		.pipe(gulp.dest(dist.fonts))
		.pipe(debug());
});

/* Default task. */
gulp.task('default', [
	'css',
	'js',
	'icons',
	'sass'
], function () {
	gulp.watch(src.sass, ['sass']);
});
