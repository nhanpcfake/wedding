var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass')(require('sass')),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	order = require('gulp-order'),
	browserSync = require('browser-sync').create();


var jsSources = ['js/*.js'],
	sassSources = ['sass/*.scss'],
	htmlSources = ['**/*.html'],
	outputCSSDir = 'css',
	outputJSDir = 'js',
	outputDir = 'dist';

gulp.task('sass', function() {
	return gulp.src(sassSources)
		.pipe(sass({outputStyle: 'expanded'}))
		.on('error', gutil.log)
		.pipe(gulp.dest(outputCSSDir))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src(jsSources)
		.pipe(order([
			'js/jquery.min.js',
			'js/jquery.easing.1.3.js',
			'js/bootstrap.min.js',
			'js/jquery.waypoints.min.js',
			'js/sticky.js',
			'js/jquery.stellar.min.js',
			'js/hoverIntent.js',
			'js/superfish.js',
			'js/jquery.magnific-popup.min.js',
			'js/magnific-popup-options.js',
			'js/google_map.js',
			'js/main.js'
		], {base: './'}))
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(outputDir))
		.pipe(uglify({mangle: false}))
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest(outputDir))
});

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
		port: 8080
	});
	gulp.watch(jsSources, gulp.series('js')).on('change', browserSync.reload);
	gulp.watch(sassSources, gulp.series('sass'));
	gulp.watch(htmlSources, gulp.series('html'));
});

gulp.task('html', function() {
	return gulp.src(htmlSources)
		.pipe(browserSync.reload({ stream: true }));
});

// Use gulp.series to define task dependencies for the 'default' task
gulp.task('default', gulp.series('html', 'js', 'sass', 'watch'));
