<template>
  <div class="container">
    <div class="asset">
      <img :src="img" :alt="Name" />
    </div>
    <div class="text">
      <router-link :to="{ name: 'ProductDetails', params: { id: productId } }"
        >{{ Name }}....</router-link
      >

      <p class="price">Price: ${{ price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    Name: String,
    description: String,
    price: Number,
    productId: Number,
  },
};
</script>

<style lang="scss" scoped>
.container {
  border-radius: 5px;
  background: #fff;
  height: 500px;
  .asset {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .text {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    gap: 15px;
    .name {
      font-weight: bolder;
      font-size: 20px;
    }
    .price {
      border: 1px solid var(--primary-color);
      text-align: center;
      padding: 10px;
      border-radius: 5px;
    }
    a {
      color: var(--primary-color);
      padding-bottom: 10px;
    }
  }
}
</style>