'use strict';

// Include gulp helpers.
const { series, parallel, watch } = require('gulp');

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { compileSass, compileJS } = require('./gulp-tasks/compile');
const { lintJS, lintSass } = require('./gulp-tasks/lint');
const { compressAssets } = require('./gulp-tasks/compress');
const { cleanCSS, cleanJS } = require('./gulp-tasks/clean');
const { concatCSS, concatJS } = require('./gulp-tasks/concat');
const { moveFonts } = require('./gulp-tasks/move');
const { prettier } = require('./gulp-tasks/format');
const server = require('browser-sync').create();

// Compile Our Sass and JS
exports.compile = parallel(compileSass, compileJS, moveFonts);

// Lint Sass and JavaScript
exports.lint = parallel(lintSass, lintJS);

// Format JS files with Prettier and ESlint
exports.format = prettier;

// Compress Files
exports.compress = compressAssets;

// Concat all CSS and JS files into a master bundle.
exports.concat = parallel(concatCSS, concatJS);

// Clean all directories.
exports.clean = parallel(cleanCSS, cleanJS);

/**
 * Watch Sass and JS files.
 * @returns {undefined}
 */
function watchFiles() {
  // Watch all my sass files and compile sass if a file changes.
  watch(
    [
      './src/stories/**/**/*.scss',
    ],
    series(parallel(lintSass, compileSass), concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  );

  // Watch all my JS files and compile if a file changes.
  watch(
    './src/stories/**/**/*.es6.js',
    series(
      prettier,
      parallel(lintJS, compileJS), concatJS, (done) => {
        server.reload('*.es6.js');
        done();
      }
    )
  );

  // Watch all my images and SVG files and compile if a file changes.
  watch(
    './src/stories/**/**/*{.gif,.jpg,.png,.svg}',
    series(
      parallel(compressAssets), (done) => {
        server.reload('*{.gif,.jpg,.png,.svg,.html}');
        done();
      }
    )
  );
}

// Watch task that runs a browsersync server.
exports.watch = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    lintSass,
    compileSass,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts
  ),
  parallel(concatCSS, concatJS),
  series(watchFiles)
);

// Default Task
exports.default = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    lintSass,
    compileSass,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts
  ),
  parallel(concatCSS, concatJS)
);
