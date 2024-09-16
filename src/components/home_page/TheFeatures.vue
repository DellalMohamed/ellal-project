<template>
  <div class="features">
    <v-container>
      <v-row>
        <v-col>
          <div class="parent d-flex justify-center align-center">
            <v-icon class="mr-5">mdi-home</v-icon>
            <span>Free Shipping & Returns</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex justify-center align-center second">
            <v-icon class="mr-5">mdi-home</v-icon>
            <span>Lowest Price Guarantee</span>
          </div>
        </v-col>
        <v-col>
          <div class="parent d-flex justify-center align-center">
            <v-icon class="mr-5">mdi-home</v-icon>
            <span>Longest Waranties Offer</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
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
.features {
  .second {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: black;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
    &::after {
      content: "";
      position: absolute;
      background-color: black;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
    }
  }
}
</style>
