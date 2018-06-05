import modal from '../component/notufy.vue';

let notify = {};
notify.install = (Vue, options = {delay: 3000}) => {
    console.log("installed");
    console.log(Vue);
    console.log(options);
    Vue.prototype.$notify = function (message, opt) {
        if (notify.el) return;
        Object.assign(options, opt);//用调用是传的参数覆盖默认设置的参数
        let VueChild = Vue.extend(modal);//继承 返回的是一个构造函数的子类
        let vm = new VueChild();
        let oDiv = document.createElement('div');
        vm.$mount(oDiv);
        document.body.appendChild(vm.$el);
        vm.msg = message;
        notify.el = vm.$el;
        setTimeout(() => {
            document.body.removeChild(vm.$el);
            notify.el = null;
        }, options.delay)

    }
};
//导出这个包含install的对象 如果使用Vue.use就是调用这个install方法
export default notify;