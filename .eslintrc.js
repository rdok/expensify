module.exports = {
  env: {
    browser: true,
    es2020: true,
    mocha: true,
    "jest/globals": true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: "module",
  },
  parser: "babel-eslint",
  plugins: ["react", "jest"],
  rules: {},
};
