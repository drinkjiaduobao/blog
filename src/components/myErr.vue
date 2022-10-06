<template>
<!-- err404组件 -->
    <div>
        <div class="err">
            <span class="err404">404!主人喝加多宝去了</span>
            <hr color='lightgrey'>
            <img src="@/assets/image/404.0dc4cd5f.jpg">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .err{
        width: 70%;
        height: 20%;
        margin:0 auto;
        text-align: center;
    }
    .err img{
      width: 300px;
      height: 300px;
      border-radius: 50%;
      margin: 20px auto;
    }
    .err404{
        font-size: 25px;
        font-weight: bold;
        color: rgb(163, 163, 163);
        line-height: 100px;
    }
</style>