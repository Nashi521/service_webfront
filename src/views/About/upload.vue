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

    <div v-if="isForm">
      <el-card class="box-card" v-loading="loading">
        <div slot="header" class="clearfix">
          <span>title</span>
        </div>
        <div class="text item">
          {{ "模型类型：" + type[$route.params.id] }}
        </div>
        <div class="text item" v-if="resultvisible">
          {{ "返回结果：" + result }}
        </div>
      </el-card>
    </div>

    <el-upload
      v-if="!isForm"
      class="upload-demo"
      drag
      :action="url"
      :show-file-list="false"
      :on-success="uploadSuccess"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将<b>{{ type[$route.params.id] }}</b
        >格式的文件拖到此处，或<em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">
        (只能上传excel文件，且不超过2M)
      </div>
    </el-upload>

    <div style="margin-top: 12px;">
      <el-button @click="back">
        上一步
      </el-button>
      <el-button  v-if="!resultvisible" type="primary" @click="next">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 3,
      resultvisible: false,
      isForm: true,
      loading: false,
      url:`http://localhost:5050/uploadfile/${this.$route.params.id}`,
      type: {
        1: "数据包",
        2: "文档",
        3: "API",
      },
      result,
    };
  },

  created() {
    console.log(this.$route.params.data);
    this.isForm = this.$route.params.data ? true : false;
    this.resultvisible = this.$route.params.data ? false : true;
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      this.loading = true;
      this.resultvisible = true;
      this.$axios
        .post(`http://localhost:5050/${this.$route.params.id}`, this.$route.params.data)
        .then((res) => {
          console.log(res);
          this.result = res[0]
          this.loading = false;
        });
    },
    uploadSuccess(res,file,fileList) {
      this.result = res.slice(2,-2)
      this.isForm = true;
    }
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
  height: 300px;
  margin-bottom: 10px;
  color: #3c3c3c;
}
</style>
