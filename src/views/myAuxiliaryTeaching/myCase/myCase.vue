<template>
<!-- 案例中心 -->
  <div>
      <!-- 导航 -->
      <myNav></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>
      <!-- err404组件 -->
      <myErr></myErr>
      <!-- 底部组件 -->
      <myFooter style="margin-top:55px"></myFooter>
  </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myFooter from '@/components/myFooter.vue'
import myErr from '@/components/myErr.vue'

export default {
    components:{
    myNav,
    myFooter,
    myErr,
  },
}
</script>

<style scoped>

</style>