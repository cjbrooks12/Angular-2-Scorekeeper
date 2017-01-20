var config = require('./../config');
var superstatic = require("superstatic");

config.serve = {
  browsersync: {
    port: 3001,
    injectChanges: true,
    logFileChanges: true,
    notify: true,
    reloadDelay: 0,
    server: {
      baseDir: config.dest,
      middleware: superstatic({
        debug: true
      })
    },
  }
};
