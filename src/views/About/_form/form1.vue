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
        <el-checkbox label="位置地图" v-model="formData.tag1"></el-checkbox>
        <el-checkbox label="新闻资讯" v-model="formData.tag2"></el-checkbox>
        <el-checkbox label="舆情监测" v-model="formData.tag3"></el-checkbox>
        <el-checkbox label="产业经济" v-model="formData.tag4"></el-checkbox>
        <el-checkbox label="市内交通" v-model="formData.tag5"></el-checkbox>
        <el-checkbox label="智能客服" v-model="formData.tag6"></el-checkbox>
        <el-checkbox label="企业工商" v-model="formData.tag7"></el-checkbox>
        <el-checkbox label="企业图谱" v-model="formData.tag8"></el-checkbox>
        <el-checkbox label="自然灾害" v-model="formData.tag9"></el-checkbox>
        <el-checkbox label="智能识别" v-model="formData.tag10"></el-checkbox>
        <el-checkbox label="电子商务" v-model="formData.tag11"></el-checkbox>
        <el-checkbox label="企业综合" v-model="formData.tag12"></el-checkbox>
        <el-checkbox label="环境质量" v-model="formData.tag13"></el-checkbox>
        <el-checkbox label="投融资" v-model="formData.tag14"></el-checkbox>
        <el-checkbox label="商品信息" v-model="formData.tag15"></el-checkbox>
        <el-checkbox label="市场调研" v-model="formData.tag16"></el-checkbox>
        <el-checkbox label="公路铁路" v-model="formData.tag17"></el-checkbox>
        <el-checkbox label="经营管理" v-model="formData.tag18"></el-checkbox>
        <el-checkbox label="公告文书" v-model="formData.tag19"></el-checkbox>
        <el-checkbox label="app应用" v-model="formData.tag20"></el-checkbox>
        <el-checkbox label="知识产权" v-model="formData.tag21"></el-checkbox>
        <el-checkbox label="天气查询" v-model="formData.tag22"></el-checkbox>
        <el-checkbox label="信用评估" v-model="formData.tag23"></el-checkbox>
        <el-checkbox label="资质备案" v-model="formData.tag24"></el-checkbox>
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
          label: "xlsx, xls, csv",
          value: 0,
        },
        {
          label: "jpg, jpeg, png, tif, sql",
          value: 1,
        },
        {
          label: "shp",
          value: 2,
        },
        {
          label: "shape",
          value: 3,
        },
        {
          label: "json",
          value: 4,
        },
        {
          label: "txt",
          value: 5,
        },
        {
          label: "wav",
          value: 6,
        },
        {
          label: "doc",
          value: 7,
        },
        {
          label: "sql",
          value: 8,
        },
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
          params: { id: 1, data: this.formData },
        });
      } else {
        this.$message.error("请输入数据");
      }
    },
    nexts() {
      this.$router.push({
        name: "upload",
        params: { id: 1 },
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
