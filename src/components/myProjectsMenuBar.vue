<template>
  <div class="blog-right">
    <div class="blog-aboutme">
      <el-menu
          router
          :default-active="currentActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          >
        <el-menu-item index="/projects?catalog=alg" @click="initProjectsList('alg')">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">算法</span>
        </el-menu-item>
        <el-menu-item index="/projects?catalog=h5" @click="initProjectsList('js')">
          <i class="el-icon-picture-outline"></i>
          <span slot="title">前端</span>
        </el-menu-item>
        <el-menu-item index="/projects?catalog=javaweb" @click="initProjectsList('javaweb')">
          <i class="el-icon-link"></i>
          <span slot="title">JavaWeb</span>
        </el-menu-item>
        <el-menu-item index="/projects?catalog=app" @click="initProjectsList('app')">
          <i class="el-icon-mobile-phone"></i>
          <span slot="title">App/小程序</span>
        </el-menu-item>
        <el-menu-item index="/projects?catalog=bigdata" @click="initProjectsList('bigdata')">
          <i class="el-icon-folder-opened"></i>
          <span slot="title">大数据</span>
        </el-menu-item>
        <el-menu-item index="/projects?catalog=ai" @click="initProjectsList('ai')">
          <i class="el-icon-cpu"></i>
          <span slot="title">人工智能</span>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
</template>

<script>
export default {
  name: "MyProjectsMenuBar",
  data() {
    return {
      currentActive: '/projects'

    }
  },
  mounted() {
     this.initProjectsList();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    initProjectsList() {
      //console.log('初始化的项目列表的类别是：' + catalog);
      this.$emit('initProjects');
    }
  }
}
</script>

<style scoped>
.blog-right {
  width: 100%;
  height: 98%;
  padding: 10px 0px 10px 0px;
  margin: 10px 0px 10px 0px;
  background: #FFF;

}

.blog-aboutme {
  margin: 10px;
  border: 1px solid #EEE;
  border-radius: 5px;
  padding: 20px 5px 20px 5px;
}

.blog-unit-content {
  color: #666666;
  text-indent: 2em;
  font-size: small;
}

.blog-adv {
  text-align: center;
  margin: 10px;
  border: 1px solid #EEE;
  border-radius: 5px;
  padding: 20px 5px 20px 5px;
  height: 300px;
  line-height: 300px;
  color: #ccc;
}

.blog-unit-title {
  font-size: larger;
}

.blog-unit-title {
  text-align: center;
}

.blog-unit-hot, .blog-unit-friend {
  text-align: center;
}

.blog-unit-hot li, .blog-unit-friend li {
  list-style: none;

}

.blog-unit-hot a, .blog-unit-friend a {
  text-decoration: none;
  color: #336699;
}

.el-menu-item{
  text-align: start;
}
</style>
