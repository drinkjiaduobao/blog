<template>
<!-- 博文 -->
    <div class="blogpost">
        <!-- 导航 -->
      <myNav ref="myNavBar"></myNav>
      <!-- 占位 -->
      <div class="zhanwei"></div>
      <!-- 博文主体内容 -->
      <div class="container">
        <!-- 分类导航组件 -->
        <br>
        <myCatalogBar style="margin-left:10.6%;" ref="catalogBar" @refreshArticleList="refreshArticleList"></myCatalogBar>
        <div class="course-list">
          <el-row>
            <el-col :span="24" class="blog-container">
              <!--左侧博文部分-->
              <el-col :span="18">
                <myBlogListLefter ref="blogListLeft"></myBlogListLefter>
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
import myFooter from '@/components/myFooter.vue'
import myCatalogBar from "@/components/myCatalogBar";
import myBlogListRighter from "@/components/myBlogListRighter";
import myBlogListLefter from "@/components/myBlogListLefter";


export default {
  components:{
    myNav,
    myFooter,
    myCatalogBar,
    myBlogListRighter,
    myBlogListLefter
  },

  mounted(){
    // this.refreshArticleList();
    // this.$refs.myNavBar.activeIndex = '/articles/all'
    this.$refs.myNavBar.activeIndex = '/myblogpost/all'
  },

  methods:{

    //刷新文章列表集合
    refreshArticleList(catalogName){
      //重置页码
      this.$refs.blogListLeft.initArticleList(catalogName,1);
      
      // this.$refs.blogListLeft.currentPage = 1;
    }
  }
}
</script>

<style>
    .container {
      margin-top: 12px;
      width: 100%;
      /* background-color: #ffffff; */
      background-color: #fafafa;
    }

    .course-list {
      width: 80%;
      margin: 5px auto;
      padding-bottom: 10px;
      background: #ffffff;
    }

  .blog-container {
    width: 100%;
    margin: 0px;
    display: flex;
    padding: 10px;
    align-content: space-around;
  }
  /*  */
  /* .blogpost{
      width: 100%;
        background: url('@/assets/image/zhidao/webbackgroundimg.jpg') no-repeat;
        background-size: cover;
        position: absolute;
        overflow: hidden;
  } */
</style>