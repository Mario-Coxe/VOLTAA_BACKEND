module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/naming-convention': 'off',
    // outras regras que você possa querer adicionar ou ajustar
  },
}
