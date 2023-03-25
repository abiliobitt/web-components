module.exports = {
  extends: ['standard-with-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/indent': 'off',
    'no-tabs': 0
  }
}
