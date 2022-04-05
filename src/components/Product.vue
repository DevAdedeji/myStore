<template>
  <div class="container">
    <div class="asset">
      <img :src="img" :alt="Name" />
    </div>
    <div class="text">
      <p class="name">{{ Name }}...</p>

      <p class="price">Price: ${{ price }}</p>

      <router-link :to="{ name: 'ProductDetails', params: { id: productId } }"
        >Know More</router-link
      >
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
      .loader {
        .loader {
          .lds-grid {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
          }
          .lds-grid div {
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: var(--primary-color);
            animation: lds-grid 1.2s linear infinite;
          }
          .lds-grid div:nth-child(1) {
            top: 8px;
            left: 8px;
            animation-delay: 0s;
          }
          .lds-grid div:nth-child(2) {
            top: 8px;
            left: 32px;
            animation-delay: -0.4s;
          }
          .lds-grid div:nth-child(3) {
            top: 8px;
            left: 56px;
            animation-delay: -0.8s;
          }
          .lds-grid div:nth-child(4) {
            top: 32px;
            left: 8px;
            animation-delay: -0.4s;
          }
          .lds-grid div:nth-child(5) {
            top: 32px;
            left: 32px;
            animation-delay: -0.8s;
          }
          .lds-grid div:nth-child(6) {
            top: 32px;
            left: 56px;
            animation-delay: -1.2s;
          }
          .lds-grid div:nth-child(7) {
            top: 56px;
            left: 8px;
            animation-delay: -0.8s;
          }
          .lds-grid div:nth-child(8) {
            top: 56px;
            left: 32px;
            animation-delay: -1.2s;
          }
          .lds-grid div:nth-child(9) {
            top: 56px;
            left: 56px;
            animation-delay: -1.6s;
          }
          @keyframes lds-grid {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        }
      }
      .products {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
      }
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