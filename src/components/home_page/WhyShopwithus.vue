<template>
  <div class="shop-withus py-14">
    <div class="title">
      <h2 class="text-center mb-5"><span>Why Shop</span>With Us?</h2>
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card
              class="text-center text-white"
              color="transparent"
              elevation="0"
            >
              <div class="img-parent">
                <img src="@/assets/images/free-shipping.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  font-synthesis-weight: 700;
                  line-height: 1.2;
                "
              >
                Free Shipping On First Order
              </v-card-title>
              <v-card-text class="pb-0" style="font-size: 15px"
                >Lorem ipsum dolor sit amet.
              </v-card-text>
              <a
                href="#"
                style="color: white; font-weight: 700; font-size: 14px"
                >Lean More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              class="text-center text-white"
              color="transparent"
              elevation="0"
            >
              <div class="img-parent">
                <img src="../../assets/images/weekly-flash-sales.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  font-synthesis-weight: 700;
                  line-height: 1.2;
                "
              >
                Weekly Flash Sale
              </v-card-title>
              <v-card-text class="pb-0" style="font-size: 15px"
                >Lorem ipsum dolor sit amet.
              </v-card-text>
              <a
                href="#"
                style="color: white; font-weight: 700; font-size: 14px"
                >Lean More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              class="text-center text-white"
              color="transparent"
              elevation="0"
            >
              <div class="img-parent">
                <img src="../../assets/images/discount.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  font-synthesis-weight: 700;
                  line-height: 1.2;
                "
              >
                Anual Payment Discount
              </v-card-title>
              <v-card-text class="pb-0" style="font-size: 15px"
                >Lorem ipsum dolor sit amet.
              </v-card-text>
              <a
                href="#"
                style="color: white; font-weight: 700; font-size: 14px"
                >Lean More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3" class="px-1">
            <v-card
              class="text-center text-white"
              color="transparent"
              elevation="0"
            >
              <div class="img-parent">
                <img src="../../assets/images/cash-back.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  font-synthesis-weight: 700;
                  line-height: 1.2;
                "
              >
                Cashback Reward Program
              </v-card-title>
              <v-card-text class="pb-0" style="font-size: 15px"
                >Lorem ipsum dolor sit amet.
              </v-card-text>
              <a
                href="#"
                style="color: white; font-weight: 700; font-size: 14px"
                >Lean More</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.shop-withus {
  background-image: url("../../assets/images/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45 251 223);
    }
  }
}
</style>
