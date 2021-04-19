<template>
  <el-container id="background">
    <el-aside />
    <el-container>
      <el-header style="margin-bottom: 20px;">
        <navbar />
      </el-header>
      <el-main style="background-color: rgb(180, 180, 180, 0.5);">
        <router-view />
      </el-main>
      <el-footer />
    </el-container>
    <el-aside />
  </el-container>
</template>

<script>
import navbar from "@/components/navbar.vue";

export default {
  name: "Basic",
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
}
</style>
