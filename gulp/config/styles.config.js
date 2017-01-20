var config = require('./../config');

config.css = {
  src: config.src + '/sass',
  srcSet: config.src + '/sass/**/*.scss',
  dest: config.dest,
  autoprefixerConfig: {
    browsers: [
      '> 1%',
      'last 2 versions'
    ],
    cascade: false
  },
  minifyConfig: {
    compatibility: 'ie8'
  }
};
