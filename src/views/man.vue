<template>
  <div class="hw">
    <img
      src="https://img.alicdn.com/tfs/TB1WQ91o4z1gK0jSZSgXXavwpXa-750-900.jpg"
      alt
      class="hw-one"
    />

    <ul class="ak47" v-for="item in list" :key="item.eventId">
      <li>
        <router-link :to="{name:'List',params:{id:item.categoryId,title:item.chineseName}}">
          <img :src="item.imageUrl" alt class="hw-two" />
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
      <ul>
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
  methods: {
    center() {
      this.$router.push({
        name: "Center"
      });
    },
    login() {
      this.$router.push({
        name: "Login"
      });
    }
  },
  created() {
    //   http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1592384074289&summary=7bad81fa689ef1058bd5d414e0036e4c&platform_code=H5
    axios
      .get(
        "http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1592384608378&summary=473463c43f836a2ee09414e227bbb28f&platform_code=H5"
      )
      .then(res => {
        //   console.log(res.data.eventList)
        this.list = res.data.eventList;
      });
  }
};
</script>

<style lang="scss" scoped>
.hw {
  display: flex;
  flex-direction: column;
  width: 100%;
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

.flooter-last {
  font-size: 12px;
  color: #666;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    span {
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
//   flex: 1;
//   ul {
//     display: flex;
//     // flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     span {
//       padding: 2.778vw;
//     }
//   }
// }
</style>