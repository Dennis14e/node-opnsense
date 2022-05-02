module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jsdoc',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsdoc/recommended',
    ],
    rules: {
        "indent": [ "error", 4, { "MemberExpression": 0, "SwitchCase": 1 } ],
        "max-len": [ "error", { "code": 120 } ],
        "semi": [ "error", "always" ],
        "space-before-function-paren": "error",
        "array-bracket-spacing": [ "error", "always" ],
        "object-curly-spacing": [ "error", "always" ],
        "keyword-spacing": "error",
        "spaced-comment": "error",
        "jsdoc/no-undefined-types": "off",
        "jsdoc/check-tag-names": [ "error", { "definedTags": [ "openapi" ] } ]
    },
};
