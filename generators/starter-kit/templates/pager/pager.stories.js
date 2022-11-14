import "./pager.scss";
import PagerTemplate from "./pager.twig";

export default {
  title: "General/Pager",
  argTypes: {
    heading_id: {
      description: "Define the heading id attribute",
      control: "text",
    },
    items: {
      description: "Define the pager items",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Pager = PagerTemplate.bind({});
Pager.args = {
  "heading_id": "styleguide_instance--1",
  "items": {
    "previous": {
      "href": "?search=&page=1",
      "text": "Previous"
    },
    "pages": [
      {
        "href": "?search=&page=0"
      },
      {
        "href": "?search=&page=1"
      },
      {
        "href": "?search=&page=2"
      },
      {
        "href": "?search=&page=3"
      },
      {
        "href": "?search=&page=4"
      },
      {
        "href": "?search=&page=5"
      },
      {
        "href": "?search=&page=6"
      },
      {
        "href": "?search=&page=7"
      },
      {
        "href": "?search=&page=8"
      },
      {
        "href": "?search=&page=9"
      },
      {
        "href": "?search=&page=10"
      },
      {
        "href": "?search=&page=11"
      },
      {
        "href": "?search=&page=12"
      }
    ],
    "next": {
      "href": "?search=&page=3",
      "text": "Next"
    }
  }
};
