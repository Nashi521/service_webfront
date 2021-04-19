<template>
  <div id="about">
    <el-steps
      :active="active"
      finish-status="success"
      style="width: 50%; margin: auto; margin-top:20px; margin-bottom:20px;"
      align-center
    >
      <el-step title="步骤 1" description="选择模型"></el-step>
      <el-step title="步骤 2" description="输入数据"></el-step>
      <el-step title="步骤 3" description="等待结果"></el-step>
    </el-steps>

    <el-radio-group v-model="type">
      <el-radio label="1" border class="tpype-content">
        数据包价格预测
        <p>适用范围：</p>
        <p>如 省级市级行政区划线、</p>
        <p> xx年平均降水量 等</p>
      </el-radio>
      <el-radio label="2" border class="tpype-content">
        文档价格预测
        <p>适用范围：</p>
        <p>PDF、Word、PPT</p>
        <p>如 xx广告监测</p>
        <p></p>
      </el-radio>
      <el-radio label="3" border class="tpype-content">
        API价格预测
        <p>适用范围：</p>
        <p>各类API</p>
        <p>如 IP地址归属地查询</p>
      </el-radio>
    </el-radio-group>

    <div style="margin-top: 12px;">
      <el-button type="primary" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      type: "1",
    };
  },
  methods: {
    next() {
      this.$router.push({ path: `/about/input/${ this.type }` });
    },
  },
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tpype-content {
  width: 200px;
  height: 250px;
  margin: 20px;
}
</style>
