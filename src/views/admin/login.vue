<template>
  <div class="hello">
    <div class="quit">
      <p @click="home">×</p>
    </div>
    <div class="logD">
      <p class="p1">密码登录</p>
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
      <router-link class="center" to="/center">
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit" @click="login">登录</van-button>
        </div>
      </router-link>
      <router-link class="reg" to="/reg">没有账号，我要注册</router-link>
    </van-form>
  </div>
</template> 
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.logD {
  height: 150px;
  margin-left: 30px;
  margin-top: 30px;
}
.hello {
  overflow: hidden;
}
.quit {
  width: 20px;
  height: 10px;
  margin-left: 80%;
}
.quit p {
  font-size: 48px;
  color: #969697;
}
</style>
  <script>
  import axios from "axios"
export default {
  data() {
    return {
      username: "",
      password: "",
      // loginshow:["loginshow"],
      // show:["show"]

    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);

    },

    home(){
       this.$router.push({
           name:"Home"
         })
    },
    login(){
        axios({
         method:'post',
         url:'http://api.cat-shop.penkuoer.com/api/v1/auth/login',
         data:{
           userName:this.username,
           password:this.password
         }
       }).then((res)=>{
         localStorage.setItem("token",res.data.token)
         this.$router.push({
           name:"Center"
         })
        //  if(res.data.code=="success"){
        //    this.loginshow == !loginshow
        //    this.show == !show 
        //  }
        
       })
        this.password=""
       this.username=""
    },
   
  }
};
</script>