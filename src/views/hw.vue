<template>
  <div class="hw">
    <img
      src="http://cdn13.mei.com/category/20181024/7abbfbe23f8df872223b5226dc14234b071407a2f321be85.jpg"
      alt
      class="hw-one"
    />

    <ul class="ak47" v-for="item in list" :key="item.eventId">
      <li>


        <router-link :to="{name:'List',params:{id:item.categoryId,title:item.chineseName}}"> <img :src="item.imageUrl" alt class="hw-two" />
</router-link>
        
        <span>{{item.englishName}}</span>
        <br />
        <span>{{item.chineseName}}</span>
        <br />
        <span>{{item.discountText}}</span>
      </li>
    </ul>

    <div class="flooter-last">
      <p>400-664-6698</p>
      <ul class="ful">
        <li>首页</li>
        <span>|</span>
        <li>客户端</li>
        <span>|</span>
        <li @click="login">登录</li>
        <span>|</span>
       <li @click="center">个人中心</li>
      </ul>
      <p>浙ICP备16004860号-1</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: []
    };
  },
  methods:{
 center(){
      this.$router.push({
        name:"Center"
      })
    },
     login(){
      this.$router.push({
        name:"Login"
      })
    }
  },
  created() {
    axios
      .get(
        "http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1592382397891&summary=208bddb6bc596c369efda4a58dc444cc&platform_code=H5"
      )
      .then(res => {
        // console.log(res.data.eventList)
        this.list = res.data.eventList;
      });
  }
};
</script>

<style lang="scss" scoped>
.hw {
  width: 100%;
  display: flex;
  flex-direction: column;

  .hw-one {
    width: 100%;
    // height: 100%;
    margin-bottom: 8.333vw;
    ul {
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
    }
  }
}

.hw-two {
  width: 90%;
  // height: 100px
  margin-left: 5.556vw;
}
.ak47 span {
  width: 100%;
  color: #666;
  display: inline-block;
  text-align: center;
}
.flooter-last{
   font-size: 12px;
      color: #666;
  text-align: center;
  ul{
    display: flex;
    justify-content: center;
    
    span{
      padding: 0 10px;
     
    }
  }
}
// .flooter-last {
//   font-size: 3.333vw;
//   color: #666;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   ul {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     li {
//       display: flex;
//     }
//     span {
//       padding: 2.778vw;
//       // display: inline-block;
//     }
//   }
// }
</style>