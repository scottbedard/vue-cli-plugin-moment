# vue-cli-plugin-moment

[![NPM](https://img.shields.io/npm/v/vue-cli-plugin-moment.svg)](https://www.npmjs.com/package/vue-cli-plugin-moment)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/scottbedard/vue-cli-plugin-moment/blob/master/LICENSE)

This plugin configures webpack's use of moment.js to only include a few locales. Desired locales can be set by entering a CSV of [moment.js locales](https://github.com/moment/moment/tree/develop/locale) during installation, or by setting them manually in your `vue.config.js`. Below is an example configuration that includes only the English locales.

```js
module.exports = {
  pluginOptions: {
    moment: {
      locales: ['en']
    }
  }
}
```
To demonstrate the payload differences to expect, here is a before and after using the above configuration.

| Before | After |
| :----: |:-----:|
| <img src="https://user-images.githubusercontent.com/7980426/45407902-9da6dd00-b61f-11e8-8c7e-062915d3f23b.png" /> | <img src="https://user-images.githubusercontent.com/7980426/45407903-9da6dd00-b61f-11e8-9c62-8169542c2753.png" /> |
