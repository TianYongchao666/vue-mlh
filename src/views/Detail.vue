<template>
  <div class="detail">

<van-nav-bar
   
      title='商品详情'
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
     
    
      
    />




    <h4>{{list.brand}}</h4>
    <h1>¥{{list.price}}</h1>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in images" :key="item">
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
        <van-goods-action-icon icon="cart-o" text="购物车" badge="2" />
      </router-link>

      <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      list: [],
      badge: 0
    };
  },
  methods: {
    addCart() {
      this.list;
    },
     onClickLeft() {
        this.$router.go(-1);
     
    },
  
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
        this.list = res.data.infos;
        // console.log(this.list);
      });
  
    // 储存到本地
    localStorage.setItem("shop-carts", JSON.stringify(this.list));

    // this.cartCount++;
    // });
    var strlist = localStorage.getItem("shop-carts");
    if (strlist) {
      this.list = JSON.parse(strlist);
    }
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
h4 {
  font-size: 0.8rem;
  font-weight: 900;
  text-align: center;
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