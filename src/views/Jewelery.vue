<template>
  <div class="jewelleries">
    <div class="container">
      <div class="title">
        <h2>Jewelleries</h2>
      </div>
      <div class="loader">
        <div class="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="products">
        <Product
          v-for="el in jewelleries"
          :key="el.id"
          :productId="el.id"
          :img="el.image"
          :description="el.description"
          :Name="el.title.slice(0, 25)"
          :price="el.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Product from "../components/Product.vue";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getJeweleries");
    });

    return {
      jewelleries: computed(() => store.getters.getJeweleriesProducts),
    };
  },
  components: { Product },
};
</script>

<style lang="scss" scoped>
.jewelleries {
  padding: 50px 0;
  width: 100%;
  min-height: 100vh;
  margin-top: 70px;
  background: #f9f9f9;
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      text-align: center;
      h2 {
        text-decoration: underline;
      }
    }
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
    .products {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }
}
@media (max-width: 600px) {
  .jewelleries {
    .container {
      .products {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

