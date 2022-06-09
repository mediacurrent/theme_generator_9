// For specific components we need to add additional dependencies.
module.exports = function addThirdParty(libraries) {

  // See if Slick is one of the libraries already.
  const containsSlick = libraries.find(lib => lib['slick']);
  // See if the libraries include the carousel library because
  // if so, we need to add the SlickJS dependency.
  const containsCarousel = libraries.find(lib => lib['carousel']);
  const containsGalleryCarousel = libraries.find(lib => lib['gallery-carousel']);

  // See if Colorbox is one of the libraries already.
  const containsColorbox = libraries.find(lib => lib['colorbox']);
  const containsGalleryLightbox = libraries.find(lib => lib['gallery-lightbox']);

  // If slick hasn't been added yet and it's needed, add it.
  if (!containsSlick && (containsCarousel || containsGalleryCarousel)) {
    const slick = {
      ['slick']: {
        css: {
          component: {
            ['dist/css/slick.css']: {},
            ['dist/css/slick.css-theme']: {}
          }
        },
        js: {
          ['dist/js/slick.min.js']: { minified: true }
        },
        dependencies: [
          'core/drupal',
          'core/drupalSettings',
          'core/jquery.once',
          'core/jquery'
        ]
      }
    };
    // Add slick to the libraries object.
    libraries.push(slick);
  }
  // If colorbox hasn't been added yet and it's needed, add it.
  if (!containsColorbox && containsGalleryLightbox) {
    const colorbox = {
      ['colorbox']: {
        css: {
          component: {
            ['dist/css/colorbox.css']: {}
          }
        },
        js: {
          ['dist/js/jquery.colorbox.js']: { minified: true }
        },
        dependencies: [
          'core/drupal',
          'core/drupalSettings',
          'core/jquery.once',
          'core/jquery'
        ]
      }
    };
    // Add colorbox to the libraries object.
    libraries.push(colorbox);
  }

  return libraries;
};
