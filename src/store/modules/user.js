import {login,reg,checkIsReg,isLogin,logout,update,refresh} from '@/api/user'

//用户状态管理模块
const usersService = {
    actions:{
        //登录
        Login({commit}, params) { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
            //const identify = loginUser.identify.trim()
            //console.log('执行了usersService=>Login');
            return new Promise((resolve, reject) => { //封装一个 Promise
                login(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error);
                })
            })
        },

        //注册
        Reg({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                reg(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

        //检查是否已经注册
        CheckIsReg({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                checkIsReg(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

        IsLogin({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                isLogin(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

        Logout({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                logout(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

        //更新用户资料
        Update({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                update(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

        //刷新用户资料
        Refresh({commit},  params) {
            return new Promise((resolve, reject) => { //封装一个 Promise
                refresh(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },

    }
}

export default usersService;