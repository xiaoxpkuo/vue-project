const vm = new Vue({
    el: "#app",

    data: {
        todos: [
            {
                isSelect: false,
                title: 'sleep'
            },
            {
                isSelect: false,
                title: 'eat'
            }
        ],
        addItemCon: '',
        currentItem: '',
        hash: 'all'
    },
    methods: {
        deleteItem(p){
            this.todos = this.todos.filter(item => item !== p);
        },
        addItem(){
            this.todos.push({
                isSelect: false,
                title: this.addItemCon
            });
            this.addItemCon = '';
        },
        actItem(item){
            this.currentItem = item;
        },
        subEditItem(item){
            this.currentItem = '';
        }
    },
    computed: {
        allLen(){
            return this.todos.length
        },
        filterTodos(){
            if (this.hash === 'finish') {
                return this.todos.filter(function (item) {
                    return item.isSelected
                })
            } else if (this.hash === 'unfinish') {
                return this.todos.filter(function (item) {
                    return !item.isSelected
                })
            } else {
                return this.todos;
            }
        }
    },
    directives: {
        focus(el, bindings){
            //console.log(arguments);
            if (bindings.value) {
                //el.focus();
                //如果是v-if需要延时等待dom显示
                setTimeout(() => {
                    el.focus();
                }, 0)
            }
        }
    },
    watch: {
        //watch 默认只监控一层数据
        /*todos(){ 默认写成函数 相当于只写了handler

         }*/
        todos: {
            handler(){
                localStorage.setItem("todos", JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    created(){
        //赋值之前存储的数据
        this.todos = JSON.parse(localStorage.getItem("todos")) || this.todos;
        //获取hash tag 渲染数据
        window.addEventListener('hashchange', (event) => {
            console.log(event.newURL);
            let newHash = event.newURL.slice(event.newURL.indexOf('#/') + 2);
            console.log(newHash);
            this.hash = newHash;
        });
        this.hash =location.hash.slice(location.hash.indexOf('#/') + 2) || 'all';
    }

});

//1 将数据循环到页面
//2 回车添加新数据 isSeleted默认false
//3 删除功能
//4 统计多少件事未完成