<template>
  <section>
    <div class="container">
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
      <div class="con">
        <div class="asset" v-if="product">
          <img :src="product.image" :alt="product.title" />
        </div>
        <div class="text" v-if="product">
          <p class="name">{{ product.title }}</p>
          <p class="rating">
            Rating: <span> {{ product.rating.rate }}</span>
          </p>
          <p class="description">{{ product.description }}</p>
          <p class="price">
            Price: <span>${{ product.price }}</span>
          </p>
          <div class="cart">
            <button @click="addToCart" id="addBtn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useStore();

    onMounted(() => {
      store.dispatch("getProdctDetail", id);
    });

    return {
      product: computed(() => store.getters.getProductDetails),
      addToCart: () => store.dispatch("addToCart"),
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 70px;
  .container {
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .asset {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 300px;
          height: 300px;
        }
      }
      .text {
        width: 50%;
        padding-right: 50px;
        .name {
          font-weight: bolder;
          font-size: 35px;
          color: #000;
        }
        .rating {
          font-size: 25px;
          padding: 10px 0;
          span {
            color: var(--primary-color);
            font-weight: bolder;
          }
        }
        .price {
          font-size: 25px;
          padding: 10px 0;
          span {
            color: var(--primary-color);
            font-weight: bolder;
          }
        }
        button {
          width: 100%;
          background: var(--primary-color);
          color: #fff;
          border: none;
          outline: none;
          padding: 10px 0;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
}
@media (max-width: 900px) {
  section {
    padding: 40px 0;
    .container {
      .con {
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        gap: 40px;
        .asset,
        .text {
          width: 100%;
          padding: 0;
        }
      }
    }
  }
}
</style>