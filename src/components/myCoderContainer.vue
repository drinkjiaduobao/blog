<template>
<!-- 码道左侧内容 -->
  <div class="blog-left">
    <el-row :span="24" class="blog-container">
      <el-col :span="6">
        <el-menu
            router
            :default-active="currentActive"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item index="/coder?catalog=alg" @click="initProjectsList('alg')">
            <i class="el-icon-edit-outline"></i>
            <span slot="title">算法</span>
          </el-menu-item>
          <el-menu-item index="/coder?catalog=h5" @click="initProjectsList('js')">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">前端</span>
          </el-menu-item>
          <el-menu-item index="/coder?catalog=javaweb" @click="initProjectsList('javaweb')">
            <i class="el-icon-link"></i>
            <span slot="title">JavaWeb</span>
          </el-menu-item>
          <el-menu-item index="/coder?catalog=app" @click="initProjectsList('app')">
            <i class="el-icon-mobile-phone"></i>
            <span slot="title">App/小程序</span>
          </el-menu-item>
          <el-menu-item index="/coder?catalog=bigdata" @click="initProjectsList('bigdata')">
            <i class="el-icon-folder-opened"></i>
            <span slot="title">大数据</span>
          </el-menu-item>
          <el-menu-item index="/coder?catalog=ai" @click="initProjectsList('ai')">
            <i class="el-icon-cpu"></i>
            <span slot="title">人工智能</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col class="coder-list">
        <el-row>
          <el-col :span="18" v-for="(o, index) in 5" :key="index" :offset="3">
            <el-card :body-style="{ padding: '0px' }" shadow="hover"  style="height: 260px">
              <img src="@/assets/image/web.jpg" style="width: 100%"
                   class="image">
              <div style="padding: 12px;">
                <span>计算机视觉项目-文档扫描OCR识别</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyCoderContainer",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    load() {
      this.count += 1
    }
  }
}
</script>

<style scoped>
.blog-left {
  width: 98%;
  height: 98%;
  margin: 10px 0px 10px 0px;
  padding: 10px 0px 10px 0px;
  background: #FFF;
}

.blog-container {
  display: flex;
}

.el-menu-item {
  text-align: start;
}

.coder-list {
  margin: 0px auto;
  text-align: center;
}

.el-card {
  margin: 10px;
}
</style>

<!-- 修改分页背景色 -->
<style>
  /* .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #55499c;
    color: #fff;
  } */
</style>
