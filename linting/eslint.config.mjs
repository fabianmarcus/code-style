import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import nodePlugin from 'eslint-plugin-n';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import eslintPluginImport from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // Personal preferences and best practices
  {
    plugins: {
      n: nodePlugin,
      jsdoc: jsdocPlugin,
      import: eslintPluginImport,
      perfectionist: perfectionistPlugin,
    },
    settings: {
      'import/resolver': {
        node: true,
        typescript: true,
      },
      jsdoc: {
        mode: 'typescript',
      },
      n: {
        version: '>=24.0.0',
      },
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: globals.es2021,
      parserOptions: {
        project: true,
      },
    },
    linterOptions: {
      // Report unused eslint-disable directives as errors
      reportUnusedDisableDirectives: 'error',
      // Disallow inline configuration comments (e.g., /* eslint-disable */)
      noInlineConfig: true,
    },
    // Personal Preferences
    rules: {
      // Debugging
      'no-console': ['warn'],
      'no-debugger': ['error'],
      // Code style
      'indent': ['error', 2], // Indentation of 2 spaces
      'semi': ['error', 'always'], // Always use semicolons at the end of statements
      'quotes': ['error', 'double'], // Use double quotes for strings
      'eol-last': ['error', 'always'], // Ensure newline at the end of files
      'no-trailing-spaces': ['error'], // Disallow trailing whitespace
      'max-len': ['error', { code: 120 }], // Limit lines to 120 characters
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline objects and arrays
      // JavaScript
      'no-var': ['error'], // Use let or const instead of var
      'no-unused-vars': ['off'], // Warn about unused variables
      'object-shorthand': ['off'], // Require object shorthand syntax
      'eqeqeq': ['error', 'always'], // Require the use of === and !==
      'arrow-body-style': ['error', 'as-needed'], // Enforce consistent use of braces in arrow functions
      'prefer-arrow-callback': ['error'], // Prefer arrow functions as callbacks
      'prefer-template': ['error'], // Prefer template literals over string concatenation
      'prefer-const': ['error'], // Prefer const for variables that are never reassigned
      'no-eval': ['error'], // Disallow eval()
      'no-new-func': ['error'], // Disallow new Function()
      'default-case': ['error'], // Require default branch in switch statements
      'no-else-return': ['error'], // Disallow else blocks after return statements
      'no-implied-eval': ['error'], // Disallow implied eval-like calls
      'consistent-return': ['error'], // Require consistent return behavior
      // TypeScript
      '@typescript-eslint/no-explicit-any': ['off'], // Disallow usage of the any type
      '@typescript-eslint/no-misused-promises': ['error'], // Disallow Promises in places expecting non-Promise values
      '@typescript-eslint/no-floating-promises': ['error'], // Disallow unhandled Promise chains
      '@typescript-eslint/prefer-optional-chain': ['error'], // Prefer foo?.bar over foo && foo.bar
      '@typescript-eslint/consistent-type-imports': ['error'], // Enforce consistent usage of type imports
      '@typescript-eslint/no-unnecessary-condition': ['error'], // Disallow conditions that are always truthy/falsy by type
      '@typescript-eslint/prefer-nullish-coalescing': ['error'], // Prefer ?? over || for nullish checks
      '@typescript-eslint/explicit-function-return-type': ['warn'], // Require explicit return types on functions and class methods
      '@typescript-eslint/array-type': ['error', { default: 'array-simple' }], // Enforce a consistent style for array types
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }], // Warn about unused variables in TypeScript
      // JSDoc
      'jsdoc/check-alignment': ['error'], // Ensure JSDoc comments are aligned
      'jsdoc/check-indentation': ['error'], // Ensure JSDoc comments are indented correctly
      'jsdoc/newline-after-description': ['error'], // Require a newline after the description in JSDoc comments
      'jsdoc/require-param': ['error'], // Require @param tags in JSDoc comments
      'jsdoc/require-returns': ['error'], // Require @returns tags in JSDoc comments
      // Import
      'import/order': ['off'], // Replaced by perfectionist/sort-imports
      'import/named': ['error'], // Ensure named imports correspond to a named export in the remote file
      'import/default': ['error'], // Ensure default imports have a corresponding default export in the remote file
      'import/namespace': ['error'], // Ensure imported namespaces contain dereferenced properties as they are dereferenced
      'import/no-unresolved': ['error'], // Ensure imports point to a file/module that can be resolved
      'import/no-duplicates': ['error'], // Disallow duplicate imports
      'perfectionist/sort-imports': ['error', {
        order: 'asc',
        type: 'line-length',
      }], // Sort imports by line length (shortest first)
      // Node.js & Security
      'n/no-path-concat': ['off'], // Disallow path concatenation with __dirname and __filename
      'n/no-unsafe-regex': ['error'], // Disallow unsafe regular expressions
      'n/no-process-exit': ['error'], // Disallow process.exit(), throw an error instead
      'n/no-deprecated-api': ['error'], // Disallow deprecated Node.js APIs
      'n/no-unsupported-features/node-builtins': ['error'], // Disallow built-ins unsupported by the target Node.js version
    },
  },
  globalIgnores([
    'out/**',
    'lib/**',
    'dist/**',
    'build/**',
    'files/**',
    'public/**',
    'generated/**',
    'node_modules/**',
    '.firebase/**',
    '.vscode/**',
  ]),
]);

export default eslintConfig;
