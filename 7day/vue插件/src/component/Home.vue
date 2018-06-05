<template>
    <div>
        home
        <button @click="show">notify</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods: {
            show(){
                this.$notify("新信息",1000)
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>