<template>
  <div id="app">
    <i class="iconfont icon-ybbindex"></i>
    <i class="iconfont icon-shoucang"></i>
    <i class="iconfont icon-add"></i>
    <i class="iconfont icon-list"></i>
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue';

  export default {
    name: 'App',
    components:{
        Tab
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none
  }

  a {
    text-decoration: none
  }

  input, button {
    -webkit-appearance: none;
  }
</style>
