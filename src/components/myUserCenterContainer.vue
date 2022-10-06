<template>
    <el-row>
        <el-col :span="24" class="blog-container">
            <!--左侧菜单栏部分-->
            <el-col :span="6">
                <!--博文页面右侧组件-->
                <myUserCenterMenuBar ref="menu"></myUserCenterMenuBar>
            </el-col>
            <!--右侧视图部分-->
            <el-col :span="18">
                <div class="usercenter-right">
                    <!--搜索结果列表组件-->
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="头像">
                            <el-image
                                    style="width: 100px; height: 100px"
                                    :src="currentAvatarUrl"
                                    :fit="fit" :error="reloadAvatar"></el-image>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="">
                            <el-collapse accordion>
                                <el-collapse-item title="更换头像" name="1">
                                    <div class="avatar-container">

                                        <el-image v-for="(logo,index) in avatarList" :key="index"
                                                  style="width: 100px; height: 100px;cursor:pointer"
                                                  :src="logo"
                                                  :fit="fit" @click="changeAvatar(index)"></el-image>
                                    </div>

                                </el-collapse-item>
                            </el-collapse>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="用户名">
                            <el-input v-model="currentLoginUser.username" readonly placeholder="用户名" size="mini"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="手机">
                            <el-input v-model="currentLoginUser.mobile" readonly placeholder="手机" size="mini"></el-input>
                        </el-form-item>
                        <el-form-item label="电子邮箱">
                            <el-input v-model="currentLoginUser.email" readonly placeholder="电子邮箱" size="mini"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="性别">
                            <el-radio v-model="currentLoginUser.gender" label="男" size="mini">男</el-radio>
                            <el-radio v-model="currentLoginUser.gender" label="女" size="mini">女</el-radio>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="出生日期">
                            <el-date-picker
                                    size="mini"
                                    v-model="currentLoginUser.birthday"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <!-- 省市区级联 -->
                        <el-form-item label="省/市/区">
                            <v-distpicker :province="currentLoginUser.province" :city="currentLoginUser.city" :area="currentLoginUser.zone" @province="changeProvince" @city="changeCity" @area="changeArea"></v-distpicker>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <el-form-item label="身份证号码">
                            <el-input v-model="currentLoginUser.idCard" placeholder="身份证号码" maxlength="18" size="mini"></el-input>
                        </el-form-item>
                    </el-form>
                    <el-form :inline="true" :model="currentLoginUser" class="demo-form-inline userform-right">
                        <div style="text-align: center">
                            <el-button round @click="saveUsersInfo">更新资料</el-button>
                        </div>
                    </el-form>
                </div>
            </el-col>

        </el-col>
    </el-row>
</template>

<script>
    import myUserCenterMenuBar from "@/components/myUserCenterMenuBar";
    import VDistpicker from 'v-distpicker';//省市级联

    export default {
        name: "MyUserCenterContainer",
        components: {
            myUserCenterMenuBar,
            VDistpicker
        },
        data() {
            return {
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                currentAvatarUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                avatarList: [
                    "https://img.simoniu.com/vue-color-avatar01.png",
                    "https://img.simoniu.com/vue-color-avatar02.png",
                    "https://img.simoniu.com/vue-color-avatar03.png",
                    "https://img.simoniu.com/vue-color-avatar04.png",
                    "https://img.simoniu.com/vue-color-avatar05.png",
                    "https://img.simoniu.com/vue-color-avatar06.png",
                    "https://img.simoniu.com/vue-color-avatar07.png",
                    "https://img.simoniu.com/vue-color-avatar08.png",
                    "https://img.simoniu.com/vue-color-avatar09.png",
                    "https://img.simoniu.com/vue-color-avatar10.png",
                    "https://img.simoniu.com/vue-color-avatar11.png",
                    "https://img.simoniu.com/vue-color-avatar12.png",
                ],
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                currentLoginUser: {
                    province:'',//省
                    city:'',//市
                    zone:'',//区
                }
            }
        }
        ,
        mounted() {
            this.currentLoginUser = this.$store.state.loginSuccessUser;
            this.currentAvatarUrl = this.$store.state.loginSuccessUser.avatar;
        }
        ,
        methods: {
            changeAvatar(index) {
                this.currentAvatarUrl = this.avatarList[index];
            },

            initFirstLevelDistrictList() {

            },

            initSecondLevelDistrictList(item){


            },
            initThirdLevelDistrictList(item){

            },

            changeProvince(data){
                console.log(data);
                this.currentLoginUser.province = data.value;
            },
            changeCity(data){
                console.log(data);
                this.currentLoginUser.city = data.value;
            },
            changeArea(data){
                console.log(data);
                this.currentLoginUser.zone = data.value;
            },
            saveUsersInfo(){
                this.currentLoginUser.avatar = this.currentAvatarUrl;
                // console.log(this.currentLoginUser);

                //执行更新用户资料
                this.$store.dispatch('Update',this.currentLoginUser).then(resp=>{
                    if(resp.data.code === 200){
                        this.$message.success(resp.data.message);
                        //更新用户缓存。
                        this.$store.dispatch('Refresh',{
                            uid: this.currentLoginUser.uid
                        }).then(resp=>{
                            if(resp.data.code===200){
                            //console.log('--------刷新用户缓存后的用户资料---------');
                            //console.log(resp.data.data);
                            this.currentLoginUser = resp.data.data;
                            this.currentAvatarUrl = this.currentLoginUser.avatar;
                            window.localStorage.setItem("loginuser.myproject.com",JSON.stringify(this.currentLoginUser));
                            this.$store.state.loginSuccessUser = this.currentLoginUser;
                            }
                        }).catch(err=>{
                            console.log(err);
                        })
                    }
                }).catch(err=>{
                    console.log(err);
                })
                    
            }
        }
    }
</script>

<style scoped>
    .usercenter-right {
        width: 90%;
        height: 98%;
        margin: 10px 10px 20px 10px;
        padding: 10px 0px 10px 0px;
        background: #FFF;
        text-align: left;
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
</style>