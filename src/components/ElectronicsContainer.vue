<template>
  <section>
    <div class="container">
      <div class="title">
        <h2>Electronics</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("getElectronics");
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  .container {
    width: 90%;
    margin: 0 auto;
  }
}
</style>