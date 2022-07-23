module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".js", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
    "react/function-component-definition": "off",
    "react/style-prop-object": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-constructed-context-values": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "off",
    "react/no-unstable-nested-components": "off",
    camelcase: "off",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
  },
};
