<template>
  <div class="herder">
    <van-nav-bar title="魅力惠" right-text="首页" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="center">
      <div class="profile">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_mqx988bhzd8.css" />
        <div class="left">
          <i class="iconfont icon-xin1"></i>
        </div>
        <div class="right">
          <p>1783</p>
          <p>查看并编辑个人资料</p>
        </div>
      </div>
      <hr />
      <div class="profile-2">
        <div class="profile-2-left">
          <p>0</p>
          <p>未支付订单</p>
        </div>
        <hr />
        <div class="profile-2-right">
          <p>0</p>
          <p>全部订单</p>
        </div>
      </div>
      <hr />
      <div class="coupon">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_3wawyqxu31q.css" />
        <p>优惠券</p>
        <span>
          <i class="iconfont icon-arrow-right"></i>
        </span>
      </div>
      <div class="site">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_3wawyqxu31q.css" />
        <p>我的地址</p>
        <span>
          <i class="iconfont icon-arrow-right"></i>
        </span>
      </div>
      <div class="contact">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_3wawyqxu31q.css" />
        <p>联系我们</p>
        <span>
          <i class="iconfont icon-arrow-right"></i>
        </span>
      </div>
      <div class="out">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_3wawyqxu31q.css" />
        <p @click="home">退出登录</p>
        <span>
          <i class="iconfont icon-arrow-right"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.center {
  width: 100%;
  overflow-x: hidden;
}
.profile {
  width: 100%;
  margin: 0 auto;
  height: 100px;
  padding: 0.266667rem 0 0.533333rem;
  display: flex;
}
.profile .left {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 30px;
  margin-top: 30px;
}
.profile .right {
  float: left;
  margin-left: 30px;
}
.iconfont {
  font-size: 30px;
}
.profile-2 {
  width: 100%;
  margin: 0 auto;
  height: 60px;
  padding: 0.266667rem 0 0.533333rem;
  display: flex;
  justify-content: center;
}
.profile-2-left {
  width: 100px;
  display: flex;
  height: 1.333333ren;
  margin: 0.3rem 0;
  text-align: center;
  font-size: 16px;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
}
.profile-2-right {
  width: 100px;
  display: flex;
  height: 1.333333ren;
  margin: 0.3rem 0;
  text-align: center;
  font-size: 16px;
  flex-direction: column;
  justify-content: center;
}
.coupon {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-color: #3333;
}
.coupon p {
  width: 60px;
  margin-left: 15px;
  display: flex;
  height: 30px;
  margin-top: 10px;
}
.coupon span {
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 7px;
}
.site {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-color: #3333;
}
.site p {
  width: 60px;
  margin-left: 15px;
  display: flex;
  height: 30px;
  margin-top: 10px;
}
.site span {
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 7px;
}
.icon-arrow-right {
  font-size: 24px;
  height: 24px;
  color: #969799;
}
.contact {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-color: #3333;
}
.contact p {
  width: 60px;
  margin-left: 15px;
  display: flex;
  height: 30px;
  margin-top: 10px;
}
.contact span {
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 7px;
}
.out {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-color: #3333;
}
.out p {
  width: 60px;
  margin-left: 15px;
  display: flex;
  height: 30px;
  margin-top: 10px;
}
.out span {
  display: flex;
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-right: 7px;
}
</style>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ name: "Home" });
    },
    home() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>