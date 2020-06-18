<template>
    <div id="search">

<div class="db">
 <van-search
    v-model="value"
    placeholder="请输入搜索关键词"
   autofocus="true"
   class="ss"
  />
<p @click="qx">取消</p>
</div>
 

    </div>
</template>
<script>
export default {
    data() {
    return {
      value: '',
    };
  },
  methods: {
   qx(){
       this.$router.push({
           name:"Home"
       })
   }
   
  },
};

</script>

<style lang="scss" scoped>
.db{
    display: flex;
    justify-content:space-around;
    .ss{
        width: 80%;
    }
    p{
        margin: 20px 15px;
        color: #ccc;
    }
}
</style>