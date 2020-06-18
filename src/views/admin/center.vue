<template>
  <div class="herder">
    <van-nav-bar
      title="魅力惠"
      right-text="首页"
      left-arrow
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
    />
    <div class="center">
      <div class="profile">
        <link rel="stylesheet" href="http://at.alicdn.com/t/font_1575381_mqx988bhzd8.css" />
        <div class="left">
          <i class="iconfont icon-xin1"></i>
        </div>
        <div class="right">
          <p>17837147410</p>
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
        <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
      </div>
      <router-link class="site" to="/site">
        <div class="site">
          <p>我的地址</p>
          <span>
            <i class="iconfont icon-arrow-right"></i>
          </span>
        </div>
      </router-link>
      <div>
        <van-cell is-link title="联系我们" @click="show = true" />
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
      </div>
      <div class="out">
        <van-cell title="退出登录" @click="true" />
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
.site {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border: 0, 0, 1px, 10px;
  border-color: #969799;
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
.out {
  width: 100%;
  height: 44px;
  color: #323233;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  border: 0, 0, 1px, 10px;
  border-color: #969799;
}
.out .van-cell title {
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
.icon-arrow-right {
  font-size: 24px;
  color: #969799;
}
</style>
<script>
export default {
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },

  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  },
  data() {
    return {
      show: false,
      actions: [
        { name: "电话客服" },
        { name: "微信客服" },
        { name: "微博客服" }
      ]
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    }
  }
};
</script>