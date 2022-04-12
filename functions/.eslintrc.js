module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
		project: './tsconfig.json',
        tsconfigRootDir: __dirname,
	},
    extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
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
    
        /* SPICES & HERBS */
        "@typescript-eslint/explicit-module-boundary-types": "off",
    
    
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