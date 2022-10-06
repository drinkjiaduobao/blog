<template>
<!-- 实战 -->
    <div>
        <!-- 导航 -->
      <myNav></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>
      <!-- 实战内容组件 -->
      <div class="container">
        <div class="container-subject">
          <myProjectsContainer></myProjectsContainer>
        </div>
      </div>
      <!-- 底部组件 -->
      <myFooter style="margin-top:60px"></myFooter>
        
    </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myProjectsContainer from "@/components/myProjectsContainer";
import myFooter from '@/components/myFooter.vue'

export default {
  components:{
    myNav,
    myFooter,
    myProjectsContainer
  },
}
</script>

<style scoped>
    .container {
      margin-top: 12px;
      width: 100%;
      background-color: #fafafa;
    }

    .container-subject {
      width: 80%;
      height: auto;
      background-color: #fafafa;
      margin: 0px auto;

    }
</style>