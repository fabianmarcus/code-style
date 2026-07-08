# ESLint Base Config

These files provide a central, reusable ESLint baseline (Flat Config).

## Included

- `eslint.config.mjs`: General team defaults for JavaScript/TypeScript
- `react.eslint.config.mjs`: React-specific extension based on the general config
- `angular.eslint.mjs`: Angular-specific extension based on the general config

## Install Dependencies

Install the package:

```bash
npm i -D @fabianmarcus/code-style
```

Install dependencies for the base config:

```bash
npm i -D eslint @eslint/js typescript-eslint globals eslint-plugin-n eslint-plugin-jsdoc eslint-plugin-import eslint-plugin-perfectionist
```

If you use the React preset, also install:

```bash
npm i -D eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

If you use the Angular preset, also install:

```bash
npm i -D angular-eslint
```

## Usage In A Project (General)

Create a `eslint.config.mjs` file in the target project:

```js
import baseConfig from "@fabianmarcus/code-style/linting/base";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...baseConfig,
]);

export default eslintConfig;
```

## Usage For React

```js
import reactConfig from "@fabianmarcus/code-style/linting/react";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...reactConfig,
]);

export default eslintConfig;
```

## Usage For Angular

```js
import angularConfig from "@fabianmarcus/code-style/linting/angular";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...angularConfig,
]);

export default eslintConfig;
```

## Project-Specific Overrides

```js
import baseConfig from "@fabianmarcus/code-style/linting/base";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...baseConfig,
  {
    rules: {
      "no-console": "off",
    },
  },
]);

export default eslintConfig;
```

## Check

```bash
eslint .
eslint . --fix
```
