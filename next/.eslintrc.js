module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
		project: './tsconfig.json',
        tsconfigRootDir: __dirname,
	},
    extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:@next/next/recommended'],
    env: {
        browser: true,
        node: true,
    },
    plugins: ['import'],
    rules: {
        /* Mirror JavaScript configuration */
        'max-len': ['error', {
            code: 160,
            ignoreStrings: true,
        }],
        '@typescript-eslint/semi': ['error', 'never'],
        'implicit-arrow-linebreak': 0,
        'func-style': [
            'error',
            'declaration', {'allowArrowFunctions': true}
        ],
        '@typescript-eslint/indent': ['error', 'tab'],
        camelcase: ['error', {properties: 'never'}],
    
        'import/no-cycle': 1,
        'no-void': 0,
        'no-tabs': 0,
        'import/prefer-default-export': 0,
        'linebreak-style': 0,
    
        '@typescript-eslint/object-curly-spacing': ['error', 'never'],
        'object-curly-newline': 0,
    
        'react/jsx-one-expression-per-line': 0,
        'react/no-access-state-in-setstate': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-indent': [2, 'tab'],
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-indent-props': 0,
        'react/no-danger': 0,
        /* SPICES & HERBS */
        'react/require-default-props': 0,
        'jsx-quotes': ['error', 'prefer-single'],
        "@typescript-eslint/explicit-module-boundary-types": "off",
    
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/media-has-caption': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 0,
    
        'global-require': 0,
    
        /* TypeScript-specific rules */
        '@typescript-eslint/no-namespace': 'off',
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off',
            },
        },
    ]

}