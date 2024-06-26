module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
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
        'jsx-quotes': ['warn', 'prefer-single'],
        'linebreak-style': ['warn', 'unix'],
        'no-multi-spaces': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'prefer-arrow-callback': 'warn',
        quotes: ['warn', 'single'],
        'quote-props': ['warn', 'as-needed'],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        semi: ['warn', 'always'],
        'space-infix-ops': 'warn',
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
