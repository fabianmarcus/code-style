# Prettier Base Config

These files provide a central, reusable Prettier baseline.

## Included

- `prettier.config.mjs`: General team defaults
- `.prettierignore`: General ignore list for build/generated artifacts

## Usage In A Project (ESM)

Create a `prettier.config.mjs` file in the target project:

```js
import baseConfig from "../code-style/formatting/prettier.config.mjs";

const prettierConfig = {
  ...baseConfig,
};

export default prettierConfig;
```

## Project-Specific Overrides

```js
import baseConfig from "../code-style/formatting/prettier.config.mjs";

const prettierConfig = {
  ...baseConfig,
  printWidth: 100,
};

export default prettierConfig;
```

## Include Ignore File

Option 1: Copy `.prettierignore` from this structure into the project.

Option 2: Maintain a local `.prettierignore` in the project and extend it when needed.

## Check

```bash
prettier --check .
prettier --write .
```
