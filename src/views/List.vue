<template>
  <div class="list">
      <link rel="stylesheet" href="//at.alicdn.com/t/font_1575381_w6jdi67p2b8.css" >
     <link rel="stylesheet" href="//at.alicdn.com/t/font_1575381_a58t8il84yd.css">

<div class="gn">

  <p class="iconfont icon-gouwuche-tubiao-tongyong-" v-show="scrollTop>600?!isshow:isshow" @click="Cart"></p>
<p class="iconfont icon-huidaodingbujiantou" @click="backtop" v-show="scrollTop>600?!isshow:isshow"></p>
</div>

    <van-nav-bar
   class="navss"
      :title="this.title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
   
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
      <div class="item" v-for="item in list" :key="item.productId">
        <router-link :to="{name:'Detail',query:{id:item.productId,}}">
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
import { Toast } from "vant";
import axios from "axios";
export default {

 



  data() {
    return {
      active: 0,
      list: [],
      // nav:{}
      title:"",
      isshow:false,
      scrollTop:''
    };
  },
  filters: {
    spliceStr(str) {
      return str.length > 10 ? str.substr(0, 15) + "..." : str;
    }
  },

  mounted() {
       window.addEventListener("scroll",this.showbtn,true);
    },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
     
    },
Cart(){
this.$router.push({
  name:"Cart"
})
},
     showbtn(){
          // let that = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          this.scrollTop = scrollTop
          // return that.scrollTop
          // console.log(this)
       
       },

    backtop(){
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },30)
      }
 



   

 
  },
  created() {
    axios
      .get(
        "http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId="+ this.$route.params.id
      )
      .then((res, req) => {
        // console.log(res);
        this.title = res.data.eventName;
        this.list = res.data.products;
        // this.nav = res.data
        // console.log(this.$route.params.title)
this.title = res.data.eventName
        // console.log(this.list);
    
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .navss{
  position: fixed;
  top: 0;
  height: 50px;
  background: white;
  display: inline-block;
  width: 100%;
  line-height: 50px;
} */
.icon-huidaodingbujiantou{
  position: fixed;
  bottom: 30px;
  right: 50px;
}
.iconfont{
  font-size: 20px;
  color: #666;
}

.icon-gouwuche-tubiao-tongyong-{
  position: fixed;
  bottom: 80px;
  right: 50px;
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