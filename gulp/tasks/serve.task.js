var runSequence = require('run-sequence');
var gulp        = require('gulp');
var config      = require('./../config');
var browsersync = require("browser-sync");

function startBrowsersync (config)
{
  let bsIns = browsersync.create();
  bsIns.init(config);
  bsIns.reload();
}

gulp.task('serve-dev', ['ts:watch', 'html:watch', 'sass:watch'], function () {
  startBrowsersync(config.serve.browsersync);
});
