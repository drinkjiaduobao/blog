import Vue from 'vue'
import VueRouter from 'vue-router'

//异步路由
const myhome = ()=>import('@/views/myHome/myHome.vue')
const mycourse = ()=>import('@/views/myCourse/myCourse.vue')
const mycodetrack = ()=>import('@/views/myCodeTrack/myCodeTrack.vue')
const myblogpost = ()=>import('@/views/myBlogPost/myBlogPost.vue')
const myAuxiliaryTeaching = ()=>import('@/views/myAuxiliaryTeaching/myAuxiliaryTeaching.vue')
const myActualCombat = ()=>import('@/views/myActualCombat/myActualCombat.vue')
const myLogin = ()=>import('@/views/myLogin/myLogin.vue')
const mySearch = ()=>import('@/views/mySearch/mySearch.vue')
const articleDetails = ()=>import('@/views/myArticleDetails/myArticleDetails.vue')
const courseDetails = ()=>import('@/views/myCourseDetails/myCourseDetails.vue')
const usersCenter = ()=>import('@/views/myUserCenter/myUserCenter.vue')


const myQuestionBank = ()=>import('@/views/myAuxiliaryTeaching/myQuestionBank/myQuestionBank.vue')
const myToolResources = ()=>import('@/views/myAuxiliaryTeaching/myToolResources/myToolResources.vue')
const myNavigation = ()=>import('@/views/myAuxiliaryTeaching/myNavigation/myNavigation.vue')
const myCase = ()=>import('@/views/myAuxiliaryTeaching/myCase/myCase.vue')

Vue.use(VueRouter)

const routes = [
  // {
  //   // 指导页
  //   path: '/',
  //   name: 'myGuidance',
  //   component: myGuidance
  // },
  {
    // 首页
    path: '/',
    name: 'myhome',
    component: myhome
  },
  {
    // 教程
    path: '/mycourse/:catalog?',
    name: 'mycourse',
    component: mycourse
  },
  {
    // 码道
    path: '/mycodetrack',
    name: 'mycodetrack',
    component: mycodetrack
  },
  {
    // 博文
    path: '/myblogpost/:catalog?',
    name: 'myblogpost',
    component: myblogpost,
    //二级路由
    // children:[
    //     {
    //       path:'details/:catalog',
    //       name:'articleDetails',
    //       component:articleDetails
    //     }
    // ]
  },
  {
    // 实战
    path: '/myActualCombat',
    name: 'myActualCombat',
    component: myActualCombat
  },
  {
    //辅助教学
    path: '/myAuxiliaryTeaching',
    name: 'myAuxiliaryTeaching',
    component: myAuxiliaryTeaching,
    //重定向(如果路径为/myAuxiliaryTeaching则自动变为/myAuxiliaryTeaching/myQuestionBank)
    redirect:'/myAuxiliaryTeaching/myQuestionBank',
    children:[ 
      {
        //
        path:'myQuestionBank',
        component:myQuestionBank
      },
      {
        //
        path:'myToolResources',
        component:myToolResources
      },
      {
        //
        path:'myNavigation',
        component:myNavigation
      },
      {
        //
        path:'myCase',
        component:myCase
      },
    ]
  },
  {
    // 登录
    path: '/myLogin',
    name: 'myLogin',
    component: myLogin
  },
  {
    // 搜索
    path: '/mySearch',
    name: 'mySearch',
    component: mySearch
  },
  //博文内容详情
  //需要包含
  {
    path:'/myblogpostDetails/:catalog?',
    name:'articleDetails',
    component:articleDetails
  },
  //教程内容详情
  {
    path:'/courseDetails/:cid?',
    name:'courseDetails',
    component:courseDetails
  },
  {
    path:'/users/center',
    name:'usersCenter',
    component:usersCenter,
    meta:{
      requireLogin: false  //这个路由必须检查用户是否已经登录。
  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
