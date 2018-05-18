module.exports = {
    extends: ['last', 'prettier/react', 'plugin:react/recommended', 'airbnb'],
    rules: {
        'prettier/prettier': ['error', { trailingComma: true, 'singleQuote': true }],
        'semi': [2, "always"]
    }
}