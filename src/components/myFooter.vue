<template>
<!-- 网页底部组件 -->
  <footer>
    <div class="myfooter-container">
      <br>
      <el-row>
        <el-col :span="6">
          <div class="footer-bar">
            <a href="#" class="head-brand" style="font-size: 17pt">佳多宝编程</a>
          </div>
        </el-col>
        <el-col :span="12">
          <ul class="main-nav">
            <li v-for="(m,index) in friendsLinks" :key="index"><a href="#"><i :class="m.icon"></i>{{ m.name }}</a>
              <ul class="drop">
                <li v-for="(sub,index2) in m.subMenus" :key="index2"><a :href="sub.link"
                                                                        target="_blank">{{ sub.name }}</a></li>
              </ul>
            </li>
          </ul>
        </el-col>
        <el-col :span="6">
          <div style="cursor: pointer">
            <!-- <img class="me" src="@/assets/image/me.png" alt=""> -->
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-divider content-position="center" style="color:#9f9abd"></el-divider>
        </el-col>
        <el-col :span="24">
          <div class="footer-copyright">
            <p class="text-center" style="color:#fff;">Copyright <span>&copy;</span> www.drinkjiaduobao.cn
              All Rights Reserved.
              <a href="http://beian.miit.gov.cn/">陕ICP备2022010895</a>&nbsp;&nbsp; 
              <!-- <a href="http://www.simoniu.com/admin">[后台管理]</a> -->
            </p>
          </div>
        </el-col>

      </el-row>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      "friendsLinks": [
        {
          "version": null,
          "createTime": null,
          "modifyTime": null,
          "flag": true,
          "id": 11,
          "name": "常用网站",
          "url": null,
          "hasChild": 1,
          "icon": "el-icon-link",
          "subMenus": [
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 12,
              "webSiteId": 1,
              "name": "Java极客",
              "link": "https://www.javajike.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 13,
              "webSiteId": 1,
              "name": "CSDN",
              "link": "https://www.csdn.net/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 14,
              "webSiteId": 1,
              "name": "w3cschool",
              "link": "https://www.w3cschool.cn/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 15,
              "webSiteId": 1,
              "name": "菜鸟教程",
              "link": "https://www.runoob.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 16,
              "webSiteId": 1,
              "name": "廖雪峰",
              "link": "https://www.liaoxuefeng.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 17,
              "webSiteId": 1,
              "name": "阮一峰",
              "link": "http://www.ruanyifeng.com/blog/archives.html",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 18,
              "webSiteId": 1,
              "name": "方志鹏",
              "link": "https://www.fangzhipeng.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 11
            }
          ]
        },
        {
          "version": null,
          "createTime": null,
          "modifyTime": null,
          "flag": true,
          "id": 19,
          "name": "友情链接",
          "url": null,
          "hasChild": 1,
          "icon": "el-icon-paperclip",
          "subMenus": [
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 20,
              "webSiteId": 1,
              "name": "阿里云",
              "link": "https://www.aliyun.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 21,
              "webSiteId": 1,
              "name": "京东云",
              "link": "https://www.jdcloud.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 22,
              "webSiteId": 1,
              "name": "七牛云",
              "link": "https://www.qiniu.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 23,
              "webSiteId": 1,
              "name": "Vue.js",
              "link": "https://cn.vuejs.org/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 24,
              "webSiteId": 1,
              "name": "Dcloud",
              "link": "https://www.dcloud.io/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 25,
              "webSiteId": 1,
              "name": "中国开源",
              "link": "https://www.oschina.net/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            },
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 29,
              "webSiteId": 1,
              "name": "百度网盘",
              "link": "https://pan.baidu.com/",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 19
            }
          ]
        },
        {
          "version": null,
          "createTime": null,
          "modifyTime": null,
          "flag": true,
          "id": 26,
          "name": "其它",
          "url": null,
          "hasChild": 1,
          "icon": "el-icon-message",
          "subMenus": [
            {
              "version": 0,
              "createTime": null,
              "modifyTime": null,
              "flag": true,
              "id": 27,
              "webSiteId": 1,
              "name": "关于我",
              "link": "/pAboutme",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 26
            },
            {
              "version": 0,
              "createTime": "",
              "modifyTime": null,
              "flag": true,
              "id": 28,
              "webSiteId": 1,
              "name": "商务合作",
              "link": "/pCooperation",
              "position": "footer",
              "icon": null,
              "hasChild": 0,
              "pid": 26
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.myfooter-container {
  width: 100%;
  height: 380px;
  margin: 0px auto;
  /* background-color: #fff; */
  background-color: #333333;
}

.footer-bar {
  text-align: center;
  line-height: 240px;
}

.footer-bar a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.footer-copyright {
  text-align: center;
}

.main-nav {
  display: flex;

}

.main-nav li {
  list-style: none;
  width: 33%;

}

.main-nav li a {
  text-decoration: none;
  color: #fff;
}

.main-nav li a:hover {
  text-decoration: none;
  color: #2d89e5;
}

.drop {
  margin-top: 20px;
  margin-left: -40px;
}

.drop li {
  width: 100%;
  text-decoration: none;
  color: #fff;
  font-size: small;
  padding: 5px;

}

.footer-copyright p {
  color: #fff;
  font-size: small;
}

.footer-copyright a {
  color: #fff;
  text-decoration: none;
}
</style>
