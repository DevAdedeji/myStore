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

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}
</style>