import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//install 方法 插件方法
import Home from '../component/Home.vue';
import List from '../component/List.vue';
let router = new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home
        },
        {
            path: "/list",
            component: List
        },
        {
            path: "*",
            redirect: "/home"
        },
    ]
});
export default router;