<template>
  <div class="blog-details-container">
    <!---文章标题作者信息发布时间摘要部分开始-->
    <div class="blog-details-container-header">
      <h2>{{ article.title }}</h2>
      <div style="display: flex;justify-content:space-around;color:#ccc">
        <div class="blog-details-container-header-subtitle"><i class="el-icon-user"></i>&nbsp;{{ article.username }}
        </div>
        <div class="blog-details-container-header-subtitle"><i class="el-icon-date"></i>&nbsp;{{ article.createTime }}
        </div>
        <div class="blog-details-container-header-subtitle"><i class="el-icon-s-grid"></i>{{ article.catalogName }}
        </div>
        <div class="blog-details-container-header-subtitle"><span v-if="$store.state.currentLoginStatusData"
                                                                  style="cursor: pointer"
                                                                  @click="addToFavorites"><i
            v-if="!isFavorites" class="el-icon-star-off"></i> <i
            v-if="isFavorites" class="el-icon-star-on"></i>收藏</span>
        </div>
        <div class="blog-details-container-header-subtitle"><i
            class="el-icon-chat-line-round"></i>{{ article.replyNumber }}
        </div>
        <div v-if="isAdmin" class="blog-details-container-header-subtitle"><i class="el-icon-edit"></i><a
            :href="'/pEditArticle/'+article.aid">编辑</a></div>
      </div>
      <hr style="margin-top:4px;">
      <div class="blog-details-container-summary">
        {{ article.summary }}
      </div>
    </div>
    <!---文章标题作者信息发布时间摘要部分结束-->
    <!----文章详情markdown html显示部分开始------>
    <div class="markdown-body" v-html="article.content">

    </div>
    <!----文章详情markdown html显示部分结束------>
    <div>
      <el-divider content-position="left"><i class="el-icon-share"></i>分享</el-divider>
    </div>
    <!--vshare分享插件-->

    <share :config="config"></share>


    <br>
    <!--打赏作者-->
    <el-divider content-position="left"><i class="el-icon-coin"></i>打赏</el-divider>
    <div>
      <el-image
          style="width: 120px; height: 120px"
          src="https://cdn.drinkjiaduobao.cn/qrcode_for_gh_b85aa3a99cee_258.jpg"
          fit="fit"></el-image>
      <el-image
          style="width: 120px; height: 120px"
          src="https://cdn.drinkjiaduobao.cn/qrcode_for_gh_b85aa3a99cee_258.jpg"
          fit="fit"></el-image>
    </div>

    <!--评论组件-->
    <myReply ref="myreply"></myReply>
  </div>
</template>

<script>
import myReply from "@/components/myReply";
//引入分享组件
import Share from 'vue-social-share'
Vue.use(Share);

export default {
  name: "MyCourseLefter",
  components: {
    myReply
  },
  data() {
    return {
      isFavorites: false,
      isAdmin: this.$store.state.currentIsAdminStatusData, //默认不是管理员
      //当前的文章编号
      currentArticleId: this.$route.query.aid,
      //当前文章对象
      article: {},
      //分享组件的配置对象
      config: {
        url: 'https://www.simoniu.com/pBlogDetails?catalog=' + this.$store.state.currentCatalogNameData + '&aid=' + this.$route.query.aid,
        disabled: ['google', 'facebook', 'twitter'] // 禁用的站点
      }
    }
  },
  mounted() {
    //  this.refreshCurrentArticle();
  },
  methods: {
    //刷新当前文章
    refreshCurrentArticle(aid) {
      this.$store.dispatch('QueryArticleByAid',{aid:aid}).then(resp=>{
        this.article = resp.data.data;
        // this.htmlContent = md.render(this.article.mdcontent);
        //console.log(this.htmlContent);
      }).catch(err=>{
        console.log(err)
      })
    },

    addToFavorites() {
      console.log("----添加到收藏夹-----");
    }
  }
}
</script>

<style scoped>

@import 'highlight.js/styles/default.css';

.blog-details-container {
  width: 98%;
   background-color: #FFF; 
   border: 1px solid #ddd; 
  border-radius: 5px;
  text-align: left;
}

.blog-details-container-header h2 {
  text-align: center;
  color: #336699;
}

.blog-details-container-summary {
   background-color: #EEE;
  border: 0px solid #ccc; 
  border-radius: 10px;
  padding: 20px 20px;
  margin: 10px;
  display: block;
  color: #666
}

.blog-details-container-header-subtitle {
  font-size: small;
}


.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 12px;

}

.markdown-body :v-deep pre {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: scroll;
  background: #F3F3F3;

}

.markdown-body :v-deep pre code{
  font-family: 'Courier New',"Arial",serif;
  font-size: x-small;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>