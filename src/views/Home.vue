<template>
  <div class="home">
    <div class="container">
      <div class="title">
        <h2>Latest Products</h2>
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
          v-for="el in products"
          :key="el.id"
          :productId="el.id"
          :img="el.image"
          :Name="el.title"
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
      store.dispatch("getProducts");
    });

    return {
      products: computed(() => store.getters.getProducts),
    };
  },
  components: { Product },
};
</script>

<style lang="scss" scoped>
.home {
  background: #f9f9f9;
  min-height: 100vh;
  padding: 50px 0;
  .container {
    width: 90%;
    margin: 0 auto;
    .title {
      text-align: center;
      text-decoration: underline;
      padding-bottom: 40px;
    }
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
}
</style>