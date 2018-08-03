<template>
  <div>
    计数器：
    <button>-</button>
    <br>
    当前：{{this.$store.state.count}}
    <br>
    计数器：
    <button @click="add">+</button>
    <br>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        count: 1
      }
    },
    methods: {
      add(){
        this.$store.commit('add',2)
      }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped>

</style>
