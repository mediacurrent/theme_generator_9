import "./gallery-lightbox.scss";
import "./gallery-lightbox.es6.js";
import GalleryLightboxTemplate from "./gallery-lightbox.twig";

export default {
  title: "General/GalleryLightbox",
  argTypes: {
    "section_title": {
      description: "The title of the gallery lightbox component",
      control: "text",
    },
    "intro_title": {
      description: "Optional intro text for the gallery lightbox component",
      control: "text",
    },
    "items": {
      description: "Define the array of gallery lightbox items",
      control: "array",
      type: {
        required: true,
      },
    },
  },
};

export const GalleryLightbox = GalleryLightboxTemplate.bind({});

GalleryLightbox.play = async () => {
  Drupal.attachBehaviors();
};

GalleryLightbox.args = {
  "section_title": "Optional Title",
  "intro_text": "<p>Optional summary text, turpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Curabitur imperdiet sapien libero, fringilla ullamcorper nibh ullamcorper vitae. Proin sed luctus augue.</p>",
  "items": [
    {
      "media": "./images/gallery1.jpg",
      "media_thumb": "./images/gallery1--thumb.jpg",
      "media_description": "Surfing photo 1 here!"
    },
    {
      "media": "./images/gallery2.jpg",
      "media_thumb": "./images/gallery2--thumb.jpg",
      "media_description": "Surfing photo 2 here!"
    },
    {
      "media": "./images/gallery3.jpg",
      "media_thumb": "./images/gallery3--thumb.jpg",
      "media_description": "Surfing photo 3 here!"
    },
    {
      "media": "./images/gallery4.jpg",
      "media_thumb": "./images/gallery4--thumb.jpg",
      "media_description": "Surfing photo 4 here!"
    },
    {
      "media": "./images/gallery5.jpg",
      "media_thumb": "./images/gallery5--thumb.jpg",
      "media_description": "Surfing photo 5 here!"
    },
    {
      "media": "./images/gallery6.jpg",
      "media_thumb": "./images/gallery6--thumb.jpg",
      "media_description": "Surfing photo 6 here!"
    },
    {
      "media": "./images/gallery7.jpg",
      "media_thumb": "./images/gallery7--thumb.jpg",
      "media_description": "Surfing photo 7 here!"
    },
    {
      "media": "./images/gallery8.jpg",
      "media_thumb": "./images/gallery8--thumb.jpg",
      "media_description": "Surfing photo 8 here!"
    }
  ]
};
