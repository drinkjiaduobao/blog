<template>
  <div>
    <myNav></myNav>
    <div class="zhanwei"></div>

    <div class="container">
      <div class="container-subject">
        <myUserCenterContainer></myUserCenterContainer>
      </div>
    </div>
    <myFooter style="margin-top:20px"></myFooter>
  </div>
</template>

<script>
import myNav from '@/components/nav.vue'
import myFooter from '@/components/myFooter.vue'
import myUserCenterContainer from "@/components/myUserCenterContainer";
export default {
  name: "MyUserCenter",
  components:{
    myNav,
    myFooter,
    myUserCenterContainer
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 12px;
  width: 100%;
  /* background-color: #fafafa; */
}

.course-list {
  width: 80%;
  margin: 2px auto;
  padding-bottom: 10px;
}

.container-subject {
  width: 80%;
  height: auto;
  /* background-color: #fbfbea; */
  margin: 0px auto;
  text-align: center;
}
</style>