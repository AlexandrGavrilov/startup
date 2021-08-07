const path = require('path');

module.exports = {
  extends: ['airbnb-typescript-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extension: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        paths: ['./src'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-var-requires': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/no-unknown-property': 0,
    'react/require-default-props': 0,
    'no-unused-expressions': 0,
    camelcase: 0,
    'no-nested-ternary': 0,
    'prefer-destructuring': 0,
    'import/no-named-as-default': 0,
    'consistent-return': 0,
    'no-useless-return': 0,
    'no-prototype-builtins': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 0,
    'react-hooks/exhaustive-deps': 0,
    'import/no-extraneous-dependencies': 0,
    'react/state-in-constructor': 0,
    'no-shadow': 0,
    'function-paren-newline': 'off',
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', 'ts', 'tsx'] },
    ],
    'no-undef': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/destructuring-assignment': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
        varsIgnorePattern: 'key',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 90,
        tabWidth: 2,
        comments: 90,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'config',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'config/**',
            group: 'internal',
            position: 'before',
          },

          {
            pattern: 'router/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'router',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'api',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'api/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'store',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'store/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'shared',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'shared/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'modules',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: 'modules/**',
            group: 'internal',
            position: 'before',
          },
          ...Array(10)
            .fill(1)
            .map((_, i) => ({
              pattern: `${Array(i)
                .fill(1)
                .map(() => `../`)
                .join('')}../**/**`,
              group: 'internal',
              position: 'after',
            }))
            .reverse(),
          {
            pattern: './**/**',
            group: 'internal',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
