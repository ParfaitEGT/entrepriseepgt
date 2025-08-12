module.exports = function(eleventyConfig) {
  // Ignorer la surveillance du fichier config.yml du CMS
  eleventyConfig.ignores.add("static/admin/config.yml");

  // Autres configurations possibles

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
