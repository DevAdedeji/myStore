<template>
  <section>
    <div class="container">
      <div class="empty" v-show="empty">
        <p>Empty Cart</p>
        <a href="/">Go to Shop</a>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      empty: computed(() => store.getters.getCartEmpty),
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
  }
}
</style>