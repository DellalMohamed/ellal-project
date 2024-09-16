<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <img
              src="//new-ella-demo.myshopify.com/cdn/shop/files/ella-logo-black-compressor.png?v=1629858814&width=300"
              alt=""
            />
          </v-col>
          <v-col cols="5">
            <input
              type="search"
              name="navSearch"
              id="navSearch"
              style="width: 90%; border-radius: 30px; outline: none"
              placeholder="Search the store"
              class="py-2 px-5 bg-white mt-13"
            />
          </v-col>
          <v-col cols="4">
            <div class="parent d-flex justify-space-between align-center mt-13">
              <div class="available">
                <span>Availabl 24/7 at</span>
                <br />
                <strong>(090) 123-4567</strong>
              </div>
              <div class="wishlists d-flex flex-columnalign-center">
                <v-icon>mdi-heart</v-icon>
                <span>Wish Lists</span>
              </div>
              <div class="wishlists d-flex flex-columnalign-center">
                <v-icon>mdi-account</v-icon>
                <span>Sign in</span>
              </div>
              <div class="wishlists d-flex flex-columnalign-center">
                <v-icon>mdi-cart</v-icon>
                <span>Cart</span>
              </div>
            </div>
          </v-col>
          <v-col cols="7"> flglfk </v-col>
          <v-row><v-col cols="7"> flglfk </v-col></v-row>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
