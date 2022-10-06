<template>
  <!-----评论列表部分------->
  <div>
    <div style="background-color: #fffef9;">
      <el-divider content-position="left"><i class="el-icon-chat-dot-square"></i>精彩评论</el-divider>
      <div class="replyList" v-for="(reply,index) in pager.records" :key="index">
        <div class="replyTitle">
          <div class="floorNumber"><i class="el-icon-location"></i>{{(pager.current-1)*pager.size+(index+1)}}楼
          </div>
          <div class="replyUser"><i class="el-icon-user-solid"></i>{{reply.username}}</div>
          <div class="replyTime"><i class="el-icon-time"></i>{{reply.createTime}}</div>
        </div>
        <div class="replyContent" v-html="reply.content">
        </div>
      </div>

    </div>
    <el-pagination
        layout="prev, pager, next"
        :total="pager.total"
        :page-size="pager.size"
        @current-change="handleCurrentChange"
        :pager-count="15">
    </el-pagination>
    <!--wangEditor部分-->
    <el-divider content-position="left"><i class="el-icon-chat-line-round"></i>发表评论</el-divider>
    <div id="wangEditor">

    </div>
    <div style="text-align: center">
      <div style="display: flex;padding: 20px">
        <el-button @click="postReply" round>发表评论</el-button>
        &nbsp;
        <el-input style="width:200px;" v-model="randomCode" placeholder="请输入验证码内容" maxlength="4"></el-input>
        &nbsp;
        <el-image
            style="width: 100px; height: 40px;cursor:pointer;"
            :src="require('../assets/image/vcode.png')"
            @click="changeRandomCodeImg"
        ></el-image>
      </div>
    </div>
  </div>
  <!-----评论列表部分结束------->
</template>

<script>
import wangEditor from 'wangeditor'
import webtoken from "@/util/webtoken";

export default {
  name: "MyReply",
  data() {
    return {
      articleId: '-1',
      randomCode: '', //用户输入的验证码
      reply: {},
      //分页对象
      pager: {},
      editor: null,
      editorData: '',
      token: webtoken.generateWebToken(), //表示客户端的一个唯一的标识符
      randomCodeImgUrl: ''
    }
  },

  mounted() {
    //console.log('当前评论的文章ID是：' + this.articleId);
    /*以下是wangEditor配置的开始*/
    const editor = new wangEditor(`#wangEditor`)
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml
    }
    // 默认情况下，显示所有菜单
    editor.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'indent',
      'lineHeight',
      'link',
      'list',
      'todo',
      'justify',
      'quote',
      'emoticon',
      'image',
      'table',
      'code'
    ];

    editor.config.height = 180;
    // 创建编辑器
    editor.create()
    this.editor = editor
    /*wangEditor配置的结束*/

    //初始验证码
    this.changeRandomCodeImg();
  },

  methods:{
    //初始化当前文章的评论集合,两个参数(文章ID，当前页号)
    initCurrentReplyPager() {

    },

    changeRandomCodeImg() {
      console.log("生成验证码....")
    },
    handleCurrentChange: function (currentPage) {
      console.log("当前页号："+currentPage);
    },

    postReply() {
       console.log('发表评论');
    }
  }
}
</script>

<style scoped>

</style>