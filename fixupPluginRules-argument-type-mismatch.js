import { fixupPluginRules } from '@eslint/compat';

// typescript-eslint
const typescriptEslintPlugin =
  /** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Plugin} */ ({});
fixupPluginRules(typescriptEslintPlugin);

// @types/eslint
const eslintPlugin = /** @type {import('eslint').ESLint.Plugin} */ ({});
fixupPluginRules(eslintPlugin);
