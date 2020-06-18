<template>
  <div id="search">
    <div class="db">
      <van-search v-model="value" placeholder="MO CO一口直降低至2折" autofocus="true" class="ss" />
      <p @click="qx">取消</p>
    </div>

    <div class="SF">
        <p>搜索发现</p>
        <ul v-for="item in list" :key="item.findKeyWord">
            <li>{{item.findKeyWord}}</li>
            
        </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      value: "",
      list:[]
    };
  },
  methods: {
    qx() {
      this.$router.push({
        name: "Home"
      });
    }
  },
  created(){
      axios.get("http://www.mei.com/appapi/search/searchFind/v3").then((res)=>{
          console.log(res.data.searchFindList)
          this.list= res.data.searchFindList
      })
  }
  

};
</script>

<style lang="scss" scoped>
.db {
  display: flex;
  justify-content: space-around;
  .ss {
    width: 80%;
  }
  p {
    margin: 20px 15px;
    color: #ccc;
  }
}
.SF{
    width: 100%;
    display: flex;
    flex-direction: column;
    p{
        width: 100%;
        margin-left: 20px;
        font-size: 20px;
        color: #666;
    }
    ul{
        display: flex;
        // justify-content: center;
        // align-items: center;
        // display: inline-block;
        // flex-wrap: wrap;
        display: inline-block;
        // li{
        //   width: 30%;
        //     list-style: none;
        //     // display: inline-block;
        // }
    }
}
</style>