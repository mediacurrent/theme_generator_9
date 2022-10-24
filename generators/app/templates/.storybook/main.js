const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-sass-postcss',
  ],
  "framework": "@storybook/html",
  "staticDirs": ['../static'],
  "webpackFinal": async (config) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: "twing-loader",
        options: {
          environmentModulePath: path.resolve(`${__dirname}/environment.js`),
        },
      },
    });

    return config;
  },
}