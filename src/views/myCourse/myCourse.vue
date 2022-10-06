<template>
<!-- 教程页面 -->
    <div class="Course">
    <!-- 导航 -->
      <myNav ref="myNavBar"></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>

      <div class="container">
        <br>
      <myCatalogBar style="margin-left:10.6%;"></myCatalogBar>
      <div class="course-list">
        <el-row>
          <el-col :span="24" class="blog-container">
            <!--左侧博文部分-->
            <el-col :span="18">
              <myCourseListLefter></myCourseListLefter>
            </el-col>
            <!--右侧广告部分-->
            <el-col :span="6">
              <myBlogListRighter></myBlogListRighter>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>

      <!-- 底部组件 -->
      <myFooter></myFooter>
    </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myCatalogBar from "@/components/myCatalogBar";
import myCourseListLefter from "@/components/myCourseListLefter";
import myBlogListRighter from "@/components/myBlogListRighter";
import myFooter from '@/components/myFooter.vue'

export default {
  components:{
    myNav,
    myCatalogBar,
    myCourseListLefter,
    myBlogListRighter,
    myFooter
  },
  mounted(){
    //点击教程默认打开全部这个tab
    this.$refs.myNavBar.activeIndex = '/mycourse/all'
  }
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

    .blog-container {
      width: 100%;
      margin: 0px;
      display: flex;
      padding: 10px;
      align-content: space-around;
    }
</style>