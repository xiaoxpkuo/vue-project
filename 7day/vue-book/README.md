##安装需要用到的库
`npm install less less-loader axios vuex bootstrap`
-mock 是模拟数据接口
-api 代表所有的接口
-base 代表基础组件
-components 页面级组件
-iconfont图标
-meta:vp快速生成手机端meta快捷键

## 路由元信息
new router({
  path:"/",
  components:"home",
  meta:{
    keepAlive:true
  }
})

<keep-alive>
  <router-view v-if="$router.meta.keepAlive"></router-view>
</keep-alive>
</keep-alive>


##vuex是为大型项目 主要是状态管理，将数据统一管理











# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
