import "./site-header.scss";
import "../utility-nav/utility-nav.scss";
import SiteHeaderTemplate from "./site-header.twig";

export default {
  title: "General/Site Header",
  argTypes: {
    user_account_nav: {
      description: "User account navigation",
      control: "object",
      type: {
        required: true,
      },
    },
    site_branding: {
      description: "Site branding object with link",
      control: "object",
      type: {
        required: true,
      },
    },
    main_menu: {
      description: "Main menu items array",
      control: "array",
      type: {
        required: true,
      },
    },
    breadcrumb: {
      description: "Breadcrumb array",
      control: "text",
    },
  },
};

export const SiteHeader = SiteHeaderTemplate.bind({});
SiteHeader.args = {
  "user_account_nav": {
    "links": [
      {
        "title": "Contact Us",
        "url": "#"
      },
      {
        "title": "My Account",
        "url": "#"
      }
    ]
  },
  "site_branding": {
    "link": "#",
    "site_name": "Rain"
  },
  "main_menu": {
    "items": [
      {
        "title": "Menu Item 1",
        "url": "#"
      },
      {
        "title": "Menu Item 2",
        "url": "#",
        "active_trail": true
      },
      {
        "title": "Menu Item 3",
        "url": "#"
      }
    ]
  },
  "breadcrumb": [
    {
        "text": "Home",
        "url": "#"
    },
    {
        "text": "Parent Page",
        "url": "#"
    },
    {
        "text": "Current Page",
        "url": ""
    }
  ]
};
