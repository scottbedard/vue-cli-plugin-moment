module.exports = function(api, options, rootOptions) {
    var normalizedLocales = options.locales
        .split(',')
        .map(locale => locale.trim().toLowerCase())

    api.extendPackage({
        vue: {
            pluginOptions: {
                moment: {
                    locales: normalizedLocales,
                },
            },
        },
    });
}
