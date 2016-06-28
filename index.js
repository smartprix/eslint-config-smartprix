module.exports = {
  extends: [
    './legacy',
    './rules/es6',
    './rules/imports',
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: [
    'babel'
  ],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    strict: 2,
    'generator-star-spacing': 0,
    'func-names': 0,
    'no-param-reassign': 0,
    'object-curly-spacing': ['error', 'never'],
    'prefer-template': 0,
    'no-cond-assign': ['error', 'except-parens'],
    'no-underscore-dangle': 0,

    'babel/generator-star-spacing': 1,
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
