module.exports = {
    "extends": "airbnb",
    "env": {
      "es6": true
    },
    "parser": "babel-eslint",
    "rules": {
      "no-console": 0,
      "no-plusplus": 0,
      "react/forbid-prop-types": 0,
      "comma-dangle": 0,
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
