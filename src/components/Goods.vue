<template>
  <div class="item">
    <router-link>
      <img
        src="https://cdn14.mei.com/product/FM0-2898-100107-C/9b757efeeeb7b14082193f682445d8a94c48a8e46ada15752453d6e6ebd37b64.jpg@300w_400h_2e_75q"
        alt
      />
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.item {
  width: 40%;
  padding: 0.5rem;
  border: solid 0.02rem #ccc;
  margin-bottom: 0.4rem;
}
.item h5 {
  text-align: center;
  font-size: 1rem;
}
.item h5,
p {
  padding: 0;
  margin: 0;
}
.item img {
  width: 100%;
}
.item p {
  text-align: center;
  color: red;
  font-size: 1.4rem;
}
</style>