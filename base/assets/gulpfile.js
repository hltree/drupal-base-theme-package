const
	babel = require('gulp-babel'),
    gulp = require('gulp'),
    nano = require('gulp-cssnano'),
	rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemap = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');

gulp.task('build-css', () => {
    return (
        gulp.src('./dev/scss/style.scss')
            .pipe(sourcemap.init())
            .pipe(sass())
            .pipe(nano())
            .pipe(sourcemap.write())
            .pipe(gulp.dest('./build/css'))
    );
});

gulp.task('build-js', () => {
	return (
		gulp.src('./dev/js/common.js')
			.pipe(babel({
				"presets": ["@babel/preset-env"]
			}))
			.pipe(uglify())
			.pipe(rename({
				extname: '.min.js'
			}))
			.pipe(gulp.dest('./build/js'))
	);
});

gulp.task('default', gulp.series('build-css', 'build-js'));
