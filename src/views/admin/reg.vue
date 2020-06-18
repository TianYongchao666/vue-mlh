<template>
  <div class="hello">
    <div class="logD">
      <p class="p1">注册</p>
      <p class="p2">注册即送2600元新人红包</p>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
      <router-link class="login" to="/login">账号密码登录</router-link>
    </van-form>
  </div>
</template> 
<style lang="scss" scoped>
.logD {
  height: 150px;
  margin-left: 30px;
  margin-top: 30px;
}
</style>
  <script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>