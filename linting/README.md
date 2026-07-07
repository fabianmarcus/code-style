# ESLint Base Config

Diese Dateien dienen als zentrale, wiederverwendbare ESLint-Basis (Flat Config).

## Enthalten

- `eslint.config.mjs`: Generelle Team-Defaults fuer JavaScript/TypeScript
- `react.eslint.config.mjs`: React-spezifische Erweiterung auf Basis der generellen Config
- `angular.eslint.mjs`: Angular-spezifische Erweiterung auf Basis der generellen Config
- `eslint.ignores.mjs`: Wiederverwendbare Ignore-Patterns

## Verwendung in einem Projekt (generell)

Lege im Zielprojekt eine `eslint.config.mjs` an:

```js
import baseConfig from "../code-style/linting/eslint.config.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...baseConfig,
]);

export default eslintConfig;
```

## Verwendung fuer React

```js
import reactConfig from "../code-style/linting/react.eslint.config.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...reactConfig,
]);

export default eslintConfig;
```

## Verwendung fuer Angular

```js
import angularConfig from "../code-style/linting/angular.eslint.mjs";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([
  ...angularConfig,
]);

export default eslintConfig;
```

## Projekt-spezifische Overrides

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

## Pruefen

```bash
eslint .
eslint . --fix
```
