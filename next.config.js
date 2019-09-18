const withPlugins = require('next-compose-plugins')
const css = require("next-typed-css")
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
    [css, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }   
    }],
    [optimizedImages, {
        // optimizeImages: false,
    }],
])