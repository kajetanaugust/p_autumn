import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import eslintPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import unusedImports from 'eslint-plugin-unused-imports'

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
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'jsx-a11y/alt-text': 'error',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'prettier/prettier': 'error',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'warn',
      'import/first': 'error',
      'import/newline-after-import': 'error',
    },
    ...eslintConfigPrettier,
  },
  // Simplified rules for Astro files without TypeScript resolver
  {
    files: ['**/*.astro'],
    plugins: {
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: 'astro',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'astro:*',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@astrojs/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'astro-*',
              group: 'external',
              position: 'after',
            },
            {
              pattern: 'lucide-astro',
              group: 'external',
              position: 'after',
            },
            {
              pattern: '@components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@sections/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@layouts/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@styles/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@tokens/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@utils/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@types/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@assets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@scripts/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './*.css',
              group: 'sibling',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: eslintPrettier,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off', // Turn off in favor of unused-imports
      semi: ['error', 'never'],
      'prettier/prettier': 'error',

      // Import optimization rules for JS files
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
    },
    ...eslintConfigPrettier,
  },
]
