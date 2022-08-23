<?php

/**
 * @file
 * Loads BasicTwigExtensions for Pattern Lab Node.
 */

use Twig\Extension\DebugExtension;
use Twig\Environment;
use PatternLabTwigExtensions\BasicTwigExtensions;

/**
 * Enable Drupal Twig extensions for Pattern Lab.
 *
 * @param Twig\Environment $env
 *   - The Twig Environment
 *   - https://twig.symfony.com/api/1.x/Twig_Environment.html.
 * @param object $config
 *   - Config of `@basalt/twig-renderer`.
 */
function twig_extensions(Environment &$env, $config) {

  // Load the \BasicTwigExtensions class so the extension
  // can be added correctly.
  spl_autoload_register(function ($class_name) {
    $class_name = str_replace('\\', DIRECTORY_SEPARATOR, $class_name);
    include_once __DIR__ . '/' . $class_name . '.php';
  });

  $env->addExtension(new DebugExtension());
  $env->addExtension(new BasicTwigExtensions());
}
