<template>
<!-- 博文-----左侧博文内容 -->
  <div class="blog-left">
    <article v-for="(a,index) in pager.smallList" :key="index">
      <h4 style="margin-top:15px"><a href="javascript:void(0);" @click="showArticleDetails(a.aid)">{{ a.title }}</a></h4>
      <div class="article-title">  <!-- /articles/details -->
        <div class="article-text">{{ a.summary.substr(0,45) }}</div>
        <div class="article-timer"><span>{{ a.catalogName }}&nbsp;</span><i
            class="el-icon-date"></i><span>{{ a.createTime }}</span> <span
        ><i class="el-icon-view"></i> {{ a.browseNumber }} </span>
        </div>
      </div>
    </article>

      <div class="article-pager">
        <!--引入elementui的分页组件，前端实现的分页-->
        <!-- 前端实现分页
        <el-pagination
          background
          :current-page.sync="currentPage"
          :page-size="pageSize"
          :pager-count="15"
          layout="prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :total="articleList.length">
        </el-pagination>
        -->
        <!-- 后端实现分页 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="pager.recordCount"
          :page-size="pager.countPerpage"
          :pager-count="15"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    <br>
  </div>
</template>

<script>

export default {
  name: "MyBlogListLefter",
  data() {
    return {
      pager:{},  //分页对象，需要将所查数据传入
      activeCatalogId: this.$route.params.catalog,
      // articleList:[],//该版块下所有文章集合
      // pageSize:10,
      // currentPage:1,
    }
  },
  mounted() {
      this.initArticleList(this.activeCatalogId,1);
  },

  //把当前分页当成一个计算属性(前端实现分页需要)
  // computed:{
  //     articlePager:function(){
  //       return this.articleList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
  //     }
  // },

  methods: {

    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pageSize = size;
      //console.log(this.pageSize)  //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      // this.currentPage = currentPage;
      //console.log(this.currentPage)  //点击第几页       //传入的两个参数要和后端controller传的属性名一致
      this.$store.dispatch('QueryArticlePagerByCatalog',{catalog:this.activeCatalogId,currentPageNumber:currentPage}).then(resp =>{
          this.pager = resp.data.data;
          }).catch(error =>{
              console.log(error);
          })
    },

    //根据文章编号进行跳转博文详情页面
    showArticleDetails(aid){
        console.log('文章编号'+aid);
        window.open('/myblogpostDetails/' + this.activeCatalogId + '?aid=' + aid,'_blank');
    },

    initArticleList(catalog,pageNumber){
        this.$store.dispatch('QueryArticlePagerByCatalog',{catalog:catalog,currentPageNumber:pageNumber}).then(resp =>{
          this.pager = resp.data.data;
          }).catch(error =>{
              console.log(error);
          })
    }
  }
}
</script>

<style scoped>
.blog-left {
  width: 98%;
  height: 98%;
  margin: 10px 0px 10px 0px;
  padding: 10px 0px 10px 0px;
  /* 背景透明 */
  /* background: rgba(255, 255, 255, 0.1); */
}

.article-title {
  width: 98%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 -20px 0;
}

.article-text {
  width: 65%;
  height: 50px;
  padding-right: 20px;
  text-indent: 2em;
  text-align: left;
  color: #444444;
  font-size: small;
  overflow: hidden;
}

article {
  width: 100%;
  border-bottom: 1px dotted #BBB;
}

.article-timer {
  width: 35%;
  text-align: right;
  color: #ccc;
  font-size: small;
}

.article-pager {
  margin-top: 20px;
  width: 100%;
  text-align: center;
}

article h4 {
  margin-left: 20px;
  text-align: start;
}

article h4 a {
  color: #336699;
  text-decoration: underline;
}
</style>

<!-- 修改分页背景色 -->
<style>
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #336699;
    color: #fff;
  }
</style>
