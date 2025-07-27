const { DateTime } = require("luxon");
const fr = require("./locales/fr.json");
const en = require("./locales/en.json");

module.exports = function(eleventyConfig) {
  // Fichiers statiques à copier dans _site
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("content");
  eleventyConfig.addPassthroughCopy("articles");
  eleventyConfig.addPassthroughCopy({ "static/admin": "admin" });
  eleventyConfig.addPassthroughCopy("favicon.ico");

  // Collection des articles Markdown
  eleventyConfig.addCollection("articles", (collection) => {
    return collection.getFilteredByGlob("articles/*.md").reverse();
  });

  // Filtre date avec Luxon
  eleventyConfig.addFilter("date", (dateObj, format = "dd/LL/yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Données globales pour traduction (i18n)
  eleventyConfig.addGlobalData("i18n", { fr, en });

  // Shortcode de traduction
  eleventyConfig.addShortcode("translate", function(lang, key) {
    return this.ctx.i18n?.[lang]?.[key] || key;
  });

  // Langue par défaut
  eleventyConfig.addGlobalData("lang", "fr");

  // (Option) Permet d’utiliser le mode développement avec `.eleventyignore`
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: ".",         // Dossier d'entrée
      includes: "_includes", // Fichiers layouts, partials, etc.
      data: "content",    // Permet d’utiliser les fichiers de `content/` comme data
      output: "_site",    // Dossier de sortie
    },
    passthroughFileCopy: true
  };
};
