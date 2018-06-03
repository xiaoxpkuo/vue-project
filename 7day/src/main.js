import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from './component/Home.vue';
import List from './component/List.vue';
let router=new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home
        },
        {
            path:"/list",
            component:List
        },
    ]
});


new Vue({
    el:'#app',
    render:h=>h(App),
    router
});