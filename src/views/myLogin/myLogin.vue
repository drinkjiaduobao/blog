<template>
<!-- 登录、注册页面 -->
    <div>
        <!-- 顶部导航组件 -->
        <myNav></myNav>
        <!-- 占位 -->
        <div class="zhanwei"></div>
        <!-- 登录表单 -->
        <myLogin></myLogin>
        <!-- 底部组件 -->
        <myFooter></myFooter>
    </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myLogin from "@/components/myLogin";
import myFooter from '@/components/myFooter'

export default {
  components:{
    myNav,
    myFooter,
    myLogin
  },
}
</script>

<style scoped>

</style>