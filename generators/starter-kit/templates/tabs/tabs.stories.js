import "./tabs.scss";
import TabsTemplate from "./tabs.twig";

export default {
  title: "General/Tabs",
  argTypes: {
    primary: {
      description: "Show primary tab",
      control: "boolean",
    },
    tabs: {
      description: "Define the array of tabs objects",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Tabs = TabsTemplate.bind({});
Tabs.args = {
  "primary": true,
  "tabs": [
    {
      "text": "View",
      "link": "#view",
      "is_active": true
    },
    {
      "text": "Edit",
      "link": "#edit",
      "is_active": false
    },
    {
      "text": "Delete",
      "link": "#delete",
      "is_active": false
    },
    {
      "text": "Revisions",
      "link": "#revisions",
      "is_active": false
    }
  ]
};
