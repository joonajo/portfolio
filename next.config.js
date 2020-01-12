const withPlugins = require('next-compose-plugins')
const css = require("next-typed-css")
const offline = require('next-offline')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
    [css, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: "[local]___[hash:base64:5]",
        }   
    }],
    offline,
    [optimizedImages, {
        // optimizeImages: false,
    }],
])