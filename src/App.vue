<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  setup() {},
  components: { Header },
};
</script>
