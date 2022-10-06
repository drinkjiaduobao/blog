<template>
<!-- 博文详情页面 -->
  <div class="myArticleDetails">
    <myNav ref="myNavBar"></myNav>
    <br>
    <br>
    <br>
    <div class="container">
      <myCatalogBar style="margin-left:10.6%;margin-top:1%"></myCatalogBar>
      <div class="course-list">
        <el-row>
          <el-col :span="24" class="blog-container">
            <!--左侧博文部分-->
            <el-col :span="18">
              <myArticleLefter ref="articleLefter"></myArticleLefter>
            </el-col>
            <!--右侧广告部分-->
            <el-col :span="6">
              <myBlogListRighter></myBlogListRighter>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myNav from "@/components/nav";
import myCatalogBar from "@/components/myCatalogBar";
import myBlogListRighter from "@/components/myBlogListRighter";
import myFooter from "@/components/myFooter";
import myArticleLefter from "@/components/myArticleLefter";

import myutil from "@/util/myutil";
export default {
  name: "MyArticleDetails",
  components:{
    myNav,
    myCatalogBar,
    myBlogListRighter,
    myFooter,
    myArticleLefter
  },
  data(){
    return{
       currentArticleId: '-1',
    }
  },
  mounted() {
     console.log('当前的文章编号是：'+this.currentArticleId);

     this.$refs.myNavBar.activeIndex = '/myblogpost/all';
    //  this.$refs.articleLefter.initArticleDetails(this.currentArticleId);
     this.refreshArticle();
  },
  methods:{
      async refreshArticle(){
       this.currentArticleId = await myutil.getQueryVariable('aid');
       this.$refs.articleLefter.initArticleDetails(this.currentArticleId);
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

/* .myArticleDetails{
  width: 100%;
        background: url('@/assets/image/zhidao/webbackgroundimg.jpg') no-repeat;
        background-size: cover;
        position: absolute;
        overflow: hidden;
} */
</style>