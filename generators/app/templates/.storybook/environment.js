const path = require("path");
const { TwingEnvironment, TwingFunction, TwingLoaderChain, TwingLoaderFilesystem } = require("twing");

const srcPath = path.resolve(__dirname, "../src/stories/components");
const loader = new TwingLoaderFilesystem(srcPath);
const chain = new TwingLoaderChain([loader]);
const attachLibraryFn = new TwingFunction("attach_library", () => {});
const translateFn = new TwingFunction("t", () => {});
const environment = new TwingEnvironment(chain, { autoescape: false, auto_reload: true });

// In storybook we get this returned as an instance of TwigLoaderNull
if (typeof loader.addPath === "function") {
  // The loader expects aliases to be prefixed with a `@` sign.
  // To import a component, you would include it from `@src/components/../..`
  loader.addPath(srcPath, "<%= themeNameMachine %>");
}

environment.addFunction(attachLibraryFn);
environment.addFilter(translateFn);

module.exports = environment;
module.exports.chain = chain;
