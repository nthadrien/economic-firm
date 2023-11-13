const { EleventyI18nPlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./main.js');
  eleventyConfig.addPassthroughCopy('./global.css');
  eleventyConfig.addPassthroughCopy('./assets/');

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "fr"
  });

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  };
};