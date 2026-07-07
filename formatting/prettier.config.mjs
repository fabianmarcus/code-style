/**
 * General Prettier configuration.
 * Can be reused in projects via import/export.
 */
const prettierConfig = {
  arrowParens: "always", // Always include parentheses around arrow function parameters
  bracketSpacing: true, // Print spaces between brackets in object literals
  bracketSameLine: false, // Place the closing bracket of multiline HTML/JSX tags on a new line
  endOfLine: "lf", // Enforce LF line endings across all files
  htmlWhitespaceSensitivity: "css", // Respect the default CSS display behavior for HTML whitespace
  jsxSingleQuote: false, // Use double quotes instead of single quotes in JSX attributes
  printWidth: 120, // Wrap lines that exceed 120 characters
  proseWrap: "always", // Wrap markdown text at the configured print width
  quoteProps: "consistent", // Quote all object keys if at least one key requires quotes
  semi: true, // Always add semicolons at statement endings
  singleQuote: false, // Use double quotes instead of single quotes in JavaScript/TypeScript
  tabWidth: 2, // Use an indentation width of 2 spaces
  trailingComma: "all", // Add trailing commas wherever possible in multiline syntax
  useTabs: false, // Indent with spaces instead of tabs
};

export default prettierConfig;
