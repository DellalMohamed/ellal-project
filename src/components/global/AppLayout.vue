<template>
  <div class="layout">
    <v-layout>
      <CardDrawer />
      <v-main>
        <slot></slot>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "../AppNav.vue";
import CardDrawer from "../CardDrawer.vue";
import AppFooter from "../AppFooter.vue";
export default {
  components: {
    AppNav,
    CardDrawer,
    AppFooter,
  },
  data() {
    return {
      drawer: false,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
