module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  /**
   * 1. stylelint-declaration-block-no-ignored-properties (https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
   */
  plugins: ["stylelint-declaration-block-no-ignored-properties"],
  rules: {
    // 解决在元素选择器内 @import 文件时，校验问题
    "no-invalid-position-at-import-rule": null,

    /**
     * https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix/
     * 可以解决 display: -webkit-box， 校验问题
     */
    "value-no-vendor-prefix": null,

    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: [
          "PingFangSC-Light",
          "PingFangSC-Medium",
          "PingFangSC-Semibold",
        ],
      },
    ],

    // 配合stylelint-declaration-block-no-ignored-properties插件
    "plugin/declaration-block-no-ignored-properties": true,
  },
  overrides: [
    {
      // https://stylelint.io/user-guide/usage/options/#customsyntax
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
};
