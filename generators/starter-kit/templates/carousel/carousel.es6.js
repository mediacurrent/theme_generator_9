/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

(function ($, Drupal) {

  /**
   * Setup and attach the Carousel behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.carousel = {
    attach: function() {
      $('.carousel__slick')
        .not('.slick-initialized')
        .slick({
          dots: true
        });
    }
  };

})(jQuery, Drupal);
