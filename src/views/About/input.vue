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
      <el-step title="步骤 3" description="提交数据"></el-step>
    </el-steps>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>
