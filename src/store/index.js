import Vue from 'vue'
import Vuex from 'vuex'
import catalogService from "@/store/modules/catalog";
import usersService from "@/store/modules/user";
import articlesService from "@/store/modules/articles";
import coursesService from "@/store/modules/courses";
import chaptersService from "@/store/modules/chapters";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前导航栏选中的路由状态  记录当前导航栏指向那个路由
    // currentNavBarActive:sessionStorage.getItem("router.navbar.myproject.com"),
    //判断是否已经登录的状态,对象存在就是true，对象不存在就是false，在nav中调用这个状态值，来辨认是否登录
    isLoginSuccess: JSON.parse(window.sessionStorage.getItem("isLogin.myproject.com")),
    //保存已经登录的用户信息状态,转成对象，在nav中调用这个对象用于显示用户头像和用户名
    loginSuccessUser: JSON.parse(window.localStorage.getItem("loginuser.myproject.com")),
    //保存版块列表集合
    allCatalogList: JSON.parse(window.localStorage.getItem("catalogList.myproject.com")),
    //保存当前文章版块id  默认全部  在版块组件中更新状态
    // currentArticleCatalogName: sessionStorage.getItem("currentArticleCatalogName.myproject.com")
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    usersService,
    catalogService,
    articlesService,
    coursesService,
    chaptersService
  }
})
