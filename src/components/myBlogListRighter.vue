<template>
<!-- 博文---右侧广告内容 -->
    <div class="blog-right">
        <div class="blog-aboutme">
            <div class="blog-unit-title"><i class="el-icon-edit-outline"></i>关于博客</div>
            <hr>
            <div class="blog-unit-content">
                这是我的个人技术博客，主要记录和总结学习和工作中常用的知识及我的生活，也是我的编码手册
            </div>
        </div>
        <div>
            <div class="blog-adv">
              <a href="https://www.aliyun.com/minisite/goods?userCode=fj6ugk9d" target="_blank"><img src="@/assets/image/aliyun_adv.png" style="width:180px;height: 300px"/></a>
            </div>
        </div>
        <div>
            <div class="blog-unit-title"><i class="el-icon-s-data"></i>热门文章</div>
            <hr>
            <div class="blog-unit-hot">
                <li><a href="#" title="热门文章1">热门文章1</a></li>
                <li><a href="#" title="热门文章2">热门文章2</a></li>
                <li><a href="#" title="热门文章3">热门文章3</a></li>
                <li><a href="#" title="热门文章4">热门文章4</a></li>
                <li><a href="#" title="热门文章5">热门文章5</a></li>
                <li><a href="#" title="热门文章6">热门文章6</a></li>
                <li><a href="#" title="热门文章7">热门文章7</a></li>
                <li><a href="#" title="热门文章8">热门文章8</a></li>
            </div>
            <br>
        </div>
        <div>
            <div class="blog-unit-title"><i class="el-icon-share"></i>友情链接</div>
            <hr>
            <div class="blog-unit-friend ">
                <li class="col-md-6"><a href="#">jquery插件库</a></li>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyBlogListRighter"
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
</style>
