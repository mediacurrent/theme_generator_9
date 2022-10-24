import "./main-menu.scss";
import "./main-menu.es6.js";
import MainMenuTemplate from "./main-menu.twig";

export default {
  title: "General/Main Menu",
  argTypes: {
    items: {
      description: "Define the array of main menu items",
      control: "array",
      type: {
        required: true,
      },
    },
  },
};

export const MainMenu = MainMenuTemplate.bind({});

MainMenu.play = async () => {
  Drupal.attachBehaviors();
};

MainMenu.args = {
  "items": [
    {
      "title": "Menu Item 1",
      "url": "#",
      "below": [
        {
          "text": "Vestibulum ac diam",
          "url": "#"
        },
        {
          "text": "Mauris blandit aliquet",
          "active": true,
          "url": "#"
        },
        {
          "text": "Pellentesque in",
          "url": "#"
        }
      ]
    },
    {
      "title": "Menu Item 2",
      "url": "#",
      "active_trail": true,
      "below": [
        {
          "text": "Vestibulum ac diam",
          "url": "#"
        },
        {
          "text": "Mauris blandit aliquet",
          "active": true,
          "url": "#"
        }
      ]
    },
    {
      "title": "Menu Item 3",
      "url": "#"
    }
  ]
};
