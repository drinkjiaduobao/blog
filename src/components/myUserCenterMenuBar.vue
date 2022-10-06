<template>
    <div class="blog-right">
        <div class="blog-aboutme">
            <el-menu
                    router
                    :default-active="currentActive"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-menu-item index="/users/center">
                    <i class="el-icon-user"></i>
                    <span slot="title">个人中心</span>
                </el-menu-item>
                <el-menu-item index="pUserFavorites">
                    <i class="el-icon-goods"></i>
                    <span slot="title">我的收藏</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-tickets"></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
            </el-menu>
        </div>

    </div>
</template>

<script>
    export default {
        name: "MyUserCenterMenuBar",
        data() {
            return {
                currentActive:'/users/center'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
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
        text-align: left;
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