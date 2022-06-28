const config = {
    semi: false,
    tabWidth: 4,
    printWidth: 120,
    singleQuote: false,
    jsxSingleQuote: true,
    trailingComma: "all",
    arrowParens: "avoid",
    endOfLine: "auto",
    importOrder: [
        "^@/styles/(.*)$",
        "^@/components(.*)$",
        "^@/(.*)$",
        "^[./]",
        "^",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};

module.exports = config;
