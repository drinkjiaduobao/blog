import {queryArticlePagerByCatalog,queryArticleByAid,searchArticlesWithKeyword} from '@/api/articles';

const articlesService = {
    actions:{
        //根据板块名称查询指定页号的分页文章列表
        QueryArticlePagerByCatalog({commit}, params) { //定义 ... 方法，在组件中使用 this.$store.dispatch("...") 调用

            return new Promise((resolve, reject) => { //封装一个 Promise
                queryArticlePagerByCatalog(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //文章详情
        QueryArticleByAid({commit}, params) { //定义 ...方法，在组件中使用 this.$store.dispatch("...") 调用

            return new Promise((resolve, reject) => { //封装一个 Promise
                queryArticleByAid(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //根据关键字进行全文检索
        SearchArticlesWithKeyword({commit}, params) { //定义 ...方法，在组件中使用 this.$store.dispatch("...") 调用

            return new Promise((resolve, reject) => { //封装一个 Promise
                searchArticlesWithKeyword(params).then(response => { //使用 members 接口进行网络请求
                    //commit('setLoginUserInfo',memberInfo) //提交一个 mutation，通知状态改变
                    resolve(response) //将结果封装进 Promise
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default  articlesService;