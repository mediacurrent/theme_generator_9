const Generator = require('yeoman-generator');
const _ = require('lodash');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');
const assert = require('assert');
const replace = require('replace-in-file');

// Helper to generate component libraries.
const buildComponents = require('./build-components');
// Helper to add in third party dependencies.
const addThirdParty = require('./add-third-party');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    // Allow the theme generator main app to pass through the machine name.
    // --theme-name=hey_yall
    this.option('theme-name', {
      type: String,
      desc: 'The theme machine name'
    });
  }

  initializing() {
    // Grab the theme machine name if it's passed in.
    const themeName = this.options.themeName || '';
    this.themeNameMachine = _.snakeCase(themeName);
  }

  prompting() {
    const prompts = [
      {
        type: 'checkbox',
        name: 'howMuchTheme',
        message: 'Which starter components do you want to add to your theme?',
        // Be nice for these to be populated from an external repo
        // and use a package.json to build this list.
        // Or just do it based on folder name. /shrug
        choices: [
          {
            value: 'accordion',
            name: 'Accordion (dependencies: Heading, Icons)'
          },
          {
            value: 'body-text',
            name: 'Body Text'
          },
          {
            value: 'breadcrumb',
            name: 'Breadcrumb'
          },
          {
            value: 'breaker',
            name: 'Breaker (dependencies: Card)'
          },
          {
            value: 'button',
            name: 'Button'
          },
          {
            value: 'card',
            name: 'Card (dependencies: Body Text, Heading)'
          },
          {
            value: 'card-list',
            name: 'Card List (dependencies: Button, Card)'
          },
          {
            value: 'carousel',
            name: 'Carousel / Slider (dependencies: Heading, Hero)'
          },
          {
            value: 'embed',
            name: 'Embed (dependencies: Heading)'
          },
          {
            value: 'eyebrow',
            name: 'Eyebrow'
          },
          {
            value: 'fontawesome',
            name: 'Font Awesome'
          },
          {
            value: 'gallery-carousel',
            name: 'Gallery Carousel (dependencies: Body Text, Heading)'
          },
          {
            value: 'gallery-lightbox',
            name: 'Gallery + Lightbox (dependencies: Body Text, Heading, Icons)'
          },
          {
            value: 'heading',
            name: 'Heading'
          },
          {
            value: 'hero',
            name: 'Hero (dependencies: Body Text, Button, Eyebrow, Heading, Media)'
          },
          {
            value: 'latest-news',
            name: 'Latest News (dependencies: Card, Heading)'
          },
          {
            value: 'l-flex',
            name: 'L-Flex'
          },
          {
            value: 'main-menu',
            name: 'Main Menu'
          },
          {
            value: 'map',
            name: 'Map (dependencies: Eyebrow)'
          },
          {
            value: 'media',
            name: 'Media (dependencies: Heading, Media)'
          },
          {
            value: 'menu',
            name: 'Menu'
          },
          {
            value: 'message',
            name: 'Messages'
          },
          {
            value: 'node',
            name: 'Node Templates'
          },
          {
            value: 'page-layout',
            name: 'Page Layout (dependencies: Breadcrumb, L-Flex, Main Menu, Site Branding, Site Footer, Utility Nav)'
          },
          {
            value: 'page-title',
            name: 'Page Title (dependencies: Heading)'
          },
          {
            value: 'pager',
            name: 'Pager (dependencies: Icons)'
          },
          {
            value: 'quote',
            name: 'Quote'
          },
          {
            value: 'search-api-results',
            name: 'Search API Results'
          },
          {
            value: 'search-box',
            name: 'Search Box (dependencies: Icons)'
          },
          {
            value: 'site-branding',
            name: 'Site Branding'
          },
          {
            value: 'site-footer',
            name: 'Site Footer (dependencies: Body Text, Menu, Site Branding, Social Menu, Utility Nav)'
          },
          {
            value: 'site-header',
            name: 'Site Header (dependencies: Breadcrumb, L-Flex, Main Menu, Site Branding, Utility Nav)'
          },
          {
            value: 'social-menu',
            name: 'Social Menu (dependencies: Icons)'
          },
          {
            value: 'tabs',
            name: 'Tabs'
          },
          {
            value: 'teaser',
            name: 'Teaser: (dependencies: Card)'
          },
          {
            value: 'utility-nav',
            name: 'Utility Nav / Account (dependencies: Menu)'
          },
          {
            value: 'views',
            name: 'Views (dependencies: Button, Heading)'
          },
        ]
      }
    ];

    // If there's no theme machine name provided, prompt the user for it.
    if (!this.themeNameMachine) {
      let defaultThemeName = '';

      try {
        // See if package.json exists.
        fs.accessSync(this.destinationPath('package.json'), fs.constants.R_OK);
        // If it does, read it and use the name as our default
        // theme machine name.
        const pkg = JSON.parse(
          fs.readFileSync(
            path.resolve(this.destinationPath('package.json')), 'utf8'
          )
        );
        defaultThemeName = pkg.name;
      }
      catch (err) {
        assert.fail(
          `
🚨 ${chalk.red(this.destinationPath('package.json'))} ${chalk.red('is missing')}.
${chalk.blue('Make sure you\'re running this command from your theme root.')}`
        );
      }

      prompts.push({
        name: 'themeNameMachine',
        message: 'What is your theme\'s machine name? EX: unicorn_theme',
        default: defaultThemeName
      });
    }

    return this.prompt(prompts).then(function (props) {
      // Try to use the name passed in via option else use
      // the user provided theme machine name.
      this.themeNameMachine = this.themeNameMachine || props.themeNameMachine;

      // Check to see if any of the components that need dependencies
      // are selected.
      if (props.howMuchTheme.includes('accordion')) {
        props.howMuchTheme.push('heading', 'icons');
      }
      if (props.howMuchTheme.includes('breaker')) {
        props.howMuchTheme.push('card');
      }
      if (props.howMuchTheme.includes('card')) {
        props.howMuchTheme.push('body-text', 'heading');
      }
      if (props.howMuchTheme.includes('card-list')) {
        props.howMuchTheme.push('button', 'card');
      }
      if (props.howMuchTheme.includes('carousel')) {
        props.howMuchTheme.push('heading', 'hero');
      }
      if (props.howMuchTheme.includes('embed')) {
        props.howMuchTheme.push('heading');
      }
      if (props.howMuchTheme.includes('gallery-carousel')) {
        props.howMuchTheme.push('body-text', 'heading');
      }
      if (props.howMuchTheme.includes('gallery-lightbox')) {
        props.howMuchTheme.push('body-text', 'heading', 'icons');
      }
      if (props.howMuchTheme.includes('hero')) {
        props.howMuchTheme.push('body-text', 'button', 'eyebrow', 'heading', 'media');
      }
      if (props.howMuchTheme.includes('latest-news')) {
        props.howMuchTheme.push('card', 'heading');
      }
      if (props.howMuchTheme.includes('map')) {
        props.howMuchTheme.push('eyebrow');
      }
      if (props.howMuchTheme.includes('media')) {
        props.howMuchTheme.push('eyebrow');
      }
      if (props.howMuchTheme.includes('page-layout')) {
        props.howMuchTheme.push('breadcrumb', 'l-flex', 'main-menu', 'site-branding', 'site-footer', 'utility-nav');
      }
      if (props.howMuchTheme.includes('page-title')) {
        props.howMuchTheme.push('heading');
      }
      if (props.howMuchTheme.includes('pager')) {
        props.howMuchTheme.push('icons');
      }
      if (props.howMuchTheme.includes('search-box')) {
        props.howMuchTheme.push('icons');
      }
      if (props.howMuchTheme.includes('site-footer')) {
        props.howMuchTheme.push('body-text', 'menu', 'site-branding', 'social-menu', 'utility-nav');
      }
      if (props.howMuchTheme.includes('site-header')) {
        props.howMuchTheme.push('breaker', 'l-flex', 'main-menu', 'utility-nav', 'site-branding');
      }
      if (props.howMuchTheme.includes('social-menu')) {
        props.howMuchTheme.push('icons');
      }
      if (props.howMuchTheme.includes('teaser')) {
        props.howMuchTheme.push('card');
      }
      if (props.howMuchTheme.includes('utility-nav')) {
        props.howMuchTheme.push('menu');
      }
      if (props.howMuchTheme.includes('views')) {
        props.howMuchTheme.push('button', 'heading');
      }
      
      // props.howMuchTheme is an array of all selected options.
      // i.e. [ 'hero', 'tabs', 'messages' ]
      // Remove any duplicate components using uniq().
      this.exampleComponents = _.uniq(props.howMuchTheme);

      // Filter out any components that already exist within
      // an existing theme.
      try {
        // Read the theme libraries.yml file to see which components
        // already exist.
        const librariesFile = jsYaml.safeLoad(
          fs.readFileSync(
            this.destinationPath(`${this.themeNameMachine}.libraries.yml`),
            'utf8'
          )
        );
        const existingLibraries = Object.keys(librariesFile);
        // Exclude any components that already exist in the libraries file.
        this.exampleComponents = _.difference(
          this.exampleComponents,
          existingLibraries
        );
      }
      catch (e) {
        // No libraries file found but that's ok. It won't be found unless
        // this is run from an existing theme.
      }

      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing() {
    // If any example components were selected...
    if (this.exampleComponents.length > 0) {
      // ...copy over the example components.
      buildComponents({
        exampleComponents: this.exampleComponents,
        app: this
      })
        .then(buildComponentsConfig => {
          // Add in any third party dependencies before we write
          // to the libraries.yml file.
          buildComponentsConfig = addThirdParty(buildComponentsConfig);

          // Loop through the different components and append them to the
          // libraries.yml file.
          buildComponentsConfig.forEach((component) => {
            // This is a little weird:
            // 1. If this is being run from the parent generator we need to use
            // this.fs.append() since we're copying the original libraries.yml
            // template. If we just use fs.appendFileSync() there
            // will be a conflict.
            // 2. However if this is being run as a standalone sub generator
            // this has to use this.appendFileSync() because otherwise it tries
            // to overwrite the existing libraries file.

            // Find out if this was called via the parent generator:
            if (this.options.themeName) {
              this.fs.append(
                this.destinationPath(this.themeNameMachine + '.libraries.yml'),
                jsYaml.safeDump(component),
                {
                  trimEnd: false,
                  separator: '\r\n'
                }
              );
            }
            else {
              // Add a blank line so the file is nicely formatted and the
              // appended data doesn't run into the current data within
              // the file.
              fs.appendFileSync(
                this.destinationPath(this.themeNameMachine + '.libraries.yml'),
                '\r\n'
              );

              // Update the libraries.yml file with the new component library.
              fs.appendFileSync(
                this.destinationPath(this.themeNameMachine + '.libraries.yml'),
                jsYaml.safeDump(component),
                (err) => {
                  if (err) {
                    this.log(
                      chalk.red(
                        `Failed to update ${this.themeNameMachine}.libraries.yml`
                      )
                    );
                  }
                }
              );
            }
          });
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  }

  install() {
    var colorbox = '';
    var slick = '';
    var sliderParagraph = '';
    var viewsBlock = '';
    var galleryCarouselBlock = '';
    var latestNews = '';
    var mediaLibrary = '';

    // If `carousel` or `gallery-carousel` is selected, attempt to link up the SlickJS.
    if (this.exampleComponents.indexOf('carousel') !== -1 || this.exampleComponents.indexOf('gallery-carousel') !== -1) {
      slick = '<script type="text/javascript" src="../../../src/vendor/slickjs/slick.min.js"></script><link rel="stylesheet" type="text/css" href="../../../src/vendor/slickjs/slick.css"/><link rel="stylesheet" type="text/css" href="../../../src/vendor/slickjs/slick-theme.css"/>';
    }
    // If `gallery-lightbox` is selected, attempt to link up the Colorbox.
    if (this.exampleComponents.indexOf('gallery-lightbox') !== -1) {
      colorbox = '<script type="text/javascript" src="../../../src/vendor/colorbox/jquery.colorbox.js"></script><link rel="stylesheet" type="text/css" href="../../../src/vendor/colorbox/colorbox.css"/>';
    }

    replace({
      files: this.destinationPath('src/styleguide/meta/_foot.twig'),
      from: [/<!-- Colorbox placeholder -->/g, /<!-- SlickJS placeholder -->/g],
      to: [colorbox, slick],
    })

    // .theme component-specific updates.

    if (this.exampleComponents.indexOf('carousel') !== -1) {
      sliderParagraph = `// Pass along total count to template.
  if ($paragraph->bundle() == 'slider_item') {
    $parent = $paragraph->getParentEntity();
    if (!empty($parent) && $parent->hasField('field_slider_item')) {
      $variables['count'] = $paragraph->getParentEntity()->get('field_slider_item')->count();
    }
  }`;
    }

    if (this.exampleComponents.indexOf('views') !== -1) {
      viewsBlock = `if ($block_content->bundle() === 'views') {
    // Add wrapper to the paragraph views.
    $views_ref = $block_content->field_views_ref->getValue();
    $variables['wrapper_class'] = str_replace('-', '_', $views_ref[0]['target_id'] . '-' . $views_ref[0]['display_id'] . '__wrapper');
  }`;
    }
    
    if (this.exampleComponents.indexOf('gallery-carousel') !== -1) {
      galleryCarouselBlock = `// We want to render a gallery carousel.
  if ($block_content->bundle() == 'gallery_carousel') {
    $carousel_items = [];
    $carousel_thumbs = [];

    if ($block_content->hasField('field_gallery_item')) {
      $count = $block_content->get('field_gallery_item')->count();

      // Populate thumbs and images.
      for ($c = 0; $c < $count; $c++) {
        $gallery_item = $block_content->get('field_gallery_item')[$c]->entity;

        if ($gallery_item) {
          $image_url = $thumb_url = '';
          if (!empty($gallery_item->get('field_media')->entity)) {
            $image_url = file_create_url($gallery_item->get('field_media')->entity->get('field_image')->entity->getFileUri());
          }
          if ($gallery_item->hasField('field_thumb') && !empty($gallery_item->get('field_thumb')->entity)) {
            $thumb_url = file_create_url($gallery_item->get('field_thumb')->entity->getFileUri());
          }
          else {
            $thumb_url = $image_url;
          }

          $item = [
            'media' => $image_url,
            'media_description' => $gallery_item->hasField('field_summary') ? $gallery_item->get('field_summary')->value : NULL,
          ];

          $thumb = [
            'media_thumb' => $thumb_url,
          ];

          $carousel_items[] = $item;
          $carousel_thumbs[] = $thumb;
        }
      }

      $variables['carousel_items'] = $carousel_items;
      $variables['carousel_thumbs'] = $carousel_thumbs;
    }
  }`;
    }

    if (this.exampleComponents.indexOf('gallery-carousel') !== -1) {
      latestNews = `/**
* Implements hook_preprocess_preprocess_views_view_fields().
*/
function <%= themeNameMachine %>_preprocess_views_view_fields__latest_news__block_1(array &$variables) {
  // Separate the link and the text for the more link.
  if (isset($variables['fields']['view_node'])) {
    $more_link = Url::fromRoute('entity.node.canonical', ['node' => $variables['row']->nid]);
    $variables['more_link'] = [
      'url' => $more_link->toString(),
      'text' => t('Read more'),
    ];
  }
  if (isset($variables['row']->index)) {
    if ($variables['row']->index === 0) {
      // Make the first card horizontal display.
      $variables['modifier'] = 'horizontal';
    }
  }
}`;
    }

    if (this.exampleComponents.indexOf('media') !== -1) {
      mediaLibrary = `/**
* Implements hook_theme_suggestions_views_view_unformatted_alter().
*/
function <%= themeNameMachine %>_theme_suggestions_views_view_unformatted__media_library_alter(&$suggestions, &$vars) {
  $suggestions[] = 'views_view_unformatted__media_library__rain';
}`;
    }

    replace({
      files: this.destinationPath(`${this.themeNameMachine}.theme`),
      from: [/\/\* Slider paragraph\. \*\//g, /\/\* Views block\. \*\//g, /\/\* Gallery Carousel\. \*\//g, /\/\* Latest News\. \*\//g, /\/\* Media Library\. \*\//g, /\<\%\= themeNameMachine \%\>/g],
      to: [sliderParagraph, viewsBlock, galleryCarouselBlock, latestNews, mediaLibrary, this.themeNameMachine],
    })
  }

  end() {
   
  }
};
