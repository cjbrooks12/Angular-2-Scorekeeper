var gulp = require('gulp');

var config     = require('./../config');

gulp.task('html:watch', ['html'], function() {
  gulp.watch(config.html.srcSet, ['html']);
});

gulp.task('html', function () {
  return gulp.src(config.html.srcSet)
      .pipe(gulp.dest(config.html.dest));
});

