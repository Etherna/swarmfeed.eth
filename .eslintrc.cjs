module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: "18",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": ["warn"],
    "@typescript-eslint/consistent-type-imports": ["error"],
    semi: ["error", "never"],
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["info", "warn", "error", "debug", "table"] }]
        : "off",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "no-restricted-imports": ["warn", { patterns: ["../"] }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
}
