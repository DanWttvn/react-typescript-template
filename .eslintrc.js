module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'commonjs': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    "prettier/prettier": ["error"],
    'indent': [
      'warn',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'react/prop-types': [
      'off'
    ],
    'no-extra-boolean-cast': [
      'off'
    ],
    'no-explicit-any': [
      'off',
      'never'
    ],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
  }
}
