<template>
  <div class="product-categories mt-10">
    <h1 class="text-center">{{ $route.params.title }}</h1>
    <v-container fluid>
      <v-row>
        <v-col v-for="item in categoryProducts.products" :key="item.id">
          <v-card elevation="0">
            <v-hover v-slot="{ isHovering, props }">
              <div class="img-parent" style="height: 200px; overflow: hidden">
                <img
                  :src="item.thumbnail"
                  class="w-100"
                  :style="`height: 100%; transition: 0.5s all ease-in-out; cursor: pointer; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                  alt=""
                  v-bind="props"
                />
              </div>
            </v-hover>
            <v-card-text class="pl-0 pb-1">
              ({{ item.title }}) <br />
              {{
                item.description &&
                item.title &&
                item.description.split(" ").length <= 8
                  ? item.description
                  : item.description
                  ? item.description.split(" ").slice(0, 4).join(" ") + "..."
                  : ""
              }}
            </v-card-text>
            <v-rating
              half-increaments
              readonly
              color="yellow-darken-2"
              size="x-small"
              density="cobact"
            ></v-rating>
            <v-card-text class="pl-0 pt-0">
              <del>${{ item.price }}</del> from
              <span class="text-red" style="font-weight: 900; font-size: 16px">
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <v-btn
              @click="
                $router.push({
                  name: 'product_details',
                  params: { productId: item.id },
                })
              "
              class="py-3 px-10"
              style="text-transform: none; border-radius: 30px"
              >Choose Option</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
export default {
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      document.documentElement.scrollTo(0, 0);
      await this.getProductsByCategory(this.$route.params.category);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
