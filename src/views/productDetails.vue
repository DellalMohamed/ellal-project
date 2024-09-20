<template>
  <div class="product-details mb-16">
    <h1>Product Details</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            class="w-100"
            :src="tab ? tab : singleProduct.thumbnail"
            alt=""
          />
          <v-tabs center-active v-model="tab" class="mt-10" height="100">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img
                :src="img"
                alt="product image"
                :value="img"
                width="100"
                height="100"
              />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-0 pl-6">
          <v-card elevation="0">
            <v-card-title
              class="px-0"
              style="font-size: 19px; font-weight: bold"
              >{{ singleProduct.title }} <br />
              Sample {{ singleProduct.category }} For Sale
            </v-card-title>
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increaments
                readonly
                color="yellow-darken-2"
                size="x-small"
                density="cobact"
              ></v-rating>
            </div>
            <span style="color: rgb(96, 96, 96); font-size: 14px"
              >Stock: {{ singleProduct.stock }}
            </span>
            <v-card-text
              class="mt-1 px-0"
              style="color: rgb(96, 96, 96); font-size: 14px"
              >{{ singleProduct.description }}
            </v-card-text>
            <v-card-text
              class="mt-1 px-0 pt-0"
              style="color: rgb(96, 96, 96); font-size: 14px"
              >Brand: {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text
              class="mt-1 px-0 pt-0"
              style="color: rgb(96, 96, 96); font-size: 14px"
              >Availability:
              {{ singleProduct.stock ? "In Stock" : "Out Stock" }}
            </v-card-text>
            <v-card-text class="pl-0 pt-0">
              <del>${{ singleProduct.price }}</del> from
              <span style="font-weight: 900; font-size: 16px">
                ${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}
              </span>
            </v-card-text>
            <v-card-text class="pl-0 pt0">Quantity</v-card-text>
            <div
              class="counter px-1"
              style="
                border-radius: 30px;
                border: 1px solid black;
                width: fit-content;
              "
            >
              <v-icon @click="quantity > 1 ? quantity-- : false" size="20"
                >mdi-minus</v-icon
              >
              <input
                type="number"
                name=""
                id=""
                style="
                  border: none;
                  outline: none;
                  width: 60px;
                  font-size: 13px;
                "
                class="text-center py-3"
                min="1"
                v-model="quantity"
              />
              <v-icon @click="quantity++" size="20">mdi-plus</v-icon>
            </div>
            <v-card-actions class="mt-7 px-0 w-100">
              <v-btn
                class="w-75"
                variant="outlined"
                density="compact"
                height="45"
                style="
                  text-transform: none;
                  border-radius: 30px;
                  background-color: rgb(34, 34, 34);
                  color: #fff;
                "
                >Add To Cart</v-btn
              >
            </v-card-actions>
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
    ...mapActions(productsModule, ["getSinglePoduct"]),
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  data: () => ({
    tab: "",
    quantity: 1,
    product: {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      discountPercentage: 5.5,
      rating: 3.28,
      stock: 44,
      tags: ["beauty", "eyeshadow"],
      brand: "Glamour Beauty",
      sku: "MVCFH27F",
      weight: 3,
      dimensions: {
        width: 12.42,
        height: 8.63,
        depth: 29.13,
      },
      warrantyInformation: "1 year warranty",
      shippingInformation: "Ships in 2 weeks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Very satisfied!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Liam Garcia",
          reviewerEmail: "liam.garcia@x.dummyjson.com",
        },
        {
          rating: 1,
          comment: "Very disappointed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Nora Russell",
          reviewerEmail: "nora.russell@x.dummyjson.com",
        },
        {
          rating: 5,
          comment: "Highly impressed!",
          date: "2024-05-23T08:56:21.618Z",
          reviewerName: "Elena Baker",
          reviewerEmail: "elena.baker@x.dummyjson.com",
        },
      ],
      returnPolicy: "30 days return policy",
      minimumOrderQuantity: 32,
      meta: {
        createdAt: "2024-05-23T08:56:21.618Z",
        updatedAt: "2024-05-23T08:56:21.618Z",
        barcode: "2817839095220",
        qrCode: "https://assets.dummyjson.com/public/qr-code.png",
      },
      images: [
        {
          img1: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        },
        {
          img2: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
        },
        {
          img3: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
        },
        {
          img4: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
        },
        {
          img5: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
        },
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    },
  }),
  async mounted() {
    await this.getSinglePoduct(this.$route.params.productId);
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
