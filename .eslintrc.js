module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/essential',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },

  plugins: ['vue', '@typescript-eslint'],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/semi': 'off',
    'class-methods-use-this': 'off',
  },
};
