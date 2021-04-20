<template>
  <div>
    <el-form
      :model="formData"
      status-icon
      label-width="100px"
      style="width: 60%; margin: auto;"
    >
      <el-form-item label="资产类型">
        <el-checkbox label="智能识别" v-model="formData.tag1"></el-checkbox>
        <el-checkbox label="产业经济" v-model="formData.tag2"></el-checkbox>
        <el-checkbox label="电子商务" v-model="formData.tag3"></el-checkbox>
        <el-checkbox label="商品信息" v-model="formData.tag4"></el-checkbox>
        <el-checkbox label="短信API" v-model="formData.tag5"></el-checkbox>
        <el-checkbox label="企业综合" v-model="formData.tag6"></el-checkbox>
        <el-checkbox label="企业工商" v-model="formData.tag7"></el-checkbox>
        <el-checkbox label="银行卡核验" v-model="formData.tag8"></el-checkbox>
        <el-checkbox label="车辆信息" v-model="formData.tag9"></el-checkbox>
        <el-checkbox label="智能风控" v-model="formData.tag10"></el-checkbox>
        <el-checkbox label="天气查询" v-model="formData.tag11"></el-checkbox>
        <el-checkbox label="经营管理" v-model="formData.tag12"></el-checkbox>
        <el-checkbox label="身份核验" v-model="formData.tag13"></el-checkbox>
        <el-checkbox label="知识产权" v-model="formData.tag14"></el-checkbox>
        <el-checkbox label="app应用" v-model="formData.tag15"></el-checkbox>
        <el-checkbox label="快递查询" v-model="formData.tag16"></el-checkbox>
        <el-checkbox label="舆情监测" v-model="formData.tag17"></el-checkbox>
        <el-checkbox label="IP地址" v-model="formData.tag18"></el-checkbox>
        <el-checkbox label="手机号验证" v-model="formData.tag19"></el-checkbox>
        <el-checkbox label="海关进出口" v-model="formData.tag20"></el-checkbox>
        <el-checkbox label="智能客服" v-model="formData.tag21"></el-checkbox>
        <el-checkbox label="1分钱" v-model="formData.tag22"></el-checkbox>
        <el-checkbox label="司法" v-model="formData.tag23"></el-checkbox>
        <el-checkbox label="银行卡信息" v-model="formData.tag24"></el-checkbox>
        <el-checkbox label="交通违章" v-model="formData.tag25"></el-checkbox>
        <el-checkbox label="资质备案" v-model="formData.tag26"></el-checkbox>
        <el-checkbox label="行政监管" v-model="formData.tag27"></el-checkbox>
        <el-checkbox label="位置地图" v-model="formData.tag28"></el-checkbox>
        <el-checkbox label="招投标" v-model="formData.tag29"></el-checkbox>
        <el-checkbox label="公告文书" v-model="formData.tag30"></el-checkbox>
        <el-checkbox label="投融资" v-model="formData.tag31"></el-checkbox>
        <el-checkbox label="黑名单" v-model="formData.tag32"></el-checkbox>
        <el-checkbox label="风控" v-model="formData.tag33"></el-checkbox>
        <el-checkbox label="手机号码归属" v-model="formData.tag34"></el-checkbox>
        <el-checkbox label="反欺诈" v-model="formData.tag35"></el-checkbox>
        <el-checkbox label="星座运势" v-model="formData.tag36"></el-checkbox>
        <el-checkbox label="手机号码状态" v-model="formData.tag37"></el-checkbox>
        <el-checkbox label="航空航班" v-model="formData.tag38"></el-checkbox>
        <el-checkbox label="新闻资讯" v-model="formData.tag39"></el-checkbox>
        <el-checkbox label="环境质量" v-model="formData.tag40"></el-checkbox>
        <el-checkbox label="尾号限行" v-model="formData.tag41"></el-checkbox>
        <el-checkbox label="行驶驾驶" v-model="formData.tag42"></el-checkbox>
        <el-checkbox label="税务信息" v-model="formData.tag43"></el-checkbox>
        <el-checkbox label="信用评估" v-model="formData.tag44"></el-checkbox>
        <el-checkbox label="基站" v-model="formData.tag45"></el-checkbox>
        <el-checkbox label="自然灾害" v-model="formData.tag46"></el-checkbox>
        <el-checkbox label="万年历" v-model="formData.tag47"></el-checkbox>
        <el-checkbox label="手机在网时长" v-model="formData.tag48"></el-checkbox>
        <el-checkbox label="企业图谱" v-model="formData.tag49"></el-checkbox>
        <el-checkbox label="智能营销" v-model="formData.tag50"></el-checkbox>
        <el-checkbox label="油价查询" v-model="formData.tag51"></el-checkbox>
        <el-checkbox label="彩票信息" v-model="formData.tag52"></el-checkbox>
        <el-checkbox label="公路铁路" v-model="formData.tag53"></el-checkbox>
        <el-checkbox label="京东E卡" v-model="formData.tag54"></el-checkbox>
        <el-checkbox label="市场调研" v-model="formData.tag55"></el-checkbox>
        <el-checkbox label="借贷" v-model="formData.tag56"></el-checkbox>
        <el-checkbox label="智能支付" v-model="formData.tag57"></el-checkbox>
        <el-checkbox label="区号查询" v-model="formData.tag58"></el-checkbox>
        <el-checkbox label="用户画像" v-model="formData.tag59"></el-checkbox>
        <el-checkbox label="股票汇率" v-model="formData.tag60"></el-checkbox>
        <el-checkbox label="视频会员" v-model="formData.tag61"></el-checkbox>
      </el-form-item>

      <el-form-item style="margin-top: 12px; margin: auto;">
        <el-button @click="back">
          上一步
        </el-button>
        <el-button @click="resetForm('formData')">重置</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      formData: {},
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.push({ name: "upload", params: { id: 3, data:this.formData } });
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
