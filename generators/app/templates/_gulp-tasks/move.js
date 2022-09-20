'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');

// Export our tasks.
module.exports = {
  // Move any fonts to where Pattern Lab is lookinging for them.
  moveFonts: function() {
    return src(
      [
        './src/patterns/global/fonts/**/*.woff',
        './src/patterns/global/fonts/**/*.woff2',
        './src/patterns/global/fonts/**/*.eot',
        './src/patterns/global/fonts/**/*.ttf',
        './src/patterns/global/fonts/**/*.svg',
        './src/vendor/slickjs/fonts/**/*.woff',
        './src/vendor/slickjs/fonts/**/*.svg',
        './src/vendor/slickjs/fonts/**/*.ttf',
        './src/vendor/slickjs/fonts/**/*.woff',
      ],
      { base: './' }
    )
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/fonts'));
  }
};
