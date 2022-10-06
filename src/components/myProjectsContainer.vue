<template>
  <el-row>
    <el-col :span="24" class="blog-container">
      <!--左侧菜单栏部分-->
      <el-col :span="6">
        <!-- 实战左侧组件 -->
        <myProjectsMenuBar ref="menu" @initProjects="initProjects"></myProjectsMenuBar>
      </el-col>

      <!--右侧视图部分-->
      <el-col :span="18">
        <div class="usercenter-right">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left: 20px">
            <el-breadcrumb-item :to="{ path: '/myActualCombat' }">实战</el-breadcrumb-item>
            <el-breadcrumb-item>项目详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!--项目列表组件-->
          <div class="blog-left">
            <div class="item-list" v-for="(i,index) in projectsPager" :key="index">
              <div class="item-list-logo" style="vertical-align:middle;">
                <el-image
                    style="vertical-align: middle;cursor: pointer"
                    :src="i.logo"
                    fit="fill"></el-image>
              </div>
              <div class="item-list-intro">
                <el-descriptions :title="i.name" column="1" style="margin: 20px 10px" size="small">
                  <el-descriptions-item label="技术架构" contentStyle="white-space: pre-wrap;">{{ i.techIntro }}
                  </el-descriptions-item>
                  <el-descriptions-item label="难度">
                    <el-tag v-if="i.difficulty=='简单'" type="success" size="small">{{ i.difficulty }}</el-tag>
                    <el-tag v-if="i.difficulty=='中等'" size="small">{{ i.difficulty }}</el-tag>
                    <el-tag v-if="i.difficulty=='困难'" type="danger" size="small">{{ i.difficulty }}</el-tag>

                    &nbsp;&nbsp;<el-col style="text-align: start;padding-left: 20px">
                    <el-button size="mini" type="primary" round>查看详情</el-button>
                  </el-col>
                  </el-descriptions-item>
                  <!--
                  <el-descriptions-item labelStyle="display:none" label="">
                      <el-col style="text-align: center"><el-button size="mini" round>查看详情</el-button></el-col>
                  </el-descriptions-item>
                  -->
                </el-descriptions>
              </div>
            </div>
            <br>
            <div style="text-align: center">
              <!--引入elementui的分页组件，前端实现的分页-->
              <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="pageSize"
                  :pager-count="15"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :total="projectsList.length">
              </el-pagination>
            </div>
            <br>
          </div>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
import myProjectsMenuBar from "@/components/myProjectsMenuBar";
import axios from 'axios';

export default {
  name: "MyProjectsContainer",
  
  components: {
    myProjectsMenuBar,
  },
  data() {
    return {
      pageSize: 8,   //每页的记录数
      currentPage: 1, //当前的页号，
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      projectsList: []
    }
  },
  mounted() {

    this.initProjects();
  },

  computed:{
    projectsPager: function () {
      return this.projectsList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
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
    /** 
    * 初始化项目列表
    */
    initProjects() {
      axios.get('/getAllProjectList')
            .then(res =>{
                //状态码等于200将数据赋值给声明的数据data中
                console.log(res)
                if(res.status===200){
                    this.projectsList = res.data.data;//数据赋值
                    console.log(this.projectsList);
                } 
            })
            .catch(function(error){
                console.log(error);
            })
      }
  }
}
</script>

<style scoped>
.usercenter-right {
  width: 90%;
  height: 98%;
  margin: 20px 10px 0px 10px;
  padding: 10px 0px 10px 0px;
  background: #FFF;
}

.userform-right {
  margin: 0px 0px 0px 20px;
  background: #FFF;
}

.avatar-container {
  width: 90%;
  height: 220px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}

/*以下创业动态列表左侧部分样式表*/
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
  margin: 8px 0 8px 0;
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
}

article h4 a {
  color: #336699;
  text-decoration: underline;
}

.item-list {
  margin: 12px 12px;
  width: 98%;
  display: flex;
  border: 1px solid #DDDDDD;
  border-radius: 2px;
  /* 动画过渡 */
  transition: 0.5s;
}

/* 鼠标移入执行相关操作 */
.item-list:hover {
  /* transform: scale(1.00, 1.00); */
  box-shadow: -5px -5px 5px -5px rgba(0, 0, 0, .2),
                    5px -5px 5px -5px rgba(0, 0, 0, .2),
                    5px 5px 5px -5px rgba(0, 0, 0, .2)
                    ;
  cursor: pointer;
  animation-name: animations;
	animation-duration: 0.7s;
	animation-iteration-count:infinite;
}
/* 鼠标移入动画 */
@keyframes animations {
				0%{transform: translate(0,0);}
        50%{transform: translate(-20px,0);}
				100%{transform: translate(0,0);}
			}

.item-list .item-list-logo {
  width: 30%;
  margin: 10px 10px;
  vertical-align: middle;
  transition: all 1.1s;
}

.item-list .item-list-logo:hover {
  transform: scale(1.02);
}

.item-list .item-list-intro {
  margin-left: 20px;
  /*
  border: 1px solid #ccc;
  border-radius: 5px;*/
  width: 60%;
}

</style>
