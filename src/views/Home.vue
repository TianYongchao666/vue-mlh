<template>
  <div class="home">
    <div class="nav">
     
        <div class="search-one">
          <p @click="login">登录</p>

          <van-search
            v-model="value"
            disabled
            placeholder="MO CO一口直降低至2折"
            class="search"
            @click="Search()"
          />

          <img src="../assets/images/锁.png" alt />
        </div>
      
    </div>

    <van-tabs v-model="active" sticky>
      <van-tab title="推荐">
        <tj></tj>
      </van-tab>

      <van-tab title="海外">
        <hw></hw>
      </van-tab>
      <van-tab title="女士">
        <girl></girl>
      </van-tab>
      <van-tab title="男士">
        <man></man>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import tj from "../views/tj";
import hw from "../views/hw";
import girl from "../views/girl";
import man from "../views/man";

import axios from "axios";
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    tj,
    hw,
    girl,
    man
  },
  data() {
    return {
      active: 0,
      value: ""
    };
  },
  methods: {
    Search() {
      this.$router.push({
        name: "Search"
      });
    },
    login(){
      this.$router.push({
        name:"Login"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body,
.home {
  overflow-x: hidden;
  width: 100%;
}
.nav {
  display: flex;
  flex-direction: column;
  margin-bottom: 13.889vw;
  

  // position: relative;
}
.search-one {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 100%;
 
  position: fixed;
  top: 0px;
  z-index: 10;
  background: white;
  width: 100%;
 

  .search {
    width: 75%;
    margin-left: 10%;
    z-index: 20;
  }
  p {
    font-size: 4.444vw;
    width: 11.111vw;
    margin-left: 5.556vw;
  }
  img {
    width: 5.556vw;
    height: 8.333vw;
    margin: 2.778vw 4.167vw;
  }
}

</style>
