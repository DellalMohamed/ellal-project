import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    fragrances: [],
    furniture: [],
    newProdcts: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "smart phones",
        route: "smartphones",
      },
      {
        title: "laptops",
        route: "laptops",
      },
      {
        title: "furniture",
        route: "furniture",
      },
      {
        title: "men's shoes",
        route: "mens-shoes",
      },
      {
        title: "men's watches",
        route: "mens-watches",
      },
      {
        title: "women's bags",
        route: "womens-bags",
      },
      {
        title: "women's jewellery",
        route: "womens-jewellery",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 7);
          this.newProdcts = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          console.log("new", this.newProdcts);
          console.log(
            "pro",
            res.data.products.filter((el) => el.category === "beauty")
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.furniture = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          //console.log(this.mobilePhone);
        })
        .catch((err) => console.log(err));
      //console.log(this.flashDeals);
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}?limit=10`)
        .then((res) => (this.categoryProducts = res.data));
      //console.log(this.categoryProducts);
    },
    async getSingleProduct(productId) {
      try {
        const product = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        this.singleProduct = product.data;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          console.error("Product not found");
          alert("المنتج غير موجود");
        } else {
          console.error("An error occurred", error);
        }
      }
    },
  },
});
/*https://dummyjson.com/products/${productId}*/
