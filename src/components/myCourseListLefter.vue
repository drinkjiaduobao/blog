<template>
<!-- 教程 -->
    <div class="course-left">
        <el-row>
            <el-col class="top-course-container" :span="8" v-for="(c,index) in coursePager" :key="index">
                <div class="top-course">
                    <dl class="item">
                        <dt><a :href="'/courseDetails/'+c.cid"><img :src="c.logo"></a></dt>
                        <dd>
                            <div style="text-align: start;margin-top:10px">{{c.cname}}</div>
                            <p class="item-footer"><span v-if="c.type==='免费'" style="color:#0bbe0b">{{c.type}}</span><span v-if="c.type==='收费'" style="color:darkorange">{{c.type}}</span><span v-show="c.top==1" style="color:orangered">[置顶]</span> <span class="pull-right">关注度<span class="num">{{c.browseNum}}</span></span></p>
                        </dd>
                    </dl>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <div style="text-align: center">
                <br>
                <!--引入elementui的分页组件，前端实现的分页-->
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="pageSize"
                        :pager-count="15"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :total="courseList.length">
                </el-pagination>
            </div>
        </el-row>
    </div>
</template>

<script>

export default {
        name: "MyCourseListLefter",
        data(){
            return{
                activeCatalogId: this.$route.params.catalog,
                pageSize: 9,   //每页的记录数
                currentPage: 1, //当前的页号，
                courseList:[]
            }
        },
        //把当前分页数据当成一个计算属性（前端实现分页需要）
        computed:{
            coursePager: function () {
                return this.courseList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
            }
        },

        mounted() {
            this.initCourseList();
        },
        methods:{

            // 初始页currentPage、初始每页数据数pagesize和数据data
            handleSizeChange: function (size) {
                this.pageSize = size;
                //console.log(this.pageSize)  //每页下拉显示数据
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage;
                //console.log(this.currentPage)  //点击第几页
            },

            //查询教程版块内容
            //根据类别查询课程
            initCourseList(){
                this.$store.dispatch('QueryCourseListByCatalog',{
                    catalog:this.activeCatalogId
                }).then(resp=>{
                this.courseList = resp.data.data;
                // console.log(resp.data.data);
              }).catch(err=>{
                console.log(err)
              })
            }
        }
    }
</script>

<style scoped>

    .course-left{
        width: 90%;
        height: 98%;
        margin: 10px 0px 10px 0px;
        padding: 10px 0px 10px 0px;
        background: #FFF;
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
        background: rgb(255, 255, 255);
        color: #336699;
        /* margin-left: -20px; */
        font-size: small;
        font-weight: bolder;
        /* 开头空出两个字节的位置 */
        text-indent: 2em;
    }

    .item:hover {
        transform: scale(1.00, 1.00);
        /* box-shadow: 0 5px 12px #DDDDDD; */
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
        transform: scale(1.05);
    }
    .item-footer{
        font-size: x-small;
        font-weight: normal;
        text-align: end;
        margin-right: 10px;
        margin-top: 10px;
        color:#999;
    }
</style>
