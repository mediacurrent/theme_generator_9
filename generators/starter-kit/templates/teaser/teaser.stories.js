import "./teaser.scss";
import TeaserTemplate from "./teaser.twig";

export default {
  title: "General/Teaser",
  argTypes: {
    title: {
      description: "Teaser title",
      control: "text",
    },
    authored_date: {
      description: "Teaser authored date",
      control: "text",
    },
    image: {
      description: "Teaser image markup",
      control: "text",
    },
    summary: {
      description: "Teaser summary",
      control: "text",
    },
    link: {
      description: "Teaser read more link",
      control: "text",
    },
  },
};

export const Teaser = TeaserTemplate.bind({});
Teaser.args = {
  "title": 'News Title',
  "authored_date": "Tues, Nov. 20, 2018",
  "image": "<img src='./images/gallery7.jpg' width='100%' alt='Placeholder' style='display:block;height:100%;max-height:200px;max-width:350px;width:100%;' />",
  "summary": 'Contra legem facit qui id facit quod lex prohibet. Nec dubitamus multa iter quae et nos invenerat. Praeterea iter est quasdam res quas ex communi. Lorem ipsum dolor sit amet, consectetur adipisici elit.',
  "link": "#",
};
