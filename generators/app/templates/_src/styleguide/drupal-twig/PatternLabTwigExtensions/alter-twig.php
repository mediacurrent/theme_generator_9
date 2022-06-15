<?php

/**
 * @file
 * Alter twig extensions.
 */

use Twig\Environment;
use Twig\Extension\DebugExtension;

/**
 * Alter twig extensions.
 *
 * @param Twig\Environment $env
 *   - Twig Environment.
 * @param object $config
 *   - Config of `@basalt/twig-renderer`.
 */
function twigExtensions(Environment &$env, $config) {

  // Load the BasicTwigExtensions class so the extension can be added correctly.
  spl_autoload_register(function ($class_name) {
    include __DIR__ . '/' . $class_name . '.php';
  });

  $env->addExtension(new DebugExtension());
  $env->addExtension(new \BasicTwigExtensions());
}
