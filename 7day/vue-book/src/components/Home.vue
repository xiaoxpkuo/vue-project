<template>
  <div>
    <MHeader :back="true">首页</MHeader>
    <div class="content">
      <Swiper :swiperSlides="urls"></Swiper>
    </div>
  </div>
</template>
<script>
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import {getSliders} from '../api'
  export default {
    data(){
      return {
        urls: []
      }
    },
    methods: {},
    computed: {},
    created(){
      getSliders().then((res) => {
        this.urls = res.data;
      })
    },
    components: {
      MHeader,
      Swiper
    }
  }
</script>
<style scoped>

</style>
