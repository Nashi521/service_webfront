<template>
  <div>
    <el-form
      :model="formData"
      :rules="rules"
      status-icon
      label-width="100px"
      style="width: 60%; margin: auto;"
    >
      <el-form-item label="数据大小" prop="size" style="width: 60%">
        <el-input v-model.number="formData.size" placeholder="请输入数据大小">
          <template slot="suffix">kb</template>
        </el-input>
      </el-form-item>
      <el-form-item label="数据类型" prop="type">
        <el-select v-model="formData.type" placeholder="请选择">
          <el-option
            v-for="item in type_options"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数据格式" prop="format">
        <el-select v-model="formData.format" placeholder="请选择">
          <el-option
            v-for="item in format_options"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="资产类型">
        <el-checkbox label="市场调研" v-model="formData.tag1"></el-checkbox>
        <el-checkbox label="产业经济" v-model="formData.tag2"></el-checkbox>
        <el-checkbox label="经营管理" v-model="formData.tag3"></el-checkbox>
        <el-checkbox label="智能投顾" v-model="formData.tag4"></el-checkbox>
        <el-checkbox label="车辆信息" v-model="formData.tag5"></el-checkbox>
        <el-checkbox label="商品信息" v-model="formData.tag6"></el-checkbox>
        <el-checkbox label="海关进出口" v-model="formData.tag7"></el-checkbox>
        <el-checkbox label="知识产权" v-model="formData.tag8"></el-checkbox>
        <el-checkbox label="企业综合" v-model="formData.tag9"></el-checkbox>
        <el-checkbox label="电子商务" v-model="formData.tag10"></el-checkbox>
      </el-form-item>

      <el-form-item style="margin-top: 12px; margin: auto;">
        <el-button @click="back">
          上一步
        </el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="primary" @click="nexts">批量导入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      formData: {
        type: 0,
        format: 0,
      },
      type_options: [
        {
          label: "文本",
          value: 0,
        },
        {
          label: "图片",
          value: 1,
        },
      ],
      format_options: [
        {
          label: "PDF",
          value: 0,
        },
        {
          label: "DOC",
          value: 1,
        },
        {
          label: "PPT",
          value: 2,
        }
      ],
      rules: {
        size: [
          {
            required: true,
            message: "不能为空",
            trigger: "blur",
          },
          {
            type: "number",
            message: "请输入数字",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      if (this.formData.size) {
        this.$router.push({
          name: "upload",
          params: { id: 2, data: this.formData },
        });
      } else {
        this.$message.error("请输入数据");
      }
    },
    nexts() {
      this.$router.push({
        name: "upload",
        params: { id: 2 },
      });
    },
    resetForm() {
      this.formData = {};
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
</style>
