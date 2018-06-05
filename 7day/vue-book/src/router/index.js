import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
import Home from '../components/Home.vue';
import List from '../components/List.vue';

export default new Router({
  routes: [
    {path:'/', redirect:'/home'},
    {path:'/add', component:Add},
    {path:'/home', component:Home},
    {path:'/collect', component:Collect},
    {path:'/detail', component:Detail},
    {path:'/list', component:List},
  ]
})
