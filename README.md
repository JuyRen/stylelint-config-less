# Stylelint Less 配置集合

本项目，将所有依赖都安装在`dependencies`中，做一个集合操作。
在正式开发的项目中，无需再次安装其他依赖，只需要安装该仓库即可

## 安装

```shell
  yarn add @juyren/stylelint-config-personal -D
```

## 集成功能

1. 使用`stylelint-config-standard`规则
2. 自动排序 `stylelint-config-recess-order`
3. 忽略与 prettier 冲突的规则 `stylelint-config-prettier`
4. 检查可能存在冲突的属性值 `stylelint-declaration-block-no-ignored-properties`
5. 预设`rules`

## 注意

1. `postcss-less`在开发项目中，使用`yarn`会无法安装, 使用`npm`正常安装。如果使用`yarn`, 需要在开发项目中手动安装，版本需要跟本仓库一致 `^6.0.0`
