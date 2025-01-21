/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  root: true,
  rules: {
    'react/no-unescaped-entities': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@next/next/no-img-element': 0
  }
} 