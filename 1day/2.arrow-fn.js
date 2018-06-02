//箭头函数没有this arguments
//自己家没有this就找上一级的this
//如何更改this
//1）call apply bind
//2）var that = this;
//3）=>

//如何确定this 看谁调用的 .前面是谁this就是谁
/*function a(b) {
    return b+1
}
let a=b=> b+1;*/
//去掉function关键字，参数有一个可以省略小括号，小括号与大括号之前有一个箭头，
//如果没有大括号则直接是返回值，有大括号必须return

/*function a(b) {
    return function (c) {
        return b+c;
    }
}*/

let a=b=>c=>b+c; //高阶函数 （俩箭头及以上）
console.log(a(1)(2));
//在VUE中 很多时候不能使用箭头函数

//框架 vue  拥有完整的解决方案 我们写好人家调用我
//库 jQuery underscore zepto 我们调用他

//渐进式
//vue全家桶 vuejs+vue-router+vuex+axios



