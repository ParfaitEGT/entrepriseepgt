 module.exports = function(eleventyConfig) {
  // Permet d'utiliser le dossier datacontent au lieu de content
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "datacontent",  // IMPORTANT : dossier des données
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
