<template>
<!-- 码道 -->
    <div>
      <!-- 导航 -->
      <myNav></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>

      <!-- 左、右侧组件 -->
      <div class="container">
        <div class="course-list">
          <el-row>
            <el-col :span="24" class="blog-container">
              <!--左侧博文部分-->
              <el-col :span="18">
                <myCoderContainer></myCoderContainer>
              </el-col>
              <!--右侧广告部分-->
              <el-col :span="6">
                <myBlogListRighter></myBlogListRighter>
              </el-col>
            </el-col>
          </el-row>
        </div>
      </div>


      <!-- err404组件 -->
      <!-- <myErr></myErr> -->

      <!-- 底部组件 -->
      <myFooter></myFooter>
    </div>
</template>

<script>
import myNav from '@/components/nav.vue';
import myFooter from '@/components/myFooter.vue';
import myCoderContainer from '@/components/myCoderContainer';
import myBlogListRighter from '@/components/myBlogListRighter.vue'


export default {
  components:{
    myNav,
    myFooter,
    myCoderContainer,
    myBlogListRighter
  },
}
</script>


<style scoped>
    .container {
  margin-top: 12px;
  width: 100%;
  background-color: #fafafa;
}
.course-list {
  width: 80%;
  margin: 5px auto;
  padding-bottom: 10px;
}

.container-subject {
  width: 80%;
  height: auto;
  background-color: #fafafa;
  margin: 0px auto;

}
</style>