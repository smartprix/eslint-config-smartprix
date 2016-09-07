module.exports = {
	extends: [
		'eslint-config-airbnb-base'
	].map(require.resolve),

	parser: 'babel-eslint',
	plugins: [
		'babel'
	],

	parserOptions: {
		ecmaVersion: 2016,
		sourceType: 'module',
	},
	
	rules: {
		'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
		'indent': [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],

		'generator-star-spacing': 0,
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
		'operator-linebreak': ['error', 'after'],

		'max-nested-callbacks': ['warn', 3],
		'max-depth': ['warn', 4],
		'max-statements': ['warn', 40],
		'max-params': ['warn', 5],
		'complexity': ['warn', 20],
		'consistent-this': ['warn', 'self'],
		'max-lines': ['warn', {
			max: 300,
			skipBlankLines: true,
			skipComments: true
		}],
		'max-statements-per-line': ['warn', { max: 2 }],
		//'no-negated-condition': 'warn',

		'babel/generator-star-spacing': ['error', {'before': false, 'after': true}],
		'babel/no-await-in-loop': 1,

		'babel/array-bracket-spacing': 0,
		'babel/arrow-parens': 0,
		'babel/flow-object-type': 0,
		'babel/func-params-comma-dangle': 0,
		'babel/new-cap': 0,
		'babel/object-curly-spacing': 0,
		'babel/object-shorthand': 0,
	}
};
