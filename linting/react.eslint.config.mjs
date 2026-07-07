import globals from 'globals';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import baseEslintConfig from './eslint.config.mjs';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReactHooks from 'eslint-plugin-react-hooks';

const eslintConfig = defineConfig([
  ...baseEslintConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'], // React 17+ JSX transform (no import React required)
  pluginJsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
]);

export default eslintConfig;