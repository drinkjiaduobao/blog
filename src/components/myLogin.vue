<template>
<!-- 我的登录、注册表单组件 -->
  <div class="loginDiv">
    <!-- <div id="loginBack">
      <img id="backlogo" width="300px" src="@/assets/image/web.jpg"/>
    </div> -->
    <div class="loginForm">
      <el-tabs type="card" v-model="activeName">
        <!-- 登录 -->
          <el-tab-pane label="用户登录" name="userlogin">
            <el-form ref="form" label-width="100px">
              <el-form-item label="账号">
                <el-input class="nm-skin-pretty" v-model="loginUser.identify" placeholder="请输入注册手机/邮箱/账号"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input class="nm-skin-pretty" v-model="loginUser.password" placeholder="请输入密码" show-password></el-input>
              </el-form-item>
              <el-form-item label="" style="margin-bottom: 0px">
                  <!-- 滑块验证 -->
                <drag-verify-img-chip ref="dragVerify" width="260" height="38" :imgsrc="imgsrc"
                                      :isPassing.sync="isPassing" :showRefresh="true"
                                      :barWidth="40" text="请按住滑块拖动" successText="验证通过" handlerIcon="el-icon-d-arrow-right"
                                      successIcon="el-icon-circle-check" :refreshIcon="'el-icon-refresh-right'"
                                      @refresh="reset" @passcallback="pass">
                </drag-verify-img-chip>

                记住我
                <el-switch
                    v-model="rememberme"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch>
                <div style="display: inline;vertical-align: middle">&nbsp;&nbsp;第三方登录 <a href="#"><img
                    src="@/assets/image/QQ_logo.png" style="width:22px;vertical-align: middle;cursor: pointer;"></a> <img
                    src="@/assets/image/weixni_logo.png" style="width:22px;vertical-align: middle;cursor: pointer;">
                </div>
              </el-form-item>

              <el-form-item label="">
                <el-button style="width: 80%; display: block" @click="doLogin" type="primary">登录
                </el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <!-- 注册 -->
          <el-tab-pane label="用户注册" name="userreg">
            <el-form ref="form" label-width="100px">
              <el-form-item label="手机号">
                <el-input class="nm-skin-pretty" v-model="regUser.identify" placeholder="请输入注册手机/邮箱"></el-input>
              </el-form-item>
              <el-form-item label="">
                                  <!-- 调用添加防抖功能后的按钮方法 -->  <!-- 按钮禁用判断 -->
                <el-button type="primary" @click="debounceSendMsgToMobileOrEmail()" :disabled="sendMsgDisabled">{{ sendMsgBtnTitle }}</el-button>
                <!--
                <img src="../../assets/images/vcode.png" title="看不清楚，换一张" style="cursor:pointer" @click="changeRandomCodeImg">
                -->
              </el-form-item>
              <el-form-item label="密码">
                <el-input class="nm-skin-pretty" v-model="regUser.password" placeholder="请输入密码" show-password></el-input>
              </el-form-item>
              <el-form-item label="确认密码">
                <el-input class="nm-skin-pretty" v-model="regUser.confirmpass" placeholder="请输入确认密码" show-password></el-input>
              </el-form-item>
              <el-form-item label="验证码">
                <el-input class="nm-skin-pretty" v-model="regUser.validateCode" placeholder="请输入验证码"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-button style="width: 80%; display: block" type="primary" @click="doReg">注册
                </el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>

//导入滑块验证的组件
import dragVerifyImgChip from 'vue-drag-verify-img-chip'
import graceChecker from '@/util/graceChecker'
import webtoken from "@/util/webtoken";
import myCookie from '@/util/myCookie';
import http from '@/util/http';

