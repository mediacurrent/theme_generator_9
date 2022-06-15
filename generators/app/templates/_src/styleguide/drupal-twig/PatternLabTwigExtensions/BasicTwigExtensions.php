<?php

use Twig\Extension\AbstractExtension;
use Twig\Extension\ExtensionInterface;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * These filters come from drupal-twig-extensions.
 *
 * See more: https://github.com/pattern-lab/drupal-twig-extensions.
 */
class BasicTwigExtensions extends AbstractExtension implements ExtensionInterface {

  /**
   * Dummy function that passes a param straight through.
   *
   * @return string
   *   Returns whatever param was passed in with no modifications.
   */
  public static function returnParam($param) {
    return $param;
  }

  /**
   * Dummy function that returns a simple '#'.
   *
   * @return string
   *   Returns a '#' character.
   */
  public static function inertHref() {
    return '#';
  }

  /**
   * Dummy function that returns nothing.
   *
   * @return string
   *   Returns a '' character.
   */
  public static function returnNothing() {
    return '';
  }

  /**
   * Returns a list of filters to add to the existing list.
   *
   * @link Drupal Twig Filters - https://www.drupal.org/docs/8/theming/twig/filters-modifying-variables-in-twig-templates
   *
   * @return Twig\TwigFilter[]
   *   Returns a list of filters.
   */
  public function getFilters() {
    return [
      new TwigFilter('t', [$this, 'returnParam']),
      new TwigFilter('render', [$this, 'returnParam']),
      new TwigFilter('placeholder', [$this, 'returnParam']),
      new TwigFilter('without', [$this, 'returnParam']),
      new TwigFilter('clean_class', [$this, 'returnParam']),
    ];
  }

  /**
   * Returns a list of functions to add to the existing list.
   *
   * @link Drupal Twig Functions - https://www.drupal.org/node/2486991
   *
   * @return Twig\TwigFunction[]
   *   Returns list of functions.
   */
  public function getFunctions() {
    return [
      new TwigFunction('url', [$this, 'inertHref']),
      new TwigFunction('path', function ($string) {
        if ($string === '<front>') {
          return '/';
        }
        else {
          return $string;
        }
      }),
      new TwigFunction('link', [$this, 'inertHref']),
      new TwigFunction('file_url', [$this, 'returnParam']),
      new TwigFunction('attach_library', [$this, 'returnNothing']),
    ];
  }

}
