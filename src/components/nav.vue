<template>
<!-- my顶部导航 -->
    <div class="mynavbar_container">
      <!-- logo -->
      <div class="mynavbar_logo_div">
            <img class="mynavbar_logo_img" src="@/assets/logo.png"/>
            blog编程
      </div>
      <el-row>
        <el-col :span="16" :offset="1">
          <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#336699"
              text-color="#fff"
              active-text-color="#ffea2e"
              router
              >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/mycourse/all">教程</el-menu-item>
            <el-menu-item index="/myblogpost/all">博文</el-menu-item>
            <el-menu-item index="/mycodetrack">码道</el-menu-item>
            <el-menu-item index="/myActualCombat">实战</el-menu-item>
            <!-- 辅助教学 -->
            <el-submenu index="/myAuxiliaryTeaching">
              <template slot="title">辅助教学</template>
              <el-menu-item index="/myAuxiliaryTeaching/myQuestionBank">题库中心</el-menu-item>
              <el-menu-item index="/myAuxiliaryTeaching/myCase">案例中心</el-menu-item>
              <el-menu-item index="/myAuxiliaryTeaching/myNavigation">编程导航</el-menu-item>
              <el-menu-item index="/myAuxiliaryTeaching/myToolResources">工具资源</el-menu-item>
            </el-submenu>
            <el-menu-item index="/mySearch"><i class="el-icon-search"></i>搜索</el-menu-item>
            <el-submenu index="8" v-if="isLogin" style="margin-left:100px">                               <!-- 用户名     取前六位字符 -->
              <template slot="title">
                <el-avatar :size="28" :src="loginSuccessUser.avatar"></el-avatar>
                {{loginSuccessUser.username.substr(0,6)}}</template>
              <el-menu-item index="/users/center"><i class="el-icon-user"></i>个人中心</el-menu-item>
              <el-menu-item index="8-2"><i class="el-icon-shopping-cart-1"></i>我的订单</el-menu-item>
              <el-menu-item index="8-3"><i class="el-icon-star-off"></i>我的收藏</el-menu-item>
              <el-menu-item index="" @click="logout()"><i class="el-icon-back"></i>用户注销</el-menu-item>
            </el-submenu>
            <div class="mynavbar_login_div" v-if="!isLogin"><a href="/myLogin">登录</a></div>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
    data() {
    return {
      activeIndex: this.$store.state.currentNavBarActive,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      // isLogin:false,//用来判断是否登录 false为没登录，true表示登录--则显示相关头像和用户名
      isLogin: this.$store.state.isLoginSuccess,//从状态里取值
      loginSuccessUser: this.$store.state.loginSuccessUser//存储登录成功的用户对象,在对象里初始化数据，避免空指针，

    };
  },

  mounted(){

      // if(window.localStorage.getItem("loginuser.myproject.com") != null){
      //                             //  JSON.parse(); ——————转成对象
      //     this.loginSuccessUser = JSON.parse(window.localStorage.getItem("loginuser.myproject.com"));
      //     this.isLogin = true;
      // }

      //console.log('this.$store.state.currentNavBarActive===>'+this.$store.state.currentNavBarActive);
      console.log("类型是："+typeof(this.isLogin));
      console.log("是否登录："+this.isLogin);
      if(window.sessionStorage.getItem("isLogin.myproject.com") == null){
        //调用后端检查当前用户是否已经登录。
        this.$store.dispatch('IsLogin').then(resp=>{
          console.log('登录状态是：');
          console.log(resp);
          if(resp.data.code === 200){
            //说明当前用户已经登录了
            window.sessionStorage.setItem("isLogin.myproject.com",true);
            this.$store.state.isLoginSuccess=true;
            localStorage.setItem("loginuser.myproject.com",JSON.stringify(resp.data.data));
            this.$store.state.loginSuccessUser = resp.data.data;
            this.isLogin = true;
          }else{
            console.log('目前未登录...');
            window.sessionStorage.setItem("isLogin.myproject.com",false);
            this.isLogin = false;
          }

        })
      }

      if(this.$store.state.currentNavBarActive == null){
          window.sessionStorage.setItem("router.navbar.myproject.com",this.$route.path);
          this.$store.state.currentNavBarActive = this.$route.path;
          // this.activeIndex = this.$store.state.currentNavBarActive;
          this.activeIndex = this.$route.path;
      }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      window.sessionStorage.setItem("router.navbar.myproject.com",key);
      this.$store.state.currentNavBarActive = key;
    },

    //用户注销

    // logout(){
      //清空本地缓存
        // window.localStorage.removeItem("loginuser.myproject.com");
      //两秒后跳转到登录页
        // setTimeout(()=>{window.location.href='/myLogin'},2000);
    // },
    logout() {
        this.$confirm('确定要退出吗？', '退出提示', {
          confirmButtonText: '确定',
          cancelButtonText:  '取消',
          cancelButtonClass: "btn-custom-cancel",
          type: 'warning',
        })
          .then(() => {
              // 清空本地缓存
              window.localStorage.removeItem("loginuser.myproject.com");
              //调用后端的用户注销的接口
              this.$store.dispatch('Logout').then(resp=>{
                if(resp.data.code===200){
                  // this.$message.success("注销成功！");
                  // 两秒后跳转到登录页
                  window.sessionStorage.setItem("isLogin.myproject.com",false);
                  setTimeout(()=>{window.location.href='/myLogin'},2000);
                }
              }).catch(err=>{
                console.log(err);
              })

              this.$message({
                type: 'info',
                message: '正在退出账号'
              });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel' ? '取消退出' : '取消退出'
            })
          });
      }
  }
}
</script>

<style scoped>
  .mynavbar_container {
  width: 100%;
  margin: 0px auto;
  background: #336699;
  /*导航栏固定在页面顶部*/
  top: 0;
  left: 0;
  z-index: 200; /*这个值不要设置太大，否则会遮盖messagebox*/
  position: fixed;

}

.mynavbar_logo_div {
  float: left;
  width: 200px;
  height: 60px;
  color: #ffffff;
  font-family:'方正粗圆简体';
  font-size:16px;
  font-weight: bold;
  margin-left: 60px;
}

.mynavbar_login_div{
  float: right;
  width: 168px;
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  color: #ffffff;
  text-align: left;
}

.mynavbar_login_div a{
  color: #ffffff;
  text-decoration: none;
  font-size: 10px;
  margin-left: 100px;
}

.mynavbar_logo_img {
  margin: 13px 0px;
  width: 40px;
  height: 40px;
  display: inline;
  vertical-align: middle;
}

.el-menu-item , .el-submenu {
  width: 140px;
  text-align: center;
}

.el-menu--horizontal .el-menu .el-menu-item{
  width: 200px;
  text-align: center;
}

  
</style>

<style>
  /* .el-button:nth-child(1) {
    background: #b9b0e8;
    border-radius: 4px;
    border: 1px solid #b9b0e8;
  }
  .el-button:nth-child(2) {
    border-radius: 4px;
    background: #55499c;
    border: 1px solid #55499c;
  } */
</style>