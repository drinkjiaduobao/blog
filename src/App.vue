<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  /*解决wangEditor编辑器遮盖导航栏的问题*/
  .w-e-menu{
    z-index: 20 !important;
  }
  .w-e-text-container{
    z-index: 10 !important;
  }
  /* --------------------------------------------- */
</style>
