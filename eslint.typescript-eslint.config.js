// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
const configArray = [
  {
    plugins: {
      react: fixupPluginRules(react),
    },
  },
];

export default configArray;
