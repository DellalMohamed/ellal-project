<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <ProductsComponent :products="flashDeals" :categoryTitle="catTitle1" />
    <TopCats />
    <NewProducts :products="newProdcts" />
    <QualityFeaturs />
    <ProductsComponent :products="fragrances" :categoryTitle="catTitle" />
    <v-container fluid class="w-100">
      <v-row>
        <v-col cols="6" class="pa-0 ma-0">
          <img
            src="../assets/images/band-left-cover.webp"
            class="w-100"
            alt=""
          />
        </v-col>
        <v-col cols="6" class="pa-0 ma-0">
          <img
            src="@/assets/images/band-right-cover.webp"
            height="352"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
    <ProductsComponent :products="furniture" :categoryTitle="catTitle3" />
    <img src="../assets/images/tv-banner.webp" alt="" />
    <WhyShopwithus />
    <QuickView />
  </div>
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProductsComponent from "@/components/home_page/ProductsSwiper.vue";
import TopCats from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import QualityFeaturs from "@/components/home_page/QualityFeaturs.vue";
import WhyShopwithus from "@/components/home_page/WhyShopwithus.vue";
import QuickView from "@/components/home_page/QuickView.vue";
import { productsModule } from "../stores/products";
import { mapActions, mapState } from "pinia"; // Import mapActions from Vuex
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    ProductsComponent,
    TopCats,
    NewProducts,
    QualityFeaturs,
    WhyShopwithus,
    QuickView,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "fragrances",
      "furniture",
      "newProdcts",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
  data: () => ({
    catTitle: "fragrances",
    catTitle1: "Flash Deals",
    catTitle3: "furniture",
  }),
};
</script>
