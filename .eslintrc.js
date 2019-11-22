module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
      'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
      'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
      ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
      sourceType: 'module',  // Allows for the use of imports
      ecmaFeatures: {
          jsx: true,  // Allows for the parsing of JSX
      },
  },
  rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      // e.g. "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/semi": ["error"],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-ignore": "off",
      "react/display-name": 0,

      "eol-last": ["error", "always"],
      // "no-extra-semi": ["error", "always"],
      "semi": "off",
      "indent": ["error", 2, { "SwitchCase": 1 }]
  },
  settings: {
      react: {
          version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
      },
  },
};