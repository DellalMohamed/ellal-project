<template>
  <div class="top_cat">
    <div class="cyber_banner w-100">
      <img src="../../assets/images/cyber-banner.webp" alt="" />
    </div>
    <div class="categories pt-13">
      <div class="title d-flex justify-center align-center mb-3">
        <h3
          class="text-center flex-grow-1 px-5"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h3>
        <a href="#" class="text-black">Shop All</a>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center" style="cursor: pointer" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <img
                  :src="cat.image"
                  v-bind="props"
                  :style="`cursor: pointer; transition: 0.4s ease-in-out; scale: ${
                    isHovering ? 1.05 : 1
                  }`"
                  alt=""
                />
              </v-hover>
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phones",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        image:
          " https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "Mobile Phones",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: " TVS",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "PCs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "Gaming",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        image:
          " https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        image:
          " https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
