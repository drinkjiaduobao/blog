<template>
<!-- 最新教程组件 -->
  <div class="course">
    <!--文章模块-头部-->
    <el-row>
      <el-col :span="2">
        <span class="new_title"><i class="el-icon-s-promotion"></i> 最新教程</span>
      </el-col>
      <el-col :span="1" :offset="20">
        <p class="text-right"><a href="/mycourse/all" style="color:#336699;">更多>></a></p>
      </el-col>
      <hr width="99%" style="margin:40px 0 10px 0" color="#336699">
    </el-row>
    <!--文章模块-内容-->
    <el-row>
      <el-col class="top-course-container" v-for="(c,index) in topCourseList" :span="6" :key="index">
        <div class="top-course">
          <dl class="item">
            <dt><a :href="'/courseDetails/'+c.cid"><img :src="c.logo"></a></dt>
            <dd>
               {{c.cname }}<br>
              <p class="item-footer"><span style="color:#0bbe0b">免费</span><span style="color:orangered">[置顶]</span>
                <span class="pull-right">关注度<span class="num">100</span></span></p>
            </dd>
          </dl>
        </div>
       </el-col>
    </el-row>
  </div>
</template>

<script>
import http from '@/util/http';

export default {
  name: "MyTopicCourse",
  data() {
    return {
      //课程数据
      topCourseList: []
    }
  },
  //运行即执行
  mounted() {
      this.initTopCourseList();
  },
  methods: {
    /**
     * 查询课程
     */
       initTopCourseList(){
                this.$store.dispatch('QueryCourseListByCatalog',{
                    catalog:'h5'
                }).then(resp=>{
                this.topCourseList = resp.data.data;
                // console.log(resp.data.data);
              }).catch(err=>{
                console.log(err)
              })
            }
  }

}
</script>

<style scoped>

.course{
  margin-top: 30px;
}

.new_title{
  font-weight:bold;
  font-size: 18px;

}

.text-right a {
  color: #55499c;
  text-decoration: none;
  font-size: 14px;
}

.top-course {
  margin: 10px;
  padding: 0px;
  border: 1px solid #DDDDDD;
}

.item img {
  width: 100%;
}

.item {
  background: #fff;
  margin: 0px;
}

.item dd {
  position: relative;
  left: 0px;
  height: 50px;
  background: #FFF;
  color: #336699;
  font-size: small;
  font-weight: bolder;
  /* 开头空出两个字节的位置 */
  text-indent: 2em;
}

.item:hover {
  transform: scale(1.00, 1.00);
  /* box-shadow: 0 5px 15px #DDDDDD; */
  box-shadow: -5px -5px 5px -5px rgba(0, 0, 0, .3),
              5px -5px 5px -5px rgba(0, 0, 0, .3),
              5px 5px 5px -5px rgba(0, 0, 0, .3)
              ;
  cursor: pointer;
}

.item dt {
  overflow: hidden;
}

.item img {
  transition: all 1s;
}

.item img:hover {
  transform: scale(1.1);
}

.item-footer {
  /* 实现文字多出来的向左延申 */
  font-size: x-small;
  font-weight: normal;
  text-align: end;
  margin-right: 10px;
  color: #999;
}

</style>
