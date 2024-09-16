<template>
  <div class="products-swiper py-16 px-3">
    <div class="title mb-10 px-5 d-flex align-center justify-space-between">
      <h2 class="text-red" style="font-weight: 900; font-size: 30px">
        Flash Deals
      </h2>
      <a href="#" class="text-black" style="font-size: 14px">Shop All</a>
    </div>
    <swiper
      :modules="modules"
      :pagination="pagination"
      :slides-per-view="4"
      :space-between="35"
      :autoplay="{ delay: 2200 }"
      class="pb-9"
      :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
    >
      <swiper-slide v-for="item in products" :key="item.id">
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
              item.description && item.description.split(" ").length <= 8
                ? item.description
                : item.description
                ? item.description.split(" ").slice(0, 8).join(" ") + "..."
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
            <span class="text-red" style="font-weight: 900; font-size: 16px">
              ${{
                Math.ceil(
                  item.price - item.price * (item.discountPercentage / 100)
                )
              }}
            </span>
          </v-card-text>
          <btn-toggle v-model="showenItem"> </btn-toggle>
          <v-btn
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
    <!--<v-container fluid>
      <v-row>
        <v-col cols="3" v-for="item in products" :key="item.id"> </v-col>
      </v-row>
    </v-container>-->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
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
      modules: [Pagination, Navigation, Autoplay],
    };
  },
};
</script>

<style lang="scss">
.products-swiper {
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    border: 2px solid rgb(53, 53, 53);
    border-radius: 50%;
    background-color: white;
    top: 40%;
    &::after {
      font-size: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(53, 53, 53);
      font-weight: 900;
    }
  }
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
  }
}
</style>
