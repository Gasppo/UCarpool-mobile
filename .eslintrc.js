module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['off', {singleQuote: true}],
    'react-native/no-inline-styles': 'off',
    'semi': 'off',
    'curly': 'off',
    'no-spaced-func': 'off',
  },
};
