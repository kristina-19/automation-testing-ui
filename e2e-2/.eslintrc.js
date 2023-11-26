module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:mocha/recommended", "plugin:node/recommended", "plugin:chai/recommended"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    },
    "globals": {
        "$": true,
        "describe": true,
        "it": true,
        "browser": true,
        "expect": true
      },
    "plugins": ["mocha", "chai", "node"]
}
