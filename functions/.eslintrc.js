/* eslint-disable quote-props */
module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'object-curly-spacing': ['error', 'always'],
    },
    parserOptions: {
        requireConfigFile: false,
    },
    parser: '@babel/eslint-parser',
};
