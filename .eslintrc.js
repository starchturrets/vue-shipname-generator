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
  overrides: [
    {
      files: '*.html',
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier', 'html'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'error',

      {
        usePrettierrc: true,
      },
    ],
  },
};
