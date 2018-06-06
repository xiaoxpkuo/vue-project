<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-ybbindex"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-shoucang"></i>
      <span>添加</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-add"></i>
      <span>收藏</span>
    </router-link>
    <!--<router-link to="/detail">详情</router-link>-->
    <router-link to="/list">
      <i class="iconfont icon-list"></i>
      <span>列表</span>
    </router-link>
  </div>
</template>
<style scoped lang="less">
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  a{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #00a0ff;
    flex-direction: column;
    border-top: 1px solid #ccc;
    &.router-link-active{
      color: red;
    }
  }
}
</style>
