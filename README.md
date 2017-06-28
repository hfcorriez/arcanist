# Arcanist-cli

Phabricator 中 arcanist 安装工具

## Requires

- `php`: mac 一般自带 php， windows 要安装 php 可以[参考这里](https://secure.phabricator.com/book/phabricator/article/arcanist_windows/#detailed-php-install-ins)
- `git` (可选)


## Install

```
# 安装
npm install -g arcanist-cli

# 认证
arc install-certificate http://your_phabricator_site.com
```


官方的安装方法： [Arcanist Quick Start](https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/)


`使用 npm 安装的方法` 与 `官方的安装方法` 相比，优点是：

- **无需配置：** 安装完后直接就可以使用 `arc` 命令，无需任何配置
