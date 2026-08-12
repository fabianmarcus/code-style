import tseslint from 'typescript-eslint';
import pluginAngular from 'angular-eslint';
import baseEslintConfig from './eslint.config.mjs';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...baseEslintConfig,
  {
    files: ['**/*.ts'],
    extends: [
      ...tseslint.configs.stylistic,
      ...pluginAngular.configs.tsRecommended,
    ],
    processor: pluginAngular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...pluginAngular.configs.templateRecommended,
      ...pluginAngular.configs.templateAccessibility,
    ],
    rules: {},
  },
  globalIgnores([
    '.angular/**',
  ]),
]);

export default eslintConfig;