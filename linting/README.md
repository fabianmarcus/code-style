# ESLint Base Config

These files provide a central, reusable ESLint baseline (Flat Config).

## Included

- `eslint.config.mjs`: General team defaults for JavaScript/TypeScript
- `react.eslint.config.mjs`: React-specific extension based on the general config
- `angular.eslint.mjs`: Angular-specific extension based on the general config
- `eslint.ignores.mjs`: Reusable ignore patterns

## Usage In A Project (General)

Create a `eslint.config.mjs` file in the target project:

```js
import baseConfig from "../code-style/linting/eslint.config.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...baseConfig,
]);

export default eslintConfig;
```

## Usage For React

```js
import reactConfig from "../code-style/linting/react.eslint.config.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...reactConfig,
]);

export default eslintConfig;
```

## Usage For Angular

```js
import angularConfig from "../code-style/linting/angular.eslint.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...angularConfig,
]);

export default eslintConfig;
```

## Project-Specific Overrides

```js
import baseConfig from "../code-style/linting/eslint.config.mjs";
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
