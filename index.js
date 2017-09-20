require('./monkey_patch').addPlugins(['babel', 'html', 'import']);

module.exports = {
	extends: [
		'eslint-config-airbnb-base',
	].map(require.resolve),

	parser: require.resolve('babel-eslint'),
	plugins: [
		'babel',
		'html',
		'import',
	],

	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},

	env: {
		browser: true,
		node: true,
		commonjs: true,
		jquery: true,
	},

	globals: {
		d: false,
		_: false,
		moment: false,
		cfg: false,
		sm: false,
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
	},
};
