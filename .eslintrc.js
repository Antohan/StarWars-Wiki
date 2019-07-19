module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-shadow': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js:  'never',
        vue: 'never', // don't require .vue extension when importing
      },
    ],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'config', // for axios config
      ],
    }],
    'consistent-return': 0,

    // vuejs
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 1,
        multiline:  {
          max:            1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline:  'never',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag:       'never',
        endTag:         'never',
        selfClosingTag: 'always',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
