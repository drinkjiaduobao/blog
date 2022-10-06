<template>
<!-- 首页轮播组件 -->
    <div class="mycarousel-container">
      
        <el-carousel trigger="click" style="width: 100%">
          <el-carousel-item v-for="(item,index) in carouselItemsList" :key="index"
                        :style="{backgroundImage:'url(' + item.img + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center top', backgroundSize: 'cover'}">
          <div class="jumbotron">
            <div class="bg" style="height:300px">
              <h1>{{ item.title }}</h1>
              <div style="margin: 0px auto; width: 50%;">
                <el-divider style="width: 600px"></el-divider>
              </div>
              <el-button type="primary" round>开始学习</el-button>
            </div>
              </div>
            </el-carousel-item>
        </el-carousel>
        <!-- <div class="video_div">
          <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="" width="100%">
            <source src="@/assets/mp4/1658537886765_01f4f3ef5b5e.mp4" type="video/mp4">
          </video>
        </div> -->
      
      <!-- <div class="videozhezhao">
         
      </div>
      <div class="videozhezhaotext">佳多宝编程博客</div> -->
    </div>
</template>

<script>
export default {
    data() {
    return {
      carouselItemsList: [
        {
          title: 'Java全栈学习线路',
          actionUrl: '#',
          img: 'https://img.simoniu.com/bgcolor_06.jpg',
        },
        {
          title: 'Python自动化学习线路',
          actionUrl: '#',
          img: 'https://img.simoniu.com/bgcolor_05.jpg',
        },
        {
          title: '大数据运维学习线路',
          actionUrl: '#',
          img: 'https://img.simoniu.com/bgcolor_07.jpg',
        }
      ]
    }
  }
}
</script>

<style scoped>
.mycarousel-container{
   margin-top: 61px;
}

.jumbotron {
  width: 100%;
  margin: 0px auto;
  text-align: center;
}

.bg h1 {
  padding: 0px;
  margin: 60px;
  font-size: 40pt;
  text-shadow: 2px 2px 2px #999999;
  color: #FFF;
}

.bg h3 {
  padding: 0px;
  margin: 0px;
  font-size: 20pt;
  color: #FFF;
}
/* .videozhezhao{
  width: 100%;
  height:700px;
  background: rgba(0, 0, 0, 0.5);
  margin-top: -705px;
  position: relative;
}
.videozhezhaotext{
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  letter-spacing:20px;
  color: #fff;
  position: relative;
  top: -500px;
} */
</style>