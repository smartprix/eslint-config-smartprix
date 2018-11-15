require('./monkey_patch').addPlugins(['babel', 'html', 'import', 'vue']);

module.exports = {
	extends: [
		'eslint-config-airbnb-base',
		'eslint-plugin-vue/lib/configs/recommended',
	].map(require.resolve),

	plugins: [
		'babel',
		'vue',
		'html',
		'import',
	],

	settings: {
		'html/html-extensions': ['.html', '.we'], // consider .html and .we files as HTML
	},

	parserOptions: {
		parser: require.resolve('babel-eslint'),
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		node: true,
	},

	rules: {
		'brace-style': [2, 'stroustrup', {allowSingleLine: true}],
		indent: [2, 'tab', {SwitchCase: 1, VariableDeclarator: 1}],

		// require trailing commas in multiline object literals
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'ignore',
		}],

		'generator-star-spacing': ['error', {before: false, after: true}],
		'func-names': 0,
		'no-param-reassign': 0,
		'object-curly-spacing': ['error', 'never'],
		'prefer-template': 0,
		'no-cond-assign': ['error', 'except-parens'],
		'no-underscore-dangle': 0,
		'no-plusplus': 0,
		'no-tabs': 0,
		'no-bitwise': 0,
		'no-continue': 0,
		'no-return-await': ['error'],
		'require-await': 0,
		'operator-linebreak': ['error', 'after'],

		'capitalized-comments': 0,
		'no-restricted-syntax': ['error', 'WithStatement'],
		semi: ['error', 'always', {omitLastInOneLineBlock: true}],

		'max-nested-callbacks': ['warn', 3],
		'max-depth': ['warn', 4],
		'max-statements': ['warn', 40],
		'max-params': ['warn', 5],
		complexity: ['warn', 20],
		'consistent-this': ['warn', 'self'],
		'max-lines': ['warn', {
			max: 300,
			skipBlankLines: true,
			skipComments: true,
		}],
		'max-statements-per-line': ['warn', {max: 2}],
		// 'no-negated-condition': 'warn',

		// new rules in 4.0.0
		// disabling it because it doesn't handle comments so disable
		// 'array-bracket-newline': ['error', {multiline: true }],
		'array-bracket-newline': 0,
		'array-element-newline': 0,
		'for-direction': 0,
		'no-buffer-constructor': ['error'],
		'semi-style': ['error', 'last'],
		'switch-colon-spacing': ['error', {after: true, before: false}],

		// this is an important rule
		// but ignoring for now because slightly complicated
		// come back to it later
		'padding-line-between-statements': 0,

		// can't break one parameter into newline, so disable for now
		'function-paren-newline': 0,

		// an important rule, but can be confusing at time, so disable for now
		'prefer-destructuring': 0,

		// change min properties from 4 to 5 in airbnb rule
		'object-curly-newline': ['error', {
			ObjectExpression: {minProperties: 5, multiline: true, consistent: true},
			ObjectPattern: {minProperties: 5, multiline: true, consistent: true},
			ImportDeclaration: {minProperties: 5, multiline: true, consistent: true},
			ExportDeclaration: {minProperties: 5, multiline: true, consistent: true},
		}],

		'implicit-arrow-linebreak': ['error', 'beside'],

		// don't require new line between single line class members
		'lines-between-class-members': ["error", "always", {exceptAfterSingleLine: true}],

		'no-multiple-empty-lines': ["error", {max: 2, maxEOF: 1}],

		'babel/generator-star-spacing': 0,
		'babel/no-await-in-loop': 0,

		'babel/array-bracket-spacing': 0,
		'babel/arrow-parens': 0,
		'babel/flow-object-type': 0,
		'babel/func-params-comma-dangle': 0,
		'babel/new-cap': 0,
		'babel/object-curly-spacing': 0,
		'babel/object-shorthand': 0,
		'babel/no-invalid-this': 0,

		'babel/semi': 0,

		'import/max-dependencies': 0,
		'import/no-absolute-path': 0,

		'import/no-anonymous-default-export': ['error', {
			allowArray: true,
			allowArrowFunction: true,
			allowAnonymousClass: false,
			allowAnonymousFunction: false,
			allowLiteral: true,
			allowObject: true,
		}],

		// doesn't work properly with webpack
		'import/no-unresolved': 0,
		'import/extensions': 0,

		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,

		// allow console during development
		'no-console': 0,

		// vue related options
		'vue/no-dupe-keys': ['error'],
		'vue/no-shared-component-data': ['error'],
		'vue/require-render-return': ['error'],
		'vue/require-valid-default-prop': ['error'],
		'vue/return-in-computed-property': [2, {
			treatUndefinedAsUnspecified: true,
		}],
		'vue/no-async-in-computed-properties': ['error'],
		'vue/no-duplicate-attributes': ['error', {
			allowCoexistClass: true, // default: true
			allowCoexistStyle: true, // default: true
		}],
		'vue/this-in-template': ['error', 'never'],
		'vue/html-quotes': ['error', 'double'],
		'vue/attribute-hyphenation': ['error', 'always'],
		'vue/max-attributes-per-line': ['error', {
			singleline: 3,
			multiline: {
				max: 1,
				allowFirstLine: false,
			},
		}],
		'vue/mustache-interpolation-spacing': ['error', 'always'],
		'vue/name-property-casing': ['error', 'PascalCase'],
		'vue/no-multi-spaces': ['error'],
		'vue/v-bind-style': ['error', 'shorthand'],
		'vue/v-on-style': ['error', 'shorthand'],
		'vue/html-closing-bracket-spacing': ['error'],
		'vue/html-closing-bracket-newline': 0,
		'vue/script-indent': ['error', 'tab', {
			baseIndent: 0,
			switchCase: 0,
		}],
		'vue/html-indent': ['error', 'tab', {
			attribute: 1,
			closeBracket: 0,
		}],
		'vue/require-default-prop': 0,
		'vue/require-prop-types': 0,
		'vue/html-self-closing': 0,

		// disable these 3 rules temporarily, because they are causing parsing problems
		// re-enable them later as they become correct
		'import/no-named-as-default': 0,
		'import/no-named-as-default-member': 0,
		'import/export': 0,
	},
};
