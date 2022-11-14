import "./breadcrumb.scss";
import BreadcrumbTemplate from "./breadcrumb.twig";

export default {
  title: "General/Breadcrumb",
  argTypes: {
    breadcrumb: {
      description: "Define the breadcrumb content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Breadcrumb = BreadcrumbTemplate.bind({});
Breadcrumb.args = {
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
