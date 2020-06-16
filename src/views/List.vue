<template>
  <div class="list">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed="ture"
      placeholder="ture"
    />
    <van-tabs v-model="active" color="#999999">
      <van-tab title="人气"></van-tab>
      <van-tab title="折扣"></van-tab>
      <van-tab title="价格"></van-tab>
    </van-tabs>
    <div class="productlist">
      <div class="item" v-for="item in list" :key="item">
        <img :src="item.imageUrl" />
        <h2>菲拉格木黑色</h2>
        <p>¥999</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      list: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  created() {
    axios
      .get(
        "http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2040204090000008380&key=&sort=&timestamp=1592309517482&summary=48fd02fed1c6679c182fc6c135438a31&platform_code=H5"
      )
      .then((res, req) => {
        console.log(res);
        this.list = res.data.products;
      });
  }
};
</script>

<style>
.productlist {
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  margin-bottom: 0.266667rem;
}
.item {
  background-color: #f1f1f1;
  /* line-height: 3rem; */
  margin: 0.3rem;
  width: 45%;
}
.item img {
  width: 100%;
  margin-top: 1.5rem;
}
.item h2 {
  font-size: 0.7rem;
  font-weight: 900;
}
.item p {
  font-size: 0.5rem;
  color: red;
  margin: 0.5rem auto;
}
</style>