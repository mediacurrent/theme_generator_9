import "./quote.scss";
import QuoteTemplate from "./quote.twig";

export default {
  title: "General/Quote",
  argTypes: {
    quote: {
      description: "Define the quote object",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Quote = QuoteTemplate.bind({});
Quote.args = {
  "quote": {
    "modifier_class": "",
    "quote": "“Lorem ipsum urpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Luctus finibus erat nomunny!”",
    "image": "<img src='https://source.unsplash.com/MMJx78V7xS8/100x100' alt='Photo of person quoted'/>",
    "name": "— Author Ipsum, Lorem and Ipsum",
    "job": "My Job Title is Long, Mega Super Ultra Corporation"
  }
};

export const QuoteLeft = QuoteTemplate.bind({});
QuoteLeft.args = {
  "quote": {
    "modifier_class": "quote--left",
    "quote": "“Lorem ipsum urpis at luctus finibus, erat lectus convallis velit, at sodales purus lacus quis magna. Luctus finibus erat nomunny!”",
    "image": "<img src='https://source.unsplash.com/MMJx78V7xS8/100x100' alt='Photo of person quoted'/>",
    "name": "— Author Ipsum, Lorem and Ipsum",
    "job": "My Job Title is Long, Mega Super Ultra Corporation"
  }
};
