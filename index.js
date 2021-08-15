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
        indent: ['warn', 4],
        'linebreak-style': ['warn', 'unix'],
        'no-multi-spaces': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
