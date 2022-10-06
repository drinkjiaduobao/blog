import router from "@/router/index";
import store from "@/store/index";

// 防止非管理员账号通过后门获取路由访问。
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {

    //如果用户已经登录，不允许执行登录和注册路由.

    if(to.matched.some(record => record.path ==='/login')){
        //console.log('in permisson path is login!');
        let isLogin = store.state.isLoginSuccess
        if(isLogin){
            next({
                path: '/'
            })
        }
    }

    //如果没有登录则直接跳转到首页
    if (to.matched.some(record => record.meta.requireLogin)) { // 判断该路由是否需要管理员录权限
        //let isAdmin = JSON.parse(sessionStorage.getItem('currentIsAdminStatus.simoniu.com'));
        //调用后端接口；
        store.dispatch('IsLogin').then(resp=>{
            //console.log("in permisson=>"+resp);
            if(resp.data.code === 200){
                if (to.path === '/myLogin') {

                } else {
                    store.state.isLoginSuccess = true;
                    next();
                }
            }else{
                store.state.isLoginSuccess = false;
                window.localStorage.removeItem('loginuser.myproject.com');
                next({
                    path: '/myLogin'  //跳转到登录重写登录....
                })
            }
        })
        /*
        if (isAdmin) { // 判断当前的token是否存在 ； 登录存入的token
            if (to.path === '/pLogin') {

            } else {
                next()
            }
        } else {
            next({
                path: '/pIndex'
            })
        }*/

    } else {
        next()
    }
})