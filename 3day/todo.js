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
        addItemCon:''
    },
    methods: {
        deleteItem(p){
            this.todos = this.todos.filter(item => item !== p);
        },
        addItem(){
            this.todos.push({
                isSelect: false,
                title:this.addItemCon
            });
            this.addItemCon='';
        }
    },
    computed: {
        allLen(){
            return this.todos.length
        }
    }
});

//1 将数据循环到页面
//2 回车添加新数据 isSeleted默认false
//3 删除功能
//4 统计多少件事未完成