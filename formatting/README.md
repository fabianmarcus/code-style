# Prettier Base Config

Diese Dateien dienen als zentrale, wiederverwendbare Prettier-Basis.

## Enthalten

- `prettier.config.mjs`: Generelle Team-Defaults
- `.prettierignore`: Generelle Ignore-Liste fuer Build-/Generated-Artefakte

## Verwendung in einem Projekt (ESM)

Lege im Zielprojekt eine `prettier.config.mjs` an:

```js
import baseConfig from "../code-style/formatting/prettier.config.mjs";

const prettierConfig = {
  ...baseConfig,
};

export default prettierConfig;
```

## Projekt-spezifische Overrides

```js
import baseConfig from "../code-style/formatting/prettier.config.mjs";

const prettierConfig = {
  ...baseConfig,
  printWidth: 100,
};

export default prettierConfig;
```

## Ignore-Datei einbinden

Option 1: `.prettierignore` aus dieser Struktur in das Projekt kopieren.

Option 2: Eigene `.prettierignore` im Projekt pflegen und bei Bedarf erweitern.

## Pruefen

```bash
prettier --check .
prettier --write .
```
