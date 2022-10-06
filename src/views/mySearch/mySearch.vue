<template>
<!-- 搜索页面 -->
    <div class="mySearch">
        <myNav></myNav>
        <div class="zhanwei"></div>


        <div class="container">
            <div class="container-subject">
                <!--搜索组件-->
                <div class="container-search">
                    <el-form ref="search-form" :inline="true" class="demo-form-inline">
                        <el-form-item label="">
                            <!-- 文本框组件 -->
                        <el-input maxlength="100" v-model="keyword"
                                    placeholder="请输入关键字" class="nm-skin-pretty"></el-input>
                        </el-form-item>
                        <el-form-item label="">
                        <el-button type="primary" icon="el-icon-search" plain @click="doSearch" class="Searchbtn">搜索</el-button>
                        </el-form-item>
                    </el-form>
                </div>

                <div class="course-list">
                <el-row>
                    <el-col :span="24" class="blog-container">
                    <!--全文检索左侧部分-->
                    <el-col :span="18">
                        <mySearchListLefter ref="mySearchListLeft"></mySearchListLefter>
                    </el-col>
                    <!--右侧广告部分-->
                    <el-col :span="6">
                        <myBlogListRighter></myBlogListRighter>
                    </el-col>
                    </el-col>
                </el-row>
                </div>
            </div>
        </div>


        <myFooter></myFooter>
    </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myFooter from '@/components/myFooter.vue'
import mySearchListLefter from '@/components/mySearchListLefter'
import myBlogListRighter from '@/components/myBlogListRighter.vue'

export default {
  components:{
    myFooter,
    myNav,
    mySearchListLefter,
    myBlogListRighter
  },
  data(){
    return{
        keyword:''
    }
  },
  mounted(){

  },
  methods:{
    //点击搜索方法
    doSearch(){
        if(this.keyword.trim().length === 0 || this.keyword.trim() === ""){
            return
        }
        // console.log("需要查询的关键字是："+this.keyword);
        //调用方法
        this.$refs.mySearchListLeft.searchArticleViewList(this.keyword);
    }
  }
}
</script>

<style scoped>
    .container {
    margin-top: 12px;
    width: 100%;
    background-color: #fafafa;
    }

    .demo-form-inline{
        padding-top: 40px;
        text-align: center;
    }

    .course-list {
    width: 80%;
    margin: 2px auto;
    padding-bottom: 10px;
    }

    .container-subject {
    width: 80%;
    height: auto;
    background-color: #fafafa;
    margin: 0px auto;

    }

    .nm-skin-pretty{
        width: 650px;
    }
    /**修改element-ui按钮颜色 */
    /* .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #55499c;
    }
    .el-button--primary{
        background-color: #55499c;
        border-color: #55499c;
    } */
    
    /* .mySearch{
        
    } */
    
</style>

<style>
/* 修改element-ui文本框点击后的样式 */
/* .nm-skin-pretty .el-input.is-active .el-input__inner,
.nm-skin-pretty .el-input__inner:focus { */
    /* transition: 1s; */
    /* border:2px solid #55499c; */
    /* width: 610px; */
/* } */
</style>