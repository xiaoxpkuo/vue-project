import Vue from 'vue';

import App from './App.vue';
console.log(App);

new Vue({
    el: "#app",
    render: (h) => h(App)
    /*render:function (c) {
        return c('h1',[
            'hello2',
            c('span','头条')
        ])
    }*/
});