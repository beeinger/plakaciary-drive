const withOptimizedImages = require("next-optimized-images");
const path = require("path");

module.exports = withOptimizedImages({
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "resources/images");
    return config;
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
});