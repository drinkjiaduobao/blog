<template>
  <div class="blog-right">
    <div class="blog-aboutme">
      <div class="blog-unit-title"><i class="el-icon-reading"></i>{{ currentCourseInfo.cname }}</div>
      <el-divider></el-divider>
      <div style="text-align: center">
        <el-button type="plain" size="mini" icon="el-icon-circle-plus-outline" @click="expandMenu">展开</el-button>
        <el-button type="plain" size="mini" icon="el-icon-remove-outline" @click="shrinkMenu">收缩</el-button>
      </div>
      <hr>
      <div class="blog-unit-content">
        <el-menu :default-active="activeIndex" :default-openeds="openeds" class="el-menu-demo" mode="vertical"
                 @select="handleSelect">
          <el-submenu :index="chp.cname" v-for="(chp,index) in currentChapterMenuList" :key="index">
            <template slot="title">{{ chp.cname }}</template>
            <!--如果是叶子节点，这里就应该超链接-->
            <template v-if="!chp.leaf">
              <template v-for="(subChp,index2) in chp.subMenu">
                <el-menu-item v-if="subChp.leaf" :index="subChp.cname" :key="index2"
                              @click="changeArticle(subChp.articleId)">{{ subChp.cname }}
                </el-menu-item>

                <el-submenu v-if="!subChp.leaf" :index="subChp.cname" :key="index2">
                  <template slot="title">{{ subChp.cname }}</template>
                  <el-menu-item v-for="(thirdSubChp,index3) in subChp.subMenu" :index="thirdSubChp.cname" :key="index3"
                                @click="changeArticle(thirdSubChp.articleId)">{{ thirdSubChp.cname }}
                  </el-menu-item>
                </el-submenu>
              </template>
            </template>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCourseRighter",
  data() {
    return {
      currentCourseId: this.$route.params.cid,
      activeIndex: '1',
      openeds: [],
      currentChapterMenuList: [],
      currentCourseInfo: {
        "version": 1,
        "createTime": "2020-02-09 22:02:31",
        "modifyTime": "2021-04-10 00:55:02",
        "flag": true,
        "cid": 1,
        "cname": "JavaSE基础教程",
        "catalogId": "java",
        "introduce": null,
        "logo": "http://img.simoniu.com/javase%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B_logo2.jpg",
        "aid": 144,
        "type": "免费",
        "browseNum": 0,
        "publishDate": "2020-01-10",
        "top": true
      } //当前的课程资料
    }
  },
  mounted() {
    //加载下拉菜单的列表
    this.initChapterMenuList();
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    initChapterMenuList(){
        this.$store.dispatch('QueryChapterMenuByCid',{cid:this.currentCourseId}).then(resp=>{
        // console.log(resp.data.data.course);
        // console.log(resp.data.data.chapterMenuList);
        this.currentCourseInfo = resp.data.data.course;
        this.currentChapterMenuList = resp.data.data.chapterMenuList;

        // console.log("要显示的文章编号是："+this.currentCourseInfo.aid);

        //点击右侧菜单列表项，切换左侧文章
        this.changeArticle(this.currentCourseInfo.aid);
        
        // this.expandMenu();

      }).catch(err=>{
        console.log(err)
      })
    },

    //收缩菜单
    shrinkMenu(){
      this.openeds=[];
    },
    //展开菜单
    expandMenu(){
      let len = this.currentChapterMenuList.length;
      for(let i=0;i<len;i++){
        this.openeds.push(this.currentChapterMenuList[i].cname);
        if(!this.currentChapterMenuList[i].leaf){
          let len2 = this.currentChapterMenuList[i].subMenu.length;
            for(let j = 0;j<len2;j++){
              this.openeds.push(this.currentChapterMenuList[i].subMenu[j].cname);
            }
        }
      }
    },

    changeArticle(aid){
        console.log('切换文章');
        this.$emit('refreshCourseDetails',aid);
    }
  }
}
</script>

<style scoped>
.blog-right {
  text-align: left;
  width: 100%;
  height: 98%;
  padding: 10px 0px 10px 0px;
  margin: 10px 0px 10px 0px;
  background: #FFF;
}

.blog-aboutme {
  margin: 10px;
  border: 1px solid #EEE;
  border-radius: 5px;
  padding: 20px 5px 20px 5px;
}

.blog-unit-content {
  color: #666666;
  text-indent: 2em;
  font-size: small;
}

.blog-unit-title {
  font-size: larger;
}

.blog-unit-title {
  text-align: center;
}

.blog-unit-hot li, .blog-unit-friend li {
  list-style: none;
}

.blog-unit-hot a, .blog-unit-friend a {
  text-decoration: none;
  color: #336699;
}

/*el-menu设置菜单高度*/
.el-menu-item, .el-submenu__title {
  height: 30px;
  line-height: 30px;
  color: #666;
  font-size: small;
  overflow: hidden;
}
</style>