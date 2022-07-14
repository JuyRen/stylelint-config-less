module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  customSyntax: "postcss-less", // less语法
  rules: {
    /**
     * 配合stylelint-declaration-block-no-ignored-properties插件
     * https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties
     * */
    "plugin/declaration-block-no-ignored-properties": true,
    "string-quotes": "single",
    "no-invalid-position-at-import-rule": null,
    "value-no-vendor-prefix": null, // https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix/
  },
};
