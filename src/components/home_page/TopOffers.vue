<template>
  <div class="top-offers bg-grey-lighten-4 pt-5">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 172px"
              v-bind="props"
            >
              <img
                src="../../assets/images/playstations.webp"
                :style="`width: 100%;cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 172px"
              v-bind="props"
            >
              <img
                src="../../assets/images/headset.webp"
                :style="`width: 100%; cursor: pointer; transition: 0.5s all ease-in-out; transform: scale(${
                  isHovering ? 1.1 : 1
                });`"
                alt="Logo"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 172px"
              v-bind="props"
            >
              <img
                src="../../assets/images/chairs.webp"
                :style="`width: 100%;cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent bg-green"
              style="overflow: hidden; height: 287px"
              v-bind="props"
            >
              <img
                src="../../assets/images/iphones.webp"
                :style="`width: 100%;cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              style="overflow: hidden; height: 287px"
              v-bind="props"
            >
              <img
                src="../../assets/images/laptops.webp"
                :style="`width: 100%; cursor: pointer; transition: 0.5s all ease-in-out; scale: ${
                  isHovering ? 1.1 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
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

<style lang="scss" scoped></style>
