// @ts-check

import { fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

const configArray = tseslint.config({
  plugins: {
    react: fixupPluginRules(react),
  },
});

export default configArray;
