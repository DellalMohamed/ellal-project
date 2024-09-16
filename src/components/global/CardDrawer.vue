<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="right">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        ipsum, aut tempora nemo placeat assumenda, quae ut tenetur excepturi
        voluptatum aliquid sint inventore eum. Error nesciunt assumenda
        asperiores voluptatem odit.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  setup() {
    return {};
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style lang="scss" scoped></style>
