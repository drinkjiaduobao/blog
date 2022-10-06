<template>
<!-- 首页最新博文、最新码道组件 -->
    <div class="myHome_Div">
        <!-- 最新博文 -->
          <div class="new_bowen">
              <!-- <article v-for="(a,index) in topArticleList" :key="index"> -->
              <div style="line-height:60px">
                <span class="new_title"><i class="el-icon-s-management"></i> 最新博文</span>
                <span><a href="/myblogpost/all" style="margin-left:75%;color:#336699;">更多>></a></span>
              </div>
              <hr width="98%" color="#336699">
              <!-- 最新博文--内容 -->
              <div class="new_bowen_content">
                <!-- 博文内容版块 -->
                  <div class="new_bowen_div" v-for="(a,index) in topArticleList" :key="index">
                      <p class=" new_bowen_div_title"><a :href="/myblogpostDetails/+a.catalog+'?aid='+a.aid" style="color:#336699">{{ a.title }}</a></p>
                      <p class="new_bowen_div_text">{{ a.summary }}</p>
                      <p class="new_bowen_div_date">{{ a.catalogName }}<i class="el-icon-date">{{ a.createTime }}</i><i class="el-icon-view">0</i></p>
                  </div>
              </div>
              <!-- </article> -->
          </div>

          <!-- 最新码道 -->
          <div class="new_madao">
              <div style="line-height:60px">
                <span class="new_title"><i class="el-icon-s-opportunity"></i> 最新码道</span>
                <span><a href="#" style="margin-left:75%;color:#336699;">更多>></a></span>
              </div>
              <hr color="#336699" width="98%">
              <!-- 最新码道--内容 -->
              <div class="new_madao_content">
                  <div class="new_bowen_div" v-for="(a,index) in topArticleList" :key="index">
                      <p class="new_bowen_div_title"><a :href="/myblogpostDetails/+a.catalog+'?aid='+a.aid" style="color:#336699">{{ a.title }}</a></p>
                      <p class="new_bowen_div_text">{{ a.summary }}</p>
                      <p class="new_bowen_div_date">{{ a.catalogName }}<i class="el-icon-date">{{ a.createTime }}</i><i class="el-icon-view">0</i></p>
                  </div>
              </div>
          </div>

      </div>
</template>

<script>
import http from '@/util/http'
import axios from 'axios'
export default {
    data() {
    return {
      //最新博文数据
      topArticleList:[]
    }
  },
  //运行即执行
  mounted() {
      this.initTopArticleList();
  },
  methods: {
    /**
     * 查询最新博文
     */
      initTopArticleList(){
        this.service.get('/article/articleAllfour')
        .then(res =>{
            //状态码等于200将数据赋值给声明的数据data中
            // console.log(res)
            if(res.status===200){
                this.topArticleList = res.data.data;//数据赋值
                //控制台打印当前声明数组中的数据
                // console.log(this.topArticleList);
            } 
        })
        .catch(function(error){
            console.log(error);
        })
      },
  }
}
</script>

<style scoped>
    .myHome_Div{
        width: 1300px;
        height: 520px;
        /* background-color: aqua; */
        margin: 0 auto;
        display: flex;
        flex-wrap:wrap;
    }
    .new_bowen,.new_madao{
        width: 650px;
        height: 520px;
        /* background: #ffcaca; */
    }
    .new_bowen_content,.new_madao_content{
      display: flex;
      /* flex弹性布局，两端对齐 */
      justify-content:space-between;
      /* 超出自动换行 */
      flex-wrap:wrap;
    }
    .new_bowen_div,.new_madao_div{
      width: 640px;
      height: 95px;
      /* background:linear-gradient(400deg,#407bb5 50%,#336699 100%); */
      /* border: 1px solid #cacaca; */
      border-radius: 10px;
      border-bottom: 1px dotted #336699 ;
      /* border-top: 1px dotted #336699 ; */
      /* border: 1px #000000 ; */
      margin-top: 10px;
      cursor: pointer;
      /* 动画过渡 */
      transition: 0.5s;
    }
    .new_bowen_div:hover{
        /* border: 1px solid #cacaca; */
        /* background:linear-gradient(400deg,#969b9b 50%,#dfdfdf 100%); */
        /* box-shadow: #000000; */
    }
    /* ---------------------------------------------------------------------------- */

    /* 标题 */
    .new_title{
        font-size:18px;
        font-weight: bold;
        color: #000000;
    }

    .new_bowen_div_title,
    .new_bowen_div_text,
    .new_bowen_div_date{
        line-height: 31px;
        margin-left: 10px;
    }
    .new_bowen_div_title{
        /* color: #336699; */
        font-weight: bold;
        font-size: 16px;
    }
    .new_bowen_div_text,
    .new_bowen_div_date{
       color: #8b8b8b;
    }
    .new_bowen_div_date{
       font-size: 11px;
       margin-left: 80%;
    }
</style>