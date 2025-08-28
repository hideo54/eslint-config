import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
            importPlugin.flatConfigs.recommended,
            js.configs.recommended,
            tseslint.configs.recommended,
            react.configs.flat.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        rules: {
            'comma-dangle': ['warn', 'always-multiline'],
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/no-unresolved': 'off',
            'import/order': [
                'warn',
                {
                    'newlines-between': 'ignore',
                    'alphabetize': {
                        order: 'asc',
                        caseInsensitive: false,
                    },
                },
            ],
            'indent': ['warn', 4],
            'jsx-quotes': ['warn', 'prefer-single'],
            'prefer-arrow-callback': 'warn',
            'quotes': ['warn', 'single'],
            'quote-props': ['warn', 'consistent-as-needed'],
            'semi': ['warn', 'always'],
            'react/function-component-definition': ['warn', {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            }],
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },
]);
