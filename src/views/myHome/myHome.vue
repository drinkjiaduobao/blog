<template>
<!-- 首页面 -->
  <div class="myHome">
    <!-- 导航 -->
      <myNav></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>
      <!-- 轮播组件 -->
      <myCarousel></myCarousel>
      <!-- 首页最新博文、最新码道组件 -->
      <myHomeNew></myHomeNew>
      <!-- 最新教程组件 -->
      <div class="new_jiaocheng">
          <myTopicCourse></myTopicCourse>
      </div>
      <!-- 底部组件 -->
      <myFooter style="margin-top:130px"></myFooter>
  </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myCarousel from '@/components/myCarousel.vue'
import myFooter from '@/components/myFooter'
import myHomeNew from '@/components/myHomeNew.vue'
import myTopicCourse from "@/components/myTopicCourse";

export default {
  components:{
    myNav,
    myCarousel,
    myFooter,
    myHomeNew,
    myTopicCourse
  },
}
</script>

<style scoped>
    .new_jiaocheng{
        width: 1300px;
        height: 580px; 
        margin: 0 auto;
    }

    /* 页面背景图片 */
    .myHome{
      /* height: 100%; */
        width: 100%;
        /* background: url('@/assets/image/zhidao/webbackgroundimg.jpg') no-repeat; */
        background: #fff;
        background-size: cover;
        position: absolute;
        overflow: hidden;
    }
</style>