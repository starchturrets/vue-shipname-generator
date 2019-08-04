module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      // {
      //   singleQuote: true,
      //   trailingComma: 'all',
      // },
      {
        usePrettierrc: true,
      },
    ],
  },
};
