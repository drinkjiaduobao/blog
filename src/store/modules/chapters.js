import {queryChapterMenuByCid} from "@/api/chapters";


const chaptersService={
    actions:{
        QueryChapterMenuByCid({commit}, params) { //定义 ... 方法，在组件中使用 this.$store.dispatch("...") 调用
            return new Promise((resolve, reject) => { //封装一个 Promise
                queryChapterMenuByCid(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
};

export default chaptersService;