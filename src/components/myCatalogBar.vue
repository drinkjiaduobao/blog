<template>
    <!-- ****博文与教程分类导航栏版块部分组件****  -->
    <!-- <div class="catalog-bar"> -->
    <div>
        <el-radio-group  fill='#336699' size="#336699" v-model="activeCatalogId" @change="changeCurrentCatalog">
            <el-radio-button :label="c.id" v-for="(c,index) in catalogList" :key="index">
                <span @click="goArticleListPage(c.id)">{{c.cname}}</span>
            </el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>  
    export default {
        name: "myCatalogBar",

        data() {
            return {
                activeCatalogId: this.$route.params.catalog,
                catalogList: this.$store.state.allCatalogList,   //第一次是null
            }
        },
        mounted() {
        //    this.initCatalogList();
            if(this.$store.state.allCatalogList == null){
                this.catalogList = [
                    //因为数据库中没有全部这个属性，所以在这里进行拼接
                    {
                        "version": 0,
                        "createTime": "2020-11-25 19:24:38",
                        "modifyTime": "2020-11-25 19:24:38",
                        "flag": true,
                        "cid": 1,
                        "id": "all",
                        "cname": "全部",
                        "pid": "top"
                    }
                ];
                //请求版块接口的方法
                this.initCatalogList();
            }
            // if(this.$store.state.currentArticleCatalogName == null){
            //     sessionStorage.setItem("currentArticleCatalogName.myproject.com","all");
            //     this.$store.state.currentArticleCatalogName = "all";
            //     this.activeCatalogId = "all";
            // }
            console.log('当前选中版块名称：'+this.activeCatalogId);
        },
        methods:{

            goArticleListPage(value) {
                //window.location.href = '/articles';
                this.changeCurrentCatalog(value);
            },

            //判断版块跳转路由为博文还是教程
          changeCurrentCatalog(value){
            //当前版块的id
            // console.log("当前文章版块是"+this.$store.state.currentArticleCatalogName);
            let routePath = this.$route.path;
            console.log(routePath);
            //注意博文详情页面的路由前部分要包含‘myblogpost’，负责在博文详情点击版块匹配不到
            //博文会跳转到教程的版块
            if (routePath.startsWith('/myblogpost')) {
                //跳转到博文
                window.location.href = '/myblogpost/' + value;
            } else {
                //跳转到教程
                window.location.href = '/mycourse/' + value
            }

          },
          /**
           * 请求版块分类内容的接口
           */
          initCatalogList(){
            console.log("===发送查询版块请求=====");
            //调用接口
            this.$store.dispatch('QueryAllCatalogList')
            .then(res =>{
                //状态码等于200将数据赋值给声明的数据data中
                if(res.status==200){                                       //JSON.stringify转为字符串   
                    // window.localStorage.setItem("catalogList.myproject.com",JSON.stringify(res.data.data));
                    res.data.data.forEach((e,i)=>{
                        //把元素追加进去
                        this.catalogList.push(e);
                    })
                    window.localStorage.setItem("catalogList.myproject.com",JSON.stringify(this.catalogList));
                    this.$store.state.allCatalogList = this.catalogList;
                    // this.catalogList = res.data.data;//数据赋值
                    // console.log(this.catalogList);
                } 
            })
            .catch(error=>{
                console.log(error);
            })
          }
          
        }
    }
</script>

<style scoped>
   /* .catalog-bar{
       margin-top: 100px;
   } */

</style>
