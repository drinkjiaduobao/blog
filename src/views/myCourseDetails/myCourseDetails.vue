<template>
<!-- 课程详情 -->
  <div class="myCourseDetails">
    <myNav ref="myNavBar"></myNav>
    <br>
    <br>
    <br>
    <div class="container">
      <!--  课程详情中不需要分类版块组件
      <myCatalogBar></myCatalogBar>
      -->
      <div class="course-list">
        <el-row>
          <el-col :span="24" class="blog-container">
            <!--左侧博文部分-->
            <el-col :span="18">
              <myCourseLefter ref="myCourseLefter"></myCourseLefter>
            </el-col>
            <!--右侧广告部分-->
            <el-col :span="6">
              <myCourseRighter @refreshCourseDetails="refreshCourseDetails"></myCourseRighter>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myFooter from '@/components/myFooter.vue'
import myCourseLefter from "@/components/myCourseLefter";
import myCourseRighter from "@/components/myCourseRighter";

export default {
  name: "MyCourseDetails",
  components:{
    myCourseLefter,
    myNav,
    myCourseRighter,
    myFooter
  },
  mounted(){
    //进入这个路由后，固定导航样式在课程模块
    this.$refs.myNavBar.activeIndex = '/mycourse/all';
    //
  },
  methods:{
    refreshCourseDetails(aid){
        this.$refs.myCourseLefter.refreshCurrentArticle(aid);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 12px;
  width: 100%;
  /* background-color: #fafafa; */
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
/*  */
/* .myCourseDetails{
  width: 100%;
        background: url('@/assets/image/zhidao/webbackgroundimg.jpg') no-repeat;
        background-size: cover;
        position: absolute;
        overflow: hidden;
} */
</style>