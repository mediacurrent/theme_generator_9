import "./media.scss";
import MediaTemplate from "./media.twig";

export default {
  title: "General/Media",
  argTypes: {
    video: {
      description: "Define the video embed",
      control: "text",
    },
    image: {
      description: "Define the image markup",
      control: "text",
    },
    caption: {
      description: "Define the caption",
      control: "text",
    },
  },
};

export const Media = MediaTemplate.bind({});
Media.args = {
  "video": "",
  "image": "<img src='https://source.unsplash.com/PhYq704ffdA/1400x787' alt='test image' />",
  "caption": "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
};

export const MediaVideo = MediaTemplate.bind({});
MediaVideo.args = {
  "video": "<iframe width='560' height='315' src='https://www.youtube.com/embed/i4jiTZ76XPk?controls=0' title='Youtube' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
  "image": "",
  "caption": "Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper."
};
