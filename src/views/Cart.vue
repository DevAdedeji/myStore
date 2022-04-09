<template>
  <section>
    <div class="container">
      <div class="empty" v-show="empty">
        <p>Empty Cart</p>
        <a href="/">Go to Shop</a>
      </div>
      <section class="products">
        <div class="container" v-for="item in items" :key="item.id">
          <div class="product">
            <img :src="item.image" :alt="item.title" />
            <div class="product-details">
              <p class="name">{{ item.title }}</p>
              <p>Price: ${{ item.price }}</p>
              <p class="desc">Desc: {{ item.description }}</p>
            </div>
          </div>

          <div class="con">
            <div class="btns">
              <button @click="dec">-</button>
              <p class="price">{{ Quantity }}</p>
              <button @click="inc">+</button>
            </div>
            <p class="total">Total Price: ${{ item.price * Quantity }}</p>
          </div>
          <button id="delete" @click="deleteProduct(item.id)">Delete</button>
        </div>
      </section>

      <button v-show="showBtn" @click="clearCart" id="clearBtn">
        Clear Cart
      </button>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";

export default {
  setup() {
    const store = useStore();

    let Quantity = ref(1);

    const inc = () => {
      if (Quantity.value === 1 || Quantity.value > 1) {
        Quantity.value = Quantity.value + 1;
      }
    };

    const dec = () => {
      if (Quantity.value > 1) {
        Quantity.value = Quantity.value - 1;
      }
    };

    const deleteProduct = (id) => {
      console.log(id);
    };

    onBeforeMount(() => {
      store.dispatch("isCartEmpty");
    });

    return {
      empty: computed(() => store.getters.getCartEmpty),
      showBtn: computed(() => store.getters.getBtn),
      items: computed(() => store.getters.getCartedItems),
      Quantity,
      inc,
      dec,
      deleteProduct: (id) => store.dispatch("deleteProduct", id),
      clearCart: () => store.dispatch("clearCart"),
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 70px;
  min-height: 90vh;
  background: #f9f9f9;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .empty {
      height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        font-size: 50px;
        padding-bottom: 10px;
      }
      a {
        text-decoration: none;
        color: #fff;
        background: var(--primary-color);
        padding: 10px 20px;
        border-radius: 10px;
      }
    }
    .products {
      margin-top: 70px;
      .container {
        width: 60%;
        height: 300px;
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        padding: 20px;
        border-radius: 5px;
        .product {
          display: flex;
          width: 100%;
          height: 100%;

          gap: 20px;
          img {
            width: 100px;
            height: 100px;
          }
          .product-details {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .name {
              font-size: 20px;
              color: var(--primary-color);
            }
            .desc {
              font-size: 15px;
              width: 80%;
            }
          }
        }
        .con {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .btns {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            button {
              padding: 5px;
              font-size: 18px;
            }
          }
        }
        #delete {
          padding: 15px;
          color: #fff;
          background: var(--primary-color);
          border-radius: 5px;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }
}
</style>