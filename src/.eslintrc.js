module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.js', // Path to your Babel configuration file
    },
  },
};
