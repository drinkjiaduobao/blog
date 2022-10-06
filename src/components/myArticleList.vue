<template>
  <div class="article-list-container">
    <div class="article-list-catalog">
      <div style="width: 90%"><i :class="icon"></i>&nbsp;{{ catalog }}</div>
      <div style="font-weight: normal;font-size: small">更多</div>
    </div>
    <article v-for="(a,index) in topArticleList" :key="index">
      <h4><a href="#"
             target="_blank">{{ a.title }}</a></h4>
      <div class="article-title">
        <div class="article-text">{{ a.summary }}</div>
        <div class="article-timer"><span>{{ a.catalogName }}&nbsp;</span><i
            class="el-icon-date"></i><span>{{ a.create_time }}</span> <span
        ><i class="el-icon-view"></i> 100</span>
        </div>
      </div>
    </article>

  </div>
</template>

<script>

import http from "@/util/http";
export default {
  name: "myArticleList",
  data() {
    return {
      topArticleList: []
    }
  },
  props: {
    catalog: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.initTopArticleList();
  },

  methods: {
    initTopArticleList() {
      http.get('/getTopArticleList').then(resp => {
        //发送请求成功
        //console.log(resp);
        this.topArticleList = resp.data.data;
      }).catch(err => {
        console.log(err);
      })
    },
        }
  }
</script>

<style scoped>

.article-list-container {
  width: 48%;
}

.article-list-catalog {
  display: flex;
  text-align: start;
  height: 28px;
  margin: 10px 0px;
  color: #666;
  border-bottom: 1px solid #65a7e8;
  font-weight: bold;
}

.article-title {
  width: 98%;
  display: flex;
  justify-content: space-around;
  margin: 4px 0 4px 0;
}

.article-text {
  width: 55%;
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
  width: 45%;
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
