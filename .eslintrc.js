module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", 'react-hooks'
    ],
    "rules": {
        "react/react-in-jsx-scope": 'off'
    }
}
