// For specific components we need to add additional dependencies.
module.exports = function addDependency (component, themeNameMachine) {
  let libraries = {};

  // Accordion uses an es6.js library.
  if (component === 'accordion') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        js: {
          [`dist/js/${component}.es6.js`]: {}
        }
      }
    };
  }
  // If this is the carousel component, it needs SlickJS added
  // as a dependency.
  if (component === 'carousel') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        js: {
          [`dist/js/${component}.es6.js`]: {}
        },
        dependencies: [
          `${themeNameMachine}/slick`
        ]
      }
    };
  }
  // Card List depends on Card.
  if (component === 'card-list') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        dependencies: [
          `${themeNameMachine}/card`,
        ]
      }
    };
  }
  // Gallery Lightbox depends on Colorbox.
  if (component === 'gallery-lightbox') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        js: {
          [`dist/js/${component}.js`]: {}
        },
        dependencies: [
          `${themeNameMachine}/colorbox`
        ]
      }
    };
  }
  // Main-menu has several JS dependencies.
  if (component === 'main-menu') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        js: {
          [`dist/js/${component}.js`]: {}
        },
        dependencies: [
          'core/jquery',
          'core/jquery.once',
          'core/drupal',
          'core/drupalSettings'
        ]
      }
    };
  }
  // Site-header depends on L-Flex.
  if (component === 'site-header') {
    libraries = {
      [component]: {
        css: {
          component: {
            [`dist/css/${component}.css`]: {}
          }
        },
        dependencies: [
          `${themeNameMachine}/l-flex`
        ]
      }
    };
  }

  return Object.keys(libraries).length && libraries;
};
