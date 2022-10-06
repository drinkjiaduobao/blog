<template>
  <div class="blog-details-container">
    <!---文章标题作者信息发布时间摘要部分开始-->
    <div class="blog-details-container-header">
      <h2>{{ article.title }}</h2>
      <div style="display: flex;justify-content:space-around;color:#ccc">
        <div class="blog-details-container-header-subtitle"><i class="el-icon-user"></i>&nbsp;{{ article.username }}
        </div>
        <div class="blog-details-container-header-subtitle"><i class="el-icon-date"></i>&nbsp;{{ article.create_time }}
        </div>
        <div class="blog-details-container-header-subtitle"><i class="el-icon-s-grid"></i>{{ article.catalogName }}
        </div>
        <div class="blog-details-container-header-subtitle"><i class="el-icon-view"></i>{{ article.browseNumber }}</div>
        <div class="blog-details-container-header-subtitle"><i
            class="el-icon-chat-line-round"></i>{{ article.replyNumber }}
        </div>
        <div  class="blog-details-container-header-subtitle"><i class="el-icon-edit"></i><a
            href="#">编辑</a></div>
      </div>
      <hr style="margin-top:4px;">
      <div class="blog-details-container-summary">
        {{ article.summary }}
      </div>
    </div>
    <!---文章标题作者信息发布时间摘要部分结束-->
    <!----文章详情markdown html显示部分开始------>
    <!--
    <div class="markdown-body" v-html="article.content" v-highlight @mouseover="initCopyPastePlugin">
    </div>
    -->
    <div class="markdown-body" v-html="htmlContent"></div>

    <!----文章详情markdown html显示部分结束------>
    <div>
      <el-divider content-position="left">分享</el-divider>
    </div>
    <!--vshare分享插件-->
    <share :config="config"></share>
    <br>
  </div>
</template>

<script>

//引入分享组件
import Share from 'vue-social-share'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js';

Vue.use(Share);


const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
})

export default {
  name: "MyArticleLefter",
  data() {
    return {
      //当前文章对象
      article:{},
      htmlContent:'',
      //分享组件的配置对象
      config: {
        url: '#',
        disabled: ['google', 'facebook', 'twitter'] // 禁用的站点
      }
    }
  },
  mounted() {
     //this.initArticleDetails();
  },
  methods: {
    initArticleDetails(aid){
      // console.log('initArticleDetails=> aid:'+aid);
      // console.log('/article/details/'+aid);

      this.$store.dispatch('QueryArticleByAid',{aid:aid}).then(resp=>{
        this.article = resp.data.data;
        this.htmlContent = md.render(this.article.mdcontent);
        //console.log(this.htmlContent);
      }).catch(err=>{
        console.log(err)
      })
    },
    initCopyPastePlugin(){

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

.markdown-body /deep/ pre {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: scroll;
  background: #F3F3F3;

}

.markdown-body /deep/ pre code{
  font-family: 'Courier New',"Arial",serif;
  font-size: x-small;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>