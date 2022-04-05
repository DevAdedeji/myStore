<template>
  <section>
    <div class="container"></div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {
      store.dispatch("getProdctDetail", id);
    });

    return {
      product: computed(() => store.getters.getProductDetails),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>