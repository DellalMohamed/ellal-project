<template>
  <div class="banner mb-16 bg-blue">
    <div class="parent bg-green">
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3>
                <span>Uuge saving</span> on <br />
                UHD telivisions
              </h3>
              <p class="hint">Sale up to 70% on selected items</p>
              <v-btn
                variant="outlined"
                class="py-2 px-10"
                style="border-radius: 30px; text-transform: none"
                >Shop Now</v-btn
              >
            </div>
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
.banner {
  .parent {
    width: 1438px;
    height: 390px;
    background-image: url("../../assets/images/banner-bg.jpg");
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 40px 0 0 100px;
      h3 {
        font-size: 45px;
        font-weight: 900;
        span {
          color: rgb(95, 236, 95);
        }
      }
      .hint {
        margin: 20px 0 40px;
      }
    }
  }
}
</style>
