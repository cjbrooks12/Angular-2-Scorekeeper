var gulp         = require('gulp');
var util         = require('gulp-util');
var tsc          = require('gulp-typescript');
var tsProject    = tsc.createProject('tsconfig.json');
var sourcemaps   = require('gulp-sourcemaps');
var gulpTemplate = require('gulp-template');
var gutil        = require('gulp-util');
var gulpif       = require('gulp-if');
var tslint       = require('gulp-tslint');

var config     = require('./../config');

gulp.task('ts:watch', ['ts'], function() {
  gulp.watch(config.js.srcSet, ['ts']);
});

gulp.task('ts', ['vet:ts'], function () {
  return gulp.src(config.js.srcSet)
      .pipe(gulpif(config.env.dev(), sourcemaps.init()))
      .pipe(tsProject())
      .js
      .pipe(gulpif(config.env.dev(), sourcemaps.write('.')))
      .pipe(gulp.dest(config.js.dest));
});


gulp.task('vet:ts', function () {
  return gulp.src(config.js.srcSet)
      .pipe(tslint({
        formatter: "verbose"
      }))
      .pipe(tslint.report())
});

gulp.task('app:env', function () {
  return gulp.src('./gulp/resources/env.ts')
      .pipe(gulpTemplate({
        env: config.envVar || {}
      }))
      .pipe(gulp.dest(config.js.src + '/shared/constant'))
      .on('finish', function () {
        gutil.log(config.js.src + '/shared/constant/env.app is generated successfully');
      });
});