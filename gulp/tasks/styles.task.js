var gulp         = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var gulpif       = require('gulp-if');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

var config       = require('./../config');

gulp.task('sass:watch', ['sass', 'ng2:styles'], function() {
  gulp.watch(config.css.srcSet, ['sass']);
  gulp.watch(config.js.src + "/**/*.scss", ['ng2:styles']);
});

gulp.task('sass', ['ng2:styles'], function() {
  return compileScss(config.css.srcSet, config.css.dest)
});

gulp.task('ng2:styles', function () {
  return compileScss(config.js.src + "/**/*.scss", config.dest)
});

function compileScss(src, dest) {
  return gulp.src(src)
      .pipe(gulpif(config.env.dev(), sourcemaps.init()))
      .pipe(sass().on('error', sass.logError))
      .pipe(gulpif(config.env.dev(), sourcemaps.write()))
      .pipe(autoprefixer(config.css.autoprefixerConfig))
      .pipe(gulpif(config.env.prod(), cleanCSS(config.css.minifyConfig)))
      .pipe(gulp.dest(dest));
}