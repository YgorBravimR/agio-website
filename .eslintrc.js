module.exports = {
  root: true,
  extends: ["custom"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "turbo/no-undeclared-env-vars": "off",
    //TODO: Change this to "error" when you're ready to enforce it
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
}
