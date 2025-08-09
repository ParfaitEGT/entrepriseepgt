const { DateTime } = require("luxon");
const fs = require("fs");
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

  // Données globales "content"
  eleventyConfig.addGlobalData("content", () => {
    return {
      accueil: fs.readFileSync("./content/accueil.md", "utf8"),
      apropos: fs.readFileSync("./content/a-propos.md", "utf8")
    };
  });

  // Filtre date avec Luxon
  eleventyConfig.addFilter("date", (dateObj, format = "dd/LL/yyyy") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Données globales pour traduction
  eleventyConfig.addGlobalData("i18n", { fr, en });

  // Shortcode traduction
  eleventyConfig.addShortcode("translate", function(lang, key) {
    return this.ctx.i18n?.[lang]?.[key] || key;
  });

  // Langue par défaut
  eleventyConfig.addGlobalData("lang", "fr");

  // Autoriser fichiers ignorés par git
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "content",
      output: "_site",
    },
    passthroughFileCopy: true
  };
};
