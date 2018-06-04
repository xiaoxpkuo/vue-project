<template>
    <div class="msg">
        {{msg}}
    </div>
</template>
<script>
    export default {
        data(){
            return {
                msg:"默认信息"
            }
        }
    }
</script>
<style scoped>
    .msg{
        padding: 20px;
        background: #67b168;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>