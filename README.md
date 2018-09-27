# node-spider
# [众成翻译](https://www.zcfy.cc/)文章列表页以及内容爬取

> Nuxt.js project

## Build Setup

``` bash
# 安装依赖
$ yarn install # Or yarn install*[see note below]

# 开发 localhost:3000
$ yanr dev

# 构建
$ yarn build

# launch server
$ yarn start
```
## 地址
http://xxhing.org

## 文件说明
- 项目结构请查看[官方文档](https://zh.nuxtjs.org/guide/directory-structure)
- 接口文件在`controllers`文件下，添加文件，自动生成路由

## 参考
更多请参考[官方文档](https://zh.nuxtjs.org/)

## TODO
- [x] ~~server路由的filter，比如接口不能直接访问，或者未登录的情况下，一些页面不能访问~~
- [x] page的filter，在middlware中实现