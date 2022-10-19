module.exports = {
    plugins: [
        "react"
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "eslint-config-airbnb"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        "react/no-set-state": "off",
        "max-lines-per-function": [1, 40],
        "import/prefer-default-export": "off"
    }
};
