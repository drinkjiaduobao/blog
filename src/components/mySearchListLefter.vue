<template>
  <div class="blog-left">
    <article v-for="(a,index) in articlePager" :key="index">
      <h4><a href="javascript:void(0);" @click="showArticleDetails(a.aid)">{{ a.title }}</a></h4>
      <div class="article-title">
        <div class="article-text">{{ a.summary }}</div>
        <div class="article-timer"><span>{{ a.catalogName }}&nbsp;</span><i
            class="el-icon-date"></i><span>{{ a.createTime }}</span> <span
        ><i class="el-icon-view"></i> {{ a.browseNumber }} </span>
        </div>
      </div>
    </article>

    <div class="article-pager">

     <el-pagination
          background
          :current-page.sync="currentPage"
          :size-change="handleSizeChange"
          layout="prev, pager, next"
          :total="articleList.length"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
          :pager-count="15"
      >
      <!-- :pager-count 总页数就是集合的长度 -->
      </el-pagination>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "mySearchListLefter",
  data() {
    return {
      pageSize:10,//每页的记录数
      currentPage:1,//当前页号
      activeCatalogId: 'all',
      articleList:[], //该板块下的所有文章集合
      // pageSize: 10,   //每页的记录数
      // currentPage: 1, //当前的页号，

    }
  },
  mounted() {
    //加载第一页的数据
    // this.initArticleList();
    // this.searchArticleViewList();
  },

  //把当前分页数据当成一个计算属性
  computed: {
    articlePager: function () {
      return this.articleList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    }
  },
  methods: {
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      this.pageSize = size;
      //console.log(this.pageSize)  //每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      //console.log(this.currentPage)  //点击第几页
    },

    showArticleDetails(aid) {
      console.log('文章编号：' + aid);
      //window.location.href='/articles/details'
      window.open('/myblogpostDetails/' + this.activeCatalogId + '?aid=' + aid, '_blank');
    },

    // initArticleList() {
    //   http.get('/getArticleList').then(resp=>{
    //     this.pager.smallList = resp.data.data;
    //   }).catch(err=>{
    //     console.log(err);
    //   })
    // },

    searchArticleViewList(keyword){
      this.$store.dispatch('SearchArticlesWithKeyword',{
        keyword: keyword
      }).then(resp=>{
         if(resp.data.code === 200){
           this.articleList = resp.data.data;
          //  console.log("---------模糊查询结果：-----------");
          //  console.log(this.articleList);
         }else{
          this.$message.error(resp.data.message);
         }
      }).catch(err=>{
        console.log(err)
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
  background: #FFF;
}

.article-title {
  width: 98%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0 20px 0;
}

.article-text {
  width: 65%;
  height: 18px;
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
  color: #336699;;
  text-decoration: underline;
}
</style>
