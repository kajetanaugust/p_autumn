import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    ignores: ['node_modules/**'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx,js,mjs,cjs,jsx,mjsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'jsx-a11y': jsxA11y,
      prettier: eslintPrettier,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'jsx-a11y/alt-text': 'error',
      quotes: ['error', 'single'], // Ensures single quotes are used
      semi: ['error', 'never'], // Ensures semicolons are not used
      'prettier/prettier': 'error', // Integrates Prettier rules as ESLint errors
    },
    ...eslintConfigPrettier,
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: eslintPrettier,
    },
    rules: {
      'no-unused-vars': ['error'],
      semi: ['error', 'never'], // Ensures semicolons are not used
      'prettier/prettier': 'error', // Integrates Prettier rules as ESLint errors
    },
    ...eslintConfigPrettier,
  },
]
