import "./site-footer.scss";
import SiteFooterTemplate from "./site-footer.twig";

export default {
  title: "General/Site Footer",
  argTypes: {
    site_branding: {
      description: "Site branding object with link",
      control: "object",
      type: {
        required: true,
      },
    },
    menu_items: {
      description: "Menu items array",
      control: "array",
      type: {
        required: true,
      },
    },
    copyright: {
      description: "Copyright text",
      control: "text",
    },
    text_block: {
      description: "Footer text block",
      control: "text",
    },
    social: {
      description: "Social links array",
      control: "array",
    }
  },
};

export const SiteFooter = SiteFooterTemplate.bind({});
SiteFooter.args = {
  "site_branding": {
    "link": "#"
  },
  "menu_items": [
    {
      "title": "Privacy Statement",
      "url": "#"
    },
    {
      "title": "Terms of Use",
      "url": "#"
    },
    {
      "title": "Contact",
      "url": "#"
    }
  ],
  "copyright": "Mediacurrent",
  "text_block": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  "social": [
    {
      "title": "Facebook",
      "url": "#"
    },
    {
      "title": "Twitter",
      "url": "#"
    },
    {
      "title": "Instagram",
      "url": "#"
    },
    {
      "title": "Pinterest",
      "url": "#"
    }
  ]
};
