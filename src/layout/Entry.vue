<template>
  <div style="display: inline">
    <el-container id="background">
      <el-aside />
      <el-container>
        <el-header>
          <navbar />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-aside />
    </el-container>
    <div id="footer">
      <div class="footer-content">
        制作团队
        <p>-喵喵想摸鱼</p>
        完成时间
        <p>-2021.04</p>
        </div>
      <div class="divide"></div>
      <div class="footer-content">
        团队成员
        <p>-开发：周冠鹏 王钧毅</p>
        <p>-前端：郑桂煜</p>
        <p>-文档：王钧毅</p>
      </div>
      <div class="divide"></div>
      <div class="footer-content">
        联系方式
        <p>-邮箱：</p>
        <p>-2576848354@qq.com</p>
        <p>-1341534970@qq.com</p>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "Entry",
  components: {
    navbar,
  },
};
</script>

<style scoped>
#background {
  background: url("https://img9.51tietu.net/pic/2019-091021/odorrcdyr4modorrcdyr4m.jpg")
    no-repeat;
  background-size: cover;
  height: 85%;
}
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c3c3c;
  height: 15%;
  font-size: 12px;
}
.footer-content {
  width: 12%;
  height: 75%;
  text-align: left;
  color: #fff;
  padding-left: 50px;
}
.divide {
  width: 2px;
  background-color: rgba(192, 192, 192, 0.3);
  height: 75%;
}
</style>
