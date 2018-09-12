var webpack = require('webpack');

function resolveProperty(obj, path) {
    return path.split('.').reduce((p, k) => p && p[k], obj);
}

module.exports = function(api, options) {
    var locales = resolveProperty(options, 'pluginOptions.moment.locales') || [];

    if (locales.length) {
        var localesRegExp = new RegExp(locales.join('|'));

        api.configureWebpack(function(webpackConfig) {
            return {
                plugins: [
                    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, localesRegExp),
                ],
            };
        });
    }
}
