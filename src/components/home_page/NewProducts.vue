<template>
  <div class="new-products pt-12">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 style="font-weight: 900; font-size: 30px">Flash Deals</h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <swiper
            :modules="modules"
            :pagination="pagination"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9"
          >
            <swiper-slide v-for="item in products" :key="item.id">
              <v-card elevation="0">
                <v-hover v-slot="{ isHovering, props }">
                  <div
                    class="img-parent"
                    style="height: 200px; overflow: hidden"
                  >
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
                      ? item.description.split(" ").slice(0, 4).join(" ") +
                        "..."
                      : ""
                  }}
                </v-card-text>
                <v-rating
                  v-model="item.rating"
                  half-increaments
                  readonly
                  color="yellow-darken-2"
                  size="x-small"
                  density="cobact"
                ></v-rating>
                <v-card-text class="pl-0 pt-0">
                  <del>${{ item.price }}</del> from
                  <span
                    class="text-red"
                    style="font-weight: 900; font-size: 16px"
                  >
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
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
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </swiper>
        </v-col>
        <v-col cols="5">
          <img src="../../assets/images/vr-banner.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  components: { Swiper, SwiperSlide },
  data: () => ({
    showenItem: "",
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Enable clickable pagination bullets
    },
  }),
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped></style>
