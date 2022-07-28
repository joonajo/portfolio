const withPlugins = require("next-compose-plugins");
const offline = require("next-offline");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  offline,
  [
    optimizedImages,
    {
      // optimizeImages: false,
    },
  ],
]);
