# kolmafia-types

[![Test & Lint status](https://github.com/pastelmind/kolmafia-types/workflows/Test%20&%20Lint/badge.svg)](https://github.com/pastelmind/kolmafia-types/actions?query=workflow%3A%22Test+%26+Lint%22)

Type definitions for writing TypeScript/JavaScript code that runs in [KoLmafia](https://sourceforge.net/projects/kolmafia). This is a drop-in replacement for [kolmafia-js](https://github.com/Loathing-Associates-Scripting-Society/kolmafia-js).

Once installed, your scripts will be type checked for correctness:

```js
// For JavaScript
const {visitUrl} = require('kolmafia');
// For TypeScript, Babel, or other transpilers/bundlers that support ES modules
import {visitUrl} from 'kolmafia';

visitUrl('main.php'); // OK
visitUrl(123); // Type error
```

## Installation

kolmafia-types requires TypeScript 3.0 or above.

To use kolmafia-types in your project, you need a package manager that supports package aliases:

```sh
# NPM v6.9.0 or above
npm install --save-dev kolmafia@npm:kolmafia-types

# Yarn v0.17.0 or above
yarn add --dev kolmafia@npm:kolmafia-types
```

This installs kolmafia-types under the `kolmafia` alias.

## Usage

### Using a bundler

Bundlers such as [Webpack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/) can bundle all dependencies into a single file. However, `kolmafia` is a library that exists only inside KoLmafia's execution environment. Thus, you need to configure your bundler to ignore `kolmafia`.

Webpack:

```js
// webpack.config.js
module.exports = {
  //...
  externals: {
    kolmafia: 'kolmafia',
  },
};
```

Rollup:

```js
// rollup.config.js
export default {
  // ...
  external: ['kolmafia'],
};
```
