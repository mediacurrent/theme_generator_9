import "./button.scss";
import ButtonTemplate from "./button.twig";

export default {
  title: "General/Button",
  argTypes: {
    button: {
      description: "Define the button content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Button = ButtonTemplate.bind({});
Button.args = {
  "button": {
    "url": "",
    "modifier": "",
    "text": "Button"
  }
};

export const ButtonSmall = ButtonTemplate.bind({});
ButtonSmall.args = {
  "button": {
    "url": "https://www.mediacurrent.com",
    "modifier": "btn--small",
    "text": "Small Button"
  }
};
