import "./card-list.scss";
import CardListTemplate from "./card-list.twig";

export default {
  title: "General/Card List",
  argTypes: {
    "section_title": {
      description: "The title of the card list component",
      control: "text",
    },
    "items": {
      description: "Array of the card list item content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const CardList = CardListTemplate.bind({});
CardList.args = {
  "section_title":"Optional Section Title",
  "items": [
    {
      "card": {
        "modifier": "",
        "media": {
          "video": "",
          "image": "<img src='./images/gallery7.jpg' with='100%' alt='test image' />",
          "caption": "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
        },
        "eyebrow": {
          "text": "Optional Short Title",
          "modifier": " card__eyebrow"
        },
        "heading": {
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card__title"
        },
        "subhead": {
          "title": "Optional Subhead Lorem Ipsum Dolor Sit Amet",
          "heading_level": "3",
          "modifier": "card__subhead",
          "url": ""
        },
        "card_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Optional Link"
        }
      }
    },
    {
      "card": {
        "modifier": "",
        "media": {
          "video": "",
          "image": "<img src='./images/gallery7.jpg' with='100%' alt='test image' />",
          "caption": "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
        },
        "eyebrow": {
          "text": "Optional Short Title",
          "modifier": " card__eyebrow"
        },
        "heading": {
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card__title"
        },
        "subhead": {
          "title": "Optional Subhead Lorem Ipsum Dolor Sit Amet",
          "heading_level": "3",
          "modifier": "card__subhead",
          "url": ""
        },
        "card_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Optional Link"
        }
      }
    },
    {
      "card": {
        "modifier": "",
        "media": {
          "video": "",
          "image": "<img src='./images/gallery7.jpg' with='100%' alt='test image' />",
          "caption": "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
        },
        "eyebrow": {
          "text": "Optional Short Title",
          "modifier": " card__eyebrow"
        },
        "heading": {
          "title": "Phasellus auctor, turpis",
          "heading_level": "2",
          "url": "#",
          "modifier": "card__title"
        },
        "subhead": {
          "title": "Optional Subhead Lorem Ipsum Dolor Sit Amet",
          "heading_level": "3",
          "modifier": "card__subhead",
          "url": ""
        },
        "card_text": "This copy is optional, if nothing is entered nothing will display. Facit nulla in vulputate vulputate aliquam. Commodo esse habent tation nam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci lacus.",
        "link": {
          "url": "#",
          "text":"Optional Link"
        }
      }
    }
  ]
};
