import "./map.scss";
import MapTemplate from "./map.twig";

export default {
  title: "General/Map",
  argTypes: {
    map: {
      description: "Define the map object content",
      control: "object",
      type: {
        required: true,
      },
    },
  },
};

export const Map = MapTemplate.bind({});
Map.args = {
  "map": {
    "map_embed": "<iframe title='Google Maps' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.774880930825!2d-84.26094208478435!3d34.07528468059962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59e300bf9fbd1%3A0xff48a1f3922040f7!2s3180+North+Point+Pkwy+Building+200%2C+Suite+208%2C+Alpharetta%2C+GA+30005!5e0!3m2!1sen!2sus!4v1543593538702' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe>",
    "location": "Location Name Lorem Ipsum",
    "address": "<p>1234567 Address Street<br />Cityname, ST 12345</p>",
    "link": {
      "url": "http://google.com",
      "text": "Optional link"
    },
    "eyebrow": {
      "text": "Optional subtitle",
      "modifier": ""
    }
  }
};
