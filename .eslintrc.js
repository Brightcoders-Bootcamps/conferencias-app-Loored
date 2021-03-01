module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  plugins: ['react', 'react-native'],
  ecmaFeatures: {
    jsx: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'react/no-did-mount-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/jsx-uses-vars': 2,
    'no-undef': 2,
    semi: 2,
    'react/prop-types': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    // we only want single quotes
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'always'],
    // we use 2 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
  },
  globals: {
    GLOBAL: false,
    it: false,
    expect: false,
    describe: false,
  },
};
