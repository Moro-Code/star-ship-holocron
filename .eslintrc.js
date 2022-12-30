module.exports = {
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      extends: [
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:@next/next/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],

      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      plugins: ["@typescript-eslint", "jsx-a11y", "prettier"],
      rules: {
        "@typescript-eslint/await-thenable": "error",
      },
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "jsx-a11y", "prettier"],
  rules: {
    "no-console": "error",
    "no-await-in-loop": "error",
  },
};
