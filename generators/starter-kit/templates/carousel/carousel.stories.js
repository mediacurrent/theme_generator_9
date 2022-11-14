import "./carousel.scss";
import CarouselTemplate from "./carousel.twig";
import "./carousel.es6.js";

export default {
  title: "General/Carousel",
  argTypes: {
    list: {
      description: "Define the array of carousel items",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Carousel = CarouselTemplate.bind({});

Carousel.play = async () => {
  Drupal.attachBehaviors();
};

Carousel.args = {
  "list": [
    {
      "image": "<img src='https://source.unsplash.com/G4su92tyImI/1920x600' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor",
      "button": {
        "text": "Button Text",
        "url": "#"
      }
    },
    {
      "image": "<img src='https://source.unsplash.com/BjxBmGBq38o/1920x600' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor",
      "button": {
        "text": "Button Text",
        "url": "#"
      }
    },
    {
      "image": "<img src='https://source.unsplash.com/unQnklrzl80/1920x600' alt='test image' />",
      "title": "Title Lorem Ipsum Dolor",
      "button": {
        "text": "Button Text",
        "url": "#"
      }
    }
  ]
};
