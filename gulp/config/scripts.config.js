var config = require('./../config');

config.js = {
  src: config.src + '/ts',
  srcSet: config.src + '/ts/app/**/*.ts',
  typings: config.src + '/ts/typings/**/*.d.ts',
  dest: config.dest + '/js/app'
};
