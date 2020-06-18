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
    <div class="promotions-box">
      <div class="promotions">
        <p>
          <a href>
            [免运]
            <span>满688元免运费△</span>
          </a>
        </p>
      </div>
    </div>
    <div class="productlist">
      <div class="item" v-for="item in list" :key="item">
        <router-link :to="{name:'Detail',query:{id:item.productId}}">
          <img :src="item.imageUrl" />
        </router-link>
        <span class="item-sp">当季新品</span>
        <h2>{{item.brandName | spliceStr}}</h2>
        <h6>{{item.productName}}</h6>
        <p>¥{{item.marketPrice}}</p>
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
  filters: {
    spliceStr(str) {
      return str.length > 10 ? str.substr(0, 15) + "..." : str;
    }
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
        "http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=2121005100000004146&key=&sort=&timestamp=1592394043971&summary=80adbfc952010903693b530a61a96009&platform_code=H5"
      )
      .then((res, req) => {
        // console.log(res);
        this.list = res.data.products;
        console.log(this.list);
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.promotions-box {
  padding-bottom: 0.8rem;
}
.promotions {
  height: 2rem;
  background-color: #fff;
}
.promotions a {
  display: inline-block;
  line-height: 2rem;
  color: #dd2828;
  font-size: 0.7rem;
  margin-left: 1rem;
}
.promotions a span {
  line-height: 2rem;
  color: #000000;
  font-size: 0.7rem;
}
.productlist {
  display: flex;
  flex-wrap: wrap;
  margin: 0.5rem;
  margin-bottom: 0.266667rem;
}
.item {
  margin: 0.3rem;
  width: 46%;
}
.item img {
  width: 100%;
  /* margin-top: 1.5rem; */
}
.item-sp {
  background: rgb(221, 40, 40);
  color: rgb(255, 255, 255);
  border: 0.013333rem solid rgb(221, 40, 40);
  display: inline-block;
  margin-right: 0.053333rem;
  padding: 0 0.04rem;
  font-size: 0.266667rem;
}
.item h2 {
  font-size: 0.8rem;
  font-weight: 600;
}
.item h6 {
  line-height: 1.2rem;
  font-weight: 300;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item p {
  font-size: 0.7rem;
  color: red;
}
</style>