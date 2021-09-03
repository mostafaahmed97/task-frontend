<template>
  <div class="product-card">
    <div class="img">
      <img :src="product.img" alt="" />
    </div>
    <div class="title">{{ product.name }}</div>
    <button class="add-btn btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: { product: Object },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/add", this.product.id);
    },
  },
};
</script>

<style></style>
