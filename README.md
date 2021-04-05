# kolmafia-types

[![Test & Lint status](https://github.com/pastelmind/kolmafia-types/workflows/Test%20&%20Lint/badge.svg)](https://github.com/pastelmind/kolmafia-types/actions?query=workflow%3A%22Test+%26+Lint%22)
[![Available on npmjs.com](https://img.shields.io/npm/v/kolmafia-types)](https://www.npmjs.com/package/kolmafia-types)

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

**kolmafia-types requires TypeScript 4.1 or above.** If your TypeScript version
is lower than this, you may see compiler error messages like
"Cannot find module 'kolmafia-types'."

To use kolmafia-types in your project, you can choose one of:

1. [Install kolmafia-types using a `kolmafia` alias](#method-1-install-using-the-kolmafia-alias)
2. [Tell TypeScript to use a custom path to resolve `kolmafia`](#method-2-use-a-custom-path-to-resolve-kolmafia)

### Method 1: Install using the `kolmafia` alias

This is the recommended method.

Install kolmafia-types using a package manager that supports package aliases:

```sh
# NPM >= 6.9.0, <= 7 (see notes)
npm install --save-dev kolmafia@npm:kolmafia-types

# Yarn >= 0.17.0
yarn add --dev kolmafia@npm:kolmafia-types
```

This installs kolmafia-types under the `kolmafia` alias.

_Note: As of writing, NPM v7 has a [bug](https://github.com/npm/cli/issues/2800)
that causes the `npm outdated` command to fail if you have an aliased package.
If you cannot use package aliases, you may stick to NPM v6.x, or use the method
below._

### Method 2: Use a custom path to resolve `kolmafia`

To use this method, install kolmafia-types normally:

```sh
# NPM
npm install --save-dev kolmafia-types

# Yarn
yarn add --dev kolmafia-types
```

Then, add the `paths` field in your `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    // ...other options...
    "paths": {
      "kolmafia": ["./node_modules/kolmafia-types"]
    }
  }
}
```

This tells TypeScript to retrieve type definitions for `kolmafia` by looking at
where kolmafia-types is installed.

_Note: The actual path may be different, depending on where your `tsconfig.json`
is, and your `compilerOptions.baseUrl` setting._

## Usage

### Type definitions for ASH scripts

kolmafia-types provides type definitions for some popular ASH scripts. See the `/contrib` directory for a list of available types.

To use them, add an entry for each ASH script in your `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    // ...
    "paths": {
      // Note: File names are case sensitive!
      "canadv.ash": ["./node_modules/kolmafia/contrib/canadv.ash"],
      "zlib.ash": ["./node_modules/kolmafia/contrib/zlib.ash"]
    }
  }
}
```

This allows TypeScript to type check functions imported from these ASH scripts:

```ts
// JavaScript
const {canAdv} = require('canadv.ash');
const {getvar, setvar} = require('zlib.ash');
// TypeScript, Babel, or other transpilers/bundlers
import {canAdv} from 'canadv.ash';
import {getvar, setvar} from 'zlib.ash';

setvar('my_var_1', 'some_value');
const value = getvar('my_var_2');
if (canAdv(Location.get('The Haunted Bedroom'), false)) {
  // ...
}
```

If you use a bundler, you may also need to add the ASH scripts as external modules. (See [Using a bundler](#using-a-bundler))

### Using a bundler

Bundlers such as [Webpack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/) can bundle all dependencies into a single file. However, `kolmafia` is a library that exists only inside KoLmafia's execution environment. Thus, you need to configure your bundler to ignore `kolmafia`.

Webpack:

```js
// webpack.config.js
module.exports = {
  //...
  externals: {
    kolmafia: 'commonjs kolmafia',
    // Additional ASH scripts used in your code
    'canadv.ash': 'commonjs canadv.ash',
    'zlib.ash': 'commonjs zlib.ash',
  },
};
```

Rollup:

```js
// rollup.config.js
export default {
  // ...
  external: [
    'kolmafia',
    // Additional ASH scripts used in your code
    'canadv.ash',
    'zlib.ash',
  ],
};
```
