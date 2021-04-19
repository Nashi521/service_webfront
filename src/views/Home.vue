<template>
  <div class="home">
    <div id="title">数据资产估值定价分析系统</div>
    <div id="content">人工智能分析数据价值</div>
    <div style="margin: 50px">
      <el-button
        style="width: 150px"
        type="primary"
        size="small"
        round
        @click="handleClick1()"
      >
        开始
      </el-button>
      <el-button
        style="width: 150px"
        size="small"
        round
        @click="handleClick2()"
      >
        了解更多
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    handleClick1() {
      this.$router.push({ path: "/about" });
    },
    handleClick2() {
      this.$router.push({ path: "/show" });
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
#title {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
}
#content {
  text-align: center;
  font-size: 30px;
  color: #fff;
}
</style>
