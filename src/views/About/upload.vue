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

    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>title</span>
        </div>
        <div class="text item">
          {{ "模型类型：" }}
        </div>
        <div class="text item">
          {{ "输入数据：" }}
        </div>
        <div class="text item">
          {{ "返回结果：" }}
        </div>
      </el-card>
      <el-card v-if="resultvisible">
        <div class="text item">
          {{ "返回结果：" }}
        </div>
      </el-card>
    </div>

    <div style="margin-top: 12px;">
      <el-button @click="back">
        上一步
      </el-button>
      <el-button type="primary" @click="next">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3,
      resultvisible: false
    };
  },

  created() {
    console.log(this.$route.params.data)
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      alert("commit" + this.formData);
      this.resultvisible = true
      this.$axios.post('/',this.$route.params.data).then(res => {
        console.log(res)
      })
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
.box-card {
  width: 400px;
  height: 450px;
  margin-bottom: 10px;
  color: #3c3c3c;
}
</style>
