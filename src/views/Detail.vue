<template>
  <div class="detail">
    <div class="title">
      <van-nav-bar
        :title="list.brand"
        left-text="返回"
        right-text="编辑"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <h1>¥{{list.price}}</h1>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item.index">
        <img :src="item.bigImgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="info">
      <h2>{{list.name}}</h2>
      <p>¥{{list.price}}</p>
      <!-- <i>当季新品</i> -->
      <h3>预计2020.06.20f发货</h3>
    </div>

    <van-goods-action>
      <router-link to="/cart">
        <van-goods-action-icon icon="cart-o" text="购物车" />
      </router-link>

      <van-goods-action-button type="warning" text="加入购物车" @click="addCart()" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      list: {},
      cartData: []
    };
  },
  computed: {
    // cartCount() {
    //   return this.cartData.reduce((pre, cur) => {
    //     return pre + cur.purchaseType;
    //   }, 0);
    // }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    addCart() {
      this.cartData = localStorage.getItem("shop-carts")
        ? JSON.parse(localStorage.getItem("shop-carts"))
        : [];
      var productsId = this.$route.query.id;
      // console.log(this.list)
      // console.log(productsId);

      if (this.cartData.length < 1) {
        this.cartData.push({
          id: this.$route.query.id,
          isChecked: this.list.isChecked,
          img: this.list.images[0].bigImgUrl,
          brand: this.list.brand,
          name: this.list.name,
          price: this.list.price,
          purchaseType: this.list.purchaseType
        });
      } else {
        var onoff = this.cartData.some(item => {
          // console.log(item.id);

          if (item.id == productsId) {
            item.purchaseType++;
            // console.log(item.purchaseType);
            return true;
          }
        });
        // console.log(onoff);

        if (onoff === false) {
          // 本次加入的是新商品，直接添加
          this.cartData.push({
            id: this.$route.query.id,
            isChecked: this.list.isChecked,
            img: this.list.images[0].bigImgUrl,
            brand: this.list.brand,
            name: this.list.name,
            price: this.list.price,
            purchaseType: this.list.purchaseType
          });
        }
      }
      localStorage.setItem("shop-carts", JSON.stringify(this.cartData));
    }
  },
  created() {
    // console.log(this.$route.query.id);
    axios
      .get(
        "http://www.mei.com/appapi/product/detail/v3?categoryId=2120005100000004140&productId=" +
          this.$route.query.id
      )
      .then((res, req) => {
        this.images = res.data.infos.images;
        this.list = { ...res.data.infos, isChecked: false };
        // console.log(this.list);
      });
    //需要先判断，判断之前购物车数据有没有，有的话，用原来的，没有的才是赋初值{}
  }
};
</script>


<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /* background-color: #39a9ed; */
}
h1 {
  font-size: 0.5rem;
  font-weight: 900;
  text-align: center;
  color: red;
}
.info {
  margin-left: 0.7rem;
}
h2 {
  font-size: 1rem;
  font-weight: normal;
}
p {
  font-size: 0.8rem;
  color: red;
  margin-top: 0.5rem;
}
h3 {
  font-size: 0.6rem;
  color: #6666;
  margin-top: 0.3rem;
}
.my-swipe img {
  height: 80%;
  width: 80%;
}
/* i {
  display: inline-block;
  width: 2.8rem;
  height: 0.8rem;
  background: red;
  font-size: 0.5rem;
  color: white;
  text-align: center;
} */
</style>