export default {
  name: "MyLoginForm",
  components: {
    dragVerifyImgChip,
    graceChecker,
    webtoken
  },
  data() {
    return {
      //用于控制注册发送验证码按钮的禁用和使用
      sendMsgDisabled: false,
      //用于控制注册发送验证码按钮的文字
      sendMsgBtnTitle: '发送验证码',

      isPassing: false,
      value: "",
      imgsrcList: ["https://img.simoniu.com/huakuai01.jpg", "https://img.simoniu.com/huakuai02.jpg", "https://img.simoniu.com/huakuai03.jpg", "https://img.simoniu.com/huakuai04.jpg", "https://img.simoniu.com/huakuai05.jpg"],
      imgsrc: '',

      activeName: "userlogin",
      //令牌
      token: '',

      rememberme: true,//是否记住用户
      loginUser: {
        identify: '',
        password: ''
      },
      regUser: {
        identify: "", //输入的电子邮箱或者手机号码
        email: "",
        mobile: "",
        password: "",
        confirmpass: "",
        validateCode: "",
        flag: 1
      }
    }
  },
  mounted() {
    this.imgsrc = this.imgsrcList[Math.floor(Math.random() * 5)];
    this.token = webtoken.generateWebToken();
    console.log("当前客户端的令牌是："+this.token);

    myCookie.getCookie(this.loginUser);//初始化登录用户的标识符和密码
  },
  methods: {
    passcallback() {
      this.$message({
        message: "验证通过",
        type: "success"
      });
    },
    reimg() {
      //console(213231213)
    },
    pass() {

    },
    reset() {
      this.imgsrc = this.imgsrcList[Math.floor(Math.random() * 5)];
      this.isPassing = false;//表示滑块是否成功验证
      this.$refs.dragVerify.reset();
    },
    verify(result) {
      console.log(result) // result为true表示验证通过，false表示验证三次都失败了哦
      this.huakuaiFlag = result;
    },
    refresh() {
      console.log('用户点击了初始化')
    },

    changeTab(activeName) {
      //console.log('切换tab....,activeName='+activeName);
      this.activeName = activeName;
      //console.log("this.activeName:"+this.activeName);
    },

  //用户登录
  doLogin() {
      //console.log('执行用户登录...');
      // console.log("登录用户的用户名标识符：" + this.loginUser.identify + ",密码：" + this.loginUser.password);

      //滑块验证通过再执行登录操作
    if(this.isPassing){
      this.$store.dispatch('Login',{
          identify: this.loginUser.identify,
          password: this.loginUser.password
      }).then(resp=>{
          if (resp.data.code === 200) {
          //成功
          this.$message.success(resp.data.message);
          //1.把登录成功的的用户对象保存到本地缓存
          //判断用户是否记住我
          if(this.rememberme){
            myCookie.setCookie(this.loginUser.identify,this.loginUser.password,100);
          }else{
            myCookie.clearCookie();
          }
                                                          //resp.data.data是json对象
                                                          //json对象不可以直接存在本地缓存
                                                          //需要转成json字符串
          window.localStorage.setItem("loginuser.myproject.com",JSON.stringify(resp.data.data));
          window.sessionStorage.setItem("isLogin.myproject.com",JSON.stringify("true"));
          //2.自动跳转到首页
          setTimeout(()=>{
            window.location.href='/'
          }, 2000);

        } else {
          //失败
          this.$message.error(resp.data.message);
        }
      }).catch(err=>{
          console.log(err);
      });

    }else{
        this.$message.error("请进行滑块验证！");
    }
  },

    async doReg() {
      // console.log('执行用户注册');

      //判断用户输入的identify是否合法。
      if (graceChecker.check(this.regUser.identify, "email")) {
        this.regUser.email = this.regUser.identify;
      } else if (graceChecker.check(this.regUser.identify, "phoneno")) {
        this.regUser.mobile = this.regUser.identify;
      } else {
        this.$message.error("注册数据格式非法！");
        //不允许用户注册了。
        return;
      }

      //该手机或者邮箱是否已经被注册
      if(! await this.checkIdentifyIsReg()){
        this.$message.error("该手机或者邮箱已经被注册！");
        return;
      }

      //判断密码是否小于6位，判断密码是否一致
      if(this.regUser.password.length<6){
        this.$message.error("密码不能小于6位");
        return;
      }else if(!graceChecker.isSame(this.regUser.password,this.regUser.confirmpass)){
        this.$message.error("密码与确认密码不一致！");
        return;
      }

      //校验验证码是否正确
      if(!await this.checkValidateCode()){
         this.$message("验证码不正确!");
         return;
      }

      // 通过判断验证后进行注册操作
      //发送异步请求
      /* //整合接口后写法
      this.service.post('/users/', this.regUser).then(resp => {
        console.log(resp);
        if (resp.data.code === 200) {
          this.$message.success("注册成功！");
          //注册成功

          //清空文本框
          this.regUser.identify="";
          this.regUser.password="";
          this.regUser.confirmpass="";
          this.regUser.validateCode="";

          //定时器，注册成功后两秒后跳转到登录
          setTimeout(()=>{this.activeName='userlogin'},2000);

        } else {
          this.$message.error("注册失败！");
        }
      }).catch(err => {
        console.log(err);
      })*/

      //整合接口后请求注册接口写法
      this.$store.dispatch('Reg',this.regUser).then(resp=>{
          if (resp.data.code === 200) {
          this.$message.success("注册成功！");
          //注册成功

          //清空文本框
          this.regUser.identify="";
          this.regUser.password="";
          this.regUser.confirmpass="";
          this.regUser.validateCode="";

          //定时器，注册成功后两秒后跳转到登录
          setTimeout(()=>{this.activeName='userlogin'},2000);

        } else {
          this.$message.error("注册失败！");
        }
      }).catch(err=>{
          console.log(err);
      })
    },

    changeRandomCodeImg() {
      console.log('执行更换验证码图片....');
    },

    //检查电子邮箱或者手机号码是否已经被注册
    async checkIdentifyIsReg() {
      let flag = false; //默认校验是失败；

      await this.$store.dispatch("CheckIsReg",{
          identify: this.regUser.identify
      }).then(resp=>{
        console.log("---------验证码校验结果---------");
        console.log(resp);
        if(resp.data.code === 200){
          flag = true;
        }
      }).catch(err=>{
        console.log(err);
      })
      return flag;
    },


    //给手机或电子邮箱发验证码加防抖功能
    debounceSendMsgToMobileOrEmail:_.debounce(function(){
        this.sendMsgToMobileOrEmail();
    },1000),
  //发送验证码按钮
  async sendMsgToMobileOrEmail() {
        //判断用户输入的identify是否合法。
      if (graceChecker.check(this.regUser.identify, "email")) {
        this.regUser.email = this.regUser.identify;
      } else if (graceChecker.check(this.regUser.identify, "phoneno")) {
        this.regUser.mobile = this.regUser.identify;
      } else {
        this.$message.error("注册数据格式非法！");
        //不允许用户注册了。
        return;
      }

      //该手机或者邮箱是否已经被注册
      if(! await this.checkIdentifyIsReg()){
        this.$message.error("该手机或者邮箱已经被注册！");
        return;
      }

        //发送验证码
       http.get("https://www.simoniu.com/commons/msg/validatecode",{
          token: this.token,
          identify: this.regUser.identify
      }).then(resp=>{
         if(resp.data.code === 200){
          //验证码发送成功，按钮禁用，倒计时一分钟
           this.$message.success(resp.data.msg)
          
            this.sendMsgDisabled = true;//按钮禁用
                 //60秒后按钮再变成可用
            setTimeout(()=>{this.sendMsgDisabled=false},60000);
            // setTimeout  延迟多少秒后执行一次动作
            // setInterval  每过多少秒执行一次动作
            let iCount=60;//计时器总数
            let timer = setInterval(()=>{
              this.sendMsgBtnTitle='发送验证码('+(--iCount)+')';
              //清除定时器  -- 当60减到0再清除计时器
              if(iCount<=0){
                clearInterval(timer);
                // 清除定时器后再把按钮的文字变成发送验证码
                this.sendMsgBtnTitle='发送验证码'
              }
            },1000);
         }else{
           this.$message.error(resp.data.msg);
         }
      })
    },

    //检查验证码
    async checkValidateCode() {
        let flag = false; //默认校验是失败；

      await http.get("https://www.simoniu.com/commons/msg/auth",{
          token: this.token,
          code: this.regUser.validateCode
      }).then(resp=>{
        console.log("---------验证码校验结果---------");
        console.log(resp);
        if(resp.data.code === 200){
          flag = true;
        }
      }).catch(err=>{
         console.log(err);
      })
      return flag;

    }
  }
}
</script>

<style scoped>

.loginDiv {
  width: 100%;
  height: 520px;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  background: url('@/assets/image/zhidao/webbackgroundimg.jpg');
  background-size:1200px;
}

#backlogo {
  margin: 40px 0 0 0px;
}

.loginForm {
  margin: 20px;
  background: #FFFFFF;
  width: 480px;
  border-radius: 0px;
  margin-left: 800px;
}

.el-form-item {
  text-align: start;
}

.el-input {
  width: 280px;

}

.verifybox {
  display: flex;
}
</style>

<style>
/* 修改element-ui文本框点击后的样式 */
/* .nm-skin-pretty .el-input.is-active .el-input__inner,
.nm-skin-pretty .el-input__inner:focus {
    border:1px solid #55499c;
} */
/* 修改按钮颜色 */
/* .el-button:nth-child(1) {
    background: #6a5ac7;
    border-radius: 4px;
    border: 1px solid #6a5ac7;
  } */
</style>
