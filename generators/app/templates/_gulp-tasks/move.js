'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');

// Export our tasks.
module.exports = {
  // Move any fonts to where Storybook is looking for them.
  moveFonts: function() {
    return src(
      [
        './src/stories/global/fonts/**/*.woff',
        './src/stories/global/fonts/**/*.woff2',
        './src/stories/global/fonts/**/*.eot',
        './src/stories/global/fonts/**/*.ttf',
        './src/stories/global/fonts/**/*.svg',
        './src/vendor/slickjs/fonts/**/*.eot',
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
