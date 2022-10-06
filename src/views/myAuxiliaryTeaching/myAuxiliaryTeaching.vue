<template>
<!-- 辅助教学 -->
    <div>
        <!-- 导航 -->
      <myNav></myNav>
      <div class="zhanwei"></div>
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
</template>

<script>
import myNav from '../../components/nav.vue'

export default {
  components:{
    myNav
  },
}
</script>

<style>

</style>