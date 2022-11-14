import "./site-branding.scss";
import SiteBrandingTemplate from "./site-branding.twig";

export default {
  title: "General/SiteBranding",
  argTypes: {
    link: {
      description: "Site link",
      control: "text",
      type: {
        required: true,
      },
    },
    site_name: {
      description: "Site name",
      control: "text",
      type: {
        required: true,
      },
    },
  },
};

export const SiteBranding = SiteBrandingTemplate.bind({});
SiteBranding.args = {
  "link": "#",
  "site_name": "Rain"
};
