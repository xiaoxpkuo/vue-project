// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.use(Vuex);

//声明一个状态常量
const state = {
  count: 0
};
//管理员mutations
const mutations = {
  add(store,num){//store 自动注入的 值得是当前的状态
    store.count += num;
  }
};
//容器是唯一的一个
let store = new Vuex.Store({
  state,
  strict: true,//只能通过mutation（管理员）来修改状态
  mutations
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//所有的组件 都会有一个属性 this.$store
  components: {App},
  template: '<App/>'
})
