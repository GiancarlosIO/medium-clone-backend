const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'pluggable-babel-eslint',
  extends: [
    'prettier',
    // "typescript",
    // "typescript/prettier"
  ],
  plugins: ['import', 'prettier'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    plugins: ['typescript'],
    ecmaVersion: 8,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': ['error', {
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "all"
    }]
  }
};