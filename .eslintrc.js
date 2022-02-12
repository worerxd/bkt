module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', {singleQuote: true}],
    'array-callback-return': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {namedComponents: 'arrow-function'},
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {consistent: true, multiline: true},
        ObjectPattern: {consistent: true, multiline: true},
        ImportDeclaration: {consistent: true, multiline: true},
        ExportDeclaration: {multiline: true, minProperties: 3},
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
