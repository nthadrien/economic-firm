const { EleventyI18nPlugin } = require("@11ty/eleventy");
/* plugin to minified to final output ^_^ */
const eleventyPluginFilesMinifier = require("@sherby/eleventy-plugin-files-minifier");

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./main.js');
  eleventyConfig.addPassthroughCopy('./global.css');
  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });
  eleventyConfig.addPlugin(eleventyPluginFilesMinifier);

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