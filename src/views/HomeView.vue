<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TopOffers />
    <FlashDeals :products="flashDeals" />
    <TopCats />
    <NewProducts />
  </div>
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import FlashDeals from "@/components/home_page/ProductsSwiper.vue";
import TopCats from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import { productsModule } from "../stores/products";
import { mapActions, mapState } from "pinia"; // Import mapActions from Vuex
export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffers,
    FlashDeals,
    TopCats,
    NewProducts,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals"]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
