<template>
    <el-menu
      :default-active="activeIndex"
      active-text-color="#7fffd4"
      background-color="transparent"
      text-color="#fff"
      mode="horizontal"
      :router="true"
    >
      <el-menu-item index="/home" style="font-size: 16px; margin-left: 5%;">首页</el-menu-item>
      <el-menu-item index="/about/index" style="font-size: 16px;">入口</el-menu-item>
      <el-menu-item index="/show/index" style="font-size: 16px;">展示</el-menu-item>
      <el-menu-item style="font-size: 16px;">
        <a href="https://www.baidu.com" target="_blank">
          相关
        </a>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: "navbar",
    data() {
      return  {
        activeIndex: "/",
      }
    },
    created() {
      this.activeIndex = this.$route.path
    },
    methods: {

    }
}
</script>

<style scoped>
</style>