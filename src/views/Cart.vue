哈赛给 16:31:04
<template>
  <div class="cart">
    <div class="title">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        right-text="编辑"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed="ture"
        placeholder="ture"
      />
    </div>
    <div class="cart-box">
      <div class="promotions-box">
        <div class="promotions">
          <p>
            <a href>[全新商品]满688元免运费△</a>
          </p>
        </div>
      </div>
      <div class="sp-box">
        <div class="sp-list">
          <ul>
            <li v-for="item in list" :key="item">
              <div class="ipt">
                <input type="checkbox" />
              </div>
              <div class="sp-xx">
                <div class="img">
                  <img :src="item.imageUrl" alt />
                </div>
                <div class="sp-baseinfo">
                  <h3>{{item.brandName}}</h3>
                  <P>{{item.productName | spliceStr}}</P>
                  <p>
                    <span>红色</span>
                    <span class="sp2">XL</span>
                  </p>
                  <h4>￥{{item.price}}</h4>
                  <div class="num">
                    <button @click="subtract">-</button>
                    <span>X{{amount}}</span>
                    <button @click="add">+</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cart-footer" placeholder="ture">
      <div class="all">
        <input type="checkbox" />&nbsp;全选
      </div>
      <div class="cart-zj">
        <p>
          总价:
          <span>￥0.00</span>
        </p>
      </div>
      <div>
        <button class="btn">去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Axios from "axios";
export default {
  data() {
    return {
      list: [],
      amount: 6
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 10 ? str.substr(0, 19) + "..." : str;
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    subtract() {
      this.amount -= 1;
    },
    add() {
      this.amount += 1;
    }
  },
  created() {}
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  font-size: 12px;
}
ul li {
  font-style: normal;
}
.cart {
  background-color: #f5f5f5;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}
.promotions-box {
  padding-bottom: 0.8rem;
}
.promotions {
  height: 2rem;
  background-color: #fff;
  border-bottom: 0.1px solid #cccccc;
}
.promotions a {
  display: inline-block;
  line-height: 2rem;
  color: #dd2828;
  font-size: 0.9rem;
  margin-left: 1rem;
}
.cart-box {
  flex: 1;
  overflow: auto;
}
.sp-list {
  width: 100%;
  background-color: #fff;
}
.sp-list ul li {
  display: flex;
  height: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.sp-list ul li input {
  width: 1rem;
  height: 1rem;
}
.ipt {
  height: 9rem;
  width: 3.125rem;
  text-align: center;
  line-height: 9rem;
}
.sp-xx {
  width: 85%;
  height: 100%;
  padding: 10px 0;
  display: flex;
  position: relative;
}
.img img {
  height: 120px;
  width: 90px;
}
.sp-baseinfo {
  margin-left: 0.5rem;
}
.sp-baseinfo h3 {
  margin: 0.3rem 0;
}
.sp-baseinfo p {
  font-size: 12px;
  margin-bottom: 0.5rem;
}
.sp-baseinfo span {
  color: #cccccc;
}
.sp-baseinfo .sp2 {
  margin-left: 0.5rem;
}
.sp-baseinfo h4 {
  margin-top: 1.5rem;
  color: #dd2828;
}
.sp-baseinfo .num {
  position: absolute;
  right: 0.8rem;
  bottom: 1.2rem;
  font-size: 12px;
}
.sp-baseinfo .num span {
  margin: 0 0.5rem;
}
.sp-baseinfo .num button {
  border: none;
  background-color: #fff;
  border: 1px solid #cccccc;
  width: 1rem;
  height: 1rem;
}
.cart-footer {
  width: 100%;
  height: 3.125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  /* position: fixed;
  bottom: 0; */
  border-top: 1px solid #cccccc;
}
.cart-footer .all {
  width: 6.25rem;
  margin-left: 1rem;
}
.cart-footer .all input {
  width: 1rem;
  height: 1rem;
}
.cart-footer .cart-zj {
  font-weight: 800;
}
.cart-footer .cart-zj span {
  color: #dd2828;
}
.cart-footer .btn {
  width: 6.875rem;
  height: 3.15rem;
  border: none;
  color: #fff;
}
</style>
