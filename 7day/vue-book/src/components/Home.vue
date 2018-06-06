<template>
    <div>
      <MHeader :back="true">首页</MHeader>
      <Swiper></Swiper>
          </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import Swiper from '../base/Swiper.vue';
    export default {
        data(){
            return {}
        },
        methods: {},
        computed: {},
        components: {
          MHeader,
          Swiper
        }
    }
</script>
<style scoped>
  .swiper-container{
    height: 300px;
    justify-content: center;
    display: flex;
  }
</style>
