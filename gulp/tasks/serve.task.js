var runSequence = require('run-sequence');
var gulp        = require('gulp');
var config      = require('./../config');
var browsersync = require("browser-sync");

gulp.task('serve-dev', ['ts:watch', 'html:watch', 'sass:watch'], function () {
  var bsIns = browsersync.create();

  bsIns.init(config.serve.browsersync);
  bsIns.reload();

  gulp.watch(config.src + "/**/*").on('change', function() {
    bsIns.reload();
  });
});
