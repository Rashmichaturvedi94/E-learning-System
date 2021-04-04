const path = require('path');

module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        tsx: 'never',
      },
    ],
    // TODO: consider adding e.g. https://github.com/milesj/babel-plugin-typescript-to-proptypes
    'react/prop-types': 'off',
    'no-unused-expressions': 'off'
  },
  overrides: [
    {
      files: ['*.stories.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, './src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
