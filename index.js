module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'next',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'array-bracket-spacing': ['warn', 'never'],
        'comma-spacing': ['warn', {
            before: false,
            after: true,
        }],
        'comma-dangle': ['warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        indent: ['warn', 4],
        'linebreak-style': ['warn', 'unix'],
        'no-multi-spaces': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'prefer-arrow-callback': 'warn',
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'space-infix-ops': 'warn',
        'quote-props': ['warn', 'as-needed'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@next/next/no-img-element': 'off',
        '@next/next/no-html-link-for-pages': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
