import "./gallery-carousel.scss";
import GalleryCarouselTemplate from "./gallery-carousel.twig";
import "./gallery-carousel.es6.js";

export default {
  title: "General/Gallery Carousel",
  argTypes: {
    "section_title": {
      description: "The title of the gallery carousel component",
      control: "text",
    },
    "intro_title": {
      description: "Optional intro text for the gallery carousel component",
      control: "text",
    },
    "carousel_items": {
      description: "Define the array of carousel items",
      control: "array",
      type: {
        required: true,
      },
    },
  },
};

export const GalleryCarousel = GalleryCarouselTemplate.bind({});

GalleryCarousel.play = async () => {
  Drupal.attachBehaviors();
};

GalleryCarousel.args = {
  "section_title": "Optional Title",
  "intro_text": "Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.",
  "carousel_items": [
    {
      "media": "./images/gallery3.jpg",
      "media_description": "Item 3. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media": "./images/gallery6.jpg",
      "media_description": "Item 6. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media": "./images/gallery7.jpg",
      "media_description": "Item 7. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media": "./images/gallery8.jpg",
      "media_description": "Item 8. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    }
  ],
  "carousel_nav_items": [
    {
      "media_thumb": "./images/gallery3--thumb.jpg",
      "media_thumb_description": "Item 3 thumbnail. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media_thumb": "./images/gallery6--thumb.jpg",
      "media_thumb_description": "Item 6 thumbnail. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media_thumb": "./images/gallery7--thumb.jpg",
      "media_thumb_description": "Item 7 thumbnail. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    },
    {
      "media_thumb": "./images/gallery8--thumb.jpg",
      "media_thumb_description": "Item 8 thumbnail. Image media item’s alt text displayed as overlay on hover. If no alt text, “Media Name” value displayed."
    }
  ]
};
