// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
const configArray = [
  {
    plugins: {
      react: fixupPluginRules(react),
    },
  },
];

export default configArray;
